import { useState } from "react";
import MyImage from "./MyImage";

export default function AboutMeSection() {
  const [linkedInLink, setLinkedInLink] = useState("");
  const [githubLink, setGithubLink] = useState("");

  // Handle LinkedIn hover
  function handleLinkedInHover() {
    setLinkedInLink("/mohammadyazbeck");
  }

  // Handle GitHub hover
  function handleGithubHover() {
    setGithubLink("/MohammadYazbeck");
  }

  // Reset LinkedIn text when mouse leaves
  function handleLinkedInLeave() {
    setLinkedInLink("");
  }

  // Reset GitHub text when mouse leaves
  function handleGithubLeave() {
    setGithubLink("");
  }

  return (
    <section
      id="about-me"
      className="relative flex h-full w-full flex-col items-center justify-center pt-[20%] sm:pt-[15%] lg:h-full lg:flex-row lg:justify-center lg:space-x-16 lg:pb-[15%]"
    >
      {/* Profile Picture */}
      <div className="pointer-events-none h-[14rem] w-[14rem] transform rounded-[60%/70%_40%_75%_50%] border border-white duration-500 hover:-translate-y-5 hover:translate-x-5 hover:bg-amber-50 sm:h-[15rem] sm:w-[15rem] lg:mt-0 lg:h-[20rem] lg:w-[20rem] dark:border-black">
        <div className="flex transform items-center justify-center duration-500 hover:-translate-x-10 hover:translate-y-10 sm:h-[15rem] sm:w-[15rem] lg:mt-0 lg:h-[20rem] lg:w-[20rem]">
          <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[65%/70%_39%_80%_50%] border border-blue-gray-900 shadow-2xl shadow-gray-300 drop-shadow-[0px_15px_3px_rgba(0,0,0,0.25)] sm:animate-lr dark:shadow-gray-800/80">
            {/* <img
              src="/portfolio/images/pic.jpg"
              className="pointer-events-auto z-20 h-full w-full object-cover"
              loading="lazy"
            /> */}
            <MyImage
              image="/portfolio/images/pic.jpg"
              index={-1}
              className="pointer-events-auto z-20 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* About Me Text Section */}
      <div className="z-10 animate-rlSmall px-8 sm:mt-8 sm:animate-rl lg:h-[27rem] lg:w-[35rem] xl:w-[40rem]">
        <p className="ml-2 mt-12 text-2xl font-semibold italic tracking-tight sm:ml-5 md:ml-16 lg:ml-0 lg:mt-40 lg:text-4xl dark:text-white">
          Hey, I am Mohammad Yazbeck 🖐
        </p>
        <p className="ml-3 mt-5 text-pretty text-lg italic tracking-widest sm:ml-8 md:mx-20 lg:mx-0 lg:mt-8 dark:text-gray-200">
          Driven Software Engineer with expertise in full-stack development
          (React, Express.js, Flutter, Next.js), algorithms, machine learning,
          and AI. Fluent in Arabic and English, specializing in building
          scalable, high-performance solutions.
        </p>

        {/* Floating Icons (without floating effect) */}
        <div className="relative mt-8 flex items-center justify-end space-x-4 sm:mr-10 lg:w-[35rem] lg:pr-14">
          {/* LinkedIn */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mohammadyazbeck"
          >
            <div
              className="group flex w-12 items-center rounded-full duration-500 hover:w-52 hover:-translate-x-3 hover:bg-blue-300 hover:transition-all"
              onMouseEnter={handleLinkedInHover}
              onMouseLeave={handleLinkedInLeave}
            >
              <img
                title="LinkedIn"
                src="/portfolio/images/linkedin.png"
                className="h-10 w-10 cursor-pointer rounded-full hover:shadow-sm hover:shadow-blue-600 sm:h-12 sm:w-12"
              />
              {/* Text that appears when hovering over the entire container */}
              <p className="ml-1 h-full font-semibold tracking-tight text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {linkedInLink}
              </p>
            </div>
          </a>

          {/* GitHub - Light Mode */}
          <div
            className="dark:hidden"
            onMouseEnter={handleGithubHover}
            onMouseLeave={handleGithubLeave}
          >
            <a
              href="https://github.com/MohammadYazbeck"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group flex w-12 items-center rounded-full duration-500 hover:w-[13.5rem] hover:-translate-x-3 hover:bg-gray-300 hover:transition-all">
                <img
                  title="Github"
                  src="/portfolio/images/github-black.png"
                  className="h-10 w-10 cursor-pointer rounded-full hover:shadow-sm hover:shadow-black sm:h-12 sm:w-12"
                />
                <p className="ml-1 h-full font-semibold text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {githubLink}
                </p>
              </div>
            </a>
          </div>

          {/* GitHub - Dark Mode */}
          <div
            className="hidden dark:flex"
            onMouseEnter={handleGithubHover}
            onMouseLeave={handleGithubLeave}
          >
            <a
              href="https://github.com/MohammadYazbeck"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="group flex w-12 items-center rounded-full duration-500 hover:w-[13.5rem] hover:-translate-x-3 hover:bg-gray-800 hover:transition-all">
                <img
                  title="Github"
                  src="/portfolio/images/github-white.png"
                  className="h-10 w-10 cursor-pointer rounded-full hover:shadow-sm hover:shadow-gray-400 sm:h-12 sm:w-12"
                />
                <p className="ml-1 h-full font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {githubLink}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
