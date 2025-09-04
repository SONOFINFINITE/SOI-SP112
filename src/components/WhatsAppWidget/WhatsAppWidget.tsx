import React, { useState, useEffect } from 'react';
import styles from './WhatsAppWidget.module.scss';

export interface WhatsAppWidgetProps {
    phoneNumber: string;
    className?: string;
}

export const WhatsAppWidget: React.FC<WhatsAppWidgetProps> = ({ 
    phoneNumber = '+79999999999',
    className 
}) => {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    const handleWhatsAppClick = () => {
        window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}`, '_blank');
    };

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
    };

    return (
        <div className={styles.widgetContainer}>
            <button 
                className={styles.whatsappButton} 
                onClick={handleWhatsAppClick}
                aria-label="Написать в WhatsApp"
            >
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.whatsappIcon}
                >
                    <path 
                        d="M20.4054 3.5875C18.1607 1.3425 15.1714 0.0675 11.9946 0.0675C5.4375 0.0675 0.0964286 5.40857 0.0964286 12.0107C0.0964286 14.1375 0.664286 16.2 1.75714 18.0054L0 24L6.15 22.275C7.88571 23.2714 9.91607 23.7964 11.9893 23.7964H11.9946C18.5464 23.7964 24 18.4554 24 11.8532C24 8.67643 22.65 5.8325 20.4054 3.5875ZM11.9946 21.7875C10.2107 21.7875 8.46429 21.2839 6.96429 20.3411L6.60714 20.1214L2.86071 21.1607L3.91607 17.5125L3.67500 17.1375C2.63571 15.5732 2.08929 13.8161 2.08929 12.0107C2.08929 6.50893 6.49286 2.07643 12 2.07643C14.6411 2.07643 17.1214 3.14464 19.0071 5.03036C20.8929 6.91607 21.9107 9.39643 21.9071 11.8532C21.9071 17.3607 17.4964 21.7875 11.9946 21.7875ZM17.4214 14.5179C17.1214 14.3679 15.6643 13.6554 15.3857 13.5589C15.1071 13.4625 14.9036 13.4143 14.7 13.7196C14.4964 14.025 13.9286 14.6839 13.7464 14.8929C13.5643 15.1018 13.3821 15.1232 13.0821 14.9732C12.7821 14.8232 11.8179 14.5071 10.6714 13.4893C9.77143 12.6964 9.15 11.7161 8.96786 11.4107C8.78571 11.1054 8.94643 10.9339 9.1125 10.7732C9.25714 10.6286 9.43929 10.3929 9.60357 10.2107C9.76786 10.0286 9.81429 9.9 9.91071 9.69643C10.0071 9.49286 9.96071 9.31071 9.88929 9.16071C9.81786 9.01071 9.19286 7.55357 8.94643 6.94286C8.7 6.35357 8.45357 6.42857 8.25714 6.42857C8.075 6.42857 7.87143 6.40714 7.66786 6.40714C7.46429 6.40714 7.13571 6.47857 6.85714 6.78393C6.57857 7.08929 5.81786 7.80179 5.81786 9.25893C5.81786 10.7161 6.87857 12.1196 7.04286 12.3232C7.20714 12.5268 9.14643 15.5357 12.1286 16.8214C12.8357 17.1268 13.3929 17.3089 13.8214 17.4482C14.5286 17.6786 15.1714 17.6464 15.6857 17.575C16.2536 17.4964 17.4214 16.8643 17.6679 16.1571C17.9143 15.45 17.9143 14.8393 17.8429 14.7214C17.7714 14.6036 17.5679 14.5393 17.2679 14.3893L17.4214 14.5179Z" 
                        fill="white"
                    />
                </svg>
            </button>
            
            {isMobile && (
                <button 
                    className={styles.phoneButton} 
                    onClick={handlePhoneClick}
                    aria-label="Позвонить"
                >
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                        className={styles.phoneIcon}
                    >
                        <path
                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="none"
                        />
                    </svg>
                </button>
            )}
        </div>
    );
};