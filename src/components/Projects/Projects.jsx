import React from 'react'
import ProjectCard from './Projectcard';
 

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl text-white font-bold">
            <div className="py-12 px-8 flex flex-wrap gap-5">
                <ProjectCard
                title="Web App from sentry at IITGN" 
                main="this is a bloggin website created in next Js and used some component library"
                />
                <ProjectCard 
                title="Compiler for a Custom made programming language" 
                main="this is a bloggin website created in next Js and used some component library"
                />
                <ProjectCard 
                title="Phone Directory Data base at IITGN"
                main= "Developed a Phone directory data base using Mysql and developed a web page using HTML, CSS and java script"
                />
            </div>
        </h1>
    </div>
  )
}

export default Projects;