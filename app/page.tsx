import Hero from "@/landingpage/components/Hero";
import About from "@/landingpage/components/About";
import Experience from "@/landingpage/components/Experience";
import Projects from "@/landingpage/components/Projects";
// import Skills from "@/landingpage/components/Skills";
// import Education from "@/landingpage/components/Education";

export default function Home(): React.JSX.Element {
  return (
    <main className="min-h-screen bg-[#110720] text-black dark:text-white">
      <Hero />
      <Experience />
      <About />
      <Projects />
    </main>
  );
}