'use client';
import { useState, useEffect, useRef } from 'react';
import styles from '@/styles/home.module.css';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Header from '@/components/Header';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactRef = useRef(null);

  const toggleMenu = () => {
    setIsContactOpen(prev => !prev);
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (contactRef.current && !contactRef.current.contains(e.target)) {
        setIsContactOpen(false);
      }
    }

    if (isContactOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isContactOpen]);

  return (
    <main className={styles.container}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
      </main>

      <footer className={styles.footer}>
        <div ref={contactRef}>
          {isContactOpen && (
            <Contact className={`${styles.contactBtn} ${styles.showContacts}`} />
          )}

          <div className={styles.contactBtn} onClick={toggleMenu}>
            Contact
          </div>
        </div>
      </footer>
    </main>
  );
}
