import { motion } from 'framer-motion'
import LinkButton from './LinkButton'
import GithubIcon from '../icon/GithubIcon'
import LinkIcon from '../icon/LinkIcon'
import ArrowIcon from '../icon/ArrowIcon'
import { Tags } from './Tags'


export const Modal = ({ selectedProject, closeModal }) => {
    return (
        <section>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-80 dark:opacity-50 flex items-center justify-center sm:p-4 p-3 z-[100]"
                initial={{ opacity: 0 }} // Inicializa el fondo con opacidad 0
                animate={{ opacity: 1 }} // Aumenta la opacidad del fondo de manera suave
                exit={{ opacity: 0 }} // Al salir, el fondo desaparece
                transition={{ duration: 0.8, ease: "easeOut" }} // Suaviza la aparición del fondo
            >
                <motion.div
                    className="dark:bg-[rgb(31,41,55)] bg-[#f5f9fc] dark:text-white text-black rounded-xl max-w-4xl w-full max-h-[70vh] overflow-y-auto shadow-md "
                    initial={{ y: 30, opacity: 0 }} // Inicializa el modal fuera de vista y con opacidad 0
                    animate={{ y: 0, opacity: 1 }}  // El modal se mueve a su lugar y se vuelve visible
                    exit={{ y: 30, opacity: 0 }}   // Desaparece el modal moviéndose hacia abajo
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{
                        boxShadow: '0 3px 20px rgba(255, 255, 255, 0.1)',
                        scrollbarWidth: 'none',  // Oculta el scroll en Firefox
                        WebkitScrollbar: 'none', // Oculta el scroll en Chrome/Safari
                    }}>
                    <div className="sm:p-7 p-4">
                        <div className="flex justify-between items-start mb-2 relative">
                            <h3 className="sm:text-2xl text-xl font-bold">{selectedProject.title}</h3>
                            <button
                                onClick={closeModal}
                                className="dark:text-white text-xl dark:hover:text-red-600 font-bold hover:scale-125 "
                            >
                                ✕
                            </button>
                        </div>
                        <p className="mt-2 sm:text-base text-sm">{selectedProject.modalInfo.descripcion}</p>
                        <h4 className="font-semibold sm:text-xl text-lg sm:mt-6 mt-2 mb-2">Funcionalidades</h4>
                        <div className='flex flex-wrap sm:gap-3 gap-2 sm:mb-4 mb-2'>
                            {selectedProject.modalInfo.funcionalidad.map((tag, index) => {
                                const [label, description] = tag.split(':');
                                return (
                                    <div key={index} className="dark:text-white text-black sm:py-1.5 py-0.5 text-sm flex w-full items-center sm:flex-row flex-col  rounded-full">
                                        <div className='bg-slate-600 rounded-full sm:flex hidden'>
                                            <ArrowIcon />
                                        </div>
                                        <span className="font-semibold px-2 sm:text-base min-w-[16rem] text-center sm:text-left text-sm">{label}{description && ":"} </span>
                                        <span className="text-sm">{description}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <h4 className="font-semibold sm:text-xl text-lg sm:mt-6 mt-2 ">Tecnologías Usadas</h4>
                        <div className="flex flex-wrap gap-2 my-2">
                            {selectedProject.modalInfo.tecnologias_usadas.map((tag, index) => (
                                <Tags
                                    key={index}
                                    name={tag}
                                />

                            ))}
                        </div>
                        <div className="flex  sm:mt-8 mt-6 gap-4">
                            <LinkButton className="w-1/2 " href={selectedProject.url}>
                                <GithubIcon width={18} height={18} />
                                Repo
                            </LinkButton>
                            <LinkButton href={selectedProject.prev ?? selectedProject.url} className="w-1/2 ">
                                <LinkIcon width={18} height={18} />
                                Preview
                            </LinkButton>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
