import Image from "next/image";

export default function About(): React.JSX.Element {
  return (
    <section
        id="experience"
        className="py-20 px-6 bg-white dark:bg-slate-950 transition-colors duration-300"
      >
      <div className="container mx-auto max-w-6xl text-center">
        <p className="text-2xl text-black dark:text-white">
          I&apos;m currently looking to join a{" "}
          <span className="text-purple-500 dark:text-blue-400">
            cross-functional team
          </span>
          <br />
          <span className="text-sm text-gray-600 dark:text-gray-400">
            that values improving people&apos;s lives through accessible design
          </span>
        </p>

        <Image
          src="/assets/illustration.png"
          alt="Skills"
          width={800}
          height={800}
          className="mx-auto mt-10"
        />
      </div>
    </section>
  );
}