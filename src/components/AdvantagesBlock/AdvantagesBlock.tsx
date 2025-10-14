import React from 'react';
import styles from './AdvantagesBlock.module.scss';

export interface AdvantagesBlockProps {
    className?: string;
}

interface AdvantageItem {
    id: string;
    icon: React.ReactNode;
    title: string;
    description: string;
}

export const AdvantagesBlock: React.FC<AdvantagesBlockProps> = ({ className }) => {
    const advantages: AdvantageItem[] = [
        {
            id: '01',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24">
                    <image xlinkHref="data:image/png;base64,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" x="0" y="0" width="24" height="24"/>
                  </svg>
            ),
            title: 'Опытные экипажи',
            description: 'Ассистенты-перевозчики с опытом 5+ лет. Регулярные тренинги.'
        },
        {
            id: '02',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-activity-icon lucide-square-activity"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/></svg>
            ),
            title: 'Качественное оборудование',
            description: 'Вакуумные матрасы, носилки до 10 типов.'
        },
        {
            id: '03',
            icon: (
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-badge-percent-icon lucide-badge-percent"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m15 9-6 6"/><path d="M9 9h.01"/><path d="M15 15h.01"/></svg>
            ),
            title: 'Прозрачные тарифы',
            description: 'Фиксированная стоимость поездки + помощь/км. Документальная тарификация.'
        },
        {
            id: '04',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake-icon lucide-heart-handshake"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0a2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0a2 2 0 0 1 0-2.828l2.823-2.762"/></svg>
            ),
            title: 'Безнал и договор',
            description: 'Юр. лицам — закрывающие документы, РКО/счет с ДДС.'
        }
    ];

    return (
        <div className={styles.container} id="benefits">
            <h2 className={styles.title}>Почему выбирают нас</h2>
            <h2 className={styles.subtitle}>Внимание к деталям</h2>
            
            <div className={styles.processGrid}>
                {advantages.map((item) => (
                    <div key={item.id} className={styles.processItem}>
                        <div className={styles.stepNumber}>{item.icon}</div>
                        <div className={styles.stepContent}>
                            <h3 className={styles.stepTitle}>{item.title}</h3>
                            <p className={styles.stepDescription}>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};