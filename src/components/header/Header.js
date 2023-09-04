import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/elemar.png';
import logoDark from '../../assets/elemar-dark.png';
import { BsFillMoonStarsFill, BsBoxArrowUpRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { RiSunFoggyFill, RiMenuFill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai'


const Header = ({ myTheme, onToggleTheme, onSwitch, scrollToProject, scrollToAbout, scrollToHome, scrollToContact }) => {
  const logoSource = myTheme === 'light' ? logo : logoDark;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header data-theme={myTheme}>
      <div className={`--flex-between ${styles.box}`}  >
        <img src={logoSource} alt='logo' width={150} onClick={scrollToHome} />
        <div className={`--flex-between ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div>
          <nav>
            <ul className='--flex-between'>
              {isMobileMenuOpen ? <li onClick={() => { scrollToHome(); setIsMobileMenuOpen(false); }}>Home</li> : null}
              <li onClick={() => { scrollToProject(); setIsMobileMenuOpen(false); }}>Project</li>
              <li onClick={() => { scrollToAbout(); setIsMobileMenuOpen(false); }}>About </li>
              <li onClick={() => { scrollToContact(); setIsMobileMenuOpen(false); }}>Contact</li>
              <button className={styles.resume}>Resume {!isMobileMenuOpen ? <BsBoxArrowUpRight size={11}/> : null }</button>
                <div className={styles['toggle-btn']} onClick={onToggleTheme} >
                  <BsFillMoonStarsFill color='violet' size={14} />
                  <RiSunFoggyFill color='yellow' size={16} />
                  <div className={onSwitch ? `${styles['ball']} ${styles['move']}` : styles['ball']}></div>
                </div>
              { isMobileMenuOpen ? 
                  <div className={styles['header-icons']}>
                      <BsGithub
                          size={40}
                          className={styles.icon}
                      />
                      <BsLinkedin
                          size={40}
                          className={styles.icon}
                      />
                  </div> : null }
            </ul>   
          </nav>
          </div>
          {isMobileMenuOpen ? 
              <AiOutlineClose size={30}  className={styles.close} onClick={toggleMobileMenu} /> 
              :
              <RiMenuFill size={40} className={styles['menu']} onClick={toggleMobileMenu} />
          }
          <div className={styles.wrapper} style={isMobileMenuOpen ? { width: '100vw' } : { window: '0'}} onClick={toggleMobileMenu}>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
