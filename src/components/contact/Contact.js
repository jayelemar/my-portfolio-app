import React, { forwardRef } from 'react'
import styles from './Contact.module.css'

const Contact = ( props, contactRef ) => {
  return (
    <section className={styles.contact} ref={contactRef} id="project-section" >
        <h3>Contact me</h3>
    </section>
  )
}

export default forwardRef(Contact);
