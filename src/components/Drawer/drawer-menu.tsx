import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import styles from './drawer-menu.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToElement } from '../../utils/gsapUtils';
import LOGO from '../../assets/LOGO.png'

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
                     <img src={LOGO} alt="logo" className={styles.drawer__logo} />
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
                                    <a href="tel:+79283001946" className={styles.drawer__phone}>
                                    +7 (928) 300 19 46
                                    </a>
                                    <p className={styles.p1}>круглосуточно, без выходных</p>
                                </div>
                            </div>
                            <div className={styles.div2}>
                                <a href="https://t.me/+79283001946" target="_blank" rel="noopener noreferrer">
                                    <svg className={styles.whatsapp_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px" fill="white">    
                                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
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
