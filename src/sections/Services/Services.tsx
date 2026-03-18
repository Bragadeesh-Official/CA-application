import React from 'react';
import { Handshake, ShieldCheck, Building2, Monitor, Scale, Scroll, ChartNoAxesCombined, Shield, Globe, BriefcaseBusiness, Calculator } from 'lucide-react';
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
    // const [selectedService, setSelectedService] = useState<Service | null>(null);

    // // Prevent body scroll when modal is open
    // useEffect(() => {
    //     if (selectedService) {
    //         document.body.style.overflow = 'hidden';
    //     } else {
    //         document.body.style.overflow = 'unset';
    //     }
    //     return () => {
    //         document.body.style.overflow = 'unset';
    //     };
    // }, [selectedService]);

    const servicesData: Service[] = [
        {
            title: "Audit & Assurance",
            description: "Independent audit and assurance services to enhance the reliability of financial information and ensure compliance with applicable laws and standards.",
            types: constants.AUDIT_TYPES.join(', '),
            fullList: [...constants.AUDIT_TYPES, ...constants.AUDIT_SERVICES],
            icon: <ShieldCheck className="text-blue-950" />,
            color: "blue-950"
        },
        {
            title: "GST",
            description: "Comprehensive support in GST compliance, return filings, and advisory, including handling of notices, revocation matters, and appellate proceedings.",
            fullList: constants.GST_SERVICES,
            icon: <Calculator className="text-blue-600" />,
            color: "blue"
        },
        {
            title: "Income Tax",
            description: "Assistance in tax planning, return filing, and representation in scrutiny assessments and related proceedings to ensure compliance with income tax laws.",
            fullList: constants.INCOME_TAX_SERVICES,
            icon: <BriefcaseBusiness className="text-teal-600" />,
            color: "teal"
        },
        {
            title: "Corporate Governance",
            description: "Advisory on governance practices to strengthen transparency, accountability, and regulatory compliance within the organization.",
            types: constants.CORPORATE_GOVERNANCE_SERVICES.join(', '),
            fullList: [constants.CORPORATE_GOVERNANCE_DETAILS, ...constants.CORPORATE_GOVERNANCE_SERVICES],
            icon: <Shield className="text-purple-600" />,
            color: "purple"
        },
        {
            title: "Corporate Law",
            description: "Support in company law matters including incorporation, statutory filings, and ongoing compliance under applicable regulations.",
            fullList: constants.CORPORATE_SERVICES,
            icon: <Building2 className="text-rose-600" />,
            color: "rose"
        },
        {
            title: "Non-Resident Services",
            description: "Specialized services for non-residents covering tax compliance, advisory, and cross-border regulatory requirements.",
            fullList: constants.NON_RESIDENT_SERVICES,
            icon: <Globe className="text-amber-600" />,
            color: "amber"
        },
        {
            title: "Corporate Finance",
            description: "Advisory on financial structuring, funding strategies, and key business decisions to support sustainable growth.",
            fullList: constants.CORPORATE_FINANCE_SERVICES,
            icon: <ChartNoAxesCombined className="text-emerald-600" />,
            color: "emerald"
        },
        {
            title: "TDS Compliance",
            description: "End-to-end assistance in TDS calculation, deduction, filing, and reporting in accordance with statutory requirements.",
            fullList: constants.TDS_SERVICES,
            icon: <Scroll className="text-blue-950" />,
            color: "blue-950"
        },
        {
            title: "Virtual CFO Services",
            description: "Ongoing financial management and strategic advisory services to support informed decision-making and operational efficiency.",
            fullList: constants.ACCOUNTING_SERVICES,
            icon: <Monitor className="text-cyan-600" />,
            color: "cyan"
        },
        {
            title: "Litigation Services",
            description: "Representation and support in tax and regulatory matters before authorities, ensuring effective handling of disputes and compliance proceedings.",
            icon: <Scale className="text-black" />,
            color: "red"
        },
        {
            title: "Advisory Services",
            description: "Expert guidance on financial, tax, and business matters to support informed decision-making and optimize overall performance.",
            icon: <Handshake className="text-indigo-600" />,
            color: "indigo"
        }
    ];

    return (
        <section id="services" className="py-8 md:py-16 bg-white overflow-hidden">
            <div className="max-w-[1720px] mx-auto px-6">
                <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-20 px-4">
                    {/* <h2 className="text-blue-950 font-bold tracking-widest uppercase text-xs md:text-sm">Comprehensive Expertise</h2> */}
                    <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
                        Professional Solutions
                    </h3>
                    <p className="text-base md:text-xl text-gray-600 max-w-2xl">
                        We offer a wide range of specialized services tailored to meet the contemporary needs of our diverse clientele.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            // onClick={() => setSelectedService(service)}
                            className="group p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:border-blue-950/20 hover:shadow-2xl hover:shadow-blue-950/10 transition-all duration-500 flex flex-col gap-6"
                        >
                            <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500`}>
                                {service.icon}
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-950 transition-colors">
                                    {service.title}
                                </h4>
                                <p className="text-gray-600 text-[15px] leading-relaxed line-clamp-4">
                                    {service.description}
                                </p>
                            </div>

                            {/* Tags removed as per request */}
                        </div>
                    ))}
                </div>
            </div>

            {/* Service Detail Modal - Disabled for now
            {selectedService && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 bg-gray-900/40 backdrop-blur-md animate-in fade-in duration-300">
                    <div
                        className="bg-white w-full max-w-3xl max-h-[90vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-6 md:p-10 border-b border-gray-100 flex items-start justify-between bg-gray-50/50">
                            <div className="flex items-center gap-6">
                                <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 flex items-center justify-center shadow-sm shrink-0">
                                    {selectedService.icon}
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{selectedService.title}</h2>
                                    <p className="text-blue-950 font-semibold text-sm tracking-wide uppercase">Core Specialization</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedService(null)}
                                className="p-2 hover:bg-gray-200/50 rounded-xl transition-colors text-gray-400 hover:text-gray-900 active:scale-95"
                            >
                                <X size={24} />
                            </button>
                        </div>

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
                                                <div key={i} className="flex gap-4 p-4 rounded-2xl bg-gray-50 border border-gray-100 group hover:border-blue-950/20 hover:bg-white transition-all">
                                                    <CheckCircle2 size={18} className="text-blue-950 shrink-0 mt-1" />
                                                    <span className="text-gray-700 text-sm md:text-[15px] leading-relaxed">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

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
                                className="w-full sm:w-fit px-8 py-4 bg-blue-950 text-white font-bold rounded-2xl hover:bg-blue-950/90 transition-all shadow-xl shadow-blue-950/10 active:scale-95"
                            >
                                Enquire Now
                            </button>
                        </div>
                    </div>
                </div>
            )}
            */}
        </section>
    );
};

export default Services;
