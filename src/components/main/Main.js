import React, { forwardRef } from 'react'
import styles from './Main.module.css'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import Icons from '../icons/Icons'
import ImageGIF from '../../assets/coder.gif'
import OpenToWork from '../../assets/open-to-work.gif'


const Main = ( props, homeRef ) => {
  return (
    <section className={styles.main} ref={homeRef} id='home-section'>
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
      </div>
      <figure className={styles['image-gif']}>
          <img  src={ImageGIF} alt="coder-gif" width={350} className={styles.coder}/>
          <img  src={OpenToWork} alt="open-to-work-gif" width={350} className={styles['open-to-work']}/>
      </figure>
    </section>
  )
}

export default forwardRef(Main);
