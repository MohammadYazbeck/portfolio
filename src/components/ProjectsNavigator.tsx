export default function ProjectsNavigator({
  projects,
  activeProjectId,
  setActiveProjectId,
}: {
  projects: string[];
  activeProjectId: number;
  setActiveProjectId: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="relative top-0 z-10 flex h-16 justify-center rounded-full border-2 border-gray-200 p-2 shadow-lg md:h-[4.5rem] dark:border-white/15 dark:shadow-white/10">
      <div
        className="absolute left-2 top-[0.4rem] z-0 h-[80%] w-[5.8rem] rounded-full bg-black transition-all duration-300 md:w-[7.5rem] dark:bg-white"
        style={{
          transform: `translateX(${activeProjectId * (window.innerWidth >= 768 ? 7.5 : 5.8)}rem)`,
        }}
      />
      {projects.map((project, index) => (
        <button
          key={index}
          className={`relative z-10 w-[5.8rem] rounded-full p-2 duration-300 hover:font-semibold md:w-[7.5rem] md:p-3 md:text-xl ${
            activeProjectId === index
              ? "font-semibold text-white shadow-md shadow-gray-500 dark:text-black dark:shadow-gray-600"
              : "dark:text-white"
          }`}
          onClick={() => setActiveProjectId(index)}
        >
          {project}
        </button>
      ))}
    </div>
  );
}
