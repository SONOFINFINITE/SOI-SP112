import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/header/header';
import styles from './App.module.scss';
import { Hero } from './components/hero/hero';
import { MobileHero } from './components/hero/mobileHero';
import { MarqueeIcons } from './components/MarqueeIcons/MarqueeIcons';
import { BentoGrid } from './components/BentoGrid/BentoGrid';
import { AdvantagesBlock } from './components/AdvantagesBlock/AdvantagesBlock';
import { TariffBlock } from './components/TariffBlock/TariffBlock';
import { TestimonialsMarquee } from './components/TestimonialsMarquee/TestimonialsMarquee';
import { Equip } from './components/equip/equip';
import { Faq } from './components/faq/faq';
import { RequestFormBlock } from './components/RequestFormBlock/RequestFormBlock';
import { ContactBlock } from './components/ContactBlock/ContactBlock';
import { TransportBlock } from './components/TransportBlock/TransportBlock';
import { Footer } from './components/Footer/footer';
import { WhatsAppWidget } from './components/WhatsAppWidget/WhatsAppWidget';
import { gsap } from 'gsap';
import { animateElementsOnLoad } from './utils/gsapUtils';
import { AnimateOnScroll } from './components/AnimateOnScroll/AnimateOnScroll';

const App: React.FC = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const appRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 768);
            setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1280);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    // Page load animations
    useEffect(() => {
        // Initial animation for the header
        gsap.from('.header__wrapper', {
            y: -50,
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        });

        // Animate hero section with a more detailed animation for mobile/tablet
        if (isMobile || isTablet) {
            // For mobile/tablet, animate the container first
            const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });
            
            // Set initial states
            gsap.set('.mobileHero', { opacity: 1 }); // Make container visible
            gsap.set('.mobileHero .root', { opacity: 1 }); // Make root visible
            
            // Hide the background image initially
            gsap.set('.mobileHero [class*="div1"]', { opacity: 0 });
            
            // Set initial states for child elements
            gsap.set([
                '.mobileHero [class*="div9"]',
                '.mobileHero [class*="div3"]',
                '.mobileHero [class*="div6"]'
            ], {
                opacity: 0,
                y: 20
            });
            
            // Animate elements sequentially
            tl.from('.mobileHero', {
                opacity: 0,
                y: 30,
                duration: 0.2,
                clearProps: 'all'
            })
            .to('.mobileHero [class*="div9"]', {
                opacity: 1,
                y: 0,
                duration: 0.6
            })
            .to('.mobileHero [class*="div3"]', {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, "-=0.3") // Start slightly before previous animation ends
            .to('.mobileHero [class*="div6"]', {
                opacity: 1,
                y: 0,
                duration: 0.6
            }, "-=0.3") // Start slightly before previous animation ends
            .to('.mobileHero [class*="div1"]', {
                opacity: 1,
                duration: 0.8
            }, "-=0.2"); // Animate background image last, with slight overlap
        } else {
            // For desktop, use simpler animation
            gsap.from('.hero', {
                opacity: 0,
                y: 30,
                duration: 1,
                delay: 0.3,
                ease: 'power2.out',
                clearProps: 'all'
            });
        }

        // Animate the rest of the sections with staggered delay
        const sections = [
            '.bentoGrid',
            '.advantagesBlock',
            '.tariffBlock',
            '.equip',
            '.testimonialsMarquee',
            '.requestFormBlock',
            '.contactBlock',
            '.transportBlock',
            '.faq'
        ];

        // Add animation classes to sections for scroll animations
        sections.forEach(section => {
            const elements = document.querySelectorAll(section);
            if (elements.length > 0) {
                elements.forEach(el => {
                    el.classList.add('animate-on-scroll');
                });
            }
        });
    }, [isMobile, isTablet]);

    return (
        <div className={styles.div1} ref={appRef}>
            <Header />
            {isMobile || isTablet ? (
                <div className="mobileHero">
                    <MobileHero />
                </div>
            ) : (
                <div className="hero">
                    <Hero />
                </div>
            )}
            <MarqueeIcons />
            
            <AnimateOnScroll className="bentoGrid">
                <BentoGrid />
            </AnimateOnScroll>
            
            <AnimateOnScroll className="advantagesBlock">
                <AdvantagesBlock />
            </AnimateOnScroll>
            
            <AnimateOnScroll className="tariffBlock">
                <TariffBlock />
            </AnimateOnScroll>
            
            <AnimateOnScroll className="equip">
                <Equip />
            </AnimateOnScroll>
            
            <AnimateOnScroll className="testimonialsMarquee">
                <TestimonialsMarquee />
            </AnimateOnScroll>
            
            <AnimateOnScroll className="contactBlock">
                <ContactBlock />
            </AnimateOnScroll>
            
            <AnimateOnScroll className="transportBlock">
                <TransportBlock />
            </AnimateOnScroll>
            
            <AnimateOnScroll className="faq">
                <Faq />
            </AnimateOnScroll>
            
            <Footer />
            <WhatsAppWidget phoneNumber="+79283001946" />
        </div>
    );
};

export default App;
