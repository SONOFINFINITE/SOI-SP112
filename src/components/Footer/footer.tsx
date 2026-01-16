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
                        <a href="#benefits" onClick={(e) => handleSmoothScroll(e, '#benefits')}>ПРЕИМУЩЕСТВА</a>
                    </li>
                    <li>
                        <a href="#tariffs" onClick={(e) => handleSmoothScroll(e, '#tariffs')}>ТАРИФЫ</a>
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
                        Мы не являемся медицинской организацией и не оказываем медицинские услуги.
                    </div>
                    <div className={styles.footer__social}>
                        <a href="https://t.me/+79283001946" target="_blank" rel="noopener noreferrer" className={styles.social__link}>
                            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50px" height="50px">
                                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
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
                            г. Москва, станция метро "Нагатинский затон"
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
