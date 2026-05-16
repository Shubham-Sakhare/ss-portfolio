"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

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
    <header className="fixed top-4 left-0 w-full flex justify-center z-50">

      {/* GLASS NAV CONTAINER */}
      <div className="w-[92%] md:w-[85%] lg:w-[75%]
        bg-white/10 dark:bg-black/30
        backdrop-blur-xl
        border border-white/20 dark:border-white/10
        shadow-lg
        rounded-full
        px-6 py-3
        flex justify-between items-center
      ">

        {/* LOGO */}
        <Link
          href="/"
          className="text-lg font-bold text-black dark:text-white"
        >
          Shubham.dev
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6">

          {navLinks.map((link) => {
            const isActive = active === link.href;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.href)}
                className={`text-sm font-medium transition-all duration-200
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

          {/* THEME */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/20 dark:bg-white/10 border border-white/20 hover:scale-110 transition"
            >
              {theme === "dark" ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-blue-300" />
              )}
            </button>
        </nav>

        {/* MOBILE */}
        <div className="md:hidden flex items-center gap-3">

          <button
            onClick={toggleTheme}
            className="px-3 py-1 rounded-full bg-white/20 dark:bg-white/10 text-sm"
          >
            {theme === "dark" ? (
                <Sun size={18} className="text-yellow-400" />
              ) : (
                <Moon size={18} className="text-blue-300" />
              )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-xl text-black dark:text-white"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-20 w-[92%] bg-white/10 dark:bg-black/40
          backdrop-blur-xl border border-white/20
          rounded-2xl p-4 md:hidden">

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
                className={`block py-2 text-sm border-b border-white/10
                  ${isActive
                    ? "text-purple-500"
                    : "text-gray-700 dark:text-gray-300"}
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