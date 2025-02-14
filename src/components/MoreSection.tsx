import { useRef } from "react";

export default function MoreSection() {
  const cvRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = () => {
    cvRef.current?.click();
  };

  return (
    <section
      id="more"
      className="flex w-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-200 px-8 py-16 sm:px-16 lg:mt-0 lg:h-full dark:bg-gradient-to-b dark:from-black dark:to-black/90"
    >
      <div className="w-full max-w-6xl space-y-16">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Me
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            A closer look at my education, skills, and how to connect with me.
          </p>
        </div>

        {/* Education and Skills Section */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Education Section */}
          <div className="flex animate-lr flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-gray-100 to-gray-300 p-8 shadow-md transition duration-300 hover:shadow-lg dark:from-gray-900 dark:to-gray-900/80 dark:shadow-xl">
            <img
              src="/portfolio/images/aiu.png"
              alt="Arab International University Logo"
              className="mb-6 h-24 w-24 rounded-full border border-gray-200 shadow-sm dark:border-gray-600"
            />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Arab International University
            </h2>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
              Major:{" "}
              <span className="mr-4 font-medium text-gray-800 dark:text-gray-200">
                Software Engineering
              </span>
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              GPA:{" "}
              <span className="mr-4 font-medium text-gray-800 dark:text-gray-200">
                73% (2.65/4.0)
              </span>
            </p>
          </div>

          {/* Skills Section */}
          <div className="flex flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-gray-100 to-gray-300 px-5 py-8 shadow-md transition duration-300 hover:shadow-lg dark:from-gray-900 dark:to-gray-900/80 dark:shadow-xl">
            <h2 className="mb-3 rounded-full bg-gradient-to-bl from-gray-800 to-gray-900 p-2 px-4 text-xl font-bold text-white dark:bg-gradient-to-br dark:from-gray-200 dark:to-gray-300 dark:text-black">
              Technical Skills
            </h2>
            <ul className="mt-4 space-y-2 text-center text-lg text-gray-600 dark:text-gray-300">
              <li className="flex items-center justify-start">
                <span className="mr-4 text-nowrap text-sm font-medium text-gray-800 sm:text-base dark:text-gray-200">
                  Front-End:
                </span>{" "}
                <p>React, React Native (Expo)</p>
              </li>
              <li className="flex items-center justify-start">
                <span className="mr-4 text-nowrap text-sm font-medium text-gray-800 sm:text-base dark:text-gray-200">
                  Back-End:
                </span>{" "}
                <p>Express.js, REST APIs, Prisma</p>
              </li>
              <li className="flex items-center justify-start">
                <span className="mr-4 text-sm font-medium text-gray-800 sm:text-base dark:text-gray-200">
                  Languages:
                </span>{" "}
                <p>JavaScript, TypeScript, Python, C#</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center justify-around rounded-3xl bg-gradient-to-br from-gray-100 to-gray-300 p-8 shadow-md transition duration-300 hover:shadow-lg lg:flex-row lg:space-x-12 dark:from-gray-900 dark:to-gray-900/80 dark:shadow-xl">
          <div className="mb-6 text-center lg:mb-0 lg:text-left">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Contact Me
            </h2>
            <p className="mt-4 text-lg text-gray-700 dark:text-gray-400">
              Location:{" "}
              <span className="mr-4 font-medium text-gray-900 dark:text-gray-200">
                Lebanon
              </span>
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-400">
              Email:{" "}
              <a
                href="mailto:mohammadyazbeckk@gmail.com"
                className="mr-4 font-medium text-indigo-600 hover:underline dark:text-indigo-400"
              >
                mohammadyazbeckk@gmail.com
              </a>
            </p>
          </div>
          <div className="flex space-x-6">
            {[
              {
                href: "https://www.linkedin.com/in/mohammadyazbeck",
                imgSrc: "/portfolio/images/linkedin.png",
              },
              {
                href: "https://github.com/MohammadYazbeck",
                imgSrc: "/portfolio/images/github-black.png",
              },
              {
                href: "https://www.facebook.com/Mohammad.Yazbeckk/",
                imgSrc: "/portfolio/images/facebook.png",
              },
              {
                href: "https://www.instagram.com/mohammadyazbeck_/",
                imgSrc: "/portfolio/images/instagram.png",
              },
            ].map(({ href, imgSrc }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-transform hover:scale-110 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              >
                <img
                  src={imgSrc}
                  className={`rounded-full border bg-white text-xl`}
                ></img>
              </a>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <a
            href="./MohammadYazbeck.pdf" // Replace with the actual file path
            download="MohammadYazbeck.pdf"
            ref={cvRef}
            style={{ display: "none" }}
          >
            Download CV
          </a>
          <button
            className="overflow-hidden rounded-full bg-gray-900 px-8 py-4 text-xl font-medium text-white shadow-md shadow-gray-500 transition-transform duration-300 hover:scale-105 hover:shadow-lg dark:bg-gray-200 dark:text-black dark:shadow-md dark:shadow-gray-600 dark:hover:shadow-lg"
            onClick={handleDownload}
          >
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
