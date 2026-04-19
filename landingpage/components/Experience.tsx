"use client";

import Image from "next/image";
import Link from "next/link";

interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const experienceCards: ExperienceCard[] = [
  {
    id: 1,
    title: "WebHR - HR Management App",
    description:
      "WebHR automates all of your company's HR processes such as Recruitment, Onboarding, Payroll, Time & Attendance, Leaves & PTO, Performance, and much more.",
    icon: "/cards/card-1.png",
  },
  {
    id: 2,
    title: "WebHR Kiosk - Time Clock Kiosk",
    description:
      "WebHR Kiosk is a time clock kiosk that allows you to clock in and out of your work in a simple and efficient way.",
    icon: "/cards/card-2.png",
  },
  {
    id: 3,
    title: "Somezing - AI-Powered Agents",
    description:
      "Somezing is an AI-powered platform to automate workflows and simplify repetitive tasks with intelligent agents.",
    icon: "/cards/card-3.png",
  },
  {
    id: 4,
    title: "FileIT - File Sharing App",
    description:
      "FileIT is a simple file sharing app that allows users to securely share files with friends and teams.",
    icon: "/cards/card-4.png",
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-black dark:text-white">
          Work Experience
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experienceCards.map((card) => (
            <div
              key={card.id}
              className="group rounded-xl p-6 flex items-start gap-4 transition-all duration-300
              bg-white shadow-md border border-gray-200
              hover:shadow-xl hover:-translate-y-1
              dark:bg-gradient-to-r dark:from-slate-950 dark:via-blue-950 dark:to-black
              dark:border-blue-900 dark:hover:shadow-blue-900/30"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={80}
                  height={80}
                  className="object-contain group-hover:scale-105 transition"
                />
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                  {card.title}
                </h3>

                <p className="text-sm mb-4 text-gray-600 dark:text-white/70 leading-relaxed">
                  {card.description}
                </p>

                <Link
                  href="https://ibiimemon.com/lab"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-500 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}