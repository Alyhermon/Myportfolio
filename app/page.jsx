'use client';

import styles from './home.module.css';
import Head from 'next/head';
import Navbar from './components/navbar';

export default function HomePage() {
  return(

    <div className={styles.container}>
      <Head>
        <title>Alina M. Hermon Castro - Desarrolladora Web Front-End</title>
        <meta name="description" content="Portafolio de Alina Marina Hermon castro, desarrolladora web front-end." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        <div className={styles.hero}>
          <h1>Hola! Soy <span className={styles.name}>Alina Hermon</span></h1>
          <h2>Ingeniera de Software</h2>
          <p>
            Egresada de la carrera de Desarrollo de Software ITLA, Actualmente culmino mis estudios en la universidad UNAPEC
            como Ingeniera de Software, enfocada al Desarrollo Web. 
            
          </p>
          <div className={styles.buttons}>
            <a href="#" className={styles.button}>Descargar CV</a>
            <a href="#" className={styles.button}>Contacto</a>
          </div>
        </div>
      </main>
    </div>
  );
}

