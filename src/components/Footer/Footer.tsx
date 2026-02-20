import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from '../../constant';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0f172a] text-gray-400 py-20">
            <div className="max-w-[1720px] mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Bio */}
                    <div className="flex flex-col gap-6 text-center sm:text-left items-center sm:items-start">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xl uppercase">CA</span>
                            </div>
                            <span className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase whitespace-nowrap">
                                {COMPANY_NAME}<span className="text-indigo-500">.</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Professional chartered accountancy firm rendering comprehensive professional services including audit, management consultancy, and tax consultancy since 1982.
                        </p>
                        <div className="flex gap-4">
                            <SocialLink icon={<Facebook size={18} />} />
                            <SocialLink icon={<Linkedin size={18} />} />
                            <SocialLink icon={<Twitter size={18} />} />
                            <SocialLink icon={<Instagram size={18} />} />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6 text-center sm:text-left">
                        <h4 className="text-white font-bold text-lg">Quick Links</h4>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li><FooterLink href="#about" label="About Us" /></li>
                            <li><FooterLink href="#services" label="Our Services" /></li>
                            <li><FooterLink href="#team" label="Meet the Team" /></li>
                            <li><FooterLink href="#contact" label="Book Consultation" /></li>
                            <li><FooterLink href="#careers" label="Careers" /></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="flex flex-col gap-6 text-center sm:text-left">
                        <h4 className="text-white font-bold text-lg">Services</h4>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li><FooterLink href="#audit" label="Audit & Assurance" /></li>
                            <li><FooterLink href="#tax" label="Tax Consultancy" /></li>
                            <li><FooterLink href="#gst" label="GST Management" /></li>
                            <li><FooterLink href="#corporate" label="Corporate Services" /></li>
                            <li><FooterLink href="#payroll" label="Payroll Processing" /></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6 text-center sm:text-left items-center sm:items-start">
                        <h4 className="text-white font-bold text-lg">Contact Us</h4>
                        <div className="flex flex-col gap-4 text-sm">
                            <div className="flex justify-center sm:justify-start gap-3">
                                <MapPin className="text-indigo-500 shrink-0" size={18} />
                                <span className="max-w-[200px]">{COMPANY_ADDRESS}</span>
                            </div>
                            <div className="flex justify-center sm:justify-start gap-3 items-center">
                                <Phone className="text-indigo-500 shrink-0" size={18} />
                                <span>{COMPANY_PHONE}</span>
                            </div>
                            <div className="flex justify-center sm:justify-start gap-3 items-center">
                                <Mail className="text-indigo-500 shrink-0" size={18} />
                                <span className="truncate">{COMPANY_EMAIL}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-center md:text-left text-gray-500">
                    <p>© 2026 {COMPANY_NAME}. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterLink: React.FC<{ href: string; label: string }> = ({ href, label }) => (
    <a href={href} className="hover:text-indigo-400 transition-colors">{label}</a>
);

const SocialLink: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
    <a href="#" className="w-10 h-10 bg-gray-800 text-gray-400 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
        {icon}
    </a>
);

export default Footer;
