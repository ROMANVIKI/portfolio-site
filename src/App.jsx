import Footer from './components/Footer';
import Nav from './components/Nav';
import HeroSection from './sections/HeroSection.jsx';
import About from './sections/About.jsx';
import Skills from './sections/Skills.jsx';
import Projects from './sections/Projects.jsx';
import Certifications from './sections/Certifications.jsx';
import Contact from './sections/Contact.jsx';
const App = () => {
  return (
    <div className='relative '>
      <Nav />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
