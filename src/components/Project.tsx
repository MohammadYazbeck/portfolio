import ImageCarousel from "./ImageCarousel";

type ProjectTool = {
  name: string;
  photo_link: string;
};

type ProjectScreenshots = {
  title: string;
  link: string;
};

type ProjectsSectionData = {
  id: number;
  projectName: string;
  summary: string;
  tools: ProjectTool[];
  features: string[];
  screenshots: ProjectScreenshots[];
  isLive: boolean;
  liveLink: string;
  role: string[];
  projectLink: string;
};

export default function Project({ project }: { project: ProjectsSectionData }) {
  return (
    <div className="mx-3 mt-5 flex flex-col items-center justify-center rounded-3xl p-5 lg:mx-10 2xl:flex-row 2xl:items-start 2xl:space-x-24 2xl:space-y-0">
      <div
        className={`opacity-0 2xl:w-[45%] ${location.hash === "#projects" || location.hash === "#more" ? "flex animate-rl flex-col sm:animate-bt" : ""}`}
      >
        {project.projectLink ? (
          <a
            title="GitHub Link"
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-auto flex items-end text-4xl shadow-gray-400 text-shadow-lg dark:text-white dark:shadow-gray-600"
          >
            {project.projectName}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="ml-3 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>
          </a>
        ) : (
          <div
            className="mr-auto flex cursor-help items-end text-4xl shadow-gray-400 text-shadow-lg dark:text-white dark:shadow-gray-600"
            title="The project source code is private upon customer request."
          >
            {project.projectName}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="ml-2 size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>
          </div>
        )}

        <p className="mt-5 text-pretty tracking-wide lg:mt-10 lg:text-lg dark:text-gray-50">
          {project.summary}
        </p>
        <p className="mt-7 cursor-default text-xl font-semibold tracking-tight lg:mt-5 dark:text-white">
          Features
        </p>
        <ul className="mt-3 flex flex-wrap gap-1 lg:mt-5">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="rounded-full bg-gradient-to-bl from-black/95 via-black/85 to-black/95 p-2 px-5 text-center text-sm font-semibold tracking-wide text-gray-100 dark:from-white dark:via-gray-100 dark:to-white dark:font-bold dark:text-black"
            >
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-8 w-full lg:mt-12">
          <p className="cursor-default text-xl font-semibold tracking-tight dark:text-white">
            Made with
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4 sm:mr-10 lg:w-[35rem] lg:pr-14">
            {project.tools.map((tool) => (
              <div
                key={tool.name}
                className="flex h-12 w-12 items-center justify-center sm:h-12 sm:w-12"
              >
                <img
                  title={tool.name}
                  src={tool.photo_link}
                  className="cursor-pointer bg-blend-color hover:-translate-y-2 hover:transition-transform hover:duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className={`flex w-full flex-col items-center justify-center pb-20 opacity-0 2xl:w-[55%] ${location.hash === "#projects" || location.hash === "#more" ? "flex animate-rl flex-col" : ""}`}
      >
        <p className="mr-auto mt-10 cursor-default text-xl font-semibold tracking-tight sm:hidden lg:mt-14 dark:text-white">
          Screenshots
        </p>
        {project.isLive ? (
          <a
            title="Project Live link"
            className="mt-10 flex w-[100%] flex-col items-center justify-end space-x-1"
            href={project.liveLink}
          >
            <div className="mb-5 flex w-full items-center justify-end space-x-2">
              <div className="h-4 w-4 animate-pulse rounded-full bg-red-500"></div>
              <p className="text-xl font-bold text-red-500">Live</p>
            </div>
            <div className="flex w-full object-contain sm:p-4">
              <img
                src={project.screenshots[0].link}
                className="w-full duration-300 hover:opacity-80 hover:transition-opacity"
                loading="lazy"
              />
            </div>
          </a>
        ) : (
          <div className="w-[100%]">
            <div className="mt-10 flex w-full items-center justify-start">
              <ImageCarousel
                images={project.screenshots.map(
                  (screenshot) => screenshot.link,
                )}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
