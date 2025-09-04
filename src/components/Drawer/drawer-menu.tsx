import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './drawer-menu.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToElement } from '../../utils/gsapUtils';

export interface DrawerMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({ isOpen, onClose }) => {
    const scrollPositionRef = useRef(0);
    const bodyRef = useRef<HTMLElement | null>(null);
    const location = useLocation();
    const navigate = useNavigate();
    const isCatalogPage = location.pathname.includes('/catalog') || 
                         (location.pathname.includes('/collections') && location.pathname !== '/collections');

    useEffect(() => {
        // Получаем ссылку на body для последующего использования
        bodyRef.current = document.body;
        
        const disableScroll = () => {
            // Сохраняем текущую позицию скролла
            scrollPositionRef.current = window.pageYOffset;
            
            // Добавляем стили для блокировки скролла, но сохраняем визуальное положение
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            
            if (bodyRef.current) {
                bodyRef.current.style.overflow = 'hidden';
                bodyRef.current.style.paddingRight = `${scrollbarWidth}px`;
                // Важно: НЕ меняем position, чтобы контент оставался на месте
            }
        };
        
        const enableScroll = () => {
            if (bodyRef.current) {
                bodyRef.current.style.overflow = '';
                bodyRef.current.style.paddingRight = '';
            }
        };
        
        if (isOpen) {
            disableScroll();
        } else {
            enableScroll();
        }
        
        return () => {
            enableScroll();
        };
    }, [isOpen]);

    return (
        <div className={classNames(
            styles.drawer, 
            isOpen && styles.drawer_open,
            isCatalogPage && styles.drawer_dark
        )}>
            <div className={styles.drawer__overlay} onClick={onClose}></div>
            <div className={styles.drawer__content}>
                <div className={styles.drawer__header}>
                    <div className={styles.drawer__logo}>
                        LOGO
                    </div>
                    <button className={styles.drawer__close} onClick={onClose} aria-label="Close menu">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>
                <nav className={styles.drawer__nav}>
                    <ul>
                        <li>
                            <a href="#services" onClick={(e) => {
                                e.preventDefault();
                                onClose();
                                if (isCatalogPage) {
                                    navigate('/', { state: { scrollToId: 'services' } });
                                } else {
                                    scrollToElement('#services', 1, 0);
                                }
                            }}>УСЛУГИ</a>
                        </li>
                        <li>
                            <a href="#benefits" onClick={(e) => {
                                e.preventDefault();
                                onClose();
                                if (isCatalogPage) {
                                    navigate('/', { state: { scrollToId: 'benefits' } });
                                } else {
                                    scrollToElement('#benefits', 1, 0);
                                }
                            }}>ПРЕИМУЩЕСТВА</a>
                        </li>
                        <li>
                            <a href="#tariffs" onClick={(e) => {
                                e.preventDefault();
                                onClose();
                                if (isCatalogPage) {
                                    navigate('/', { state: { scrollToId: 'tariffs' } });
                                } else {
                                    scrollToElement('#tariffs', 1, 0);
                                }
                            }}>ТАРИФЫ</a>
                        </li>
                        <li>
                            <a href="#equipment" onClick={(e) => {
                                e.preventDefault();
                                onClose();
                                if (isCatalogPage) {
                                    navigate('/', { state: { scrollToId: 'equipment' } });
                                } else {
                                    scrollToElement('#equipment', 1, 0);
                                }
                            }}>ОСНАЩЕНИЕ</a>
                        </li>
                        <li>
                            <a href="#reviews" onClick={(e) => {
                                e.preventDefault();
                                onClose();
                                if (isCatalogPage) {
                                    navigate('/', { state: { scrollToId: 'reviews' } });
                                } else {
                                    scrollToElement('#reviews', 1, 0);
                                }
                            }}>ОТЗЫВЫ</a>
                        </li>
                        <li>
                            <a href="#contacts" onClick={(e) => {
                                e.preventDefault();
                                onClose();
                                if (isCatalogPage) {
                                    navigate('/', { state: { scrollToId: 'contacts' } });
                                } else {
                                    scrollToElement('#contacts', 1, 0);
                                }
                            }}>КОНТАКТЫ</a>
                        </li>
                    </ul>
                </nav>
                <div className={styles.drawer__footer}>
                    <div className={styles.drawer__social}>
                        <div className={styles.drawer__social_icons}>
                            <div className={styles.drawer__contact}>
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={styles.svg2}
                                >
                                    <path
                                        d="M22.6 24C19.8222 24 17.0778 23.3944 14.3667 22.1833C11.6556 20.9722 9.18889 19.2556 6.96667 17.0333C4.74444 14.8111 3.02778 12.3444 1.81667 9.63333C0.605556 6.92222 0 4.17778 0 1.4C0 1 0.133333 0.666667 0.4 0.4C0.666667 0.133333 1 0 1.4 0H6.8C7.11111 0 7.38889 0.105556 7.63333 0.316667C7.87778 0.527778 8.02222 0.777778 8.06667 1.06667L8.93333 5.73333C8.97778 6.08889 8.96667 6.38889 8.9 6.63333C8.83333 6.87778 8.71111 7.08889 8.53333 7.26667L5.3 10.5333C5.74444 11.3556 6.27222 12.15 6.88333 12.9167C7.49444 13.6833 8.16667 14.4222 8.9 15.1333C9.58889 15.8222 10.3111 16.4611 11.0667 17.05C11.8222 17.6389 12.6222 18.1778 13.4667 18.6667L16.6 15.5333C16.8 15.3333 17.0611 15.1833 17.3833 15.0833C17.7056 14.9833 18.0222 14.9556 18.3333 15L22.9333 15.9333C23.2444 16.0222 23.5 16.1833 23.7 16.4167C23.9 16.65 24 16.9111 24 17.2V22.6C24 23 23.8667 23.3333 23.6 23.6C23.3333 23.8667 23 24 22.6 24Z"
                                        fill="currentColor"
                                    />
                                </svg>
                                <div className={styles['contact-content__wrapper']}>
                                    <a href="tel:+79999999999" className={styles.drawer__phone}>
                                    +7 999 999 99 99
                                    </a>
                                    <p className={styles.p1}>круглосуточно, без выходных</p>
                                </div>
                            </div>
                            <div className={styles.div2}>
                                <a href="https://wa.me/79999999999" target="_blank" rel="noopener noreferrer">
                                    <svg className={styles.whatsapp_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="30px" height="30px">    
                                        <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DrawerMenu;
