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
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100]"
                initial={{ opacity: 0 }} // Inicializa el fondo con opacidad 0
                animate={{ opacity: 1 }} // Aumenta la opacidad del fondo de manera suave
                exit={{ opacity: 0 }} // Al salir, el fondo desaparece
                transition={{ duration: 0.8, ease: "easeOut" }} // Suaviza la aparición del fondo
            >
                <motion.div
                    className="dark:bg-[rgb(31,41,55)] dark:text-white rounded-xl max-w-4xl w-full max-h-[70vh] h-full overflow-y-auto shadow-md "
                    initial={{ y: 30, opacity: 0 }} // Inicializa el modal fuera de vista y con opacidad 0
                    animate={{ y: 0, opacity: 1 }}  // El modal se mueve a su lugar y se vuelve visible
                    exit={{ y: 30, opacity: 0 }}   // Desaparece el modal moviéndose hacia abajo
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{
                        boxShadow: '0 3px 20px rgba(255, 255, 255, 0.1)',
                        scrollbarWidth: 'none',  // Oculta el scroll en Firefox
                        WebkitScrollbar: 'none', // Oculta el scroll en Chrome/Safari
                    }}>
                    <div className="p-7">
                        <div className="flex justify-between items-start mb-2 relative">
                            <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                            <button
                                onClick={closeModal}
                                className="dark:text-white text-xl dark:hover:text-red-600 font-bold hover:scale-125 "
                            >
                                ✕
                            </button>
                        </div>
                        <p className="mt-2">{selectedProject.modalInfo.descripcion}</p>
                        <h4 className="font-semibold text-xl mt-6">Funcionalidades</h4>
                        <div className='flex flex-wrap gap-3 mb-4'>
                            {selectedProject.modalInfo.funcionalidad.map((tag, index) => {
                                const [label, description] = tag.split(':');
                                return (
                                    <div key={index} className=" py-1.5 text-sm flex w-full items-center  rounded-full  text-white  ">
                                        <div className='bg-slate-600 rounded-full'>
                                            <ArrowIcon />
                                        </div>
                                        <span className="font-semibold px-2 text-lg">{label}: </span>
                                        <span className="text-sm">{description}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <h4 className="font-semibold text-xl mt-6 ">Tecnologías Usadas</h4>
                        <div className="flex flex-wrap gap-2 my-2">
                            {selectedProject.modalInfo.tecnologias_usadas.map((tag, index) => (
                                <Tags
                                    key={index}
                                    name={tag}
                                />

                            ))}
                        </div>
                        <div className="flex  mt-8 gap-4">
                            <LinkButton className="w-1/2 " href={selectedProject.url}>
                                <GithubIcon width={18} height={18} />
                                Repo
                            </LinkButton>
                            <LinkButton href={"#"} className="w-1/2 ">
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
