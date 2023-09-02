import React, { useState } from 'react';
import styles from './Header.module.css';
import logo from '../../assets/elemar.png';
import logoDark from '../../assets/elemar-dark.png';
import { BsFillMoonStarsFill, BsBoxArrowUpRight, BsGithub, BsLinkedin } from 'react-icons/bs';
import { RiSunFoggyFill, RiMenuFill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai'

const Header = ({ myTheme, onToggleTheme }) => {
  const logoSource = myTheme === 'light' ? logo : logoDark;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header data-theme={myTheme}>
      <div className='container --flex-between'>
        <img src={logoSource} alt='logo' width={150} />
        <div className={`--flex-between ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <div>
          <nav>
            <ul className='--flex-between'>
              <li>Project</li>
              <li>About</li>
              <li>Contact</li>
              <button className={styles.resume}>Resume {!isMobileMenuOpen ? <BsBoxArrowUpRight size={11}/> : null }</button>
                <span className={styles['toggle-btn']} onClick={onToggleTheme} >
                  <BsFillMoonStarsFill color='pink' size={16} />
                  <RiSunFoggyFill color='yellow' size={16} />
                  <div className='ball'></div>
                </span>
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
          {isMobileMenuOpen ? <AiOutlineClose size={30}  className={styles.close} onClick={toggleMobileMenu} /> :
          <RiMenuFill size={40} className={styles['menu']} onClick={toggleMobileMenu} />}
          <div className={styles.wrapper} style={isMobileMenuOpen ? { width: '100vw' } : { window: '0'}} onClick={toggleMobileMenu}></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
