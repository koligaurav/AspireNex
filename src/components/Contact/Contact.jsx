import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

const Contact = () => {
  return (
   <footer id='contact' className={styles.container}>
    <div className={styles.text}><h2>Contact</h2>
    <p>Feel free to rach out!</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}> 
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="koligauravkoli10@gmail.com">koligauravkoli10@gmail.com</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" />
            <a href="https://www.linkedin.com/feed/">https://www.linkedin.com/feed/</a>
        </li>
        <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
            <a href="https://github.com/koligaurav">https://github.com/koligaurav</a>
        </li>
    </ul>
   </footer>
  )
}

export default Contact
