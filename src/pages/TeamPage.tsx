import React, { useEffect } from 'react';
import Team from '../sections/Team/Team';

const TeamPage: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-2 pb-20">
            <Team />
        </div>
    );
};

export default TeamPage;
