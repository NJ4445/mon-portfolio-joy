// Skills.jsx
import React from 'react';
import styles from './Skills.module.css';
import { FaHtml5, FaJs, FaReact, FaSass } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: 'HTML & CSS', className: 'htmlCss', level: 80, description: 'Expérience solide en création de sites web responsives.' },
    { name: 'JavaScript', className: 'javaScript', level: 75, description: 'Connaissance approfondie des concepts modernes.' },
    { name: 'React', className: 'react', level: 85, description: 'Expérience dans le développement d\'applications SPA.' },
    { name: 'Sass', className: 'sass', level: 70, description: 'Utilisation de Sass pour des styles modulaires.' },
    { name: 'Responsive Design', className: 'responsiveDesign', level: 90, description: 'Compétence dans la création d\'interfaces adaptatives.' },
  ];

  return (
    <div id="skills" className={styles.skills}> 
      <h3>Mes Compétences</h3>
      <ul className={styles.skillsList}>
        {skills.map((skill, index) => (
          <li key={index} className={styles[skill.className]}>
            <div className={styles.skillIcon}>
              {skill.name === 'HTML & CSS' && <FaHtml5 />}
              {skill.name === 'JavaScript' && <FaJs />}
              {skill.name === 'React' && <FaReact />}
              {skill.name === 'Sass' && <FaSass />}
            </div>
            <span className={styles.skillName}>{skill.name}</span>
            <p className={styles.skillDescription}>{skill.description}</p>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: `${skill.level}%` }}>
                <span className={styles.progressText}>{skill.level}%</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
