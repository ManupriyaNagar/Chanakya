export default function FeaturedCases() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-16 bg-white text-black">
      <div className="space-y-4 md:max-w-xl">
        <h2 className="text-4xl md:text-6xl font-semibold uppercase">evolving digital</h2>
        <p className="text-2xl md:text-4xl font-bold uppercase">transmission landscape</p>

        <div className="flex items-start gap-3 pt-4">
          <a
            href="https://www.youtube.com/watch?v=_KBE-2g1fZc" // Replace with your actual video URL
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white hover:bg-orange-600 transition"
            title="Watch Video"
          >
            {/* Play Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.5 5.5v9l7-4.5-7-4.5z" />
            </svg>
          </a>
          <p className="text-gray-700 max-w-md text-xl">
            We specialize in crafting integrated marketing & communications strategies that go beyond traditional boundaries.
          </p>
        </div>
      </div>

      <div className="mt-8 md:mt-0">
        <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
          View our Core services
        </button>
      </div>
    </section>
  );
}
