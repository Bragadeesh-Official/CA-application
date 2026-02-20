import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import * as constants from '../../constant';

const Team: React.FC = () => {
    return (
        <section id="team" className="py-16 md:py-24 bg-gray-50/50 overflow-hidden">
            <div className="max-w-[1720px] mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 md:gap-8 text-center lg:text-left">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-indigo-600 font-bold tracking-widest uppercase text-xs md:text-sm">Our People</h2>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                                Driven by <span className="text-indigo-600">Expertise</span> & Excellence
                            </h3>
                        </div>
                        <p className="text-base md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            {constants.TEAM_DESCRIPTION}
                        </p>

                        <div className="flex flex-col gap-6 pt-4 items-center lg:items-start text-left">
                            <div className="flex gap-4 items-center">
                                <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="font-bold text-gray-900 text-sm md:text-base">Get in touch</h4>
                                    <p className="text-gray-500 text-xs md:text-sm truncate">{constants.COMPANY_EMAIL}</p>
                                </div>
                            </div>
                        </div>

                        <button
                            onClick={() => window.location.href = '#contact'}
                            className="w-full sm:w-fit px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 active:scale-95"
                        >
                            Consult with Our Experts
                        </button>
                    </div>

                    {/* Right Team Cards */}
                    <div className="relative">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-100 rounded-full blur-3xl opacity-30 -z-10" />

                        <div className="flex flex-col gap-6 md:gap-8">
                            <TeamMemberCard
                                name="Prominent Partner"
                                role="Senior Partner"
                                image="/home/bragadeesh/.gemini/antigravity/brain/78600eab-184a-413e-959a-46ad020e898a/team_person_1_1771592723763.png"
                                description={constants.TEAM_MEMBER_1_DESCRIPTION}
                            />
                            <div className="sm:ml-12">
                                <TeamMemberCard
                                    name="Distinguished CA"
                                    role="Tax Consultant"
                                    image="/home/bragadeesh/.gemini/antigravity/brain/78600eab-184a-413e-959a-46ad020e898a/team_person_2_v2_1771592761055.png"
                                    description={constants.TEAM_MEMBER_2_DESCRIPTION}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const TeamMemberCard: React.FC<{ name: string; role: string; description: string; image: string }> = ({ name, role, description, image }) => (
    <div className="bg-white p-8 rounded-[2rem] shadow-xl shadow-gray-100 border border-gray-50 flex flex-col gap-6 hover:border-indigo-100 transition-colors group">
        <div className="flex items-center gap-6">
            {/* <div className="w-24 h-24 rounded-2xl overflow-hidden border-2 border-indigo-50 shrink-0">
                <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div> */}
            <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <h4 className="text-xl font-bold text-gray-900">{name}</h4>
                        <p className="text-indigo-600 font-semibold">{role}</p>
                    </div>
                    <div className="flex gap-2">
                        <a href="#" className="p-2 bg-gray-50 text-gray-400 hover:text-indigo-600 rounded-lg transition-colors">
                            <Linkedin size={18} />
                        </a>
                        <a href="#" className="p-2 bg-gray-50 text-gray-400 hover:text-indigo-600 rounded-lg transition-colors">
                            <Twitter size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed italic border-l-4 border-indigo-100 pl-4 py-1">
            "{description}"
        </p>
    </div>
);

export default Team;
