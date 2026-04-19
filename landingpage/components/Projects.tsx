"use client";

import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "NeuraWeb – Futuristic AI Website Landing Design",
    description:
      "A sleek, dark-themed AI-powered landing page concept built in Figma. Designed for modern startups and futuristic digital products, it features glowing neon visuals and immersive UI.",
    link: "https://www.figma.com/community/file/1441377868897233703/ai-website-landing-design",
    image: "/projects/project-1.png",
  },
  {
    id: 2,
    title: "Apple Vision Pro – HR Software Design",
    description:
      "A futuristic HR software concept designed for Apple Vision Pro, built in Figma to reimagine attendance and employee experience.",
    link: "https://www.figma.com/community/file/1371824014208363481/apple-vision-pro-hr-software-design",
    image: "/projects/project-2.png",
  },
];

export default function Projects(): React.JSX.Element {
  return (
    <section
      id="lab"
      className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-7xl">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 1;

          return (
            <div key={project.id} className="mb-20 last:mb-0">
              <div
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* TEXT */}
                <div className={`${isEven ? "lg:col-start-2" : ""}`}>
                  <p className="text-purple-500 dark:text-blue-400 text-lg font-medium mb-2">
                    Featured Project
                  </p>

                  <h3 className="text-3xl lg:text-4xl font-bold text-black dark:text-white mb-6">
                    {project.title}
                  </h3>

                  {/* Description Card */}
                  <div className="relative z-10 mb-6">
                    <div
                      className={`rounded-2xl p-6 lg:p-8 border transition-all
                      bg-white shadow-md border-gray-200
                      dark:bg-white/5 dark:border-white/10 dark:shadow-lg
                      ${
                        isEven
                          ? "lg:ml-[-20%]"
                          : "lg:w-[calc(100%+20%)]"
                      }`}
                    >
                      <p className="text-gray-700 dark:text-white/80 text-base lg:text-lg leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Link */}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-black dark:text-white hover:text-purple-500 dark:hover:text-blue-400 transition"
                    >
                      Visit Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 3h7m0 0v7m0-7L10 14"
                        />
                      </svg>
                    </a>
                  )}
                </div>

                {/* IMAGE */}
                <div
                  className={`${
                    isEven ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden p-2 lg:p-3 shadow-xl bg-gray-100 dark:bg-slate-900 transition">
                    <div className="relative w-full h-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}