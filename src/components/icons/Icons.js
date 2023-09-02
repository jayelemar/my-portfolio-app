import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'; 
import { Tooltip } from 'react-tooltip'
import styles from '../icons/Icons.module.css'


const Icons = () => {
    return (
    <span className={styles['icon-wrapper']}>
        <BsGithub
            size={40}
            className={styles.icon}
            data-tooltip-id="github-tooltip"
            data-tooltip-content="Github Profile"
        />
        <Tooltip id="github-tooltip" place="top" className={styles.tooltip} />
        <BsLinkedin
            size={40}
            className={styles.icon}
            data-tooltip-id="linkedin-tooltip"
            data-tooltip-content="Linkedin Profile"
        />
        <Tooltip id="linkedin-tooltip" place="top" className={styles.tooltip} />
    </span>
    )
}

export default Icons
