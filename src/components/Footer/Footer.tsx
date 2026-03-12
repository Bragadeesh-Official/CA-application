import React from 'react';
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/image.png';
import { COMPANY_NAME, COMPANY_EMAIL, COMPANY_PHONE, COMPANY_ADDRESS } from '../../constant';

const Footer: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToAnchor = (hash: string) => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleNavClick = (href: string) => {
        const [path, hash] = href.split('/#');
        const targetPath = path || '/';
        const targetHash = hash ? `#${hash}` : '';

        if (location.pathname === targetPath && targetHash) {
            scrollToAnchor(targetHash);
        } else {
            navigate(targetPath + targetHash);
            if (targetHash) {
                setTimeout(() => scrollToAnchor(targetHash), 100);
            } else {
                window.scrollTo(0, 0);
            }
        }
    };

    return (
        <footer className="bg-[#0f172a] text-gray-400 py-20">
            <div className="max-w-[1720px] mx-auto px-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Bio */}
                    <div className="flex flex-col gap-6 text-center sm:text-left items-center sm:items-start">
                        <Link to="/" className="flex items-center gap-2" onClick={() => window.scrollTo(0, 0)}>
                            <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
                            <span className="text-xl md:text-2xl font-bold text-white tracking-tight uppercase whitespace-nowrap">
                                {COMPANY_NAME}<span className="text-indigo-500">.</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed max-w-xs">
                            Professional chartered accountancy firm rendering comprehensive professional services including audit, management consultancy, and tax advisory since 1982.
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
                            <li><FooterLink onClick={() => handleNavClick('/')} label="Home" /></li>
                            <li><FooterLink onClick={() => handleNavClick('/#about')} label="About Us" /></li>
                            <li><FooterLink onClick={() => handleNavClick('/#services')} label="Our Services" /></li>
                            <li><FooterLink onClick={() => handleNavClick('/#contact')} label="Connect Us" /></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="flex flex-col gap-6 text-center sm:text-left">
                        <h4 className="text-white font-bold text-lg">Pages</h4>
                        <ul className="flex flex-col gap-4 text-sm">
                            <li>
                                <Link to="/team" className="hover:text-indigo-400 transition-colors" onClick={() => window.scrollTo(0, 0)}>
                                    Meet the Team
                                </Link>
                            </li>
                            <li>
                                <Link to="/calendar" className="hover:text-indigo-400 transition-colors" onClick={() => window.scrollTo(0, 0)}>
                                    Compliance Calendar
                                </Link>
                            </li>
                            <li><FooterLink onClick={() => handleNavClick('/#contact')} label="Book Consultation" /></li>
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
                </div>
            </div>
        </footer>
    );
};

const FooterLink: React.FC<{ onClick: () => void; label: string }> = ({ onClick, label }) => (
    <button onClick={onClick} className="hover:text-indigo-400 transition-colors text-left">{label}</button>
);

const SocialLink: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
    <a href="#" className="w-10 h-10 bg-gray-800 text-gray-400 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-all">
        {icon}
    </a>
);

export default Footer;
