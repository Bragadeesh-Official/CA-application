import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as constants from '../../constant';
import aboutImage from '../../assets/hero-3.jpg';

const About: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section id="about" className="py-20 bg-gray-50/50 overflow-hidden">
            <div className="max-w-[1720px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Content Container */}
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-xs md:text-sm">Our Legacy</h2>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Established Professional Excellence <span className="text-indigo-600">Since 1982</span>
                            </h3>
                        </div>

                        <div className="flex flex-col gap-8 text-base md:text-xl text-gray-600 leading-relaxed">
                            <p>{constants.HOME_ABOUT_1}</p>
                            <p>{constants.HOME_ABOUT_2}</p>
                            <p>{constants.HOME_ABOUT_3}</p>
                            <p>{constants.HOME_ABOUT_4}</p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-8">
                            <button
                                onClick={() => navigate('/team')}
                                className="px-10 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95"
                            >
                                Meet Our Team
                            </button>
                            <button
                                onClick={() => navigate('/contact')}
                                className="px-10 py-4 bg-white text-gray-900 font-bold rounded-2xl border-2 border-gray-100 hover:border-indigo-600 hover:text-indigo-600 transition-all active:scale-95"
                            >
                                Get in Touch
                            </button>
                        </div>
                    </div>

                    {/* Image Container */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-indigo-100 rounded-[3rem] blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                        <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl shadow-indigo-100/50 border-8 border-white">
                            <img
                                src={aboutImage}
                                alt="Our Legacy"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Experience badge */}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
