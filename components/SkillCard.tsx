import Image from 'next/image';

import { Skill } from '@/types';

import styles from '@/styles/ProjectCard.module.css';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard = ({ skill }: SkillCardProps) => {
  return (
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <Image
            src={skill.img ?? '/images/skills/default.svg'}
            alt={skill.title}
            width={48}
            height={48}
            className={styles.skillImg}
          />
        </div>
        <h3 className={styles.title}>{skill.title}</h3>
      </div>

  );
};

export default SkillCard;
