import ContactCode from '@/components/ContactCode';

import styles from '@/styles/ContactPage.module.css';

const ContactPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Contáctame</h1>
      <p className={styles.pageSubtitle}>
      Estoy siempre abierta a nuevas oportunidades, colaboraciones y conexiones.
      No dudes en escribirme a través de cualquiera de las plataformas que encontrarás a continuación.
      </p>
      <div className={styles.container}>
        <div className={styles.contactContainer}>
          <ContactCode />
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
