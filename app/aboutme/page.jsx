import styles from './About.module.css'

export default function AboutmePage(){
    return (

        <div className={styles.container}>
        <h1 className={styles.title}>About Mei</h1>
        <p className={styles.description}>
          Hi! I'm Aly, a passionate web developer with a love for coding, creativity, and continuous learning. My journey in tech began with a curiosity for how things work and has since evolved into a career filled with exciting challenges and projects.
        </p>
        <p className={styles.description}>
          I specialize in frontend development, crafting visually appealing and user-friendly websites. When I'm not coding, you can find me exploring new technologies, attending tech meetups, or sharing my knowledge with others in the community.
        </p>
        <p className={styles.description}>
          Let's connect and create something amazing together!
        </p>

        <p className={styles.description}>
    A lo largo de mi trayectoria profesional, he adquirido experiencia significativa
    en el Analisis y desarrollo de soluciones tecnológicas, incluyendo la
    modificación e integración de mejoras para aplicaciones. Mi formación
    académica me han proporcionado una base sólida en desarrollo y el
    aseguramiento de la calidad del software.</p>

    <p className={styles.description}>
    Responsable de asegurar que los productos y servicios desarrollados por la
    empresa cumplan con los estándares de calidad establecidos. Esto incluye la
    planificación, diseño, implementación y ejecución de pruebas para identificar
    problemas de software, así como la colaboración con equipos de desarrollo para
    garantizar la resolución eficiente de defectos.
    </p>
    </div>
    
    );
}