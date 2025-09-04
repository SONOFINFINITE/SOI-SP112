import classNames from 'classnames';
import styles from './hero.module.scss';

export interface HeroProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Hero = ({ className }: HeroProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.hero__content}>
                <div className={styles.div9}>
                    <div className={styles.div7}>
                        <div className={styles.div8} />
                        <p className={styles.p2}>Свободные машины сейчас</p>
                    </div>
                    <div className={styles.div7}>
                        <div className={classNames(styles.div8, styles.grey)} />
                        <p className={styles.p2}>время подачи: 10-15 минут</p>
                    </div>
                </div>
                <div className={styles.div2}>
                    <h2 className={classNames(styles.hero__text, styles.secondline)}>ЧАСТНАЯ</h2>
                    <div className={styles.div3}>
                        <div className={styles.titleWithCross}>
                            <h2 className={styles.hero__text}> СКОРАЯ ПОМОЩЬ</h2>
                            <div className={styles.medCrossContainer}>
                                <img src="../../assets/HERO_CROSS.png" alt="3D Medical Cross" className={styles.medCross} />
                            </div>
                        </div>
                        <div className={styles.div4}>
                            <p className={styles.p1}>
                                Бригады врачей и фельдшеров, реанимобили, кислород, мониторинг. Быстро, безопасно и официально.
                            </p>
                        </div>
                    </div>
                    <div className={styles.div5}>
                        <div className={styles.div6}>
                            <a href="https://wa.me/79999999999" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <button className={styles.button1}>
                                    ОФОРМИТЬ ПЕРЕВОЗКУ
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </a>
                            <a href="tel:+79999999999" style={{ textDecoration: 'none' }}>
                                <button className={classNames(styles.button1, styles.transparentButton)}>
                                    <h2 className={styles.header2}>ПОЗВОНИТЬ СЕЙЧАС</h2>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                                            stroke="#1d4ed8"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            </a>
                        </div>
                        <h2 className={classNames(styles.header1, styles.alignRight)}>
                            ПЕРЕВОЗКА ПАЦИЕНТОВ <span style={{ color: '#1d4ed8' }}>24/7</span>
                        </h2>
                    </div>
                </div>
                <div className={styles.div1}></div>
            </div>
        </div>
    );
};
