import React from 'react'
import styles from './Main.module.css'
import { BsBoxArrowUpRight, BsGithub, BsLinkedin } from 'react-icons/bs'


const Main = () => {
  return (
    <section className={styles.main}>
      <div className="container">
        <div className={styles['main-text']}>
          <h1>Hi, I’m Jay Elemar.</h1>
          <h3>I am a frontend software engineer, currently focused on building web interfaces and web applications</h3>
          <span className={styles['icon-wrapper']}>
            <BsGithub size={40} className={styles.icon} />
            <BsLinkedin size={40} className={styles.icon} />
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
