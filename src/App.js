import './App.css';
import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import useLocalStorage from 'use-local-storage';
import Project from './components/project/Project';
import About from './components/about/About';
import Contact from './components/contact/Contact';

function App() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme);
  };


  return (
    <div className='main'>
    <Header myTheme={theme} onToggleTheme={toggleTheme} />
    <Main />
    <Project/>

    <Footer/>
    </div>
  );
}

export default App;
