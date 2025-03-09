import React, { useEffect, useRef, useState } from "react";
import ProjectsIcon from "../icon/ProjectsIcon";
import { Card } from "./Card";
import { Modal } from "./Modal";
import TitleSection from "./TitleSection";
import projectData from "../service/data.json";
import { motion, useScroll, useTransform } from 'framer-motion';

export const Projects = () => {

  // UseState
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(null); // Skill seleccionada
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [itemsPerPage, setItemsPerPage] = useState(6); // Cantidad de proyectos por página

  // UseEffect
  // Actualizar itemsPerPage cuando cambie el tamaño de la pantalla
  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
    };

    // Escuchar cambios en el tamaño de la pantalla
    window.addEventListener("resize", handleResize);

    // Actualizar el valor inicial
    handleResize();

    // Limpiar el event listener al desmontar el componente
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Var
  const skills = Array.from(new Set(projectData.flatMap(project => project.tags.map(tag => tag.name))));
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.98, 1]);
  const y = useTransform(scrollYProgress, [0, 0.2], [10, 0]);
  const carouselRef = useRef(null); // Referencia para el carrusel
  const filteredProjects = selectedSkill
    ? projectData.filter((project) =>
      project.tags.some((tag) => tag.name === selectedSkill)
    )
    : projectData;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);


  // Function
  const getItemsPerPage = () => {
    if (window.innerWidth < 960) { // Mobile
      return 2;
    } else { // Desktop
      return 6;
    }
  };

  const skillCounts = skills.reduce((acc, skill) => {
    acc[skill] = projectData.filter((project) =>
      project.tags.some((tag) => tag.name === skill)
    ).length;
    return acc;
  }, {});

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Deshabilita el scroll en el fondo
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Habilita nuevamente el scroll
  };

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
    setCurrentPage(1);
  };

  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

 

  return (
    <motion.div
      style={{ opacity, scale, y }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="pb-16 w-full container flex flex-col justify-center items-center text-black"
    >
       {/* Estilos para ocultar la scrollbar */}
       <style>
        {`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            scrollbar-width: none; /* Para Firefox */
          }
        `}
      </style>
      <TitleSection className={"text-4xl"}>
        <ProjectsIcon className="size-9" />
        Proyectos
      </TitleSection>

      {/* Carrusel de habilidades */}
      <div className="py-8 relative w-full max-w-4xl mx-auto">
        {/* Botón de flecha izquierda */}
        <button
          onClick={scrollLeft}
          className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-10 dark:bg-gray-100  bg-[#8291a1] p-[0.6rem_0.5rem_0.5rem_0.5rem] shadow-md h-9 w-9 font-medium text-center rounded-xl flex justify-center items-center  hover:bg-gray-300 transition-colors"
        >
          {"<"}
        </button>

        {/* Contenedor del carrusel */}

        <div
          ref={carouselRef}
          className="flex gap-2 overflow-x-auto scroll-smooth px-10 hide-scrollbar"
        >
          {/* Botón "All" */}
          <button
            onClick={() => handleSkillClick(null)}
            className={`${selectedSkill === null
              ? "dark:bg-gray-100 bg-[#8291a1]"
              : "dark:bg-gray-800 bg-[#F5F5F5] dark:hover:bg-gray-700 hover:bg-opacity-100 border dark:text-white"
              } flex-shrink-0 flex items-center justify-center gap-1 px-4 py-1.5 transition rounded-lg dark:border-gray-600 text-md group focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 font-medium`}
          >
            All
          </button>

          {/* Botones de habilidades */}
          {skills.map((skill, index) => (
            <button
              key={index}
              onClick={() => handleSkillClick(skill)}
              className={`${selectedSkill === skill
                ? "dark:bg-gray-100 bg-[#8291a1]"
                : "dark:bg-gray-800 bg-[#F5F5F5] dark:hover:bg-gray-700 hover:bg-opacity-100 border dark:text-white"
                } flex-shrink-0 flex items-center justify-center gap-1 px-4 py-1.5 transition shadow-sm rounded-lg dark:border-gray-600 text-md group focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 font-medium`}
            >
              {skill}<span className="text-xs items-center opacity-70">({skillCounts[skill]})</span>
            </button>
          ))}
        </div>
        {/* Botón de flecha derecha */}
        <button
          onClick={scrollRight}
          className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-10 dark:bg-gray-100 bg-[#8291a1] hover:bg-gray-300  p-[0.6rem_0.5rem_0.5rem_0.5rem] shadow-md h-9 w-9 font-medium text-center rounded-xl flex justify-center items-center   transition-colors"
        >
          {'>'}
        </button>
      </div>

      {/* Lista de proyectos */}
      <div className="flex justify-center flex-wrap gap-8">
        {currentProjects && currentProjects.length > 0 ? (
          currentProjects.map((project, index) => (
            <Card
              key={index}
              props={project}
              className="w-1/2"
              onClick={() => openModal(project)}
            />
          ))
        ) : (
          <p>No hay proyectos para mostrar.</p>
        )}
      </div>

      {/* Paginación */}
      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-9 w-9 text-xl font-medium text-center text-black dark:text-white rounded-xl flex justify-center items-center disabled:opacity-50"
        >
          {"<"}
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`w-9 h-9 text-black dark:text-white opacity-50 text-xs ${currentPage === index + 1
              ? "border-gray-500 border border-opacity-50 opacity-100"
              : ""
              } rounded-xl hover:opacity-100`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="h-9 w-9 text-lg text-black dark:text-white font-medium text-center rounded-xl flex justify-center items-center disabled:opacity-50"
        >
          {'>'}
        </button>
      </div>

      {/* Modal */}
      {selectedProject && (
        <Modal selectedProject={selectedProject} closeModal={closeModal} />
      )}
    </motion.div>
  );
};