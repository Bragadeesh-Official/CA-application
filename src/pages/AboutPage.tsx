import React, { useEffect } from 'react';
import About from '../sections/About/About';

const AboutPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-12">
            <About />
        </div>
    );
};

export default AboutPage;
