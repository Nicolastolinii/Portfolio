import { motion } from 'framer-motion'
import email from "../assets/email.png"

export const ModalContacto = ({ closeModal }) => {
    const handleCopyEmail = () => {
        const email = "nicotolini@hotmail.com"; // Email a copiar
        navigator.clipboard.writeText(email)
            .then(() => {
                alert("¡Email copiado al portapapeles!"); // Notificación al usuario
            })
            .catch(() => {
                alert("Ocurrió un error al copiar el email."); // Error al copiar
            });
    };

    return (
        <section>
            <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100]"
                initial={{ opacity: 0 }} // Inicializa el fondo con opacidad 0
                animate={{ opacity: 1 }} // Aumenta la opacidad del fondo de manera suave
                exit={{ opacity: 0 }} // Al salir, el fondo desaparece
                transition={{ duration: 0.4, ease: "easeOut" }} // Suaviza la aparición del fondo
            >
                <motion.div
                    className="dark:bg-[rgb(31,41,55)] dark:text-white rounded-xl max-w-xl w-full max-h-[37vh] h-full overflow-y-auto shadow-md "
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
                        <div className="flex justify-between items-center w-full  relative">
                            <h3 className="sm:text-2xl text-xl font-bold"> ¡Contáctame!</h3>
                            <button
                                onClick={closeModal}
                                className="dark:text-white text-xl dark:hover:text-red-600 font-bold hover:scale-125 "
                            >
                                ✕
                            </button>
                        </div>
                        <div className='sm:pt-6 pt-2 tracking-wide flex flex-col sm:gap-3 gap-2'>
                            <p className='sm:text-base text-sm'>¿Eres reclutador o estás buscando a alguien con mis habilidades? ¡Contáctame! Estoy siempre interesado en escuchar sobre nuevas oportunidades, desafíos y proyectos emocionantes. Será un placer conectar contigo.</p>
                            <h4 className='sm:text-xl text-lg font-semibold'>Email:</h4>
                            <div className='bg-gray-100 text-black rounded-lg p-2 font-medium text-base'>
                                <img className='sm:h-8 h-6' src={email} alt="email" />
                            </div>
                        </div>
                        <div className=' sm:mt-6 mt-4 flex justify-end gap-4 text-sm font-semibold'>
                            <button onClick={closeModal} className='px-3 py-1.5 transition  rounded-lg text-red-600 hover:text-white hover:bg-red-600'>Close</button>
                            <button onClick={handleCopyEmail} className='dark:bg-gray-800 dark:hover:bg-gray-700 hover:bg-opacity-100  border dark:border-gray-600 dark:text-white px-3 py-1.5 transition  rounded-lg'>Copy Email</button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}
