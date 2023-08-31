import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/elemar.png'
import { BsFillMoonStarsFill, BsBoxArrowUpRight, BsListNested } from 'react-icons/bs'
import { RiSunFoggyFill, RiMenuFill } from 'react-icons/ri'


const Header = () => {


  return (
    <header>
      <div className='container --flex-between'>
          <img src={logo} alt="logo" width={150}/>
          <div className="--flex-between">
              <nav>
                <ul className='--flex-between'>
                  <li>Project</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li><button className={styles['resume-btn']}>Resume <BsBoxArrowUpRight size={11}/></button></li>
                </ul>
              </nav>
              
              <span className={styles['toggle-btn']}>
                <BsFillMoonStarsFill color='pink' size={16}/>
                <RiSunFoggyFill color='yellow' size={16}/>
                <div className='ball'></div>
            </span>
            <RiMenuFill size={40} className={styles['menu']}/>
          </div>
      </div>
    </header>
  )
}

export default Header
