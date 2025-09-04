import React from 'react';
import classNames from 'classnames';
import Marquee from 'react-fast-marquee';
import styles from './TestimonialsMarquee.module.scss';

export interface TestimonialsMarqueeProps {
    className?: string;
}

interface TestimonialItemProps {
    text: string;
    author: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ text, author }) => {
    return (
        <div className={styles.testimonial_item}>
            <p className={styles.testimonial_text}>"{text}"</p>
            <p className={styles.testimonial_author}>— {author}</p>
        </div>
    );
};

/**
 * Компонент бегущей строки с отзывами клиентов
 */
export const TestimonialsMarquee: React.FC<TestimonialsMarqueeProps> = ({ className }) => {
    // Массив с отзывами клиентов
    const testimonials = [
        {
            text: "Спасибо бригаде! Быстро приехали, аккуратно спустили маму с 5 этажа, довезли до больницы. Всё на высшем уровне.",
            author: "Анна К."
        },
        {
            text: "Заказывали межгород. В салоне чисто, мониторинг весь путь, сделали остановки по просьбе. Рекомендую.",
            author: "Максим П."
        },
        {
            text: "Дежурили на турнире: профессионально, дисциплинированно, закрыли все требования организатора.",
            author: "Олег Н."
        }
    ];

    return (
        <div id="reviews" className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <h2 className={styles.title}>Отзывы клиентов</h2>
                <p className={styles.subtitle}>Нам доверяют</p>
                <div className={styles.marquee_wrapper}>
                    <Marquee
                        gradient={false}
                        speed={20}
                        pauseOnHover={true}
                        pauseOnClick={true}
                        className={styles.marquee_container}
                    >
                        <div className={styles.marquee_content}>
                            {testimonials.map((testimonial, index) => (
                                <TestimonialItem
                                    key={index}
                                    text={testimonial.text}
                                    author={testimonial.author}
                                />
                            ))}
                            {/* Дублируем элементы для непрерывности */}
                            {testimonials.map((testimonial, index) => (
                                <TestimonialItem
                                    key={`duplicate-${index}`}
                                    text={testimonial.text}
                                    author={testimonial.author}
                                />
                            ))}
                        </div>
                    </Marquee>
                </div>
            </div>
        </div>
    );
};
