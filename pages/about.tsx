import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Tamara Bravo</h1>
        <div className={styles.subtitle}>Fullstack Developer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
            Desarrolladora fullstack con base en frontend y especialización en backend. A lo largo de mi carrera, descubrí en la programación una forma de expandir mi creatividad, resolver problemas complejos y crear herramientas que realmente impacten la vida de las personas.
            </p>
            <p className={styles.paragraph}>
            Me apasiona construir soluciones integrales, desde interfaces amigables hasta arquitecturas backend robustas, aplicando buenas prácticas, diseño limpio y patrones de integración modernos. Disfruto aprender nuevas tecnologías, trabajar en equipo y enfrentar desafíos con una mentalidad curiosa y proactiva.
            </p>
            <p className={styles.paragraph}>Actualmente, complemento mi experiencia frontend con estudios formales de <span className={styles.highlight}>Ingeniería en Informática</span>.</p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experiencia</h2>
            <p className={styles.paragraph}>
            Actualmente trabajo en <span className={styles.highlight}>2Brains</span>, prestando servicios para <span className={styles.highlight}>Banchile Inversiones</span>, un portal público que permite a los usuarios aprender sobre el mercado financiero y gestionar sus inversiones de forma eficiente y segura. He participado activamente en la implementación de nuevas funcionalidades, la optimización del rendimiento del sitio y la mejora continua de la experiencia de usuario, contribuyendo a una plataforma más ágil, accesible y centrada en las necesidades del cliente.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Más allá del código</h2>
            <p className={styles.paragraph}>
              Me gusta la música, canto y toco el piano, tengo un proyecto musical llamado <span className={styles.highlight}>Temporal Silhouettes</span>. Me gusta leer, ver películas y series. Me gusta aprender cosas nuevas y compartir lo que sé. Me gusta escribir sobre crecimiento personal y desarrollo profesional. Tambien estoy encargada del area digital para <span className={styles.highlight}>SERVITC</span> una empresa de mantenimiento industrial de la cual soy socia y co-fundadora desde el 2023.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
