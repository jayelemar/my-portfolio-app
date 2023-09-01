import React from 'react'
import styles from './Main.module.css'
import { BsBoxArrowUpRight, BsGithub, BsLinkedin } from 'react-icons/bs'
import { Tooltip } from 'react-tooltip'

const Main = () => {
  return (
    <section className={styles.main}>
      <div className="container">
        <div className={styles['main-text']}>
          <h1>Hi, I’m Jay Elemar.</h1>
          <h3>I am a frontend software engineer, currently focused on building web interfaces and web applications</h3>
          <span className={styles['icon-wrapper']}>
            <BsGithub size={40} 
                className={styles.icon} 
                data-tooltip-id="github-tooltip" 
                data-tooltip-content="Github Profile" />
            <Tooltip id="github-tooltip" place="top" className={styles.tooltip}/>
            <BsLinkedin size={40} 
                className={styles.icon} 
                data-tooltip-id="linkedin-tooltip" 
                data-tooltip-content="Linkedin Profile" />
            <Tooltip id="linkedin-tooltip" place="top" className={styles.tooltip} /> 
            
          </span>
          <div>
            <button className={styles.btn}>Look at my work ↓</button>
            <button className={styles.btn}>View resume <BsBoxArrowUpRight size={11}/></button>
          </div>
        </div>
        <div className={styles['main-img']}></div>
      </div>
    </section>
  )
}

export default Main
