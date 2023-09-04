import React, { forwardRef } from 'react'
import styles from './About.module.css'

const About = (props, aboutRef) => {
  return (
    <section 
        className={styles.about} 
        ref={aboutRef} 
        id='about-section'
    >
        <h3>About me</h3>
    </section>
  )
}

export default forwardRef(About);