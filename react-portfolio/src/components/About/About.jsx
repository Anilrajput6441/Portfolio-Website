import style from "./About.module.css"
import { getImageUrl } from '../../util';
import React from 'react'



export const About = () => {
  return (
    <section className={style.container} id="about">
        <h2 className={style.title}>About</h2>
        <div className={style.content}>
            <img className={style.developerImg} src={getImageUrl("About/useavatar.png")}  alt="Avatar" />
            <ul className={style.aboutitems}>
                <li className={style.aboutitem}>
                    <img className={style.imgcss} src={getImageUrl("About/online-resume.png")} alt="frontend" />
                    <div>
                        <h3>Frontend Developer</h3>
                        <p>I am a passionate frontend developer i am able to design dynamic and as well as static website</p>
                    </div>
                </li>

                <li className={style.aboutitem}>
                    <img className={style.imgcss} src={getImageUrl("About/backend.png")} alt="backend" />
                    <div>
                        <h3>Backend Developer</h3>
                        <p>I am a passionate backend developer i am able to design dynamic and as well as static websites with databases like MySql and MongoDB</p>
                    </div>
                </li>

                <li className={style.aboutitem}>
                    <img className={style.imgcss} src={getImageUrl("About/agile.png")} alt="devops" />
                    <div>
                        <h3>Devops Engineer</h3>
                        <p>I am a passionate cloud deployment i am able to deploy dynamic and as well as static website along with the database on cloud servers</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>

  )
}


