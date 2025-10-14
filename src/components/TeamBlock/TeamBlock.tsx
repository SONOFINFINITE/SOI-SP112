import React from 'react';
import styles from './TeamBlock.module.scss';

interface TeamBlockProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
}

const TeamBlock: React.FC<TeamBlockProps> = ({
  title = 'Наша команда',
  subtitle = 'Профессионализм и забота',
  imageAlt = 'Команда профессионалов',
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.teamBlock}>
        <div className={styles.textContent}>
          <div className={styles.header}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
          </div>
          <div className={styles.description}>
            <p>Наша <span className={styles.highlight}>профессиональная </span>команда обеспечит вашу <span className={styles.highlight}>безопасную</span> и <span className={styles.highlight}>комфортную</span> поездку до нужной точки. Все условия соблюдены для вашего <span className={styles.highlight}>удобства</span></p>
          </div>
        </div>
      </div>
      <div className={styles.imageContent}>
        <img src='/TEAM.jpg' alt={imageAlt} className={styles.teamImage} />
      </div>
    </section>
  );
};

export default TeamBlock;