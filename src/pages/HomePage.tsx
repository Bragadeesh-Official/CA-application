import React, { useEffect } from 'react';
import Hero from '../sections/Hero/Hero';
import IntroSection from '../sections/Intro/IntroSection';
import QuickLinks from '../sections/QuickLinks/QuickLinks';
import ConsultationCTA from '../sections/ConsultationCTA/ConsultationCTA';

const HomePage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <IntroSection />
            <QuickLinks />
            <ConsultationCTA />
        </>
    );
};

export default HomePage;
