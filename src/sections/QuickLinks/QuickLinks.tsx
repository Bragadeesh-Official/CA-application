import React from 'react';
import { Users, Calendar, FileText, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickLinks: React.FC = () => {
    const navigate = useNavigate();

    const links = [
        {
            title: "Meet Our Team",
            description: "Get to know the distinguished chartered accountants and advisors behind our firm's success.",
            icon: <Users className="text-blue-950" size={28} />,
            path: "/team",
            color: "blue-950"
        },
        {
            title: "Compliance Calendar",
            description: "Stay ahead of statutory deadlines with our comprehensive compliance schedule.",
            icon: <Calendar className="text-blue-600" size={28} />,
            path: "/calendar",
            color: "blue"
        },
        {
            title: "Resources",
            description: "Access our collection of useful tools, guides, and important updates tailored to support your business compliance.",
            icon: <FileText className="text-teal-600" size={28} />,
            path: "/resources",
            color: "teal"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1720px] mx-auto px-12 lg:px-[10%]">
                <div className="flex flex-col items-center text-center gap-4 mb-16">
                    <h2 className="text-blue-950 font-bold tracking-widest uppercase text-xs md:text-sm">Explore Further</h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Quick Access to <span className="text-blue-950">Key Information</span>
                    </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {links.map((link, index) => (
                        <div
                            key={index}
                            onClick={() => navigate(link.path)}
                            className="group p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:border-blue-950/20 hover:shadow-2xl hover:shadow-blue-950/10 transition-all duration-500 cursor-pointer flex flex-col gap-6"
                        >
                            <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                                {link.icon}
                            </div>
                            <div className="flex flex-col gap-3">
                                <h4 className="text-2xl font-bold text-gray-900 group-hover:text-blue-950 transition-colors">
                                    {link.title}
                                </h4>
                                <p className="text-gray-600 text-base leading-relaxed">
                                    {link.description}
                                </p>
                            </div>
                            <div className="mt-auto flex items-center gap-2 text-blue-950 font-bold text-sm group-hover:translate-x-2 transition-transform">
                                Learn More
                                <ArrowRight size={18} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickLinks;
