import ProjectsIcon from "../icon/ProjectsIcon"
import { Card } from "./Card"
import { Modal } from "./Modal"
import TitleSection from "./TitleSection"
import projectData from "../service/data.json"
import { motion, useScroll, useTransform } from 'framer-motion'
import LinkButton from "./LinkButton"
import { useState } from "react"



export const Projects = () => {
  const skills = Array.from(new Set(projectData.flatMap(project => project.tags.map(tag => tag.name))));
  const skillCounts = skills.reduce((acc, skill) => {
    acc[skill] = projectData.filter((project) =>
      project.tags.some((tag) => tag.name === skill)
    ).length;
    return acc;
  }, {});
  const [selectedSkill, setSelectedSkill] = useState(null); // Skill seleccionada
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1])
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.98, 1])
  const y = useTransform(scrollYProgress, [0, 0.2], [10, 0])
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const itemsPerPage = 6; // Cantidad de proyectos por página

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Deshabilita el scroll en el fondo
  };
  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Habilita nuevamente el scroll
  };
  const filteredProjects = selectedSkill
    ? projectData.filter((project) =>
      project.tags.some((tag) => tag.name === selectedSkill)
    )
    : projectData;
  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);
  const handleSkillClick = (skill) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
    setCurrentPage(1);
  };
  // Manejar cambios de página
  const goToPage = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <motion.div
      style={{ opacity, scale, y }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="pb-16  w-full   flex flex-col justify-center items-center">
      <TitleSection className={"  text-4xl"}>
        <ProjectsIcon className="size-9" />
        Proyectos
      </TitleSection>
      <div className="py-8 flex gap-2">
        <button
          onClick={() => handleSkillClick(null)}
          className={`${selectedSkill === null
            ? "dark:bg-gray-100"
            : "dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-opacity-100  border  dark:text-white  "
            } flex items-center justify-center gap-1 px-4 py-1.5 transition   rounded-lg dark:border-gray-600 text-md  group focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black font-medium`}
        >
          All
        </button>
        {
          skills.map((skill, index) => (
            <button
              key={index}
              onClick={() => handleSkillClick(skill)}

              className={`${selectedSkill === skill
                ? "dark:bg-gray-100"
                : "dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-opacity-100  border  dark:text-white  "
                } flex items-center justify-center gap-1 px-4 py-1.5 transition   rounded-lg dark:border-gray-600 text-md  group focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black font-medium`}
            >{skill}<span className="text-xs items-center opacity-70">({skillCounts[skill]})</span></button>
          ))
        }
      </div>
      <div className="flex justify-center flex-wrap gap-8">
        {
          currentProjects && currentProjects.length > 0 ? currentProjects.map((project, index) => (
            <Card
              key={index}
              props={project}
              className="w-1/2  "
              onClick={() => openModal(project)}
            />
          )) : <p>null</p>
        }
      </div>
      <div className="flex justify-center mt-6 gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-9 w-9 text-xl font-medium text-center   text-white rounded-xl flex justify-center items-center disabled:opacity-50"
        >
          {"<"}
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`w-9 h-9 text-white text-xs ${currentPage === index + 1
              ? "border-gray-500 border border-opacity-50 "
              : ""
              } rounded-xl`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="h-9 w-9 text-lg text-white font-medium text-center rounded-xl flex justify-center items-center disabled:opacity-50"
        >
          {'>'}
        </button>
      </div>

      {selectedProject && (
        <Modal selectedProject={selectedProject} closeModal={closeModal} />
      )}
    </motion.div>
  )
}
