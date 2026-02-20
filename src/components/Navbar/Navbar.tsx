import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { COMPANY_NAME } from '../../constant';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1720px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 md:gap-3">
          <img src="/src/assets/image.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight whitespace-nowrap">
            {COMPANY_NAME}<span className="text-indigo-600">.</span>
          </span>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink label="Home" href="#" />
          <NavLink label="About" href="#about" />
          <NavLink label="Services" href="#services" />
          <NavLink label="Connect Us" href="#contact" />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => window.location.href = '#contact'}
            className="hidden sm:block px-4 md:px-6 py-2 md:py-2.5 text-xs md:text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 active:scale-95"
          >
            Book Consultation
          </button>

          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-white z-40 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-6 gap-6">
          <MobileNavLink label="Home" href="#" onClick={toggleMenu} />
          <MobileNavLink label="About" href="#about" onClick={toggleMenu} />
          <MobileNavLink label="Services" href="#services" onClick={toggleMenu} />
          <MobileNavLink label="Connect Us" href="#contact" onClick={toggleMenu} />

          <button
            onClick={() => {
              window.location.href = '#contact';
              toggleMenu();
            }}
            className="w-full py-4 text-center font-bold text-white bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-100"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ label: string; href: string }> = ({ label, href }) => (
  <a
    href={href}
    className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
  >
    {label}
  </a>
);

const MobileNavLink: React.FC<{ label: string; href: string; onClick: () => void }> = ({ label, href, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors"
  >
    {label}
  </a>
);

export default Navbar;
