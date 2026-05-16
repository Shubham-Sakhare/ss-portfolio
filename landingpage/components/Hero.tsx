"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fetchAPI } from "@/lib/api";

type HeroData = {
  title: string;
  subtitle: string;
  description: any;

  buttonTextProject: string;
  buttonLinkProject: string;

  buttonResume: string;
  ButtonLinkResume: string;

  heroImage?: { url: string; alternativeText?: string };
  BackgroundVideo?: { url: string };
};

export default function Banner(): React.JSX.Element {
  const [data, setData] = useState<HeroData | null>(null);

  const baseUrl =
    process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "";

  const texts = ["Software Engineer", "UI/UX Designer", "React Developer"];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchAPI("/api/hero?populate=*").then((json) =>
      setData(json.data)
    );
  }, []);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentText.slice(0, displayedText.length + 1));

        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayedText(currentText.slice(0, displayedText.length - 1));

        if (displayedText === "") {
          setIsDeleting(false);
          setCurrentTextIndex((p) => (p + 1) % texts.length);
        }
      }
    }, isDeleting ? 40 : 80);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex]);

  const imageUrl = data?.heroImage?.url
    ? `${baseUrl}${data.heroImage.url}`
    : "/assets/me.png";

  const videoUrl = data?.BackgroundVideo?.url
    ? `${baseUrl}${data.BackgroundVideo.url}`
    : "";

  const getDescription = () =>
    data?.description?.[0]?.children?.[0]?.text || "";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black px-6">

      {/* VIDEO BACKGROUND */}
      {videoUrl && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* GLOW EFFECT */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-purple-500/30 blur-[120px] top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[500px] h-[500px] bg-blue-500/30 blur-[120px] bottom-[-100px] right-[-100px] animate-pulse" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto grid lg:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-center lg:text-left space-y-6"
        >
          <span className="px-4 py-1 rounded-full bg-white/10 text-white text-sm">
            🚀 Fullstack Developer
          </span>

          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            Hi, I’m{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text">
              {data?.title}
            </span>
          </h1>

          <h2 className="text-2xl text-gray-300">
            {data?.subtitle}
          </h2>

          <p className="text-white text-xl">
            I’m a{" "}
            <span className="text-purple-400">
              {displayedText}
            </span>
            <span className="animate-pulse">|</span>
          </p>

          <p className="text-white/70 max-w-lg">
            {getDescription()}
          </p>

          {/* BUTTONS (FIXED) */}
          <div className="flex gap-4 justify-center lg:justify-start pt-4">

            <a
              href={data?.buttonLinkProject}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:scale-105 transition"
            >
              {data?.buttonTextProject || "View Projects"}
            </a>

            <a
              href={data?.ButtonLinkResume}
              className="px-6 py-3 rounded-xl border border-white/30 text-white hover:bg-white/10 transition"
            >
              {data?.buttonResume || "Resume"}
            </a>

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center relative"
        >
          <div className="absolute w-80 h-80 bg-purple-500/30 blur-[100px] rounded-full animate-pulse" />

          {data?.heroImage?.url && (
            <Image
              src={imageUrl}
              alt="hero"
              width={320}
              height={320}
              className="rounded-full border-4 border-white/20 shadow-xl object-cover z-10"
            />
          )}
        </motion.div>

      </div>
    </section>
  );
}