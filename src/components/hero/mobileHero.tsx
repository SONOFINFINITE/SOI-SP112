import classNames from 'classnames';
import styles from './mobileHero.module.scss';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export interface MobileHeroProps {
    className?: string;
}

/**
 * Mobile and Tablet version of Hero component
 */
export const MobileHero = ({ className }: MobileHeroProps) => {
    const rootRef = useRef<HTMLDivElement>(null);
    const statusRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const buttonsRef = useRef<HTMLDivElement>(null);

    // We're completely removing the internal animation from MobileHero
    // All animation will be handled by App.tsx

    return (
        <div className={classNames(styles.root, className)} ref={rootRef}>
            <div className={styles.hero__content}>
                <div className={styles.div9} ref={statusRef}>
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
                    <div className={styles.div3} ref={contentRef}>
                        <div className={styles.titleContainer}>
                            <h2 className={styles.hero__text}>ЧАСТНАЯ СКОРАЯ ПОМОЩЬ 24/7</h2>
                        </div>
                        <div className={styles.div4}>
                            <p className={styles.p1}>
                                Бригады врачей и фельдшеров, реанимобили, кислород, мониторинг. Быстро, безопасно и официально.
                            </p>
                        </div>
                    </div>
                    <div className={styles.div5}>
                        <div className={styles.div6} ref={buttonsRef}>
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
                    </div>
                </div>
                <div className={styles.div1}></div>
            </div>
        </div>
    );
};