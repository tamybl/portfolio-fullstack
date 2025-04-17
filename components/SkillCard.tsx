import Image from 'next/image';

import { Skill } from '@/types';

import styles from '@/styles/SkillCard.module.css';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
        {skill.icon ? (
        <i className={`${skill.icon} ${styles.icon}`} title={skill.title}></i>
      ) : skill.img ? (
        <Image
          src={skill.img}
          alt={skill.title}
          width={48}
          height={48}
          className={styles.icon}
        />
      ) : null}
        </div>
        <h3 className={styles.title}>{skill.title}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
