import { useState } from 'react'
import './App.css'
import HeroSection from './sections/HeroSection'
import { AboutMe } from './sections/AboutMe';
import Skills from './sections/SpotlightCard';
import EducationCard from './components/EducationCard';
import Education from './sections/Education';
import Achivement from './sections/Achivement';
import Contact from './sections/Contact';
import FooterMinimal from './sections/FooterMinimal';
import ProjectsSection from './sections/ProjectsSection';
import GoToTop from './components/GoToTop';




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
      <AboutMe />
      <Skills />
      <ProjectsSection />
      <Education />
      <Achivement />
      <Contact />
      <FooterMinimal />
      <GoToTop />
    </>
  );
}

export default App
