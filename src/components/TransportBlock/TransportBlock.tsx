import React from 'react';
import styles from './TransportBlock.module.scss';
import { FaCarSide, FaMapMarkerAlt } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

export const TransportBlock: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.transportWrapper}>
        <div className={styles.transportCard}>
          <div className={styles.transportContent}>
            <h2 className={styles.title}>ТРАНСПОРТИРОВКА</h2>
            <p className={styles.subtitle}>
              Организуем медицинскую транспортировку пациентов
            </p>
            
            <div className={styles.transportFeatures}>
              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
              <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{fontSize: "inherit", width: "30px", height: "30px"}} className={styles.icon}><path d="M10 10H6"/><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14"/><path d="M8 8v4"/><path d="M9 18h6"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
                </div>
                <div className={styles.featureContent}>
                  <span className={styles.featureLabel}>Специализированный транспорт</span>
                  <span className={styles.featureValue}>Реанимобиль класса С со всем необходимым оборудованием</span>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  <FaMapMarkerAlt className={styles.icon} />
                </div>
                <div className={styles.featureContent}>
                  <span className={styles.featureLabel}>Широкая география перевозок</span>
                  <span className={styles.featureValue}>В Москву и из Москвы в любой регион РФ</span>
                </div>
              </div>
            </div>
            
            <div className={styles.transportButtons}>
              <a href="tel:+74951234567" className={`${styles.transportButton} ${styles.callButton}`}>
                <FiPhone className={styles.buttonIcon} />
                <span>Позвонить</span>
              </a>
              <a href="https://wa.me/+79283001946" className={styles.transportButton}>
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
                <span>Заказать транспортировку</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransportBlock;