import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useSectionObserver(sectionIds: string[]) {
  const navigate = useNavigate();

  useEffect(() => {
    const observerOptions = { threshold: 0.5 };
    let scrollTimeout: number | null = null;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const newHash = `#${entry.target.id}`;
          if (window.location.hash !== newHash) {
            navigate(newHash, { replace: true });

            // Clear any existing timeout to avoid overlapping timers
            if (scrollTimeout) clearTimeout(scrollTimeout);

            // Set a new timeout to ensure smooth scrolling
            if (entry.target.id !== "about-me") {
              scrollTimeout = setTimeout(() => {
                document.getElementById(entry.target.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "center",
                });
              }, 150);
            }
          }
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    // Fallback for touchpad: Listen to hash changes to scroll smoothly
    const handleHashChange = () => {
      const element = document.getElementById(window.location.hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
      if (scrollTimeout) clearTimeout(scrollTimeout); // Clear timeout on cleanup
    };
  }, [navigate, sectionIds]);
}
