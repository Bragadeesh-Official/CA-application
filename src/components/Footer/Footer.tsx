import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image.png';
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from '../../constant';

const Footer: React.FC = () => {


    return (
        <footer className="bg-[#0f172a] text-gray-400 py-20">
            <div className="max-w-[1720px] mx-auto px-8 lg:px-[20%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Bio */}
                    <div className="flex flex-col gap-6 text-center sm:text-left items-center sm:items-start">
                        <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
                            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                            <span className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase whitespace-nowrap">
                                {COMPANY_NAME}<span className="text-blue-950">.</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Professional chartered accountancy firm rendering comprehensive professional services including audit, management consultancy, and tax advisory since 2003.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6 text-center sm:text-left">
                        <h4 className="text-white font-bold text-lg">Quick Links</h4>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li><Link to="/" className="hover:text-blue-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                            <li><Link to="/about" className="hover:text-blue-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>About Us</Link></li>
                            <li><Link to="/services" className="hover:text-blue-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>Our Services</Link></li>
                            <li><Link to="/contact" className="hover:text-blue-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col gap-6 text-center sm:text-left">
                        <h4 className="text-white font-bold text-lg">Pages</h4>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li>
                                <Link to="/team" className="hover:text-blue-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>
                                    Meet the Team
                                </Link>
                            </li>
                            <li>
                                <Link to="/calendar" className="hover:text-blue-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>
                                    Compliance Calendar
                                </Link>
                            </li>
                            <li><Link to="/contact" className="hover:text-blue-900 transition-colors" onClick={() => window.scrollTo(0, 0)}>Book Consultation</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6 text-center sm:text-left items-center sm:items-start">
                        <h4 className="text-white font-bold text-lg">Contact Us</h4>
                        <div className="flex flex-col gap-4 text-sm">
                            <div className="flex justify-center sm:justify-start gap-3">
                                <MapPin className="text-blue-950 shrink-0" size={18} />
                                <span className="max-w-[200px]">{COMPANY_ADDRESS}</span>
                            </div>
                            <div className="flex justify-center sm:justify-start gap-3 items-center">
                                <Phone className="text-blue-950 shrink-0" size={18} />
                                <span>{COMPANY_PHONE}</span>
                            </div>
                            <div className="flex justify-center sm:justify-start gap-3 items-center">
                                <Mail className="text-blue-950 shrink-0" size={18} />
                                <span className="truncate">{COMPANY_EMAIL}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-center md:text-left text-gray-500">
                    <p className="max-w-md mx-auto md:mx-0">
                        DISCLAIMER: This website is meant solely for informational purposes and not for advertising or solicitation.
                    </p>
                    <p>© 2026 {COMPANY_NAME}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};



export default Footer;
