export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6 mt-10 border-t dark:border-gray-700">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Shubham.dev — All rights reserved.
      </p>

      <div className="flex justify-center gap-4 mt-3 text-sm">
        <a href="#" className="hover:text-blue-500">LinkedIn</a>
        <a href="#" className="hover:text-blue-500">GitHub</a>
        <a href="#" className="hover:text-blue-500">Email</a>
      </div>
    </footer>
  );
}