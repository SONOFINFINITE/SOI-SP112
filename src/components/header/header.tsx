import classNames from 'classnames';
import styles from './header.module.scss';
import { useState, useEffect } from 'react';
import { DrawerMenu } from '../Drawer/drawer-menu';
import { scrollToElement } from '../../utils/gsapUtils';
import LOGO from '../../assets/LOGO.png'

export interface HeaderProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Header = ({ className }: HeaderProps) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={classNames(styles.header__wrapper, className)}>
          <img src={LOGO} alt="logo" className={styles.header__logo} />
            <ul className={styles.header_navlist}>
                <li>
                    <a href="#services" onClick={(e) => {
                        e.preventDefault();
                        scrollToElement('#services', 1, 0);
                    }}>УСЛУГИ</a>
                </li>
                <li>
                    <a href="#benefits" onClick={(e) => {
                        e.preventDefault();
                        scrollToElement('#benefits', 1, 0);
                    }}>ПРЕИМУЩЕСТВА</a>
                </li>
                <li>
                    <a href="#tariffs" onClick={(e) => {
                        e.preventDefault();
                        scrollToElement('#tariffs', 1, 0);
                    }}>ТАРИФЫ</a>
                </li>
                <li>
                    <a href="#equipment" onClick={(e) => {
                        e.preventDefault();
                        scrollToElement('#equipment', 1, 0);
                    }}>ОСНАЩЕНИЕ</a>
                </li>
                <li>
                    <a href="#reviews" onClick={(e) => {
                        e.preventDefault();
                        scrollToElement('#reviews', 1, 0);
                    }}>ОТЗЫВЫ</a>
                </li>
                <li>
                    <a href="#contacts" onClick={(e) => {
                        e.preventDefault();
                        scrollToElement('#contacts', 1, 0);
                    }}>КОНТАКТЫ</a>
                </li>
            </ul>
            <a href="tel:+79283001946" className={classNames(styles['header__cta-btn'], styles['desktop_cta'], styles['phone-container'])} style={{ textDecoration: 'none' }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles['phone-icon']}>
                    <path
                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <div className={styles['phone-info']}>
                    <span className={styles['phone-number']}>+7 (928) 300-19-46</span>
                    <span className={styles['phone-text']}>Круглосуточно без выходных</span>
                </div>
            </a>
            <div className={classNames(styles.burger, { [styles.active]: menuOpen })} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <DrawerMenu isOpen={menuOpen} onClose={toggleMenu} />
        </div>
    );
};
