'use client';
import Link from 'next/link'

import { useState } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#">Alina M. Hermon Castro</a>
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.navLinksOpen : ''}`}>
          <li>
              <Link href="/">Inicio</Link>
          </li>
          <li>
              <Link href="/aboutme">Sobre mi</Link>
          </li>
          <li>
              <Link href="/experiencies">Experiencias</Link>
          </li>
          <li>
              <Link href="/Projectss">Proyectos</Link>
          </li>
          <li>
              <Link href="/#">Formacion</Link>
          </li>
          <li>
              <Link href="/contacts">Contactarme</Link>
          </li>
      </ul>
    </nav>
  );
}
