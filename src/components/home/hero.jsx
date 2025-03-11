// Hero.jsx
import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState, useMemo } from "react";
import Socials from "./socials";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  useAnimations,
  Html,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { FaRegCirclePlay } from "react-icons/fa6";
import { FaRegPauseCircle } from "react-icons/fa";

import useStore from "./store";

useGLTF.preload("/bust.glb");
useGLTF.preload("/explosion.glb");
useGLTF.preload("/RobotExpressive.glb");

const HPI = Math.PI / 2;
const vec = new THREE.Vector3();
const obj = new THREE.Object3D();
const red = new THREE.Color("#900909");

function Loader() {
  return (
    <Html center>
      <div className="text-gray-800 font-medium">Loading 3D models...</div>
    </Html>
  );
}

export default function Hero() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [error, setError] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef();
  const api = useStore((state) => state.api);

  useEffect(() => {
    api.loaded();
  }, [api]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setSize({ width, height });

      if (canvasRef.current) {
        const gl = canvasRef.current.gl;
        const camera = canvasRef.current.camera;
        if (gl) {
          gl.setSize(width, height);
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        }
        if (camera) {
          camera.aspect = width / height;
          camera.updateProjectionMatrix();
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    api.start();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    api.toggle();
  };

  if (error) {
    return (
      <div className="h-screen w-full flex items-center justify-center">
        <div className="text-red-500">Error loading 3D scene: {error}</div>
      </div>
    );
  }

  return (
    <section
      className="hero h-screen w-full relative overflow-hidden bg-[#f0f0f0]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div />
      <div className="flex flex-col gap-3 absolute left-8 top-1/2 -translate-y-1/2 z-20 max-w-xl">
        <h1 className="font-bungee font-bold text-5xl text-secondary uppercase leading-tight text-shadow-lg">
          Do you want quality sound{" "}
          <span className="text-[#5e1be3]">production</span>?
        </h1>
        <p>
          GMB SYNCWAVE is one of the top capetown recording studios, made for
          artists by artists.{" "}
        </p>
        <Socials />
        <div>
          <button className="border-1 border-gray-400 btn bg-primary text-white hover:bg-gray/90 shadow-lg">
            Book now
          </button>
        </div>
      </div>
      <Canvas
        ref={canvasRef}
        dpr={Math.min(window.devicePixelRatio, 2)}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${size.width}px`,
          height: `${size.height}px`,
        }}
        onCreated={({ gl, camera }) => {
          gl.setPixelRatio(Math.min(window.devicePixelRatio, 2));
          gl.setSize(size.width, size.height);
          camera.aspect = size.width / size.height;
          camera.updateProjectionMatrix();
        }}
        onError={(e) => setError(e.message)}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        camera={{
          position: [-4, 3, 12],
          fov: 35,
          near: 1,
          far: 100,
        }}
      >
        <color attach="background" args={["#f0f0f0"]} />
        <fog attach="fog" args={["#f0f0f0", 8, 25]} />
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.4} />
          <spotLight
            position={[15, 15, 15]}
            angle={0.25}
            penumbra={1}
            intensity={2}
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <directionalLight
            position={[5, 5, 5]}
            intensity={1.5}
            castShadow
            shadow-mapSize={[512, 512]}
          />
          <mesh position={[0, -2, -10]} rotation={[-0.2, 0, 0]} receiveShadow>
            <planeGeometry args={[100, 100]} />
            <meshStandardMaterial color="#e8e8e8" />
          </mesh>
          <group position={[3, 0, 0]} rotation={[0, -0.2, 0]}>
            <Character isHovered={isHovered} />
          </group>
        </Suspense>
      </Canvas>
    </section>
  );
}

function Character({ isHovered }) {
  const group = useRef();
  const [modelError, setModelError] = useState(null);

  const { scene, animations } = useGLTF(
    "/RobotExpressive.glb",
    undefined,
    (error) => {
      console.error("Error loading character model:", error);
      setModelError(error);
    }
  );

  const { actions } = useAnimations(animations, group);

  // Setup materials
  useEffect(() => {
    if (scene) {
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.castShadow = true;
          obj.receiveShadow = true;
          if (obj.material) {
            obj.material.roughness = 0.3;
            obj.material.metalness = 0.7;
            obj.material.needsUpdate = true;
          }
        }
      });
    }
  }, [scene]);

  // Handle animation state changes
  useEffect(() => {
    if (!actions) return;

    // Fade out all current actions
    Object.values(actions).forEach((action) => action.fadeOut(0.5));

    if (isHovered) {
      // Start dance animation when hovered
      const dance = actions["Dance"];
      if (dance) {
        dance.reset().fadeIn(0.5).play();
      }
    } else {
      // Return to idle animation
      const idle = actions["Idle"];
      if (idle) {
        idle.reset().fadeIn(0.5).play();
      }
    }
  }, [actions, isHovered]);

  if (modelError) {
    return (
      <Html center>
        <div className="text-red-500">
          Error loading character model: {modelError.message}
        </div>
      </Html>
    );
  }

  return (
    <group ref={group}>
      <primitive
        scale={[1, 1, 1]}
        position={[0, -1, 0]}
        rotation={[0, 0, 0]}
        object={scene}
      />
    </group>
  );
}

function Bust({ isHovered }) {
  const ref = useRef();
  const time = useRef(0);
  const [modelError, setModelError] = useState(null);

  const { scene, animations, materials } = useGLTF(
    "/bust.glb",
    undefined,
    (error) => {
      console.error("Error loading bust.glb:", error);
      setModelError(error);
    }
  );

  const { actions, mixer } = useAnimations(animations, ref);
  const { drums, synth } = useStore((state) => state.audio);
  const track = useStore((state) => state.track);
  const animationsEnabled = useStore((state) => state.animationsEnabled);

  // Setup materials and animations
  useEffect(() => {
    if (scene) {
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.castShadow = true;
          obj.receiveShadow = true;
          if (obj.material) {
            obj.material.roughness = 0.2;
            obj.material.metalness = 0.8;
            obj.material.needsUpdate = true;
          }
        }
      });
    }
  }, [scene]);

  // Handle animation state changes
  useEffect(() => {
    if (!actions) return;

    if (isHovered && animationsEnabled) {
      Object.values(actions).forEach((action) => {
        action.reset().fadeIn(0.1).play();
      });
    } else {
      Object.values(actions).forEach((action) => {
        action.fadeOut(0.1);
      });
    }
  }, [actions, animationsEnabled, isHovered]);

  // Control the exploding statue and the inner materials color
  useFrame(() => {
    if (!ref.current || modelError || !isHovered || !animationsEnabled) return;

    // Adjust animation speed based on audio
    mixer.timeScale = track.synthonly ? 0.125 : Math.max(0.4, drums.gain);

    // Update animation time based on kicks
    if (!track.synthonly) {
      time.current = THREE.MathUtils.lerp(
        time.current,
        track.kicks * 1.25,
        track.kicks === 0 ? 0.25 : 0.15
      );
      mixer.setTime(time.current);
    }

    // Update material color based on audio intensity
    if (materials?.inner) {
      const intensity = Math.max(drums.avg * drums.gain, synth.avg * 0.25) / 30;
      materials.inner.color.copy(red).multiplyScalar(intensity);
    }
  });

  if (modelError) {
    return (
      <Html center>
        <div className="text-red-500">
          Error loading bust model: {modelError.message}
        </div>
      </Html>
    );
  }

  return (
    <group>
      <primitive
        scale={[0.5, 0.5, 0.5]}
        position={[0, 0, 0]}
        rotation={[0, Math.PI, 0]}
        ref={ref}
        object={scene}
      />
      <Explosion position={[0, 0.65, 0]} beat={0} isHovered={isHovered} />
      <Explosion position={[0.15, 0.25, 0]} beat={1} isHovered={isHovered} />
    </group>
  );
}

function Explosion({ beat, isHovered, ...props }) {
  const [state] = useState({ size: 0, signal: 0 });
  const sceneRef = useRef();
  const instance = useRef();
  const sphere = useRef();
  const [modelError, setModelError] = useState(null);

  const { scene: originalScene, animations } = useGLTF(
    "/explosion.glb",
    undefined,
    (error) => {
      console.error("Error loading explosion.glb:", error);
      setModelError(error);
    }
  );

  const scene = useMemo(() => originalScene?.clone(true), [originalScene]);
  const { actions } = useAnimations(animations, sceneRef);
  const { drums, snare } = useStore((state) => state.audio);
  const track = useStore((state) => state.track);
  const animationsEnabled = useStore((state) => state.animationsEnabled);

  // Setup materials
  useEffect(() => {
    if (scene) {
      scene.traverse((obj) => {
        if (obj.isMesh) {
          obj.castShadow = true;
          obj.receiveShadow = true;
          if (obj.material) {
            obj.material.roughness = 0.6;
            obj.material.metalness = 0.5;
            obj.material.needsUpdate = true;
          }
        }
      });
    }
  }, [scene]);

  // Handle animation state changes
  useEffect(() => {
    if (!actions || !isHovered || !animationsEnabled) {
      Object.values(actions).forEach((action) => {
        action.fadeOut(0.1);
      });
    }
  }, [actions, animationsEnabled, isHovered]);

  // Can reset and play all actions
  const play = () => {
    if (!animationsEnabled || !actions || !isHovered) return;
    Object.values(actions).forEach((action) => {
      action.setLoop(THREE.LoopOnce).stop().reset().fadeIn(0.1).play();
    });
  };

  // Control the sphere and the sparks
  useFrame(() => {
    if (
      !sphere.current ||
      !instance.current ||
      !sceneRef.current ||
      !isHovered ||
      !animationsEnabled
    )
      return;

    // Trigger explosion on drum kicks
    if (drums.signal && track.kicks - 1 === beat && drums.gain > 0.5) {
      play();
      state.size = Math.min(1.5, drums.gain);
    }

    // Reset size on snare or when drums are quiet
    if (snare.signal || drums.gain < 0.1) state.size = 0;

    // Scale sphere based on audio
    sphere.current.scale.lerp(
      vec.set(
        state.size * drums.gain,
        state.size * drums.gain,
        state.size * drums.gain
      ),
      0.3
    );

    // Adjust light intensity based on audio
    sphere.current.children[0].intensity = drums.avg * drums.gain * 15;

    // Update instance matrices
    if (sceneRef.current.children.length > 0) {
      sceneRef.current.children.forEach((node, i) => {
        if (instance.current) {
          instance.current.setMatrixAt(i, node.matrix);
        }
      });
      instance.current.visible = drums.gain > 0.1;
      instance.current.instanceMatrix.needsUpdate = true;
    }
  });

  if (modelError) {
    return (
      <Html center>
        <div className="text-red-500">
          Error loading explosion model: {modelError.message}
        </div>
      </Html>
    );
  }

  return (
    <group {...props}>
      <mesh ref={sphere}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color="#ff0000"
          toneMapped={false}
          transparent
          opacity={0.95}
          roughness={0.4}
          metalness={0.8}
        />
        <pointLight color="#ff0000" distance={3} intensity={2} />
      </mesh>
      <group scale={[0.05, 0.05, 0.05]}>
        <primitive ref={sceneRef} object={scene} />
        <instancedMesh
          ref={instance}
          args={[null, null, originalScene?.children.length || 0]}
        >
          <circleGeometry args={[0.15, 32]} />
          <meshStandardMaterial
            color="#ff0000"
            toneMapped={false}
            roughness={0.4}
            metalness={0.8}
            transparent
            opacity={0.8}
          />
        </instancedMesh>
      </group>
    </group>
  );
}

function Graph({ isHovered }) {
  const { synth } = useStore((state) => state.audio);
  const ref = useRef();
  useFrame(() => {
    if (!isHovered) return;
    for (let i = 0; i < 64; i++) {
      obj.position.set(i * 0.04, synth.data[i] / 1000, 0);
      obj.updateMatrix();
      ref.current.setMatrixAt(i, obj.matrix);
    }
    ref.current.instanceMatrix.needsUpdate = true;
  });
  return (
    <instancedMesh ref={ref} args={[null, null, 64]} position={[-2.5, 0, 0]}>
      <planeGeometry args={[0.02, 0.1]} />
      <meshBasicMaterial
        color="#ff0000"
        toneMapped={false}
        transparent
        opacity={isHovered ? 0.6 : 0}
      />
    </instancedMesh>
  );
}

function DancingDot({ isHovered }) {
  const { drums, snare } = useStore((state) => state.audio);
  const dot = useRef();
  useFrame((_) => {
    if (!isHovered) return;
    dot.current.rotation.set(
      Math.sin(_.clock.elapsedTime * 2) / 10 + (drums.avg * drums.gain) / 100,
      _.clock.elapsedTime + (snare.avg * snare.gain) / 100,
      0
    );
  });
  return (
    <group ref={dot}>
      <mesh position={[-2.3, 0.25, 0]}>
        <sphereGeometry args={[0.03, 32, 32]} />
        <meshBasicMaterial
          toneMapped={false}
          color="black"
          transparent
          opacity={isHovered ? 1 : 0}
        />
      </mesh>
    </group>
  );
}
