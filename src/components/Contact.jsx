export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors"
    >
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Contact Me
        </h2>

        <div className="bg-white dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-80 backdrop-blur-md shadow-lg rounded-lg p-8 text-center">

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            If you are interested in my background, projects, or potential
            opportunities, feel free to contact me through the following
            platforms.
          </p>

          <div className="flex flex-wrap justify-center gap-4">

            <a
              href="candraditya377@gmail.com"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
            >
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/candra-aditya-2917a0215/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/Candra-cnd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
            >
              GitHub
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}