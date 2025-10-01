import React from 'react';
import styles from './BentoGrid.module.scss';
import BENTO_01 from '../../assets/BENTO_01.webp';
import BENTO_02 from '../../assets/BENTO_02.webp';
import BENTO_03 from '../../assets/BENTO_03.webp';
import BENTO_04 from '../../assets/BENTO_04.webp';
import BENTO_05 from '../../assets/BENTO_05.webp';
import BENTO_06 from '../../assets/BENTO_06.webp';

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  gridArea?: string;
  icon: string; // SVG иконка для услуги
}

export const BentoGrid: React.FC = () => {
  // Данные услуг из первого изображения
  const services: ServiceItem[] = [
    {
      id: 1,
      title: 'Экстренный и неотложный вызов',
      description: 'Выезд бригады к дому/офису, перевязки помощь, стабилизация состояния, госпитализация при необходимости.',
      image: BENTO_01,
      gridArea: 'area1',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-siren-icon lucide-siren"><path d="M7 18v-6a5 5 0 1 1 10 0v6"/><path d="M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z"/><path d="M21 12h1"/><path d="M18.5 4.5 18 5"/><path d="M2 12h1"/><path d="M12 2v1"/><path d="m4.929 4.929.707.707"/><path d="M12 12v6"/></svg>'
    },
    {
      id: 2,
      title: 'Перевозка лежачих больных',
      description: 'Носилки, каталка, мягкие фиксаторы, кресло-коляска. Перемещение пациентов с этажей, лежачих, больничных переводах.',
      image: BENTO_02,
      gridArea: 'area2',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-accessibility-icon lucide-accessibility"><circle cx="16" cy="4" r="1"/><path d="m18 19 1-7-6 1"/><path d="m5 8 3-3 5.5 3-2.36 3.5"/><path d="M4.24 14.5a5 5 0 0 0 6.88 6"/><path d="M13.76 17.5a5 5 0 0 0-6.88-6"/></svg>'
    },
    {
      id: 3,
      title: 'Врач/медсестра на дом',
      description: 'Осмотр, ЭКГ, капельницы, инъекции, перевязки, забор анализов.',
      image: BENTO_03,
      gridArea: 'area3',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-stethoscope-icon lucide-stethoscope"><path d="M11 2v2"/><path d="M5 2v2"/><path d="M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1"/><path d="M8 15a6 6 0 0 0 12 0v-3"/><circle cx="20" cy="10" r="2"/></svg>'
    },
    {
      id: 4,
      title: 'Реанимобиль (класс C)',
      description: 'Дефибриллятор, монитор, ИВЛ/кислород, бригада анестезиологов-реаниматологов + фельдшер.',
      image: BENTO_04,
      gridArea: 'area4',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-pulse-icon lucide-heart-pulse"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/><path d="M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27"/></svg>'
    },
    {
      id: 5,
      title: 'Дежурство на мероприятиях',
      description: 'Спортивные и корпоративные события, Медпост, бригада авто на площадке.',
      image: BENTO_05,
      gridArea: 'area5',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-plus-icon lucide-shield-plus"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M9 12h6"/><path d="M12 9v6"/></svg>'
    },
    {
      id: 6,
      title: 'Межгород и санитарная авиация',
      description: 'Дальние перевозки по РФ и СНГ, сопровождение на ЖД/Авиа. Организация медэвакуации.',
      image: BENTO_06,
      gridArea: 'area6',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plane-takeoff-icon lucide-plane-takeoff"><path d="M2 22h20"/><path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"/></svg>'
    },
  ];

  return (
    <div  id="services" className={styles.container}>
      <h2 className={styles.title}>Услуги</h2>
      <p className={styles.subtitle}>Круглосуточно по городу и между городами</p>
      <div className={styles.bentoGrid}>
        {services.map((service) => (
          <div 
            key={service.id} 
            className={styles.bentoItem} 
            style={{ gridArea: service.gridArea }}
          >
            <div className={styles.imageContainer}>
              <img src={service.image} alt={service.title} className={styles.image} />
              <div className={styles.overlay}>            
            <h3 className={styles.serviceTitle}>{service.title}</h3>
            <p className={styles.serviceDescription}>{service.description}</p>
            <div className={styles.icon} dangerouslySetInnerHTML={{ __html: service.icon }} />
          </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};