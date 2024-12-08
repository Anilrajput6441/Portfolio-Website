import React from 'react'
import { getImageUrl } from '../../util'
import style from "./Contact.module.css"

export const Contact = () => {
  return (
   <footer id='contact'>
    <div className={style.parent}>
        <h2 className={style.title}>Contact Me</h2>
        <p className={style.description}>"A message is all it takes to reach me"</p>
    </div>
    <div className={style.main}>
        <div className={style.up}>
            
            <button className={style.card1}  onClick={() => window.open('https://drive.google.com/file/d/1mzdV7R6gTWLXRVjDD1Bdgpn8WmeKYlPA/view?usp=share_link', '_blank')}>
              <img  className={`${style.imageupper} ${style.imageleft}`} src={getImageUrl("contact/file.png")} alt="Instagram Icon" width="34" height="34"/>
            </button>
            
            <button className={style.card2} onClick={() => window.open('https://www.linkedin.com/in/anil-behera-4a9597293/', '_blank')}>
              <img className={`${style.imageupper} ${style.imageright}`} src={getImageUrl("contact/linkedin.png")}  alt="Twitter Icon" width="34" height="34"/>
            </button>
          </div>
          <div className={style.down}>
            <button className={style.card3}  onClick={() => window.open('https://github.com/Anilrajput6441', '_blank')}>
              <img className={`${style.imagelower} ${style.imageleft}`} src={getImageUrl("contact/githubw.png")} alt="GitHub Icon" width="34" height="34"/>
            </button>
            <button className={style.card4}  onClick={() => window.location.href = 'mailto:anilrajput6441@gmail.com'}>
              <img className={`${style.imagelower} ${style.imageright}`} src={getImageUrl("contact/gmail.png")}  alt="Discord Icon" width="34" height="34" />
            </button>
          </div>
          
          
      </div>
   </footer>
  )
}


