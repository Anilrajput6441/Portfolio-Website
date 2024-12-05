import { getImageUrl } from "../../util";
import style from "./Hero.module.css"
import React from 'react'

export const Hero = () => {
  return (
    <section className={style.container}>
        <div className={style.content}>
            <h1 className={style.title}>Hi,I'm Anil</h1>
            <p className={style.description}>I am a Full Stack developer with a big edge knowledge of Devops</p>
            <a className={style.contactBtn} href="mailto:anilrajput6441@gmail.com">contact me</a>
        </div>
        <img className={style.myheroicon} src={getImageUrl("hero/heroImage.jpeg")} alt="my hero image" />
        <div className={style.topBlur}/>
        <div className={style.bottomBlur}/>
    </section>
  );
  
};

