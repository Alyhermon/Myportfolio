import Head from 'next/head';
import styles from './contacts.module.css';
import Navbar from '../components/navbar';

export default function ContactosPage(){
    return (

        <div className={styles.container}>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.logo}>Alina M. Hermon Castro</div>
          <Navbar/>
        </header>
  
        <div className={styles.contactSection}>
      <h2>Contactarme</h2>
      <form className={styles.contactForm}>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo Electrónico" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </div>
    </div>
  );
}
