import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './TariffBlock.module.scss';

export interface TariffBlockProps {
    className?: string;
}

interface TariffCardProps {
    title: string;
    subtitle?: string;
    price: string;
    features: string[];
    highlighted?: boolean;
    className?: string;
}

interface RegionSwitchProps {
    isRegion: boolean;
    onChange: (isRegion: boolean) => void;
}

const TariffCard: React.FC<TariffCardProps> = ({ title, subtitle, price, features, highlighted = false, className }) => {
    return (
        <div className={classNames(styles.tariffCard, highlighted && styles.highlighted, className)}>
            <div className={styles.tariffHeader}>
                <h3 className={styles.tariffTitle}>{title}</h3>
                {subtitle && <p className={styles.tariffSubtitle}>{subtitle}</p>}
            </div>
            <div className={styles.tariffPrice}>
                <span className={styles.priceText}>{price}</span>
            </div>
            <ul className={styles.tariffFeatures}>
                {features.map((feature, index) => (
                    <li key={index} className={styles.tariffFeature}>
                        {feature}
                    </li>
                ))}
            </ul>
            <a href="https://wa.me/+79283001946" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
                <button className={styles.tariffButton}>Заказать</button>
            </a>
        </div>
    );
};

const RegionSwitch: React.FC<RegionSwitchProps> = ({ isRegion, onChange }) => {
    return (
        <div className={styles.switchContainer}>
            <span className={classNames(styles.switchLabel, !isRegion && styles.activeLabel)}>
                Москва
            </span>
            <label className={styles.switch}>
                <input
                    type="checkbox"
                    checked={isRegion}
                    onChange={(e) => onChange(e.target.checked)}
                />
                <span className={styles.slider}></span>
            </label>
            <span className={classNames(styles.switchLabel, isRegion && styles.activeLabel)}>
                Московская область
            </span>
        </div>
    );
};

export const TariffBlock: React.FC<TariffBlockProps> = ({ className }) => {
    const [isRegion, setIsRegion] = useState(false);
    
    const moscowTariffs = [
        {
            title: 'Стандарт',
            subtitle: 'Бригада врачей',
            price: 'от 3 900 ₽',
            features: [
                'Подача по городу',
                '30 мин работы включено',
                'Оборудование базового уровня'
            ]
        },
        {
            title: 'Комфорт',
            subtitle: 'Врач',
            price: 'от 5 900 ₽',
            features: [
                'Подача по городу',
                '40 мин работы включено',
                'Кислород, дефибриллятор'
            ],
            highlighted: true
        },
        {
            title: 'Реанимация',
            subtitle: 'Реаниматолог, анестезиолог',
            price: 'от 9 900 ₽',
            features: [
                'Подача по городу',
                '60 мин работы включено',
                'ИВЛ, дефибриллятор'
            ]
        }
    ];
    
    const regionTariffs = [
        {
            title: 'Стандарт',
            subtitle: 'Бригада врачей',
            price: 'от 4 900 ₽',
            features: [
                'Подача по области',
                '30 мин работы включено',
                'Оборудование базового уровня'
            ]
        },
        {
            title: 'Комфорт',
            subtitle: 'Врач',
            price: 'от 7 900 ₽',
            features: [
                'Подача по области',
                '40 мин работы включено',
                'Кислород, дефибриллятор'
            ],
            highlighted: true
        },
        {
            title: 'Реанимация',
            subtitle: 'Реаниматолог, анестезиолог',
            price: 'от 12 900 ₽',
            features: [
                'Подача по области',
                '60 мин работы включено',
                'ИВЛ, дефибриллятор'
            ]
        }
    ];
    
    const tariffs = isRegion ? regionTariffs : moscowTariffs;

    return (
        <div className={classNames(styles.container, className)} id="tariffs">
            <div className={styles.header}>
                <h2 className={styles.title}>Тарифы</h2>
                <p className={styles.subtitle}>Итоговая цена зависит от класса мед. состава бригады и расстояния.</p>
            </div>
            <RegionSwitch isRegion={isRegion} onChange={setIsRegion} />
            <div className={styles.tariffGrid}>
                {tariffs.map((tariff, index) => (
                    <TariffCard
                        key={index}
                        title={tariff.title}
                        subtitle={tariff.subtitle}
                        price={tariff.price}
                        features={tariff.features}
                        highlighted={tariff.highlighted}
                    />
                ))}
            </div>
        </div>
    );
};