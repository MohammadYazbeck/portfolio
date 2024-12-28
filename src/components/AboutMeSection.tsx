export default function AboutMeSection() {
  return (
    <section
      id="about-me"
      className="flex h-full w-full flex-col items-center justify-start pt-[20%] sm:pt-[15%] lg:h-full lg:flex-row lg:justify-center lg:space-x-16 lg:pb-[25%]"
    >
      <div className="mt-4 flex h-[15rem] w-[15rem] items-center justify-center sm:h-[17rem] sm:w-[17rem] lg:mt-0 lg:h-[25rem] lg:w-[25rem]">
        <div className="flex h-full w-full transform items-center justify-center overflow-hidden rounded-[65%/70%_39%_80%_50%] border border-blue-gray-900 shadow-2xl shadow-gray-300 drop-shadow-[0px_15px_3px_rgba(0,0,0,0.25)] sm:animate-lr dark:shadow-gray-800/80">
          <img
            src="/portfolio/images/pic.jpg"
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <div className="animate-rlSmall px-8 sm:mt-8 sm:animate-rl lg:h-[27rem] lg:w-[35rem] xl:w-[40rem]">
        <p className="ml-2 mt-12 text-2xl font-semibold italic tracking-tight sm:ml-5 md:ml-16 lg:ml-0 lg:mt-40 lg:text-4xl dark:text-white">
          {" "}
          Hey, I am Mohammad Yazbeck 🖐
        </p>
        <p className="ml-3 mt-5 text-pretty text-lg italic tracking-widest sm:ml-8 md:mx-20 lg:mx-0 lg:mt-10 lg:text-xl dark:text-gray-200">
          Software Engineer with a solid foundation in web application
          development and system analysis. Experienced in building full-stack
          solutions using React, Tailwind CSS, and Express.js, with a focus on
          performance optimization and seamless user experiences.
        </p>
        <div className="mt-8 flex items-center justify-end space-x-4 sm:mr-10 lg:w-[35rem] lg:pr-14">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/mohammadyazbeck"
          >
            <img
              title="LinkedIn"
              src="/portfolio/images/linkedin.png"
              className="h-10 w-10 cursor-pointer rounded-full hover:shadow-sm hover:shadow-blue-600 sm:h-12 sm:w-12"
            />
          </a>

          <div className="dark:hidden">
            <a
              href="https://github.com/MohammadYazbeck"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                title="Github"
                src="/portfolio/images/github-black.png"
                className="h-10 w-10 cursor-pointer rounded-full hover:shadow-sm hover:shadow-black sm:h-12 sm:w-12"
              />
            </a>
          </div>
          <div className="hidden dark:flex">
            <a
              href="https://github.com/MohammadYazbeck"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                title="Github"
                src="/portfolio/images/github-white.png"
                className="h-10 w-10 cursor-pointer rounded-full hover:shadow-sm hover:shadow-gray-400 sm:h-12 sm:w-12"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
