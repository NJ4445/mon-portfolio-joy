// Header.jsx
import React, { useEffect, useState, useCallback } from 'react';
import styles from './Header.module.css';

function Header({ title = "Joy Ndoumathe", links = [] }) {
  const [activeSection, setActiveSection] = useState('home');  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // useCallback pour stabiliser la fonction
  const handleScrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      updateUrl(id);  // Met à jour l'URL
    }
    setIsMenuOpen(false); 
  }, []);

  const updateUrl = (id) => {
    const newUrl = `${window.location.origin}/#${id}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
  };

  const updateActiveSection = useCallback(() => {
    const sections = links.map(link => document.getElementById(link.id));
    const scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section, index) => {
      if (section && section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        setActiveSection(links[index].id);
      }
    });
  }, [links]);

  useEffect(() => {
    window.addEventListener('scroll', updateActiveSection);

    // Appele handleScrollToSection avec la section par défaut 'home'
    handleScrollToSection('home');

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, [updateActiveSection, handleScrollToSection]); // Ajout handleScrollToSection comme dépendance

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <h1>{title}</h1>
        </div>
        <button 
          className={styles.menuButton} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
        <ul className={`${styles.navLinks} ${isMenuOpen ? styles.open : ''}`}>
          <li>
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection('home');
              }}
              className={activeSection === 'home' ? styles.active : ''}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleScrollToSection('home');
                }
              }}
              tabIndex="0" 
              aria-current={activeSection === 'home' ? 'page' : undefined}
            >
              Accueil
            </a>
          </li>
          {links.length > 0 ? (
            links.map((link, index) => (
              <li key={index}>
                <a 
                  href={`#${link.id}`} 
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollToSection(link.id);
                  }}
                  className={activeSection === link.id ? styles.active : ''}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleScrollToSection(link.id);
                    }
                  }}
                  tabIndex="0" 
                  aria-current={activeSection === link.id ? 'page' : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))
          ) : (
            <>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleScrollToSection('about'); }} className={activeSection === 'about' ? styles.active : ''}>À propos</a></li>
              <li><a href="#projects" onClick={(e) => { e.preventDefault(); handleScrollToSection('projects'); }} className={activeSection === 'projects' ? styles.active : ''}>Projets</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleScrollToSection('contact'); }} className={activeSection === 'contact' ? styles.active : ''}>Contact</a></li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
