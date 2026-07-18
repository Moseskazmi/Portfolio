import Navbar from '../components/Navbar.jsx';
import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';
import Experience from '../components/Experience.jsx';
import { Education, Certifications } from '../components/Education.jsx';
import Testimonials from '../components/Testimonials.jsx';
import Contact from '../components/Contact.jsx';
import Footer from '../components/Footer.jsx';
import { useScrollSpy } from '../hooks/useScrollSpy.js';

const sections = ['home', 'about', 'skills', 'projects', 'experience', 'education', 'certifications', 'testimonials', 'contact'];

export default function Home() {
  const active = useScrollSpy(sections);
  return (
    <>
      <Navbar active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
