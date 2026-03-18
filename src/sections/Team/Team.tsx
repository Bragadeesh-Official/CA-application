import React, { useEffect, useState } from 'react';
import { User, Mail, Phone, Linkedin, Twitter } from 'lucide-react';
import * as constants from '../../constant';
import { createClient } from '../../prismicio';
import type { TeamDocument } from '../../prismic-types';
import * as prismic from '@prismicio/client';
import { PrismicText, PrismicRichText } from '@prismicio/react';

const Team: React.FC = () => {
    const [teamDocuments, setTeamDocuments] = useState<TeamDocument[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchTeam = async () => {
            const client = createClient();
            try {
                const response = await client.getAllByType<TeamDocument>('ca-team-details');
                setTeamDocuments(response);
            } catch (error) {
                console.error("Error fetching team from Prismic:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchTeam();
    }, []);

    return (
        <section id="team" className=" bg-gray-50/50 overflow-hidden">
            <div className="max-w-[1720px] mx-auto px-6">
                {/* Centered Header Content */}
                <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-4xl mx-auto">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Driven by Expertise & Excellence
                        </h3>
                    </div>
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
                        {constants.TEAM_DESCRIPTION}
                    </p>
                </div>

                {/* Team Cards Grid */}
                <div className="relative">
                    {/* Background Decoration */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-950/10 rounded-full blur-3xl opacity-20 -z-10" />

                    {isLoading ? (
                        <div className="flex flex-col items-center justify-center py-32 gap-4">
                            <div className="w-12 h-12 border-4 border-blue-950 border-t-transparent rounded-full animate-spin"></div>
                            <p className="text-gray-500 font-medium animate-pulse">Loading team members...</p>
                        </div>
                    ) : teamDocuments.length > 0 ? (
                        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
                            {teamDocuments.map((doc) => (
                                doc.data.team_detail_group.map((item, itemIndex) => {
                                    return (
                                        <div key={`${doc.id}-${itemIndex}`} className="w-full">
                                            <TeamMemberCard
                                                nameField={item.member_name}
                                                roleField={item.member_designation}
                                                image={item.member_picture?.url || ""}
                                                descriptionField={item.member_details}
                                                email={item.member_mail_id}
                                                mobile={item.member_mobile_number}
                                                socials={item.social_group}
                                            />
                                        </div>
                                    );
                                })
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <p className="text-gray-500 italic text-lg">No team members found.</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

interface TeamMemberCardProps {
    nameField: prismic.RichTextField;
    roleField: prismic.RichTextField;
    descriptionField: prismic.RichTextField;
    image: string;
    email?: prismic.RichTextField | prismic.KeyTextField | null;
    mobile?: prismic.RichTextField | prismic.NumberField | prismic.KeyTextField | null;
    socials?: { social_media_link: prismic.LinkField }[];
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ nameField, roleField, descriptionField, image, email, mobile, socials }) => (
    <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-xl shadow-blue-950/10 border border-gray-100 flex flex-col lg:flex-row gap-10 hover:border-blue-950/20 transition-all duration-300 group hover:-translate-y-1 w-full h-full">
        {/* Left Side: Image and Contact Info */}
        <div className="flex flex-col gap-6 shrink-0 items-center lg:items-start w-full lg:w-72">
            {/* Member Image / Placeholder */}
            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden border-4 border-white shadow-xl shadow-blue-950/5 flex items-center justify-center">
                {image ? (
                    <img src={image} alt="Member" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 bg-white" />
                ) : (
                    <div className="flex flex-col items-center gap-2 text-blue-950/40">
                        <User size={80} strokeWidth={1} />
                        <span className="text-xs font-bold uppercase tracking-widest">No Image</span>
                    </div>
                )}
                <div className="absolute -inset-2 bg-blue-950 opacity-0 group-hover:opacity-10 transition-opacity blur-xl rounded-full" />
            </div>

            {/* Contact Info - Moved under the picture */}
            <div className="flex flex-col gap-4 w-full px-2">
                {email && (Array.isArray(email) ? email.length > 0 : true) && (
                    <div className="flex items-center gap-3 text-gray-600 hover:text-blue-950 transition-colors group/contact">
                        <div className="p-2 bg-blue-950/5 group-hover/contact:bg-blue-950/10 rounded-lg transition-colors">
                            <Mail size={16} className="text-blue-950" />
                        </div>
                        <span className="text-sm font-semibold tracking-tight break-all">
                            {typeof email === 'string' ? email : <PrismicText field={email as prismic.RichTextField} />}
                        </span>
                    </div>
                )}
                {mobile && (Array.isArray(mobile) ? mobile.length > 0 : true) && (
                    <div className="flex items-center gap-3 text-gray-600 hover:text-blue-950 transition-colors group/contact">
                        <div className="p-2 bg-blue-950/5 group-hover/contact:bg-blue-950/10 rounded-lg transition-colors">
                            <Phone size={16} className="text-blue-950" />
                        </div>
                        <span className="text-sm font-semibold tracking-tight">
                            {typeof mobile === 'string' || typeof mobile === 'number' ? mobile : <PrismicText field={mobile as prismic.RichTextField} />}
                        </span>
                    </div>
                )}

                {/* Socials also under picture */}
                <div className="flex gap-3 pt-2">
                    {socials?.map((social, idx) => {
                        const link = social.social_media_link as prismic.EmptyLinkField | prismic.FilledLinkToWebField;
                        if (link.link_type === 'Web' && link.url) {
                            return (
                                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer" className="w-11 h-11 flex items-center justify-center bg-gray-50 text-gray-400 hover:bg-blue-950 hover:text-white rounded-xl transition-all duration-300 shadow-sm border border-gray-100/50">
                                    {link.url.includes('linkedin') ? <Linkedin size={20} /> : <Twitter size={20} />}
                                </a>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>

        {/* Right Side: Identity and Details */}
        <div className="flex-1 flex flex-col gap-6 text-center lg:text-left">
            <div className="flex flex-col gap-3">
                <h4 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight">
                    <PrismicText field={nameField} />
                </h4>
                <div className="flex items-center justify-center lg:justify-start gap-4">
                    <div className="w-10 h-[2px] bg-blue-950 hidden lg:block" />
                    <p className="text-blue-950 font-extrabold uppercase tracking-widest text-sm md:text-base">
                        <PrismicText field={roleField} />
                    </p>
                </div>
            </div>

            <div className="text-gray-600 text-[1.05rem] leading-relaxed border-l-4 border-blue-950/10 pl-8 py-4 rounded-r-2xl text-left
                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-3 [&_li]:pl-1
                [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-3
                [&_p]:mb-4 last:[&_p]:mb-0 font-medium">
                <PrismicRichText field={descriptionField} />
            </div>
        </div>
    </div>
);

export default Team;
