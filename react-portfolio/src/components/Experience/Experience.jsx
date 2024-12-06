import React from 'react';
import style from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from '../../util';
import experience from "../../data/history.json"

export const Experience = () => {
  return (
    <section className={style.container} id='experience'>
        <h2 className={style.title}>Experience</h2>
        <div className={style.content}>
            <div className={style.skills}>
                {skills.map((skill,id) => {
                    return (
                        <div  className={style.skill} key={id}> 
                            <div className={style.skillImageContainer}>
                                <img  className={style.skillImg} src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    );
                })}
            </div>
            <ul className={style.history}>
                {experience.map((experience,id) => {
                    return (
                       <li className={style.historyItem} key={id}>
                       <img className= {style.expImg}src={getImageUrl(experience.imageSrc)} alt={`${experience.oorganisation}logo`} />
                       <div className={style.historyItemDetails} >
                        <h3>{`${experience.role},${experience.organisation}`}</h3>
                        <p>{`${experience.startDate}-${experience.endDate}`}</p>
                        <ul>
                            {experience.experiences.map((experience,id) => {
                                return(
                                    <li key={id}>{experience}</li>
                                );

                            })}
                        </ul>
                       </div>
                       </li>
                    );
                })} 

            </ul>
        </div>
    </section>
  )
}
