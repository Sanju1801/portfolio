'use client';
import { useState, useEffect } from 'react';
import styles from '@/styles/home.module.css';
import ThemeToggle from './Theme_toggle';
import { Menu, X } from 'lucide-react';
import DownloadButton from './Download-button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); 
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    return (
        <header className={styles.header}>
        
        <div className={styles.menuIcon} onClick={toggleMenu}>
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ''}`}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#education">Education</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </nav>
        <div className={`${styles.actions} ${isMenuOpen ? styles.showMenu : ''}`}>

          <DownloadButton />
          <ThemeToggle />
        </div>
      </header>
    )
}