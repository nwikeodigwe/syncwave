import { create } from "zustand";
import { addEffect } from "@react-three/fiber";

async function createAudio(url, { threshold, expire } = {}) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`Failed to load audio file ${url}: ${res.statusText}`);
      return mockData();
    }
    const buffer = await res.arrayBuffer();
    let context;
    let analyser;
    let source;
    let gainNode;
    let data;
    let decodedBuffer;

    const initialize = () => {
      if (!context) {
        context = new (window.AudioContext || window.webkitAudioContext)();
        analyser = context.createAnalyser();
        analyser.fftSize = 2048;
        data = new Uint8Array(analyser.frequencyBinCount);
      }
    };

    const createSource = () => {
      source = context.createBufferSource();
      gainNode = context.createGain();
      gainNode.gain.value = 1;
      gainNode.connect(context.destination);
      source.connect(analyser);
      analyser.connect(gainNode);
    };

    let time = Date.now();
    let state = {
      source: null,
      data: [],
      gain: 1,
      signal: false,
      avg: 0,
      isPlaying: false,
      async start() {
        try {
          initialize();
          createSource();
          if (!decodedBuffer) {
            decodedBuffer = await new Promise((res, rej) =>
              context.decodeAudioData(buffer, res, rej)
            );
          }
          source.buffer = decodedBuffer;
          source.loop = true;
          source.start(0);
          state.isPlaying = true;
        } catch (error) {
          console.error(`Error starting audio ${url}:`, error);
        }
      },
      pause() {
        if (source && state.isPlaying) {
          source.stop();
          state.isPlaying = false;
        }
      },
      async resume() {
        if (!state.isPlaying) {
          try {
            initialize();
            createSource();
            if (!decodedBuffer) {
              decodedBuffer = await new Promise((res, rej) =>
                context.decodeAudioData(buffer, res, rej)
              );
            }
            source.buffer = decodedBuffer;
            source.loop = true;
            source.start(0);
            state.isPlaying = true;
          } catch (error) {
            console.error(`Error resuming audio ${url}:`, error);
          }
        }
      },
      update: () => {
        if (!analyser) return;
        let now = Date.now();
        let value = 0;
        analyser.getByteFrequencyData(data);
        for (let i = 0; i < data.length; i++) value += data[i];
        const avg = (state.avg = value / data.length);
        if (threshold && avg > threshold && now - time > expire) {
          time = Date.now();
          state.signal = true;
        } else state.signal = false;
      },
      setGain(level) {
        if (gainNode) {
          gainNode.gain.setValueAtTime(
            (state.gain = level),
            context.currentTime
          );
        }
      },
    };

    return state;
  } catch (error) {
    console.error(`Error creating audio for ${url}:`, error);
    return mockData();
  }
}

const mockData = () => ({
  signal: false,
  avg: 0,
  gain: 1,
  data: [],
  isPlaying: false,
  start: () => {},
  pause: () => {},
  resume: () => {},
});

const useStore = create((set, get) => {
  const drums = createAudio("/drums.mp3", { threshold: 10, expire: 500 });
  const snare = createAudio("/snare.mp3", { threshold: 40, expire: 500 });
  const synth = createAudio("/synth.mp3");
  return {
    loaded: false,
    clicked: false,
    isPlaying: false,
    animationsEnabled: false,
    audio: { drums: mockData(), snare: mockData(), synth: mockData() },
    track: { synthonly: false, kicks: 0, loops: 0 },
    api: {
      async loaded() {
        set({
          loaded: true,
          audio: {
            drums: await drums,
            snare: await snare,
            synth: await synth,
          },
        });
      },
      async start() {
        const audio = get().audio;
        const files = Object.values(audio);
        const track = get().track;
        await Promise.all(files.map((file) => file.start()));
        set({ clicked: true, isPlaying: true, animationsEnabled: true });
        addEffect(() => {
          if (!get().animationsEnabled) return;
          files.forEach(({ update }) => update());
          if (audio.drums.signal) track.kicks++;
          if (audio.snare.signal) {
            if (track.loops++ > 6) {
              track.synthonly = !track.synthonly;
              audio.drums.setGain(track.synthonly ? 0 : 1);
              audio.snare.setGain(track.synthonly ? 0 : 1);
              track.loops = 0;
            }
            track.kicks = 0;
          }
        });
      },
      pause() {
        const audio = get().audio;
        Object.values(audio).forEach((file) => file.pause());
        set({ isPlaying: false, animationsEnabled: false });
      },
      resume() {
        const audio = get().audio;
        Object.values(audio).forEach((file) => file.resume());
        set({ isPlaying: true, animationsEnabled: true });
      },
      toggle() {
        const isPlaying = get().isPlaying;
        if (isPlaying) {
          get().api.pause();
        } else {
          get().api.resume();
        }
      },
    },
  };
});

export default useStore;
