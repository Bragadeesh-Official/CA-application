import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/image copy 3.png';
import { COMPANY_NAME } from '../../constant';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);

  const resourcesRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);


  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsResourcesOpen(false);
  }, [location.pathname]);

  const resourceLinks = [
    { label: 'Quick Links', href: '/resources/quick-link' },
    { label: 'Important Links', href: '/resources/important-link' },
    { label: 'GST/VAT Links', href: '/resources/gst-vat-link' },
    { label: 'Ease Of Doing Business', href: '/resources/ease-of-doing-business' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1720px] mx-auto px-6 md:px-8 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 shrink-0">
          <img src={logo} alt={COMPANY_NAME} className="h-12 md:h-20 w-auto object-contain" />
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden xl:flex items-center xl:gap-4 2xl:gap-8">
          <NavRouterLink label="Home" to="/" />
          <NavRouterLink label="About" to="/about" />
          <NavRouterLink label="Services" to="/services" />
          <NavRouterLink label="Team" to="/team" />
          <NavRouterLink label="Compliance Calendar" to="/calendar" />

          {/* Resources Dropdown */}
          <div className="relative" ref={resourcesRef}>
            <button
              onClick={() => setIsResourcesOpen(!isResourcesOpen)}
              className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer py-8 ${location.pathname.startsWith('/resources') ? 'text-blue-950' : 'text-gray-600 hover:text-blue-950'
                }`}
            >
              Resources
              <ChevronDown size={16} className={`transition-transform duration-200 ${isResourcesOpen ? 'rotate-180' : ''}`} />
            </button>

            {isResourcesOpen && (
              <div
                className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-white border border-gray-100 rounded-xl shadow-xl py-2 animate-in fade-in zoom-in-95 duration-200"
              >
                {resourceLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors text-left ${location.pathname === item.href ? 'bg-blue-950/5 text-blue-950' : 'text-gray-700 hover:bg-blue-950/5 hover:text-blue-950'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavRouterLink label="Contact Us" to="/contact" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => navigate('/contact')}
            className="hidden sm:block px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-white bg-blue-950 rounded-xl hover:bg-blue-900 transition-all shadow-lg shadow-blue-950/10 active:scale-95"
          >
            Book Consultation
          </button>

          <button
            onClick={toggleMenu}
            className="xl:hidden p-2 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`xl:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full bg-gray-50/30 overflow-y-auto">
          <div className="flex flex-col p-6 gap-2">
            <MobileNavRouterLink label="Home" to="/" onClick={toggleMenu} />
            <MobileNavRouterLink label="About" to="/about" onClick={toggleMenu} />
            <MobileNavRouterLink label="Services" to="/services" onClick={toggleMenu} />
            <MobileNavRouterLink label="Team" to="/team" onClick={toggleMenu} />
            <MobileNavRouterLink label="Compliance Calendar" to="/calendar" onClick={toggleMenu} />
            <MobileNavRouterLink label="Contact Us" to="/contact" onClick={toggleMenu} />
          </div>

          <div className="px-6 pb-20">
            <div className="flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm shadow-blue-950/10 overflow-hidden">
              <div className="p-4 border-b border-gray-50 bg-gray-50/50">
                <span className="text-[10px] font-black text-blue-950 uppercase tracking-[0.2em]">Resources</span>
              </div>

              <div className="divide-y divide-gray-50">
                {resourceLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={toggleMenu}
                    className={`w-full flex items-center justify-between px-5 py-4 text-sm font-bold transition-colors ${location.pathname === item.href ? 'bg-blue-950/5 text-blue-950' : 'text-gray-700 hover:bg-blue-950/5'
                      }`}
                  >
                    {item.label}
                    <ChevronRight size={16} className={location.pathname === item.href ? 'text-blue-950' : 'text-gray-400'} />
                  </Link>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                navigate('/contact');
                toggleMenu();
              }}
              className="w-full mt-8 py-5 text-center font-black text-white bg-blue-950 rounded-[2rem] shadow-xl shadow-blue-950/20 hover:bg-blue-900 transition-all active:scale-[0.98]"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavRouterLink: React.FC<{ label: string; to: string }> = ({ label, to }) => {
  const location = useLocation();
  const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <Link
      to={to}
      className={`flex flex-col items-center gap-1 group relative py-2 px-1 transition-all duration-300 ${isActive ? 'text-blue-950 font-bold' : 'text-gray-600 hover:text-blue-950 font-medium'
        }`}
    >
      <span className="text-sm tracking-wide whitespace-nowrap">{label}</span>
      {/* Animated Underline */}
      <span className={`h-[2px] bg-blue-950 transition-all duration-300 rounded-full ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-50'
        }`} />
    </Link>
  );
};

const MobileNavRouterLink: React.FC<{ label: string; to: string; onClick: () => void }> = ({ label, to, onClick }) => {
  const location = useLocation();
  const isActive = to === '/' ? location.pathname === '/' : location.pathname.startsWith(to);

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`text-lg transition-all duration-300 p-3 rounded-2xl flex items-center justify-between group ${isActive
        ? 'bg-blue-950/5 text-blue-950 font-bold border-l-4 border-blue-950'
        : 'text-gray-900 border-l-4 border-transparent hover:bg-gray-50'
        }`}
    >
      <span>{label}</span>
      {isActive && <div className="w-1.5 h-1.5 rounded-full bg-blue-950 animate-pulse" />}
    </Link>
  );
};

export default Navbar;
