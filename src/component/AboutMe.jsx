import { useState } from "react";
import AboutMeIcon from "../icon/AboutMeIcon"
import TitleSection from "./TitleSection"
import projectData from "../service/data.json"



export const AboutMe = () => {
    const skills = Array.from(new Set(projectData.flatMap(project => project.tags.map(tag => tag.name))));
    const proyectos = [
        {
            title: "Gestion de tickets",
            url: ""
        },
        {
            title: "Tecnosapiens Backend",
            url: ""
        },
        {
            title: "Tecnosapiens Frontend",
            url: ""
        },
        {
            title: "UserNetSearcher",
            url: ""
        }
    ]
    const items = [
        {
            title: "Perfil",
            label: <> "<span className="font-bold">Desarrollador Full Stack.</span> Me apasiona crear soluciones tecnológicas y brindar experiencias de usuario excepcionales. Mi objetivo es crecer en el ambito de programación, aplicando mis habilidades para innovar y<span className="font-bold"> crear soluciones eficientes.</span> Soy una persona curiosa y comprometida con el aprendizaje continuo, siempre buscando oportunidades que desafíen mis conocimientos y me permitan avanzar en este apasionante campo."</>,
        }, {
            title: "Experiencia",
            label: <>"2+ años de experiencia desarrollando soluciones tecnológicas a través de proyectos personales y como freelancer. He trabajado en la creación de aplicaciones web y sistemas Full Stack, utilizando tecnologías como <span className="font-bold">Java , Python, Spring Boot, React, y MySQL</span>. Mi enfoque incluye el diseño de arquitecturas escalables y la entrega de proyectos de alta calidad."</>,
        }, {
            title: "Educación",
            label: <><span className="font-bold">Estudiante de Telecomunicaciones:</span> Universidad Tecnológica Nacional (UTN) <br />  <span className="font-bold">Programación Autodidacta ♥:</span> Java, JavaScript, Python, MySQL </>,
        },
    ];
    const [selectedLabel, setselectLabel] = useState(items[0])
    return (
        <div className="flex flex-col justify-center items-center container tracking-wide">
            <TitleSection className={"  text-4xl"}>
                <AboutMeIcon strokeWidth={2.5} className="size-8" />
                Sobre mí
            </TitleSection>
            <div className="mt-8  w-full flex justify-between items-center rounded-lg dark:bg-gray-800 text-lg border border-[#4a5568] dark:text-white bg-[#f5f9fc]">
                {items.map((title, index) => (
                    <button onClick={() => setselectLabel(title)} key={index} className={`py-1 w-full h-full flex items-center justify-center rounded-lg transition-colors duration-200   ${selectedLabel.title === title.title
                        ? "dark:bg-white text-black bg-[#ffffff]"
                        : "dark:hover:bg-white hover:bg-[#ffffff] hover:text-black"
                        }`}>
                        {title.title}</button>
                ))}
            </div>
            <div className=" mt-5  w-full  h-32  p-6 flex items-center justify-center  border dark:text-white border-[#4a5568] hover:border-[#5f7889] transition-colors duration-200 rounded-xl overflow-hidden shadow-md dark:bg-gray-800 bg-[#f5f9fc] tracking-wider">
                <span className="">
                    {selectedLabel.label}
                </span>
            </div>
            <div className="flex justify-center gap-5 w-full h-52 mt-5">
                <div className=" p-6  w-full  flex flex-col gap-4   border dark:text-white border-[#4a5568] hover:border-[#5f7889] transition-colors duration-200 rounded-xl overflow-hidden shadow-md dark:bg-gray-800 bg-[#f5f9fc]">
                    <h4 className="text-xl font-medium flex gap-2 items-center">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide-icon lucide lucide-cpu dark:text-white"
                        >
                            <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                            <rect x="9" y="9" width="6" height="6"></rect>
                            <line x1="9" y1="1" x2="9" y2="4"></line>
                            <line x1="15" y1="1" x2="15" y2="4"></line>
                            <line x1="9" y1="20" x2="9" y2="23"></line>
                            <line x1="15" y1="20" x2="15" y2="23"></line>
                            <line x1="20" y1="9" x2="23" y2="9"></line>
                            <line x1="20" y1="14" x2="23" y2="14"></line>
                            <line x1="1" y1="9" x2="4" y2="9"></line>
                            <line x1="1" y1="14" x2="4" y2="14"></line>
                        </svg>


                        Tecnologías</h4>
                    <div className="flex flex-wrap gap-1.5">
                        {
                            skills.map((skill, index) => (
                                <span className=" mt-0.5 border text-sm cursor-default items-center px-2 py-0.5 dark:text-white border-[#4a5568] hover:border-[#5f7889] transition-colors duration-200 rounded-xl"
                                    key={index}
                                >{skill}</span>
                            ))
                        }
                    </div>
                </div>
                <div className=" p-6  w-full  flex flex-col gap-4   border dark:text-white border-[#4a5568] hover:border-[#5f7889] transition-colors duration-200 rounded-xl overflow-hidden shadow-md dark:bg-gray-800 bg-[#f5f9fc]">
                    <h4 className="text-xl font-medium flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide-icon lucide lucide-star">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                        Proyectos Destacados</h4>
                    <div className="flex flex-col gap-1.5">
                        {proyectos.map((item, index) => (
                            <a
                                className="flex items-center gap-2 group  transition-all duration-150"
                                key={index}
                                href={item.url}
                            >
                                {item.title}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="13"
                                    height="13"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="lucide-icon lucide lucide-arrow-up-right opacity-50 scale-100 duration-200 transform group-hover:opacity-100 group-hover:scale-110 group-hover:translate-x-[1.5px]"
                                >
                                    <path d="M7 7h10v10"></path>
                                    <path d="M7 17 17 7"></path>
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>

            </div>


        </div>
    )

}
