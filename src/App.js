import './App.css';
import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import useLocalStorage from 'use-local-storage';
import Project from './components/project/Project';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { useRef, useState } from 'react';

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  const [switchBtn, setSwitchBtn] = useState(false);
  const projectRef = useRef(null);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);
  


  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const scrollToProject = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHome = () => {
    homeRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' });
  };




  return (
    <div className='main'>
    <Header myTheme={theme} 
        onToggleTheme={toggleTheme} 
        onSwitch={switchBtn}  
        scrollToHome={scrollToHome}
        scrollToProject={scrollToProject}
        scrollToAbout={scrollToAbout}
        scrollToContact={scrollToContact}
    />
    <Main ref={homeRef}/>
    <Project ref={projectRef}/>
    <About ref={aboutRef} />
    <Contact ref={contactRef}/>
    <Footer />
    </div>
  );
}

export default App;
