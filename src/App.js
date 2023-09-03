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


  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme);
    setSwitchBtn(!switchBtn);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const scrollToProject = () => {
    projectRef.current.scrollIntoView({ behavior: 'smooth' });
  };




  return (
    <div className='main'>
    <Header myTheme={theme} 
        onToggleTheme={toggleTheme} 
        onSwitch={switchBtn}  
        scrollToProject={scrollToProject} />
    <Main />
    <About />
    <Contact />
    <Project ref={projectRef}/>

    <Footer/>
    </div>
  );
}

export default App;
