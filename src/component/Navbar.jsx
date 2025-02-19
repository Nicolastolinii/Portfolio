import { useEffect, useState } from "react";
import SunIcon from "../icon/SunIcon";
import { ModalContacto } from "./ModalContacto";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }

    return "light";
  });
  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [theme]);
  const handleChangeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
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
    }, {
      title: "Contacto", // Nueva sección de contacto
      label: "contacto",
      url: "#",
    },
  ];

  return (
    <header
      className={`fixed top-0 z-10 flex items-center justify-center px-3 rounded-2xl mt-4 transition-colors duration-300 ${isScroll ? "bg-white dark:bg-gray-700 shadow-lg" : "bg-transparent"
        }`}
    >
      <nav className="flex px-3 text-sm font-medium rounded-full text-black dark:text-gray-200 justify-center items-center">
        {navItems.map((link, index) => (
          <a
            key={index}
            className={`relative block px-2 py-2 transition hover:text-[#495863] dark:hover:text-[#6a889e] ${activeSection === link.label
              ? "text-[#495863] dark:text-[#6a889e] font-bold"
              : ""
              }`}
            aria-label={link.label}
            href={link.url}
            onClick={(e) =>
              link.label === "contacto"
                ? (e.preventDefault(), setIsModalOpen(true)) // Abrir el modal si es "Contacto"
                : handleLinkClick(e, link.label)
            }
          >
            {link.title}
          </a>
        ))}
        <button onClick={handleChangeTheme} className="">
          <SunIcon />
        </button>
      </nav>
      {isModalOpen && <ModalContacto closeModal={() => setIsModalOpen(false)} />}
    </header>
  );
};
