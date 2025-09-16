import React from 'react';
import classNames from 'classnames';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import styles from './footer.module.scss';
import { scrollToElement } from '../../utils/gsapUtils';
import LOGO from '../../assets/LOGO_W.png'

export interface FooterProps {
    className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
    const location = useLocation();
    const navigate = useNavigate();
    
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/', { state: { scrollToId: id.replace('#', '') } });
        } else {
            scrollToElement(id, 1, 0);
        }
    };
    
    return (
        <footer className={classNames(styles.footer, styles.footer_light, className)}>
            <div className={styles.footer__nav}>
                <ul className={styles.footer__navlist}>
                    <li>
                        <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')}>УСЛУГИ</a>
                    </li>
                    <li>
                        <a href="#benefits" onClick={(e) => handleSmoothScroll(e, '#benefits')}>ПРЕИМУЩЕСТВА</a>
                    </li>
                    <li>
                        <a href="#tariffs" onClick={(e) => handleSmoothScroll(e, '#tariffs')}>ТАРИФЫ</a>
                    </li>
                    <li>
                        <a href="#autopark" onClick={(e) => handleSmoothScroll(e, '#equipment')}>ОСНАЩЕНИЕ</a>
                    </li>
                    <li>
                        <a href="#reviews" onClick={(e) => handleSmoothScroll(e, '#reviews')}>ОТЗЫВЫ</a>
                    </li>
                    <li>
                        <a href="#contacts" onClick={(e) => handleSmoothScroll(e, '#contacts')}>КОНТАКТЫ</a>
                    </li>
                </ul>
            </div>
            
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__left}>
                    <div className={styles.footer__logo}>
                        <a href="/" className={styles.footer__logoLink}>
                            <img src={LOGO} alt="logo" className={styles.footer__logo} />
                        </a>
                    </div>
                    <div className={styles.footer__description}>
                        Платные услуги скорой помощи и перевозка пациентов. Работаем 24/7.
                    </div>
                    <div className={styles.footer__social}>
                        <a href="https://wa.me/+79283001946" target="_blank" rel="noopener noreferrer" className={styles.social__link}>
                            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px">
                                <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className={styles.footer__right}>
                    <div className={styles.contact__info}>
                        <p className={styles.contact__address}>
                            <span className={styles.contact__icon}>
                                <FiMapPin />
                            </span>
                            г. Москва, станция метро "Дубровка"
                        </p>
                        <p className={styles.contact__email}>
                            <span className={styles.contact__icon}>
                                <FiMail />
                            </span>
                            mail@medprime24.ru
                        </p>
                        <p className={styles.contact__phone}>
                            <span className={styles.contact__icon}>
                                <FiPhone />
                            </span>
                            +7 928 300 19 46
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.footer__bottom}>
                <div className={styles.footer__copyright}>
                    <p>MED PRIME © {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    );
};
