'use client';
import { useState } from 'react';
import styles from '@/styles/home.module.css';
import ThemeToggle from './Theme_toggle';
import { Menu, X } from 'lucide-react';
import DownloadButton from './Download-button';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {isMenuOpen && (
        <button
          className={styles.backdrop}
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        />
      )}

      <header className={styles.header}>
        <div className={styles.menuIcon} onClick={() => setIsMenuOpen(prev => !prev)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.showMenu : ''}`}>
          <ul>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a></li>
            <li><a href="#education" onClick={() => setIsMenuOpen(false)}>Education</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          </ul>
        </nav>

        <div className={`${styles.actions} ${isMenuOpen ? styles.showMenu : ''}`}>
          <DownloadButton />
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}