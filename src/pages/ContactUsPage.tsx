import React, { useEffect } from 'react';
import Contact from '../sections/Contact/Contact';

const ContactUsPage: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="py-12">
            <Contact />
        </div>
    );
};

export default ContactUsPage;
