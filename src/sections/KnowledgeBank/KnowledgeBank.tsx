import React from 'react';
import { BookOpen, FileText, Newspaper, ClipboardCheck, ArrowRight } from 'lucide-react';

interface KnowledgeCategory {
    title: string;
    description: string;
    icon: React.ReactNode;
    items: string[];
    color: string;
}

const KnowledgeBank: React.FC = () => {
    const categories: KnowledgeCategory[] = [
        {
            title: "Tax Circulars",
            description: "Stay updated with the latest circulars from Income Tax and GST departments.",
            icon: <FileText className="text-indigo-600" />,
            items: ["Recent GST Circulars", "Income Tax Notifications", "CBDT Announcements"],
            color: "indigo"
        },
        {
            title: "Technical Updates",
            description: "Deep dives into technical changes in accounting standards and audit practices.",
            icon: <Newspaper className="text-blue-600" />,
            items: ["Ind AS Updates", "Companies Act Amendments", "Audit Quality Reports"],
            color: "blue"
        },
        {
            title: "Required Forms",
            description: "Commonly used statutory forms for various compliances and registrations.",
            icon: <ClipboardCheck className="text-teal-600" />,
            items: ["Income Tax Forms", "GST Registration Forms", "MCA E-Forms"],
            color: "teal"
        },
        {
            title: "Acts & Rules",
            description: "Readily available references to major financial acts and their governing rules.",
            icon: <BookOpen className="text-purple-600" />,
            items: ["Income Tax Act 1961", "Companies Act 2013", "CGST Act 2017"],
            color: "purple"
        }
    ];

    return (
        <section id="knowledge-bank" className="py-24 bg-gray-50/30 overflow-hidden">
            <div className="max-w-[1720px] mx-auto px-6">
                <div className="flex flex-col items-center text-center gap-6 mb-16 md:mb-20 px-4">
                    <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-xs md:text-sm">Resource Hub</h2>
                    <h3 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl">
                        Empowering Your <span className="text-indigo-600">Knowledge</span> Bank
                    </h3>
                    <p className="text-base md:text-xl text-gray-600 max-w-2xl">
                        Access our curated collection of professional resources, updates, and statutory references to stay ahead in the financial landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-[2.5rem] bg-white border border-gray-100 hover:border-indigo-100 hover:shadow-2xl hover:shadow-indigo-50/50 transition-all duration-500 flex flex-col gap-6"
                        >
                            <div className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-50 transition-all duration-500">
                                {category.icon}
                            </div>

                            <div className="flex flex-col gap-3">
                                <h4 className="text-2xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors">
                                    {category.title}
                                </h4>
                                <p className="text-gray-600 text-[15px] leading-relaxed">
                                    {category.description}
                                </p>
                            </div>

                            <div className="mt-auto pt-6 border-t border-gray-50 flex flex-col gap-3">
                                {category.items.map((item, i) => (
                                    <div key={i} className="flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors cursor-pointer">
                                        <ArrowRight size={14} className="text-indigo-400" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 p-10 md:p-16 rounded-[3rem] bg-indigo-900 text-white relative overflow-hidden">
                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="flex flex-col gap-6 max-w-2xl text-center md:text-left">
                            <h4 className="text-3xl md:text-4xl font-bold leading-tight">Need specific professional guidance?</h4>
                            <p className="text-indigo-100 text-lg md:text-xl">
                                Our qualified professionals are here to help you navigate complex financial regulations and compliance requirements.
                            </p>
                        </div>
                        <button
                            onClick={() => window.location.href = '#contact'}
                            className="whitespace-nowrap px-10 py-5 bg-white text-indigo-900 font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-xl active:scale-95"
                        >
                            Get Professional Advice
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KnowledgeBank;
