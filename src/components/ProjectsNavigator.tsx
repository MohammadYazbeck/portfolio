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
    <div className="relative top-0 z-10 flex h-16 justify-center rounded-full border-2 border-gray-200 p-2 shadow-lg dark:border-white/15 dark:shadow-white/10">
      <div
        className="absolute left-2 top-[0.4rem] z-0 h-[80%] w-[5.8rem] rounded-full bg-black transition-all duration-300 dark:bg-white"
        style={{
          transform: `translateX(${activeProjectId * (window.innerWidth = 5.8)}rem)`,
        }}
      />
      {projects.map((project, index) => (
        <button
          key={index}
          className={`relative z-10 w-[5.8rem] rounded-full p-2 duration-300 hover:font-semibold ${
            activeProjectId === index
              ? "font-semibold text-white dark:text-black"
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
