"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Banner(): React.JSX.Element {
  const texts = ["Software Engineer", "UI/UX Designer", "React Native Developer"];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // typing effect
  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));
        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden
      bg-white dark:bg-black"
    >

      {/* 🔥 Animated Gradient Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-purple-500/30 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/30 blur-[120px] rounded-full bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-center lg:text-left backdrop-blur-sm"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Hello, I&apos;m{" "}
            <span className="text-purple-500 dark:text-blue-400 font-semibold">
              Shubham Sakhare
            </span>
          </p>

          <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-black dark:text-white">
            Crafting{" "}
            <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-pulse">
              Stunning Experiences
            </span>
          </h1>

          <p className="text-2xl font-semibold text-black dark:text-white">
            I&apos;m a {displayedText}
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-gray-600 dark:text-white/70 max-w-xl">
            I design and build modern digital experiences that are fast, beautiful,
            and user-focused.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 justify-center lg:justify-start pt-4">

            {/* Resume */}
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              target="_blank"
              className="px-6 py-3 rounded-xl font-medium text-white
              bg-gradient-to-r from-purple-500 to-blue-500
              shadow-lg shadow-purple-500/40 dark:shadow-blue-500/40"
            >
              Download Resume
            </motion.a>

            {/* Projects */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#lab"
              className="px-6 py-3 rounded-xl font-medium
              border border-gray-300 dark:border-gray-700
              text-black dark:text-white backdrop-blur-md"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center relative"
        >
          {/* Glow */}
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute w-80 h-80 bg-purple-500/30 dark:bg-blue-500/30 blur-[100px] rounded-full"
          />

          {/* Image */}
          <motion.div
            whileHover={{ rotate: 5, scale: 1.05 }}
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Image
              src="/assets/me.png"
              alt="Shubham"
              width={350}
              height={350}
              className="rounded-full border border-white/10 shadow-2xl"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}