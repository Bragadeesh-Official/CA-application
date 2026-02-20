import React, { useState, useEffect } from 'react';
import { IndianRupee, ShieldCheck, Landmark, Building2, Users, FileSearch, Shield, X, CheckCircle2 } from 'lucide-react';
import * as constants from '../../constant';

interface Service {
    title: string;
    description: string;
    types?: string;
    fullList?: string[];
    icon: React.ReactNode;
    color: string;
}

const Services: React.FC = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedService) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedService]);

    const servicesData: Service[] = [
        {
            title: "Audit & Assurance",
            description: constants.AUDIT_DESCRIPTION,
            types: constants.AUDIT_TYPES.join(', '),
            fullList: [...constants.AUDIT_TYPES, ...constants.AUDIT_SERVICES],
            icon: <ShieldCheck className="text-indigo-600" />,
            color: "indigo"
        },
        {
            title: "GST Management",
            description: constants.GST_SERVICES.join(', '),
            fullList: constants.GST_SERVICES,
            icon: <IndianRupee className="text-blue-600" />,
            color: "blue"
        },
        {
            title: "Income Tax",
            description: constants.INCOME_TAX_SERVICES.join(', '),
            fullList: constants.INCOME_TAX_SERVICES,
            icon: <Landmark className="text-teal-600" />,
            color: "teal"
        },
        {
            title: "Corporate Governance",
            description: constants.CORPORATE_GOVERNANCE_DESCRIPTION,
            types: constants.CORPORATE_GOVERNANCE_SERVICES.join(', '),
            fullList: [constants.CORPORATE_GOVERNANCE_DETAILS, ...constants.CORPORATE_GOVERNANCE_SERVICES],
            icon: <Shield className="text-purple-600" />,
            color: "purple"
        },
        {
            title: "Corporate Law",
            description: constants.CORPORATE_SERVICES.join(', '),
            fullList: constants.CORPORATE_SERVICES,
            icon: <Building2 className="text-rose-600" />,
            color: "rose"
        },
        {
            title: "Non-Resident Services",
            description: constants.NON_RESIDENT_SERVICES.join(', '),
            fullList: constants.NON_RESIDENT_SERVICES,
            icon: <Landmark className="text-amber-600" />,
            color: "amber"
        },
        {
            title: "Corporate Finance",
            description: constants.CORPORATE_FINANCE_SERVICES.join(', '),
            fullList: constants.CORPORATE_FINANCE_SERVICES,
            icon: <Landmark className="text-emerald-600" />,
            color: "emerald"
        },
        {
            title: "Payroll Management",
            description: constants.PAYROLL_SERVICES.join(', '),
            fullList: constants.PAYROLL_SERVICES,
            icon: <Users className="text-orange-600" />,
            color: "orange"
        },
        {
            title: "TDS Compliance",
            description: constants.TDS_SERVICES.join(', '),
            fullList: constants.TDS_SERVICES,
            icon: <FileSearch className="text-indigo-600" />,
            color: "indigo"
        },
        {
            title: "Accounting Services",
            description: constants.ACCOUNTING_SERVICES.join(', '),
            fullList: constants.ACCOUNTING_SERVICES,
            icon: <FileSearch className="text-cyan-600" />,
            color: "cyan"
        }
    ];

    return (
        <section id="services" className="py-24 bg-white overflow-hidden">
            <div className="max-w-[1720px] mx-auto px-6">
                <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-20 px-4">
                    <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-xs md:text-sm">Comprehensive Expertise</h2>
                    <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
                        Professional Solutions for Your <span className="text-indigo-600">Financial Growth</span>
                    </h3>
                    <p className="text-base md:text-xl text-gray-600 max-w-2xl">
                        We offer a wide range of specialized services tailored to meet the contemporary needs of our diverse clientele.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedService(service)}
                            className="group p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-50 transition-all duration-500 cursor-pointer flex flex-col gap-6"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                                {service.icon}
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-4">
                                    {service.description}
                                </p>
                            </div>

                            {service.types && (
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {service.types.split(',').slice(0, 3).map((type, tIdx) => (
                                        <span key={tIdx} className="px-3 py-1 bg-white rounded-full text-[12px] font-semibold text-gray-500 border border-gray-100">
                                            {type.trim()}
                                        </span>
                                    ))}
                                    {service.types.split(',').length > 3 && (
                                        <span className="px-3 py-1 bg-white rounded-full text-[12px] font-semibold text-indigo-400 border border-gray-100">
                                            +{service.types.split(',').length - 3} More
                                        </span>
                                    )}
                                </div>
                            )}

                            <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm mt-4 group-hover:translate-x-2 transition-transform">
                                Read More
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Service Detail Modal */}
            {selectedService && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-gray-900/40 backdrop-blur-md animate-in fade-in duration-300">
                    <div
                        className="bg-white w-full max-w-3xl max-h-[90vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="p-6 md:p-10 border-b border-gray-100 flex items-start justify-between bg-gray-50/50">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                                    {selectedService.icon}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                                    <p className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">Core Specialization</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedService(null)}
                                className="p-2 hover:bg-gray-200/50 rounded-xl transition-colors text-gray-400 hover:text-gray-900 active:scale-95"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="flex-1 overflow-y-auto p-6 md:p-10 custom-scrollbar">
                            <div className="flex flex-col gap-8">
                                <div className="flex flex-col gap-4">
                                    <h4 className="text-lg font-bold text-gray-900">Service Overview</h4>
                                    <p className="text-gray-600 leading-relaxed">
                                        {selectedService.description}
                                    </p>
                                </div>

                                {selectedService.fullList && (
                                    <div className="flex flex-col gap-6">
                                        <h4 className="text-lg font-bold text-gray-900">Specialized Offerings</h4>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {selectedService.fullList.map((item, i) => (
                                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-indigo-100 hover:bg-white transition-all">
                                                    <CheckCircle2 size={18} className="text-indigo-500 shrink-0 mt-1" />
                                                    <span className="text-gray-700 text-sm md:text-[15px] leading-relaxed">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="p-6 md:p-10 bg-gray-50/50 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="text-center sm:text-left">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Expert Consultation</p>
                                <p className="text-sm text-gray-600">Available for personalized advisory.</p>
                            </div>
                            <button
                                onClick={() => {
                                    setSelectedService(null);
                                    window.location.href = '#contact';
                                }}
                                className="w-full sm:w-fit px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95"
                            >
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Services;
