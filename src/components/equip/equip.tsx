import classNames from 'classnames';
import styles from './equip.module.scss';
import { useState, useEffect, useCallback } from 'react';

// Импортируем изображения
import OSN_01 from '../../assets/OSN_01.jpg';
import OSN_02 from '../../assets/OSN_02.webp';
import OSN_03 from '../../assets/OSN_03.jpg';

export interface EquipProps {
    className?: string;
}

interface SlideData {
    id: number;
    image: any; // Для импортированных изображений
    title: string;
    subtitle: string;
}

const slides: SlideData[] = [
    {
        id: 1,
        image: OSN_01,
        title: 'РЕАНИМОБИЛЬ КЛАССА С',
        subtitle: 'ИВЛ, монитор-дефибриллятор, кислород'
    },
    {
        id: 2,
        image: OSN_02,
        title: 'НОСИЛКИ И КАТАЛКА',
        subtitle: 'Носилки, каталка, вакуумные шины, спинальный щит'
    },
    {
        id: 3,
        image: OSN_03,
        title: 'МЕДОБОРУДОВАНИЕ',
        subtitle: 'Шприцевые насосы, ЭКГ, расходные материалы'
    }
];

export const Equip = ({ className }: EquipProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Функция для перехода к следующему слайду
    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, []);

    // Функция для перехода к предыдущему слайду
    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, []);

    // Автоматическое переключение слайдов
    useEffect(() => {
        let slideInterval: NodeJS.Timeout;

        if (!isPaused) {
            slideInterval = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        return () => {
            if (slideInterval) {
                clearInterval(slideInterval);
            }
        };
    }, [isPaused, nextSlide]);

    return (
        <div id="equipment" className={classNames(styles.eq__section, className)} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
            <div className={styles.div1}>
                <h2 className={styles['eq__section-heading']}>ОСНАЩЕНИЕ</h2>
                <p className={styles['eq__section-subheading']}>Широкий спектр медоборудования уровня стационара</p>
            </div>
            <div className={styles['eq_slider-wrapper']}>
                <div className={styles.slider__container}>
                    {slides.map((slide, index) => (
                        <div key={slide.id} className={classNames(styles.slider__slide, index === currentSlide ? styles.active : '')}>
                            <div
                                className={styles.slider__img}
                                style={{
                                    backgroundImage: `url(${slide.image})`
                                }}
                            >
                                <div className={styles.slider__overlay}>
                                    <div className={styles['eq__section-content-wrapper']}>
                                        <div className={styles['eq__slider-content-wrapper']}>
                                            <h2 className={styles.header1}>{slide.title}</h2>
                                            <p className={styles.slide_subheading}>{slide.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Навигационные стрелки */}
                <button className={classNames(styles.slider__arrow, styles.slider__arrow_prev)} onClick={prevSlide} aria-label="Предыдущий слайд">
                    &lt;
                </button>
                <button className={classNames(styles.slider__arrow, styles.slider__arrow_next)} onClick={nextSlide} aria-label="Следующий слайд">
                    &gt;
                </button>

                {/* Индикаторы слайдов */}
                <div className={styles.slider__indicators}>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={classNames(styles.slider__indicator, index === currentSlide ? styles.active : '')}
                            onClick={() => setCurrentSlide(index)}
                            aria-label={`Перейти к слайду ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
