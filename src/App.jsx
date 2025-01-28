import { AboutMe } from "./component/AboutMe"
import Footer from "./component/Footer"
import { Hero } from "./component/Hero"
import { Navbar } from "./component/Navbar"
import { Projects } from "./component/Projects"
import Section from "./component/Section"

function App() {

  // Color de acento oscuro: #1e2a33 (Azul oscuro casi negro para títulos y bordes)
  // Color de texto: #333333 (Gris oscuro, para que no sea tan duro como el negro)




  return (
    <main className="font-onest ">
      <div class="fixed top-0 z-[-2] h-screen w-screen bg-[#1e2a33] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>


      <Section id={"inicio"} className={"h-screen  flex flex-col items-center"}>
        <Navbar />
        <Hero />
      </Section>
      <Section id={"proyectos"} className={"space-y-24 py-16"}>
        <Projects />
      </Section>
      <Section id={"sobre-mi"} className={"space-y-24 py-16"}>
        <AboutMe />
      </Section>
      <Section  className={"space-y-24 pt-16"}>
        <Footer/>
      </Section>

    </main>
  )
}

export default App

