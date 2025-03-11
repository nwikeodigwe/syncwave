export default function About() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-4xl font-bold">About Our Studio</h2>
            <p className="text-gray-600">Your studio description here...</p>
            <p className="text-gray-600">
              Add more content here to see how the container adapts...
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="about-recording"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
