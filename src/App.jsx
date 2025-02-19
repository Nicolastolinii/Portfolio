import { AboutMe } from "./component/AboutMe"
import Footer from "./component/Footer"
import { Hero } from "./component/Hero"
import { Navbar } from "./component/Navbar"
import { Projects } from "./component/Projects"
import Section from "./component/Section"

function App() {

  return (
    <main className="font-onest ">
      <div class="fixed top-0 z-[-2] h-screen w-screen bg-[#ffffff] dark:bg-[#1e2a33] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-[radial-gradient(100%_80%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>


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

