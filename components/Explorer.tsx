import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { VscChevronRight } from 'react-icons/vsc';

import styles from '@/styles/Explorer.module.css';

const explorerItems = [
  {
    name: 'inicio.tsx',
    path: '/',
    icon: 'images/logos/react_icon.svg',
  },
  {
    name: 'perfil.html',
    path: '/about',
    icon: 'images/logos/html_icon.svg',
  },
  {
    name: 'conocimientos.json',
    path: '/skills',
    icon: 'images/logos/json_icon.svg',
  },
  {
    name: 'proyectos.js',
    path: '/projects',
    icon: 'images/logos/js_icon.svg',
  },
  {
    name: 'contacto.css',
    path: '/contact',
    icon: 'images/logos/css_icon.svg',
  },
  {
    name: 'github.md',
    path: '/github',
    icon: 'images/logos/markdown_icon.svg',
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <VscChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item) => (
            <Link href={item.path} key={item.name}>
              <div className={styles.file}>
                <Image src={item.icon} alt={item.name} height={18} width={18} />{' '}
                <p>{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
