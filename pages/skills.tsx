import styles from '@/styles/SkillsPage.module.css';
import skills from '@/data/skills';
import { SkillType } from '@/data/skills';
import SkillCard from '@/components/SkillCard';

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
        <div className={styles.subtitle}>A lo largo de mi trayectoria como desarrolladora, he trabajado con una variedad de tecnologías y herramientas que me permiten crear soluciones funcionales, escalables y centradas en el usuario. Aquí encontrarás una selección organizada de los lenguajes, frameworks, plataformas y herramientas que domino.</div>

        <div className={styles.aboutContent}>
        {Object.entries(groupedSkills).map(([type, group]) => (
          <section className={styles.section} key={type}>
            <h2 className={styles.sectionTitle}>
              {type === 'Development' && 'Desarrollo'}
              {type === 'Applications' && 'Aplicaciones'}
              {type === 'Management' && 'Gestión'}
              {type === 'Software' && 'Software'}
            </h2>

            <div className={styles.skillsContent}>
              {group.map((skill, index) => (
                <SkillCard
                  key={index}
                  skill={skill}
                />
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
