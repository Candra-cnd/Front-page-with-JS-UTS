export default function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-center py-4 mt-10 text-sm text-gray-700 dark:text-gray-300">
      © {new Date().getFullYear()} Candra Aditya. All rights reserved.
    </footer>
  );
}