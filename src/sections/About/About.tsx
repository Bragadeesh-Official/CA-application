import React from 'react';
import * as constants from '../../constant';

const About: React.FC = () => {
    return (
        <section id="about" className="py-24 bg-gray-50/50 overflow-hidden">
            <div className="max-w-[1720px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                    {/* Left: Content */}
                    <div className="flex flex-col gap-8 order-2 lg:order-1">
                        <div className="flex flex-col gap-4 text-center lg:text-left">
                            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-xs md:text-sm">Our Legacy</h2>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Established Professional Excellence <span className="text-indigo-600">Since 1982</span>
                            </h3>
                        </div>

                        <div className="flex flex-col gap-6 text-base md:text-lg text-gray-600 text-center lg:text-left">
                            <p>{constants.HOME_ABOUT_1}</p>
                            <p>{constants.HOME_ABOUT_2}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 pt-4 text-left">
                                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <h4 className="font-bold text-gray-900 mb-2">Specialized Skills</h4>
                                    <p className="text-sm">{constants.HOME_ABOUT_3}</p>
                                </div>
                                <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                                    <h4 className="font-bold text-gray-900 mb-2">Client-Centric</h4>
                                    <p className="text-sm">{constants.HOME_ABOUT_4}</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => window.location.href = '#contact'}
                            className="w-full sm:w-fit px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95"
                        >
                            Our Team Expertise
                        </button>
                    </div>

                    {/* Right: Decorative Stats/Image */}
                    <div className="grid grid-cols-2 gap-4 md:gap-6 order-1 lg:order-2">
                        <StatCard count="40+" label="Years Experience" />
                        <StatCard count="500+" label="Satisfied Clients" />
                        <StatCard count="50+" label="Expert Advisors" />
                        <StatCard count="100%" label="Compliance" />
                        <div className="col-span-2 bg-indigo-600 rounded-3xl p-6 md:p-8 relative overflow-hidden group">
                            <div className="relative z-10 flex flex-col gap-4">
                                <h4 className="text-xl md:text-2xl font-bold !text-white" style={{ color: 'white' }}>Comprehensive Services</h4>
                                <p className="!text-white font-medium opacity-100 text-sm md:text-base" style={{ color: 'white' }}>Rendering specialized financial advice and personalized proactive services across multiple domains.</p>
                            </div>
                            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-48 h-48 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const StatCard: React.FC<{ count: string; label: string }> = ({ count, label }) => (
    <div className="p-4 md:p-8 bg-white rounded-2xl md:rounded-3xl border border-gray-100 shadow-sm flex flex-col gap-1 md:gap-2 hover:border-indigo-200 transition-colors text-center md:text-left">
        <span className="text-2xl md:text-4xl font-bold text-indigo-600">{count}</span>
        <span className="text-xs md:text-sm font-medium text-gray-500 whitespace-nowrap">{label}</span>
    </div>
);

export default About;
