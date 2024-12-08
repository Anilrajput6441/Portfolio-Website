import { getImageUrl } from "../../util";
import style from "./Hero.module.css";
import React from 'react';

export const Hero = () => {
  return (
    <section className={style.container}>
        <div className={style.content}>
            <h1 className={style.animatedtext}>I'm a <span></span> </h1>
            <p className={style.description}> My name is Anil an Aspiring Fullstack Engineer skilled in MERN stack, AWS deployment, and Devops . Contributed to website development and deployment, enhancing system reliability and automation.</p>
            <a className={style.contactBtn} href="mailto:anilrajput6441@gmail.com">Contact Me</a>
        </div>
        <img className={style.myheroicon} src={getImageUrl("hero/heroImage.jpeg")} alt="my hero image" />
        <div className={style.topBlur}/>
        <div className={style.bottomBlur}/>
    </section>
  );
  
};

