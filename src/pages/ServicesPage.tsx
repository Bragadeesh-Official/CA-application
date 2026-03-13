import React, { useEffect } from 'react';
import Services from '../sections/Services/Services';

const ServicesPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-12">
            <Services />
        </div>
    );
};

export default ServicesPage;
