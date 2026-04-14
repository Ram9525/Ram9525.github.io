import Header from '../components/header'
import Hero from '../components/hero'
import About from "../components/about"
import EducationJourney from '../components/education'
import Experience from '../components/experience'
import Skills from '../components/skills'
import Projects from '../components/projects'
import Contact from '../components/contact'
import Footer from '../components/footer'

const Home = () => {
  return (
   <>
    <Header />
    <Hero />
    <About/>
    <EducationJourney />
    <Experience />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
   </>
  )
}

export default Home