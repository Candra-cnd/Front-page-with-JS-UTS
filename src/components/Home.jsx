import profileBg from '../assets/mini-profile-bg-01.jpg';
import profile from '../assets/profile.jpg';

export default function Home() {
  return (
    <section
      id="home"
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-center items-center text-white text-center px-4"
      style={{
        backgroundImage: `url(${profileBg})`,
      }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Konten */}
      <div className="relative z-10 w-full px-4 md:px-12 xl:px-24 max-w-7xl">

        {/* Foto Profil */}
        <img
          src={profile}
          alt="Candra Aditya"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full mx-auto mb-6 border-4 border-white shadow-lg object-cover"
        />

        {/* Nama Lengkap */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Candra Aditya
        </h1>

        {/* Deskripsi Singkat */}
        <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto text-gray-200">
          I am an Informatics Engineering student interested in Data Science,
          Machine Learning, and Software Development.
        </p>

        {/* Tombol Navigasi */}
        <div className="flex justify-center gap-4 flex-wrap mb-8">

          <a
            href="#about"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
          >
            About Me
          </a>

          <a
            href="#projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
          >
            Projects
          </a>

          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
          >
            Contact
          </a>

          <a
            href="#data-science"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition"
          >
            Data Science Case Study
          </a>

        </div>

        {/* Card 1: Welcome */}
        <div className="bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-70 text-gray-900 dark:text-white p-6 rounded-lg shadow-md mb-6">

          <h2 className="text-2xl font-semibold mb-2">
            Welcome to My Portfolio
          </h2>

          <p className="mb-0">
            Thank you for visiting my portfolio. You can also view my{' '}
            <a
              href="/CV.html"
              className="text-blue-500 underline hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>{' '}
            to learn more about my background, skills, and experience.
          </p>

        </div>

        {/* Card 2: Learning & Development */}
        <div className="bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-70 text-gray-900 dark:text-white p-6 rounded-lg shadow-md mb-6">

          <i className="fas fa-address-card fa-2x mb-2"></i>

          <p>
            Explore my academic projects, technical experience, training,
            and continuous learning journey in technology.
          </p>

        </div>

      </div>
    </section>
  );
}