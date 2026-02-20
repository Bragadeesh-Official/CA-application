import React from 'react';
import { Shield, FileText, PieChart, Briefcase, CheckCircle2 } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-white pt-8 md:pt-16 pb-16 md:pb-32">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-indigo-50 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="max-w-[1720px] mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-2 gap-12 md:gap-16 items-center">
                {/* Left Content */}
                <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 rounded-full text-xs md:text-sm font-semibold w-fit">
                        <Shield size={16} />
                        <span>Trusted by 10,000+ Businesses</span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.2] lg:leading-[1.1]">
                        Grow Your <span className="text-indigo-600">Business</span> With Expert <span className="relative inline-block">
                            CA Advice
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="#4f46e5" strokeWidth="3" fill="transparent" />
                            </svg>
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                        Professional chartered accountancy services including audit, management consultancy, and tax advisory since 1982.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-gray-700 font-medium text-sm md:text-base">
                            <CheckCircle2 className="text-green-500" size={20} />
                            <span>Expert Audit & Assurance Services</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700 font-medium text-sm md:text-base">
                            <CheckCircle2 className="text-green-500" size={20} />
                            <span>Comprehensive Tax Consultancy</span>
                        </div>
                        <div className="flex items-center gap-3 text-gray-700 font-medium text-sm md:text-base">
                            <CheckCircle2 className="text-green-500" size={20} />
                            <span>Corporate Financial Planning</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button
                            onClick={() => window.location.href = '#services'}
                            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95"
                        >
                            Explore Services
                        </button>
                        <button
                            onClick={() => window.location.href = '#about'}
                            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 font-bold rounded-2xl border-2 border-gray-100 hover:border-indigo-600 hover:text-indigo-600 transition-all active:scale-95"
                        >
                            Learn More
                        </button>
                    </div>
                </div>

                {/* Right Image with Floating Icons */}
                <div className="relative order-1 md:order-2 flex justify-center items-center">
                    <div className="relative w-full max-w-[500px] md:max-w-none lg:max-w-[900px]">
                        {/* Main Hero Image */}
                        <img
                            src="/src/assets/4999653.jpg"
                            alt="Professional CA"
                            className="w-full h-auto relative z-10"
                        />

                        {/* Floating Badges - Hidden on small mobile */}
                        <div className="hidden sm:block">
                            <FloatingBadge
                                icon={<Shield className="text-blue-600" size={20} />}
                                label="Audit"
                                className="top-5 md:top-10 -left-5 md:-left-10 animate-float-slow text-xs md:text-sm p-3 md:p-4"
                            />
                            <FloatingBadge
                                icon={<FileText className="text-indigo-600" size={20} />}
                                label="GST"
                                className="bottom-15 md:bottom-20 -left-10 md:-left-16 animate-float-delayed text-xs md:text-sm p-3 md:p-4"
                            />
                            <FloatingBadge
                                icon={<PieChart className="text-pink-600" size={20} />}
                                label="Accounting"
                                className="top-20 md:top-32 -right-5 md:-right-8 animate-float text-xs md:text-sm p-3 md:p-4"
                            />
                            <FloatingBadge
                                icon={<Briefcase className="text-orange-600" size={20} />}
                                label="Finance"
                                className="bottom-5 md:bottom-10 right-2 md:right-4 animate-float-slow text-xs md:text-sm p-3 md:p-4"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const FloatingBadge: React.FC<{ icon: React.ReactNode; label: string; className?: string }> = ({ icon, label, className }) => (
    <div className={`absolute z-20 bg-white p-4 rounded-2xl shadow-2xl flex items-center gap-3 border border-gray-50 transition-transform hover:scale-110 cursor-pointer ${className}`}>
        <div className="p-2 bg-gray-50 rounded-lg">
            {icon}
        </div>
        <span className="font-bold text-gray-900 pr-2">{label}</span>
    </div>
);

export default Hero;
