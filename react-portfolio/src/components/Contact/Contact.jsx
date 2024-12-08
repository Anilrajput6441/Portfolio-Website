import React from 'react'
import { getImageUrl } from '../../util'
import style from "./Contact.module.css"

export const Contact = () => {
  return (
   <footer>
    <div className={style.parent}>
        <h2 className={style.title}>Contact Me</h2>
        <p className={style.description}>"A message is all it takes to reach me"</p>
    </div>
    <div className={style.main}>
        <div className={style.up}>
            <button className={style.card1}>
              <img  className={`${style.imageupper} ${style.imageleft}`} src={getImageUrl("contact/file.png")} alt="Instagram Icon" width="34" height="34"/>
            </button>
            <button className={style.card2}>
              <img className={`${style.imageupper} ${style.imageright}`} src={getImageUrl("contact/linkedin.png")}  alt="Twitter Icon" width="34" height="34"/>
            </button>
          </div>
          <div className={style.down}>
            <button className={style.card3}>
              <img className={`${style.imagelower} ${style.imageleft}`} src={getImageUrl("contact/githubw.png")} alt="GitHub Icon" width="34" height="34"/>
            </button>
            <button className={style.card4}>
              <img className={`${style.imagelower} ${style.imageright}`} src={getImageUrl("contact/gmail.png")}  alt="Discord Icon" width="34" height="34" />
            </button>
          </div>
          
          
      </div>
   </footer>
  )
}


