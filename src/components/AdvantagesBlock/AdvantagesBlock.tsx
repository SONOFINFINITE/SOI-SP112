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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase-medical-icon lucide-briefcase-medical"><path d="M12 11v4"/><path d="M14 13h-4"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><path d="M18 6v14"/><path d="M6 6v14"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>
            ),
            title: 'Сертифицированные бригады',
            description: 'Врачи с опытом 5+ лет. Регулярные тренинги ACLS.'
        },
        {
            id: '02',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1d4ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-square-activity-icon lucide-square-activity"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/></svg>
            ),
            title: 'Качественное оборудование',
            description: 'ИВЛ, кислородный шкаф, вакуумные матрасы, носилки до 10 типов.'
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