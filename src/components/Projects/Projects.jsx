// Projets.jsx
import React from 'react';
import styles from './Projects.module.css';
import kasaImage from '../../assets/img/kasa-image.webp';
import ninaImage from '../../assets/img/nina-image.webp';
import ohmyfoodImage from '../../assets/img/ohmyfood-image.webp';


const projects = [
  { 
    name: "Kasa", 
    description: "Application front-end pour annonces immobilières, utilisant React, React Router, Sass, et animations CSS.", 
    link: "https://brilliant-twilight-bbcb7c.netlify.app",
    skills: ["React", "React Router", "CSS Modules", "Sass", "Animations CSS", "Responsive Design"],
    image: kasaImage
  },
  { 
    name: "Nina_Carducci", 
    description: "Projet axé sur l'optimisation des performances et de l'accessibilité, avec des outils comme Lighthouse et Wave.", 
    link: "https://nj4445.github.io/Nina_Carducci/",
    skills: ["React", "JavaScript", "HTML", "CSS", "Lighthouse", "Wave"],
    image: ninaImage
  },
  { 
    name: "Ohmyfood", 
    description: "Intégration mobile-first avec animations CSS et gestion des versions via Git et GitHub.", 
    link: "https://nj4445.github.io/ohmyfood/",
    skills: ["React", "Sass", "API Integration", "Animations CSS", "Git", "GitHub"],
    image: ohmyfoodImage
  },
];

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Mes Projets</h2>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <img src={project.image} alt={`${project.name} preview`} className={styles.projectImage} />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.link} className={styles.projectLink} target="_blank" rel="noopener noreferrer">Voir le projet</a>
            <ul className={styles.skillsList}>
              {project.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className={`${styles.skillItem} ${styles[skill.replace(/\s+/g, '').toLowerCase()]}`}>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}


export default Projects;
