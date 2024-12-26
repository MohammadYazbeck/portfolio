import AboutMeSection from "../components/AboutMeSection";
import { useSectionObserver } from "../hooks/useSectionObserver";
import ProjectsSection from "../components/ProjectsSection";
import MoreSection from "../components/MoreSection";

export default function MainPage() {
  useSectionObserver(["about-me", "projects", "more"]);
  return (
    <div className="h-screen dark:bg-black">
      <AboutMeSection />
      <ProjectsSection />
      <MoreSection />
    </div>
  );
}
// bg-gradient-to-b from-white via-slate-100 to-white dark:bg-gradient-to-b dark:from-black dark:via-slate-950 dark:to-black
