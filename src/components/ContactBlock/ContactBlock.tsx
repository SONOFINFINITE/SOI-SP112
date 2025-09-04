import React from 'react';
import styles from './ContactBlock.module.scss';
import CONTACT_MAP from '../../assets/CONTACT_MAP.png';
import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';

export interface ContactBlockProps {
  className?: string;
}

export const ContactBlock: React.FC<ContactBlockProps> = ({ className }) => {
  return (
    <div id="contacts" className={styles.container}>
      <h2 className={styles.title}>Контакты</h2>
      <p className={styles.subtitle}>Круглосуточная связь для экстренных вызовов</p>
      
      <div className={styles.contactWrapper}>
        <div className={styles.contactInfo}>
          <div className={styles.contactCard}>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <FiPhone className={styles.icon} />
                </div>
                <div className={styles.contactContent}>
                  <h3 className={styles.contactLabel}>Телефон:</h3>
                  <p className={styles.contactValue}>+7 999 999 99 99</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <FiMail className={styles.icon} />
                </div>
                <div className={styles.contactContent}>
                  <h3 className={styles.contactLabel}>E-mail:</h3>
                  <p className={styles.contactValue}>info@example-ambulance.ru</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <FiMapPin className={styles.icon} />
                </div>
                <div className={styles.contactContent}>
                  <h3 className={styles.contactLabel}>Адрес офиса:</h3>
                  <p className={styles.contactValue}>г. Москва, ул. Примерная, 1</p>
                </div>
              </div>
              
              <div className={styles.contactItem}>
                <div className={styles.iconWrapper}>
                  <FiClock className={styles.icon} />
                </div>
                <div className={styles.contactContent}>
                  <h3 className={styles.contactLabel}>Время работы:</h3>
                  <p className={styles.contactValue}>круглосуточно, без выходных</p>
                </div>
              </div>
            </div>
            
            <div className={styles.contactButtons}>
              <a href="tel:+79999999999" style={{ textDecoration: 'none' }}>
                <button className={`${styles.contactButton} ${styles.callButton}`}>
                  <FiPhone className={styles.buttonIcon} />
                  <span>Позвонить сейчас</span>
                </button>
              </a>
              <a
                href="https://wa.me/79999999999"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <button className={styles.contactButton}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.buttonIcon}
                  >
                    <path
                      d="M7 17L17 7M17 7H7M17 7V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Оформить перевозку</span>
                </button>
              </a>
            </div>
          </div>
        </div>
        
        <div className={styles.mapContainer}>
          <div className={styles.mapOverlay}>
            <div className={styles.mapPin}>
              <div className={styles.mapPinDot}></div>
              <div className={styles.mapPinRipple}></div>
            </div>
            <div className={styles.mapInfo}>
              <h3 className={styles.mapTitle}>Наш офис</h3>
              <p className={styles.mapAddress}>г. Москва, ул. Примерная, 1</p>
            </div>
          </div>
          <img src={CONTACT_MAP} alt="Карта расположения офиса" className={styles.mapImage} />
        </div>
      </div>
    </div>
  );
};