import React, { forwardRef } from 'react'
import styles from './Project.module.scss'

const Project =  (props, projectRef) => {

  return (
    <section className={styles.project} ref={projectRef} id="project-section" >
        <h3>Project Section</h3>
        <article>
          <div className=""></div>
          <figure></figure>
        </article>
        <article>
          <div className=""></div>
          <figure></figure>
        </article>
        <article>
          <div className=""></div>
          <figure></figure>
        </article>
        <article>
          <div className=""></div>
          <figure></figure>
        </article>

    </section>
  )
}

export default forwardRef(Project);
