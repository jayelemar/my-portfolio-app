import React, { forwardRef } from 'react'
import styles from './Project.module.css'

const Project =  (props, projectRef) => {

  return (
    <section className={styles.project} ref={projectRef} id="project-section" >
        <h3>Projects</h3>
        <article>
          <div className=""></div>
          <figure></figure>
        </article>
    </section>
  )
}

export default forwardRef(Project);
