import React from 'react';
import style from "./Project.module.css"
import projects from "../../data/projects.json";
import { ProjectCard } from './ProjectCard';


export const Projects = () => {
  return (
   <section id='projects' className={style.container}>
        <h2 className={style.title}>Projects</h2>
        <div className={style.projects}>
            {projects.map((project,id) => {
                return <ProjectCard key={id} project={project}/>;
            })}
        </div>
   
        </section>

  );
};



