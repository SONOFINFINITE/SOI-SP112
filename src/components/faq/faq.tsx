import { useState } from 'react';
import classNames from 'classnames';
import styles from './faq.module.scss';

export interface FaqProps {
    className?: string;
}

interface FaqItem {
    question: string;
    answer: string;
}

const faqData: FaqItem[] = [
    {
        question: 'ЭТО ОФИЦИАЛЬНАЯ МЕДИЦИНСКАЯ ПОМОЩЬ?',
        answer: 'Да. У нас есть лицензия на медицинскую деятельность, договор и чек.'
    },
    {
        question: 'ВЫ ЗАМЕНЯЕТЕ 112?',
        answer: 'Нет. В случае угрозы жизни — всегда вызывайте 112/103. Мы предоставляем платные услуги и плановые перевозки.'
    },
    {
        question: 'МОЖНО ЛИ ОПЛАТИТЬ ПО БЕЗНАЛУ?',
        answer: 'Да, принимаем карты, СБП и безналичный расчёт для юр. лиц.'
    },
    {
        question: 'РАБОТАЕТЕ ПО ДМС?',
        answer: 'Да, при наличии направления от страховой.'
    }
];

export const Faq = ({ className }: FaqProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div id="faq" className={classNames(styles.root, className)}>
            <div className={styles.faq__wrapper}>
                <h2 className={styles.__section_heading}>Вопросы и ответы</h2>
                <p className={styles.subtitle}>Ответы на самые распространенные вопросы о нашей работе</p>
                <div className={styles.faq__accordion}>
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className={classNames(styles.faq__item, {
                                [styles.active]: activeIndex === index
                            })}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className={styles.faq__question}>
                                <span>{item.question}</span>
                                <div className={styles.faq__icon}></div>
                            </div>
                            <div className={styles.faq__answer}>
                                <p>{item.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
