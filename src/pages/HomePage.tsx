import React, { useEffect } from 'react';
import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Services from '../sections/Services/Services';
import KnowledgeBank from '../sections/KnowledgeBank/KnowledgeBank';
import Contact from '../sections/Contact/Contact';

const HomePage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Hero />
            <About />
            <Services />

            <Contact />
        </>
    );
};

export default HomePage;
