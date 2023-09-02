import React from 'react'
import styles from './Main.module.css'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import Icons from '../icons/Icons'


const Main = () => {
  return (
    <section className={styles.main}>
      <div className="container">
        <div className={styles['main-text']}>
          <h1>Hi, I’m Jay Elemar.</h1>
          <h3>I am a frontend software engineer, currently focused on building web interfaces and web applications</h3>
          <Icons/>
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
