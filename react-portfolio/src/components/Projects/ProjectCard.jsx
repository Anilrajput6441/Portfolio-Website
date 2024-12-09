import React from "react";

import style from "./ProjectCard.module.css";
import { getImageUrl } from "../../util";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, live, source },
}) => {

  const handleImageClick = () => {
    window.open(live, "_blank", "noopener,noreferrer");
  };
  return (
    
    <div className={style.container}>
      {/* <a  href={live} target="_blank" rel="noopener noreferrer"> */}
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={style.image}
        onClick={handleImageClick}
        style={{ cursor: "pointer" }}
        
      />
      {/* </a> */}
      <h3 className={style.title}>{title}</h3>
      <p className={style.description}>{description}</p>
      <ul className={style.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={style.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={style.links}>
        <a href={live} className={style.link}>
          Live
        </a>
        <a href={source} className={style.link}>
          GitHub
        </a>
      </div>
    </div>
    
  );
};

