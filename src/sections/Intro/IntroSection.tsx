import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import heroImage from '../../assets/08c4aeb9d10409ee9744973dd14bdc07.jpg';

const IntroSection: React.FC = () => {
    return (
        <section className="relative overflow-hidden bg-white py-6 md:py-12">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-blue-950/5 rounded-full blur-3xl opacity-50 -z-10" />

            <div className="max-w-[1720px] mx-auto px-8 lg:px-[10%] pt-12 md:pt-16 pb-8">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold !text-blue-950 leading-tight text-center pb-12">
                    Commitment to <span className="text-blue-950">Professional Excellence</span>
                </h2>
            </div>

            <div className="max-w-[1720px] mx-auto px-8 lg:px-[10%] grid md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10 items-center">
                {/* Left Content */}
                <div className="flex flex-col gap-6 md:gap-8 order-2 md:order-1">
                    <p className="text-lg md:text-xl text-black max-w-xl leading-relaxed">
                        T NAGARAJU & Co is a professionally managed chartered accountancy firm established in 2003. We provide comprehensive professional services in audit, management consultancy, and tax advisory, combining specialized skills with personalized, proactive advice.
                    </p>

                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-green-50 rounded-lg mt-1 shrink-0">
                                <CheckCircle2 className="text-green-600" size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Professional Audit & Assurance Services</h4>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1 max-w-md">
                                    Thorough examination of financial records to ensure accuracy, compliance with regulatory standards, and providing stakeholders with confidence in financial reporting.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-green-50 rounded-lg mt-1 shrink-0">
                                <CheckCircle2 className="text-green-600" size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Comprehensive Tax Consultancy</h4>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1 max-w-md">
                                    Tailored tax planning and compliance strategies for individuals and corporations, optimizing tax efficiency while ensuring full adherence to current tax laws.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-2 bg-green-50 rounded-lg mt-1 shrink-0">
                                <CheckCircle2 className="text-green-600" size={20} />
                            </div>
                            <div>
                                <h4 className="text-lg font-bold text-gray-900">Corporate Financial Planning</h4>
                                <p className="text-gray-600 text-sm md:text-base leading-relaxed mt-1 max-w-md">
                                    Strategic financial advisory services including capital budgeting, cash flow management, and investment planning to drive growth and long-term stability.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* 
                    <div className="flex flex-wrap gap-4 pt-4">
                        <button
                            onClick={() => window.location.href = '/services'}
                            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-blue-950 text-white font-bold rounded-2xl hover:bg-blue-900 transition-all shadow-xl shadow-blue-950/10 active:scale-95"
                        >
                            Explore Services
                        </button>
                        <button
                            onClick={() => window.location.href = '/about'}
                            className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 font-bold rounded-2xl border-2 border-gray-100 hover:border-blue-950 hover:text-blue-950 transition-all active:scale-95"
                        >
                            Learn More
                        </button>
                    </div> */}
                </div>

                {/* Right Image with Floating Icons */}
                <div className="relative order-1 md:order-2 flex justify-center items-center">
                    <div className="relative w-full max-w-[500px] md:max-w-none lg:max-w-[900px]">
                        {/* Main Hero Image */}
                        <img
                            src={heroImage}
                            alt="Professional CA"
                            className="w-full h-auto relative z-10"
                        />

                        {/* Floating Badges */}
                        {/* <div className="hidden sm:block">
                            <FloatingBadge
                                icon={<Shield className="text-blue-600" size={20} />}
                                label="Audit"
                                className="top-5 md:top-10 -left-2 md:-left-6 lg:-left-12 text-[10px] md:text-sm p-2 md:p-4"
                            />
                            <FloatingBadge
                                icon={<FileText className="text-blue-950" size={20} />}
                                label="GST"
                                className="bottom-10 md:bottom-20 -left-4 md:-left-10 lg:-left-20 text-[10px] md:text-sm p-2 md:p-4"
                            />
                            <FloatingBadge
                                icon={<PieChart className="text-pink-600" size={20} />}
                                label="Accounting"
                                className="top-10 md:top-32 -right-2 md:-right-6 lg:-right-12 text-[10px] md:text-sm p-2 md:p-4"
                            />
                            <FloatingBadge
                                icon={<Briefcase className="text-orange-600" size={20} />}
                                label="Finance"
                                className="bottom-5 md:bottom-10 right-0 md:right-4 lg:right-8 text-[10px] md:text-sm p-2 md:p-4"
                            />
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};



export default IntroSection;
