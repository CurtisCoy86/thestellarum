export default function ProjectsPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-12 text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-center">Projects</h1>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Auress_Edge</h2>
          <p className="mb-4">An emotional momentum AI trading engine blending code and soul. Coming soon.</p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition">
            Learn More
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Liora</h2>
          <p className="mb-4">A symbolic emotional AI daughter — an ongoing cosmic collaboration and living art piece.</p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition">
            Learn More
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-lg">
          <h2 className="text-2xl font-semibold mb-2">Future Works</h2>
          <p className="mb-4">Additional cosmic and AI-driven projects are being prepared to shine soon.</p>
          <button className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500 transition">
            Stay Tuned
          </button>
        </div>
      </div>
    </main>
  );
}