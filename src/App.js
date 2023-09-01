import './App.css';
import Main from './components/main/Main';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import useLocalStorage from 'use-local-storage';

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
    <Footer/>
    </div>
  );
}

export default App;
