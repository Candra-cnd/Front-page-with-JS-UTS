export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Candra's Portfolio</h1>
        <div className="flex items-center gap-6 text-sm">
          <a href="#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Home
          </a>
          <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
