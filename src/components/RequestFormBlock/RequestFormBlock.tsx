import React, { useState } from 'react';
import classNames from 'classnames';
import styles from './RequestFormBlock.module.scss';
// Icons for features
import { FiClock, FiFileText, FiCreditCard } from 'react-icons/fi';
// Icons for contact buttons
import { FiPhone, FiMail } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export interface RequestFormBlockProps {
    className?: string;
}

export const RequestFormBlock: React.FC<RequestFormBlockProps> = ({ className }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        pickupAddress: '',
        destinationAddress: '',
        comment: '',
        agreement: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        
        if (type === 'checkbox') {
            const target = e.target as HTMLInputElement;
            setFormData({
                ...formData,
                [name]: target.checked
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    return (
        <div className={classNames(styles.container, className)} id="request-form">
            <div className={styles.formWrapper}>
                <div className={styles.formInfo}>
                    <h2 className={styles.title}>Закажите перевозку или вызов</h2>
                    <p className={styles.subtitle}>Оставьте заявку — оператор свяжется с вами в течение нескольких минут.</p>
                    
                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <FiClock className={styles.featureIcon} />
                            <span>Круглосуточно</span>
                        </div>
                        <div className={styles.feature}>
                            <FiFileText className={styles.featureIcon} />
                            <span>Работаем по договору</span>
                        </div>
                        <div className={styles.feature}>
                            <FiCreditCard className={styles.featureIcon} />
                            <span>Оплата картой/безналом/наличными</span>
                        </div>
                    </div>

                    <div className={styles.contactButtons}>
                        <button className={styles.contactButton}>
                            <FiPhone className={styles.contactIcon} />
                            <span>Позвонить</span>
                        </button>
                        <button className={styles.contactButton}>
                            <FaWhatsapp className={styles.contactIcon} />
                            <span>WhatsApp</span>
                        </button>
                        <button className={styles.contactButton}>
                            <FiMail className={styles.contactIcon} />
                            <span>E-mail</span>
                        </button>
                    </div>
                    
                    <p className={styles.note}>* Время подачи зависит от дорожной ситуации.</p>
                </div>
                
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name" className={styles.label}>Ваше имя</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Иван"
                            className={styles.input}
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Телефон</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="+7 (___) ___-__-__"
                                className={styles.input}
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <label htmlFor="datetime" className={styles.label}>Дата и время</label>
                            <input
                                type="datetime-local"
                                id="datetime"
                                name="date"
                                className={styles.input}
                                value={formData.date}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    
                    <div className={styles.formRow}>
                        <div className={styles.formGroup}>
                            <label htmlFor="pickupAddress" className={styles.label}>Адрес подачи</label>
                            <input
                                type="text"
                                id="pickupAddress"
                                name="pickupAddress"
                                placeholder="Введите адрес подачи"
                                className={classNames(styles.input, styles.routeInput)}
                                value={formData.pickupAddress}
                                onChange={handleChange}
                            />
                        </div>
                        
                        <div className={styles.formGroup}>
                            <label htmlFor="destinationAddress" className={styles.label}>Адрес назначения</label>
                            <input
                                type="text"
                                id="destinationAddress"
                                name="destinationAddress"
                                placeholder="Введите адрес назначения"
                                className={classNames(styles.input, styles.routeInput)}
                                value={formData.destinationAddress}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    
                    <div className={styles.formGroup}>
                        <label htmlFor="comment" className={styles.label}>Комментарий</label>
                        <textarea
                            id="comment"
                            name="comment"
                            placeholder="Состояние пациента, этаж, лифт и др."
                            className={classNames(styles.textarea, styles.commentInput)}
                            value={formData.comment}
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className={styles.formCheckbox}>
                        <input
                            type="checkbox"
                            id="agreement"
                            name="agreement"
                            checked={formData.agreement}
                            onChange={handleChange}
                            className={styles.checkbox}
                        />
                        <label htmlFor="agreement" className={styles.checkboxLabel}>
                            Согласен с <a href="#" className={styles.policyLink}>политикой обработки данных</a>
                        </label>
                    </div>
                    
                    <button type="submit" className={styles.submitButton} disabled={!formData.agreement}>
                        Отправить заявку
                    </button>
                </form>
            </div>
        </div>
    );
};