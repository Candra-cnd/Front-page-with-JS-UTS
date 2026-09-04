// import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DarkModeToggle  from './components/DarkModeToggle';
// import FeatureSection from './components/FeatureSection';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';
import FeaturePariwisataSection from './components/FeaturePariwisataSection';
export default function App() {
  // const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <DarkModeToggle />
      <Navbar />
      <Home />
      <About />
      <Projects />
      {/* <FeatureSection /> */}
      <FeaturePariwisataSection />
      <Contact />
      <Footer />
    </div>
  );
}