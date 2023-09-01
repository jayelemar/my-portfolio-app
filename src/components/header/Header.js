import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/elemar.png'
import logoDark from '../../assets/elemar-dark.png'
import { BsFillMoonStarsFill, BsBoxArrowUpRight } from 'react-icons/bs'
import { RiSunFoggyFill, RiMenuFill } from 'react-icons/ri'



const Header = ( {myTheme, onToggleTheme} ) => {
  const logoSource = myTheme === "light" ? logo : logoDark;
  return (
    <header data-theme={myTheme}>
      <div className='container --flex-between'>
          <img src={logoSource} alt="logo" width={150}/>
          <div className="--flex-between">
              <nav>
                <ul className='--flex-between'>
                  <li>Project</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Resume <BsBoxArrowUpRight size={11}/></li>
                  <li onClick={onToggleTheme}><span className={styles['toggle-btn']}>
                <BsFillMoonStarsFill color='pink' size={16}/>
                <RiSunFoggyFill color='yellow' size={16}/>
                <div className='ball'></div>
            </span></li>
                </ul>
              </nav>
              
              
            <RiMenuFill size={40} className={styles['menu']}/>
          </div>
      </div>
    </header>
  )
}

export default Header
