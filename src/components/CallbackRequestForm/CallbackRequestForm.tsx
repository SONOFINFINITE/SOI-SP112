import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import styles from './CallbackRequestForm.module.scss';

export interface CallbackRequestFormProps {
  className?: string;
}

type Status = 'idle' | 'sending' | 'success' | 'error';

export const CallbackRequestForm: React.FC<CallbackRequestFormProps> = ({ className }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [comment, setComment] = useState('');
  const [agreement, setAgreement] = useState(false);
  const [status, setStatus] = useState<Status>('idle');

  const endpoint = useMemo(() => {
    return `https://api.telegram.org/bot8526564376:AAGFcKY_GM4_ZYPYYpHQaBUkKopZDXailJA/sendMessage`;
  }, []);

  const canSubmit = agreement && phone.trim().length > 0 && status !== 'sending';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    // Format date from YYYY-MM-DDThh:mm to DD.MM.YYYY hh:mm
    let formattedTime = '';
    if (dateTime) {
      const [datePart, timePart] = dateTime.split('T');
      if (datePart && timePart) {
        const [year, month, day] = datePart.split('-');
        formattedTime = `${day}.${month}.${year} ${timePart}`;
      } else {
        formattedTime = dateTime;
      }
    }

    const text = `📞 <b>Новая заявка на обратный звонок</b>\n\n` +
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
          chat_id: '1140402008',
          text: text,
          parse_mode: 'HTML',
          disable_web_page_preview: true
        })
      });

      const result = (await res.json().catch(() => null)) as
        | { ok?: boolean }
        | null
        | undefined;

      if (!res.ok || !result?.ok) {
        setStatus('error');
        return;
      }

      setStatus('success');
      setName('');
      setPhone('');
      setDateTime('');
      setComment('');
      setAgreement(false);
      window.setTimeout(() => setStatus('idle'), 2500);
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className={classNames(styles.container, className)} id="callback-request">
      <h2 className={styles.title}>Обратный звонок</h2>
      <p className={styles.subtitle}>Оставьте контакты — мы перезвоним в ближайшее время.</p>

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
                className={styles.input}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                autoComplete="tel"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="callback-datetime" className={styles.label}>
                Когда позвонить
              </label>
              <input
                id="callback-datetime"
                name="datetime"
                type="datetime-local"
                className={styles.input}
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="callback-comment" className={styles.label}>
                Комментарий (необязательно)
              </label>
              <textarea
                id="callback-comment"
                name="comment"
                placeholder="Удобно говорить после 18:00..."
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

            <button
              type="submit"
              className={styles.submitButton}
              disabled={!canSubmit}
              data-status={status}
            >
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
    </div>
  );
};

