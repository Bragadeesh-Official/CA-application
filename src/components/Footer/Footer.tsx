import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image.png';
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from '../../constant';

const Footer: React.FC = () => {


    return (
        <footer className="bg-blue-950 text-gray-300 py-16 md:py-20">
            <div className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-[10%]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Bio */}
                    <div className="flex flex-col gap-6 text-center sm:text-left items-center sm:items-start">
                        <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0, 0)}>
                            <img src={logo} alt="Logo" className="w-10 h-10 object-contain transition-transform group-hover:scale-110" />
                            <span className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase leading-tight">
                                {COMPANY_NAME}<span className="text-blue-400">.</span>
                            </span>
                        </Link>


                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-6 text-center sm:text-left items-center sm:items-start">
                        <h4 className="!text-white font-bold text-lg uppercase tracking-wider">Quick Links</h4>
                        <ul className="flex flex-col gap-4 text-sm font-medium">
                            <li><Link to="/" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>About</Link></li>
                            <li><Link to="/services" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Our Services</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col gap-6 text-center sm:text-left items-center sm:items-start">
                        <h4 className="!text-white font-bold text-lg uppercase tracking-wider">Explore</h4>
                        <ul className="flex flex-col gap-4 text-sm font-medium">
                            <li>
                                <Link to="/team" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>
                                    Meet the Team
                                </Link>
                            </li>
                            <li>
                                <Link to="/calendar" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>
                                    Compliance Calendar
                                </Link>
                            </li>
                            <li><Link to="/contact" className="hover:text-white transition-colors" onClick={() => window.scrollTo(0, 0)}>Book Consultation</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6 text-center sm:text-left items-center sm:items-start">
                        <h4 className="!text-white font-bold text-lg uppercase tracking-wider">Contact Us</h4>
                        <div className="flex flex-col gap-5 text-sm">
                            <div className="flex justify-center sm:justify-start gap-4">
                                <MapPin className="text-blue-400 shrink-0" size={20} />
                                <a 
                                    href="https://www.google.com/maps/dir//T+NAGARAJU+%26+Co+,+CHARTERED+ACCOUNTANTS,+14,+kondasamy+Nagar,+Masakalipalayam+Rd,+Peelamedu,+Coimbatore,+Tamil+Nadu+641004/@11.0139689,76.967235,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba857435f01c8b9:0x4ee20d6a9648cfe7!2m2!1d77.0167091!2d11.0226645?entry=ttu&g_ep=EgoyMDI2MDMxNS4wIKXMDSoASAFQAw%3D%3D" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="max-w-[220px] leading-relaxed text-white hover:text-blue-300 transition-colors"
                                >
                                    {COMPANY_ADDRESS}
                                </a>
                            </div>
                            <div className="flex justify-center sm:justify-start gap-4 items-center">
                                <Phone className="text-blue-400 shrink-0" size={20} />
                                <span className="text-white">{COMPANY_PHONE}</span>
                            </div>
                            <div className="flex justify-center sm:justify-start gap-4 items-center">
                                <Mail className="text-blue-400 shrink-0" size={20} />
                                <span className="truncate text-white">{COMPANY_EMAIL}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-medium text-center md:text-left text-white/70">
                    <p className="max-w-md mx-auto md:mx-0 leading-relaxed uppercase tracking-tighter">
                        DISCLAIMER: This website is meant solely for informational purposes and not for advertising or solicitation.
                    </p>
                    <p className="uppercase tracking-tighter">© 2026 {COMPANY_NAME}. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};



export default Footer;
