import React from 'react'
import LinkButton from './LinkButton'
import MailIcon from '../icon/MailIcon'
import LinkedinIcon from '../icon/LinkedinIcon'
import { motion, useScroll, useTransform } from 'framer-motion'

export const Hero = () => {
    const { scrollYProgress } = useScroll()

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.6])
    const y = useTransform(scrollYProgress, [0, 0.5], [0, -50])


    return (
        <motion.div
            style={{ opacity, scale, y }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className='container font-onest flex flex-col justify-center items-center  mx-auto w-full h-screen   '>
            <h1 className='text-4xl font-bold tracking-tight text-gray-800 sm:text-7xl dark:text-white'>
                Hola, soy Nicolás
            </h1>
            <div className='mt-6 text-center text-lg  max-w-[39rem]'>
                <p className='  text-gray-800   [&>strong]:font-semibold dark:text-gray-300'>Desarrollador <strong>Full Stack & Entusiasta de la tecnologia</strong></p>

            </div>
            <nav className='flex flex-wrap gap-4 mt-8'>
                <LinkButton bg={"bg-white  "} href={"https://www.linkedin.com/in/nicolastolini/"}>
                    <LinkedinIcon className=' ' />
                </LinkButton>
                <LinkButton href={"mailto:nicolas_tolini@hotmail.com"} className='' >
                    <MailIcon className=' ' />
                </LinkButton>
            </nav>

        </motion.div>
    )
}
