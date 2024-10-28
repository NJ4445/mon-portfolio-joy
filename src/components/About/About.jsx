// About.jsx
import React from 'react';
import styles from './About.module.css';
import aboutImage from '../../assets/img/about.jpg';

function About({
  title = "À propos de moi",
  description = `Je suis <strong>Joy Ndoumathe</strong>, un <strong>développeur web</strong> passionné par la création
        d’expériences web captivantes et interactives. Diplômé d'<strong>OpenClassrooms</strong> en 2024,
        j'ai acquis des <strong>compétences solides</strong> pour offrir des solutions web innovantes et optimisées.
        Mon parcours inclut une <strong>formation approfondie en développement web</strong>, axée sur
        l'<strong>intégration web</strong> et le <strong>développement front-end</strong>.`,
  image = aboutImage,
}) {
  return (
    <section id="about" className={styles.about}>
      <h2>{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: description }} />
      <img src={image} alt="Portrait de Joy Ndoumathe" className={styles.aboutImage} />
    </section>
  );
}

export default About;
