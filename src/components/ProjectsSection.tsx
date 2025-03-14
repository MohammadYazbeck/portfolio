import { useEffect, useRef, useState } from "react";
import Project from "./Project";
import ProjectsNavigator from "./ProjectsNavigator";
import data from "../assets/data/projects.json";

export default function ProjectsSection() {
  const [activeProjectId, setActiveProjectId] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Create refs for each project (although we won't need them for scrolling)
  const projectRefs = useRef<(HTMLDivElement | null)[]>(
    data.projects.map(() => null),
  );

  useEffect(() => {
    // Function to check hash and scroll if needed
    const handleHashChange = () => {
      if (window.location.hash === "#projects" && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: "smooth" });
      }
    };

    // Check on mount in case user lands directly on #projects
    handleHashChange();

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <section
      id="projects"
      className="flex w-screen flex-col items-center justify-start md:space-x-16 lg:pt-0 dark:bg-black"
    >
      <div className="flex flex-col items-center pt-8">
        <ProjectsNavigator
          projects={["Digicom", "A-Gadget", "GymenAi", "DigiCard"]}
          activeProjectId={activeProjectId}
          setActiveProjectId={setActiveProjectId}
        />
      </div>

      <div className="flex w-[92%] gap-10 overflow-x-hidden rounded-t-3xl no-scrollbar xl:w-[88%] 2xl:overflow-hidden">
        {data.projects.map((project, index) => (
          <div
            ref={(el) => (projectRefs.current[index] = el)}
            className="min-h-full min-w-full"
            key={project.id}
            style={{
              display: index === activeProjectId ? "block" : "none", // Show only the active project
            }}
          >
            <Project project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
