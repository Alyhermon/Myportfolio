'use client';

import { useState } from 'react'; // Importa desde 'react'
import Link from 'next/link';
import styles from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">My Portfolio</Link>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
      <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/aboutme">Sobre mi</Link>
        </li>
        <li>
          <Link href="/projectss">Proyectos</Link>
        </li>
        <li>
          <Link href="/experiencies">Experiencia</Link>
        </li>
        <li>
          <Link href="/contacts">Contactarme</Link>
        </li>
      </ul>
    </nav>
  );
}