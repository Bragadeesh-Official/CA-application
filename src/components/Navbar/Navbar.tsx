import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, ExternalLink } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { COMPANY_NAME } from '../../constant';

interface SubItem {
  label: string;
  href: string;
  subItems?: SubItem[];
}

interface Category {
  label: string;
  href: string;
  hasSubmenu?: boolean;
  subItems?: SubItem[];
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isKnowledgeOpen, setIsKnowledgeOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [activeDeepMenu, setActiveDeepMenu] = useState<string | null>(null);

  // Mobile accordion states
  const [openMobileSections, setOpenMobileSections] = useState<string[]>([]);
  const [activeMobileSubMenu, setActiveMobileSubMenu] = useState<string | null>(null);

  const knowledgeRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

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
    }
  };

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => scrollToAnchor(location.hash), 100);
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (knowledgeRef.current && !knowledgeRef.current.contains(event.target as Node)) {
        setIsKnowledgeOpen(false);
        setActiveSubMenu(null);
        setActiveDeepMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setIsKnowledgeOpen(false);
    setActiveSubMenu(null);
    setActiveDeepMenu(null);
  }, [location.pathname]);

  const knowledgeCategories: Category[] = [
    { label: 'Bulletins', href: '/#knowledge-bank' },
    { label: 'Utilities', href: '/#knowledge-bank' },
    {
      label: 'Links',
      href: '/#knowledge-bank',
      hasSubmenu: true,
      subItems: [
        { label: 'Quick Links', href: '/resources/quick-link' },
        { label: 'Important Links', href: '/resources/important-link' },
        { label: 'GST/VAT Links', href: '/resources/gst-vat-link' },
        { label: 'Ease Of Doing Business', href: '/resources/ease-of-doing-business' },
      ]
    },
    {
      label: 'Acts',
      href: '/#knowledge-bank',
      hasSubmenu: true,
      subItems: [
        { label: 'Direct Tax', href: '/#knowledge-bank' },
        { label: 'Indirect Tax', href: '/#knowledge-bank' },
        { label: 'Corporate Laws', href: '/#knowledge-bank' },
        { label: 'VAT Laws', href: '/#knowledge-bank' },
        { label: 'Other Statutes', href: '/#knowledge-bank' },
        { label: 'GST Laws', href: '/#knowledge-bank' },
      ]
    },
    {
      label: 'Rules',
      href: '/#knowledge-bank',
      hasSubmenu: true,
      subItems: [
        { label: 'Direct Tax Rules', href: '/#knowledge-bank' },
        { label: 'Indirect Tax Rules', href: '/#knowledge-bank' },
        { label: 'Corporate Laws Rules', href: '/#knowledge-bank' },
        { label: 'VAT Laws Rules', href: '/#knowledge-bank' },
        { label: 'Other Statutes', href: '/#knowledge-bank' },
        { label: 'GST Rules', href: '/#knowledge-bank' },
      ]
    },
    {
      label: 'Forms',
      href: '/#knowledge-bank',
      hasSubmenu: true,
      subItems: [
        { label: 'Income Tax Forms', href: '/#knowledge-bank' },
        { label: 'ROC Forms (Cos Act, 2013)', href: '/#knowledge-bank' },
        { label: 'ROC Forms (Cos Act, 1956)', href: '/#knowledge-bank' },
        { label: 'Income Declaration Forms', href: '/#knowledge-bank' },
        { label: 'Wealth Tax Forms', href: '/#knowledge-bank' },
        { label: 'Service Tax Forms', href: '/#knowledge-bank' },
        { label: 'Companies Unpaid Dividend Forms', href: '/#knowledge-bank' },
        { label: 'NBFCs Forms', href: '/#knowledge-bank' },
        { label: 'LLP Winding up', href: '/#knowledge-bank' },
        { label: 'FEMA Forms', href: '/#knowledge-bank' },
        { label: 'LLP Forms', href: '/#knowledge-bank' },
        {
          label: 'CGST Forms',
          href: '/#knowledge-bank',
          subItems: [
            { label: 'Accounts and Records', href: '/#knowledge-bank' },
            { label: 'GST Forms', href: '/#knowledge-bank' },
            { label: 'Advance Ruling', href: '/#knowledge-bank' },
            { label: 'Appeals and Revision', href: '/#knowledge-bank' },
            { label: 'Assessment and Audit', href: '/#knowledge-bank' },
            { label: 'Composition', href: '/#knowledge-bank' },
            { label: 'Demands and Recovery', href: '/#knowledge-bank' },
            { label: 'Input Tax Credit', href: '/#knowledge-bank' },
            { label: 'Inspection, Search and Seizure', href: '/#knowledge-bank' },
            { label: 'Offences and Penalties', href: '/#knowledge-bank' },
            { label: 'Payment of Tax', href: '/#knowledge-bank' },
            { label: 'Refund', href: '/#knowledge-bank' },
            { label: 'Registration', href: '/#knowledge-bank' },
            { label: 'Returns', href: '/#knowledge-bank' },
            { label: 'Transitional Provisions', href: '/#knowledge-bank' },
          ]
        },
      ]
    },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1720px] mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 md:gap-3">
          <img src="/src/assets/image.png" alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          <span className="text-xl md:text-2xl font-bold text-gray-900 tracking-tight whitespace-nowrap">
            {COMPANY_NAME}<span className="text-indigo-600">.</span>
          </span>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          <NavRouterLink label="Home" to="/" />
          <NavLink label="About" onClick={() => handleNavClick('/#about')} />
          <NavLink label="Services" onClick={() => handleNavClick('/#services')} />

          {/* Knowledge Bank Dropdown */}
          <div className="relative" ref={knowledgeRef}>
            <button
              onClick={() => setIsKnowledgeOpen(!isKnowledgeOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer py-8"
            >
              Knowledge Bank
              <ChevronDown size={16} className={`transition-transform duration-200 ${isKnowledgeOpen ? 'rotate-180' : ''}`} />
            </button>

            {isKnowledgeOpen && (
              <div
                className="absolute top-20 left-1/2 -translate-x-1/2 w-64 bg-white border border-gray-100 rounded-xl shadow-xl py-2 animate-in fade-in zoom-in-95 duration-200"
              >
                {knowledgeCategories.map((item) => (
                  <div
                    key={item.label}
                  >
                    <button
                      onClick={() => {
                        if (item.hasSubmenu) {
                          setActiveSubMenu(activeSubMenu === item.label ? null : item.label);
                          setActiveDeepMenu(null);
                        } else {
                          handleNavClick(item.href);
                          setIsKnowledgeOpen(false);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-4 py-3 text-sm transition-colors text-left ${activeSubMenu === item.label ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700 hover:bg-indigo-50 hover:text-indigo-600'}`}
                    >
                      {item.label}
                      {item.hasSubmenu ? (
                        <ChevronRight size={14} className={`transition-transform ${activeSubMenu === item.label ? 'rotate-90 lg:rotate-0 text-indigo-500' : 'text-gray-400'}`} />
                      ) : (
                        <ExternalLink size={14} className="opacity-0 group-hover/item:opacity-100" />
                      )}
                    </button>

                    {item.hasSubmenu && activeSubMenu === item.label && (
                      <div className="lg:absolute lg:left-full lg:top-0 lg:ml-1 w-full lg:w-64 bg-white lg:border lg:border-gray-100 rounded-xl lg:shadow-xl py-2 animate-in fade-in slide-in-from-left-2 duration-200">
                        {item.subItems?.map((sub) => (
                          <div
                            key={sub.label}
                          >
                            <button
                              onClick={() => {
                                if (sub.subItems) {
                                  setActiveDeepMenu(activeDeepMenu === sub.label ? null : sub.label);
                                } else {
                                  handleNavClick(sub.href);
                                  setIsKnowledgeOpen(false);
                                  setActiveSubMenu(null);
                                }
                              }}
                              className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors text-left ${activeDeepMenu === sub.label ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-indigo-50 hover:text-indigo-600'}`}
                            >
                              <span className="flex-1 pr-2">{sub.label}</span>
                              {sub.subItems ? (
                                <ChevronRight size={12} className={`transition-transform ${activeDeepMenu === sub.label ? 'rotate-90 lg:rotate-0 text-indigo-500' : 'text-gray-300'}`} />
                              ) : null}
                            </button>

                            {sub.subItems && activeDeepMenu === sub.label && (
                              <div
                                className="lg:absolute lg:left-full lg:top-0 lg:ml-1 w-full lg:w-64 bg-white lg:border lg:border-gray-100 rounded-xl lg:shadow-xl py-2 animate-in fade-in slide-in-from-left-2 duration-200"
                              >
                                {sub.subItems.map((deep) => (
                                  <button
                                    key={deep.label}
                                    onClick={() => {
                                      handleNavClick(deep.href);
                                      setIsKnowledgeOpen(false);
                                      setActiveSubMenu(null);
                                      setActiveDeepMenu(null);
                                    }}
                                    className="w-full px-4 py-2 text-sm text-gray-500 hover:bg-indigo-50 hover:text-indigo-600 transition-colors text-left"
                                  >
                                    {deep.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <NavRouterLink label="Team" to="/team" />
          <NavLink label="Connect Us" onClick={() => handleNavClick('/#contact')} />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <button
            onClick={() => handleNavClick('/#contact')}
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
        <div className="flex flex-col h-full bg-gray-50/30 overflow-y-auto">
          <div className="flex flex-col p-6 gap-2">
            <MobileNavRouterLink label="Home" to="/" onClick={toggleMenu} />
            <MobileNavLink label="About" onClick={() => { handleNavClick('/#about'); toggleMenu(); }} />
            <MobileNavLink label="Services" onClick={() => { handleNavClick('/#services'); toggleMenu(); }} />
            <MobileNavRouterLink label="Team" to="/team" onClick={toggleMenu} />
            <MobileNavLink label="Connect Us" onClick={() => { handleNavClick('/#contact'); toggleMenu(); }} />
          </div>

          <div className="px-6 pb-20">
            <div className="flex flex-col bg-white rounded-3xl border border-gray-100 shadow-sm shadow-indigo-100/20 overflow-hidden">
              <div className="p-4 border-b border-gray-50 bg-gray-50/50">
                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-[0.2em]">Knowledge Bank</span>
              </div>

              <div className="divide-y divide-gray-50">
                {knowledgeCategories.map((item) => (
                  <div key={item.label} className="group">
                    <button
                      onClick={() => {
                        if (item.hasSubmenu) {
                          setOpenMobileSections(prev =>
                            prev.includes(item.label) ? prev.filter(s => s !== item.label) : [...prev, item.label]
                          );
                        } else {
                          handleNavClick(item.href);
                          toggleMenu();
                        }
                      }}
                      className="w-full flex items-center justify-between px-5 py-4 text-sm font-bold text-gray-700 hover:bg-indigo-50/30 transition-colors"
                    >
                      {item.label}
                      {item.hasSubmenu && (
                        <ChevronRight
                          size={16}
                          className={`text-gray-400 transition-transform duration-300 ${openMobileSections.includes(item.label) ? 'rotate-90 text-indigo-600' : ''}`}
                        />
                      )}
                    </button>

                    {item.hasSubmenu && openMobileSections.includes(item.label) && (
                      <div className="bg-gray-50/50 flex flex-col p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-300">
                        {item.subItems?.map((sub) => (
                          <div key={sub.label} className="flex flex-col">
                            <button
                              onClick={() => {
                                if (sub.subItems) {
                                  setActiveMobileSubMenu(activeMobileSubMenu === sub.label ? null : sub.label);
                                } else {
                                  handleNavClick(sub.href);
                                  toggleMenu();
                                }
                              }}
                              className={`w-full flex items-center justify-between px-4 py-3 text-sm font-semibold rounded-xl transition-all ${activeMobileSubMenu === sub.label
                                  ? 'bg-white text-indigo-600 shadow-sm'
                                  : 'text-gray-600 hover:bg-white/60'
                                }`}
                            >
                              {sub.label}
                              {sub.subItems && (
                                <ChevronRight
                                  size={14}
                                  className={`transition-transform duration-300 ${activeMobileSubMenu === sub.label ? 'rotate-90' : ''}`}
                                />
                              )}
                            </button>

                            {sub.subItems && activeMobileSubMenu === sub.label && (
                              <div className="grid grid-cols-1 gap-1 pl-4 mt-1 py-1 animate-in fade-in slide-in-from-left-2 duration-300">
                                {sub.subItems.map((deep) => (
                                  <button
                                    key={deep.label}
                                    onClick={() => {
                                      handleNavClick(deep.href);
                                      toggleMenu();
                                    }}
                                    className="w-full px-4 py-2 text-[13px] font-medium text-gray-500 hover:text-indigo-600 border-l-2 border-gray-100 hover:border-indigo-400 transition-all text-left"
                                  >
                                    {deep.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                handleNavClick('/#contact');
                toggleMenu();
              }}
              className="w-full mt-8 py-5 text-center font-black text-white bg-indigo-600 rounded-[2rem] shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all active:scale-[0.98]"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
  >
    {label}
  </button>
);

const NavRouterLink: React.FC<{ label: string; to: string }> = ({ label, to }) => (
  <Link
    to={to}
    className="flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors cursor-pointer"
  >
    {label}
  </Link>
);

const MobileNavLink: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors text-left"
  >
    {label}
  </button>
);

const MobileNavRouterLink: React.FC<{ label: string; to: string; onClick: () => void }> = ({ label, to, onClick }) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-2xl font-bold text-gray-900 hover:text-indigo-600 transition-colors"
  >
    {label}
  </Link>
);

export default Navbar;
