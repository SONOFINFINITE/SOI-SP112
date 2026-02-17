import React, { useMemo, useState } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';
import styles from './CallbackRequestForm.module.scss';

export interface CallbackRequestFormProps {
    className?: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

const LAST_SUBMIT_KEY = 'callback_last_submit';

export const CallbackRequestForm: React.FC<CallbackRequestFormProps> = ({ className }) => {
// ДАННЫЕ ТЕЛЕГРАММ БОТА И ЧАТА
    const BOT_TOKEN = '';
    const CHAT_ID = '';

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+7');
    const [phoneTouched, setPhoneTouched] = useState(false);
    const [dateTime, setDateTime] = useState('');
    const [isDateFocused, setIsDateFocused] = useState(false);
    const [comment, setComment] = useState('');
    const [agreement, setAgreement] = useState(false);
    const [status, setStatus] = useState<Status>('idle');
    const [isClosing, setIsClosing] = useState(false);

    const endpoint = useMemo(() => {
        return `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
    }, [BOT_TOKEN]);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.target.value;
        
        if (!/^[0-9+\-\s()]*$/.test(val)) {
            return;
        }

        if (!val.startsWith('+7')) {
            if (val.startsWith('7')) {
                val = '+' + val;
            } else if (val.startsWith('+')) {
                val = '+7' + val.substring(1);
            } else {
                val = '+7' + val;
            }
        }
        setPhone(val);
    };

    const isPhoneValid = useMemo(() => {
        const digits = phone.replace(/\D/g, '');
        return digits.length === 11 && digits.startsWith('7');
    }, [phone]);

    const canSubmit = agreement && isPhoneValid && status !== 'sending';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!canSubmit) return;

        const lastSubmit = localStorage.getItem(LAST_SUBMIT_KEY);
        if (lastSubmit) {
            const timeDiff = Date.now() - parseInt(lastSubmit, 10);
            if (timeDiff < 60000) {
                alert(`Пожалуйста, подождите ${Math.ceil((60000 - timeDiff) / 1000)} сек. перед повторной отправкой.`);
                return;
            }
        }

        let formattedTime = '';
        if (dateTime) {
            const parts = dateTime.split('-');
            if (parts.length === 3) {
                const [year, month, day] = parts;
                formattedTime = `${day}.${month}.${year}`;
            } else {
                formattedTime = dateTime;
            }
        }

        const text =
            `📞 <b>Новая заявка на обратный звонок</b>\n\n` +
            `👤 Имя: ${name.trim() || '—'}\n` +
            `📱 Телефон: ${phone.trim() || '—'}\n` +
            `⏰ Время: ${formattedTime || '—'}\n` +
            (comment.trim() ? `\n📝 Комментарий: ${comment.trim()}` : '');

        setStatus('sending');
        try {
            const res = await fetch(endpoint, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    chat_id: CHAT_ID,
                    text: text,
                    parse_mode: 'HTML',
                    disable_web_page_preview: true
                })
            });

            const result = (await res.json().catch(() => null)) as { ok?: boolean } | null | undefined;

            if (!res.ok || !result?.ok) {
                setStatus('error');
                return;
            }

            setStatus('success');
            localStorage.setItem(LAST_SUBMIT_KEY, Date.now().toString());
            setName('');
            setPhone('+7');
            setPhoneTouched(false);
            setDateTime('');
            setComment('');
            setAgreement(false);
        } catch {
            setStatus('error');
        }
    };

    const handleCloseModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            setStatus('idle');
            setIsClosing(false);
        }, 300);
    };

    return (
        <div className={classNames(styles.container, className)} id="callback-request">
            <h2 className={styles.title}>Обратный звонок</h2>
            <p className={styles.subtitle}>Оставьте контакты — мы перезвоним в удобное для вас время.</p>

            <div className={styles.cardWrapper}>
                <div className={styles.card}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="callback-name" className={styles.label}>
                                Ваше имя
                            </label>
                            <input
                                id="callback-name"
                                name="name"
                                type="text"
                                placeholder="Иван"
                                className={styles.input}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                autoComplete="name"
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="callback-phone" className={styles.label}>
                                Телефон
                            </label>
                            <input
                                id="callback-phone"
                                name="phone"
                                type="tel"
                                placeholder="+7 (___) ___-__-__"
                                className={classNames(styles.input, {
                                    [styles.inputError]: phoneTouched && !isPhoneValid
                                })}
                                value={phone}
                                onChange={handlePhoneChange}
                                onBlur={() => setPhoneTouched(true)}
                                autoComplete="tel"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="callback-datetime" className={styles.label}>
                                Когда позвонить (дата)
                            </label>
                            <div
                                className={styles.datePickerWrapper}
                                onClick={() => {
                                    const input = document.getElementById('callback-datetime') as HTMLInputElement;
                                    if (input) {
                                        input.focus();
                                        if ('showPicker' in input) {
                                            try {
                                                (input as any).showPicker();
                                            } catch (e) {
                                                // ignore
                                            }
                                        }
                                    }
                                }}
                            >
                                <input
                                    id="callback-datetime"
                                    name="datetime"
                                    type="date"
                                    className={classNames(styles.input, {
                                        [styles.hasValue]: dateTime || isDateFocused
                                    })}
                                    value={dateTime}
                                    onChange={(e) => setDateTime(e.target.value)}
                                    onFocus={() => setIsDateFocused(true)}
                                    onBlur={() => setIsDateFocused(false)}
                                />
                                {!dateTime && !isDateFocused && (
                                    <span className={styles.datePlaceholder}>ДД.ММ.ГГГГ</span>
                                )}
                            </div>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="callback-comment" className={styles.label}>
                                Комментарий (необязательно)
                            </label>
                            <textarea
                                id="callback-comment"
                                name="comment"
                                placeholder="Например: позвонить после 14:00 или вопрос по нашим услугам"
                                className={classNames(styles.input, styles.textarea)}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                rows={3}
                            />
                        </div>

                        <div className={styles.formCheckbox}>
                            <input
                                type="checkbox"
                                id="callback-agreement"
                                name="agreement"
                                checked={agreement}
                                onChange={(e) => setAgreement(e.target.checked)}
                                className={styles.checkbox}
                            />
                            <label htmlFor="callback-agreement" className={styles.checkboxLabel}>
                                Согласен с{' '}
                                <a href="#" className={styles.policyLink}>
                                    политикой обработки данных
                                </a>
                            </label>
                        </div>

                        <button type="submit" className={styles.submitButton} disabled={!canSubmit} data-status={status}>
                            {status === 'sending'
                                ? 'Отправляем...'
                                : status === 'success'
                                  ? 'Заявка отправлена'
                                  : status === 'error'
                                    ? 'Ошибка, повторить'
                                    : 'Отправить заявку'}
                        </button>
                    </form>
                </div>
            </div>

            {status === 'success' && createPortal(
                <div className={classNames(styles.modalOverlay, { [styles.exiting]: isClosing })} onClick={handleCloseModal}>
                    <div className={classNames(styles.modalContent, { [styles.exiting]: isClosing })} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modalIcon}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                        </div>
                        <h3 className={styles.modalTitle}>Заявка отправлена!</h3>
                        <p className={styles.modalText}>Мы свяжемся с вами в ближайшее время для уточнения деталей.</p>
                        <button className={styles.modalButton} onClick={handleCloseModal}>
                            Отлично
                        </button>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};
