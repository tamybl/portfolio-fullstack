import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: '"tamybl.1ws.cl"',
    href: 'https://tamybl.1ws.cl',
  },
  {
    social: 'email',
    link: '"contacto@1ws.cl"',
    href: 'mailto:contacto@1ws.cl',
  },
  {
    social: 'github',
    link: '"tamybl"',
    href: 'https://github.com/tamybl',
  },
  {
    social: 'linkedin',
    link: '"tamara-bravo-liberona"',
    href: 'https://www.linkedin.com/in/tamara-bravo-liberona/',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
      const <span className={styles.className}> socials =</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ,
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
