import Tab from '@/components/Tab';

import styles from '@/styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="images/logos/react_icon.svg" filename="inicio.tsx" path="/" />
      <Tab icon="images/logos/html_icon.svg" filename="perfil.html" path="/about" />
      <Tab
        icon="images/logos/json_icon.svg"
        filename="conocimientos.json"
        path="/skills"
      />
      <Tab icon="images/logos/js_icon.svg" filename="proyectos.js" path="/projects" />
      <Tab icon="images/logos/css_icon.svg" filename="contacto.css" path="/contact" />
      <Tab
        icon="images/logos/markdown_icon.svg"
        filename="github.md"
        path="/github"
      />
    </div>
  );
};

export default Tabsbar;
