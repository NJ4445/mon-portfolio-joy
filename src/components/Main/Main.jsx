// Main.jsx
import React from 'react';
import { Link } from 'react-scroll'; 
import styles from './Main.module.css';
import mainImage from '../../assets/img/header.jpg';

function Main() {
  return (
    <main id="home" className={styles.main}>
      <div className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Bienvenue sur mon portfolio</h1>
          <p>Je suis <strong>Joy Ndoumathe</strong>, développeur web passionné.</p>
          <Link
            to="skills" 
            smooth={true}
            duration={500}
            offset={-80} 
            className={styles.ctaButton}
          >
            Découvrez mes compétences
          </Link>
        </div>
        <div className={styles.heroImage}>
          <img src={mainImage} alt="Bannière principale du portfolio" />
        </div>
      </div>
    </main>
  );
}

export default Main;
