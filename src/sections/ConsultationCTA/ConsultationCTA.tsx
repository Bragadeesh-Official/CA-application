import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ConsultationCTA: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1720px] mx-auto px-8 lg:px-[10%]">
                <div className="relative overflow-hidden bg-white rounded-[3rem] pt-12 pb-16 md:pt-16 md:pb-24 px-6 shadow-[0_-20px_50px_-12px_rgba(0,0,0,0.1),0_25px_50px_-12px_rgba(0,0,0,0.1)]">
                    {/* Background decorative elements */}
                    {/* <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-50" />
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-950 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl opacity-30" /> */}

                    <div className="relative z-10 text-center">
                        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto">


                            <div className="flex flex-col gap-4">
                                <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold !text-blue-950 leading-tight">
                                    Financial Advisory and  <br />
                                    <span className="text-black"> Compliance Services</span>
                                </h2>
                                <p className="text-lg md:text-xl text-black max-w-2xl mx-auto leading-relaxed">
                                    You can schedule a consultation with our professionals to discuss your compliance and business requirements.
                                </p>
                            </div>

                            <button
                                onClick={() => navigate('/contact')}
                                className="group flex items-center gap-3 bg-blue-950 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-bold text-lg md:text-xl hover:bg-blue-900 transition-all shadow-xl active:scale-95"
                            >
                                Contact us
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultationCTA;
