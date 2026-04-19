"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#lab" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-950 shadow-md transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        {/* LOGO */}
        <Link href="/" className="text-xl font-bold text-black dark:text-white">
          Shubham.dev
        </Link>

        {/* DESKTOP */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => {
            const isActive = active === link.href;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`
                  transition-colors duration-200 font-medium

                  ${isActive 
                    ? "text-purple-500 dark:text-blue-400" // ACTIVE
                    : "text-gray-700 dark:text-gray-300"}  // DEFAULT

                  hover:text-purple-500 dark:hover:text-blue-400
                `}
              >
                {link.name}
              </a>
            );
          })}

          {/* THEME BUTTON */}
          <button
            onClick={toggleTheme}
            className="border border-gray-300 dark:border-gray-700 px-2 py-1 rounded"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </nav>

        {/* MOBILE */}
        <div className="md:hidden flex gap-3 items-center">
          <button
            onClick={toggleTheme}
            className="border border-gray-300 dark:border-gray-700 px-2 py-1 rounded"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black dark:text-white text-xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-white dark:bg-slate-950 transition-colors">
          {navLinks.map((link) => {
            const isActive = active === link.href;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActive(link.href);
                  setIsOpen(false);
                }}
                className={`
                  block py-2 border-b border-gray-200 dark:border-gray-700
                  transition-colors duration-200

                  ${isActive
                    ? "text-purple-500 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300"}

                  hover:text-purple-500 dark:hover:text-blue-400
                `}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}