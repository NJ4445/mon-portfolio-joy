// Contact.jsx
import React from 'react';
import styles from './Contact.module.css';
import { FaEnvelope, FaDownload } from 'react-icons/fa'; 

function Contact({
  email = "ndoumathe.email@example.com", 
  cvLink = "/path/to/votre-cv.pdf", 
  customClass = ""
}) {
  return (
    <section id="contact" className={`${styles.contact} ${customClass}`}>
      <h2>Contactez-moi</h2>
      <div className={styles.contactCard}>
        <div className={styles.contactInfo}>
          <FaEnvelope className={styles.icon} />
          <p>
            Mon adresse email : <a href={`mailto:${email}`}>{email}</a>
          </p>
        </div>
        <a href={cvLink} className={styles.cvButton} download>
          <FaDownload className={styles.icon} />
          Télécharger mon CV
        </a>
      </div>
    </section>
  );
}

export default Contact;
