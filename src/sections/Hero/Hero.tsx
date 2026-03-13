import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import hero1 from '../../assets/hero-1.jpg';
import hero2 from '../../assets/hero-2.jpg';
import hero3 from '../../assets/hero-3.jpg';

const Hero: React.FC = () => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [hero1, hero2, hero3];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
            {/* Carousel Background */}
            <div className="absolute inset-0 z-0">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 lg:bg-gradient-to-r lg:from-black/80 lg:to-black/20" />
            </div>

            <div className="max-w-[1720px] mx-auto px-6 relative z-10 w-full">
                <div className="max-w-3xl flex flex-col gap-6 md:gap-8 animate-in fade-in slide-in-from-left-8 duration-1000">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold !text-white leading-tight">
                        Financial Advisory & Services
                    </h1>

                    <p className="text-lg md:text-xl !text-white max-w-xl leading-relaxed">
                        Over 40 years of experience finding comprehensive solutions for businesses and individuals since 1982.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button
                            onClick={() => navigate('/services')}
                            className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 active:scale-95 text-sm uppercase tracking-wider"
                        >
                            Explore Services
                        </button>
                        <button
                            onClick={() => navigate('/contact')}
                            className="px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white/10 transition-all active:scale-95 text-sm uppercase tracking-wider"
                        >
                            Contact Us
                        </button>
                    </div>

                    {/* Carousel Indicators */}
                    <div className="flex gap-2 mt-8">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'w-8 bg-indigo-500' : 'w-2 bg-white/50 hover:bg-white'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
