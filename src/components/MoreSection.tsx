import { useRef } from "react";

export default function MoreSection() {
  const cvRef = useRef<HTMLAnchorElement>(null);

  const handleDownload = () => {
    cvRef.current?.click();
  };

  return (
    <section
      id="more"
      className="flex w-screen flex-col items-center justify-center bg-gradient-to-b from-white to-gray-200 px-8 py-12 sm:px-16 lg:mt-0 dark:bg-gradient-to-b dark:from-black dark:to-black/90"
    >
      <div className="w-full max-w-6xl space-y-9">
        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            Further Information
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            A closer look at my education, skills, and how to connect with me.
          </p>
        </div>

        {/* Education and Skills Section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Education Section */}
          <div
            className="relative flex animate-lr flex-col items-center justify-center rounded-3xl p-8 shadow-md transition duration-300 hover:shadow-lg dark:shadow-xl"
            style={{
              backgroundImage: "url('/portfolio/images/aiubg.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay for Blur & Fade Effect */}
            <div className="absolute inset-0 rounded-3xl bg-white/80 backdrop-blur-sm dark:bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
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
          </div>

          {/* Skills Section */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Front-End",
                skills: "React, React Native (Expo), TailwindCSS",
                icon: "🖥️",
              },
              {
                title: "Back-End",
                skills: "Express.js, Prisma, REST APIs",
                icon: "🔧",
              },
              {
                title: "Databases",
                skills: "PostgreSQL, SQLite",
                icon: "🗄️",
              },
              {
                title: "Full-Stack",
                skills: "Next.js",
                icon: "⚡",
              },
              {
                title: "Languages",
                skills: "JavaScript, TypeScript, Python, C#",
                icon: "📝",
              },
              {
                title: "Other Tools",
                skills: "Git, Docker, CI/CD",
                icon: "🛠️",
              },
            ].map(({ title, skills, icon }, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-start rounded-3xl bg-gradient-to-br from-gray-100 to-gray-300 p-6 shadow-md transition duration-300 hover:shadow-lg dark:from-gray-900 dark:to-gray-900/80 dark:shadow-xl"
              >
                <span className="text-3xl">{icon}</span>
                <h3 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-center text-gray-600 dark:text-gray-300">
                  {skills}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center justify-around rounded-3xl bg-gradient-to-br from-gray-100 to-gray-300 p-5 shadow-md transition duration-300 hover:shadow-lg lg:flex-row lg:space-x-12 dark:from-gray-900 dark:to-gray-900/80 dark:shadow-xl">
          <div className="mb-6 text-center lg:mb-0 lg:text-left">
            <div className="flex flex-col items-start justify-center">
              <p className="flex items-center space-x-2 text-lg text-gray-700 dark:text-gray-400">
                <img className="h-8 w-8" src="/portfolio/images/mail.png" />:{" "}
                <a
                  href="mailto:mohammadyazbeckk@gmail.com"
                  className="mr-4 font-medium text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  mohammadyazbeckk@gmail.com
                </a>
              </p>
            </div>
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
          <div className="mt-5 flex justify-center lg:mt-0">
            <a
              href="./MohammadYazbeck.pdf" // Replace with the actual file path
              download="MohammadYazbeck.pdf"
              ref={cvRef}
              style={{ display: "none" }}
            >
              Download CV
            </a>
            <div className="flex justify-center">
              <button
                onClick={handleDownload}
                className="group relative flex h-auto w-[130px] cursor-pointer items-center justify-center overflow-hidden rounded-full border-0 bg-gray-900 px-4 py-3 text-xl font-normal text-red-500 transition-all duration-100 lg:w-[145px] dark:bg-gray-200"
              >
                <p className="translate-x-0 text-lg font-bold text-gray-200 transition-all duration-200 group-hover:translate-x-[-100%] group-hover:opacity-0 lg:text-xl dark:text-black">
                  Personal CV
                </p>
                <span className="absolute translate-x-full text-lg font-bold text-white opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 lg:text-xl dark:text-black">
                  Download
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
