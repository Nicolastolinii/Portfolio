import { useEffect, useState } from "react";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio"); // Sección activa

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const handleLinkClick = (e, sectionId) => {
    e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const navItems = [
    {
      title: "Inicio",
      label: "inicio",
      url: "/#inicio",
    },
    {
      title: "Proyectos",
      label: "proyectos",
      url: "/#proyectos",
    },
    {
      title: "Sobre mí",
      label: "sobre-mi",
      url: "/#sobre-mi",
    },
    {
      title: "Contacto",
      label: "contacto",
      url: "mailto:nicolas_tolini@hotmail.com",
    },
  ];

  return (
    <header
      className={`fixed top-0 z-10 flex items-center justify-center px-3 rounded-2xl mt-4 transition-colors duration-300 ${
        isScroll ? "bg-white dark:bg-gray-700 shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="flex px-3 text-sm font-medium rounded-full text-gray-600 dark:text-gray-200 justify-center items-center">
        {navItems.map((link, index) => (
          <a
            key={index}
            className={`relative block px-2 py-2 transition hover:text-blue-500 dark:hover:text-[#6a889e] ${
              activeSection === link.label
                ? "text-blue-500 dark:text-[#6a889e] font-bold"
                : ""
            }`}
            aria-label={link.label}
            href={link.url}
            onClick={(e) => handleLinkClick(e, link.label)}
          >
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
};
