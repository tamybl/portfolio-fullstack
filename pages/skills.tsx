import styles from '@/styles/AboutPage.module.css';
import Image from 'next/image';
import skills from '@/data/skills';
import { SkillType } from '@/data/skills';

const groupedSkills: Record<SkillType, typeof skills> = {
  Development: [],
  Applications: [],
  Management: [],
  Software: [],
};

skills.forEach((skill) => {
  groupedSkills[skill.type as SkillType].push(skill);
});

const SkillsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Conocimientos</h1>
        <div className={styles.subtitle}>Tecnologías y herramientas que domino</div>

        <div className={styles.aboutContent}>
          {Object.entries(groupedSkills).map(([type, skills]) => (
            <section className={styles.section} key={type}>
              <h2 className={styles.sectionTitle}>
                {type === 'development' && 'Desarrollo'}
                {type === 'applications' && 'Aplicaciones'}
                {type === 'management' && 'Gestión'}
              </h2>

              <div className={styles.skillsGrid}>
                {skills.map((skill, index) => (
                  <div key={index} className={styles.skillItem}>
                    {skill.icon ? (
                      <i className={`${skill.icon} ${styles.skillIcon}`} />
                    ) : (
                    <Image
                      src={skill.img ?? '/images/skills/default.svg'}
                      alt={skill.title}
                      width={48}
                      height={48}
                      className={styles.skillImg}
                    />
                    )}
                    <span className={styles.skillTitle}>{skill.title}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Skills' },
  };
}

export default SkillsPage;
