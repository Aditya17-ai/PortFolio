import { useState, useEffect } from 'react';
import { Menu, X, Download, Eye } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 border-b border-primary/10',
      isScrolled ? 'bg-gradient-to-r from-white/80 via-blue-50/80 to-purple-100/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    )}>
      {/* Animated gradient border */}
      <div className="absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r from-primary via-purple-400 to-blue-400 animate-gradient-x" />
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between relative z-10">
        <a href="#home" className="group">
          <span className="text-2xl font-display font-bold tracking-widest text-primary group-hover:scale-105 group-hover:text-purple-600 transition-transform duration-200">Portfolio</span>
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "relative text-sm font-semibold text-foreground/80 hover:text-primary transition-colors px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 group",
                window.location.hash === link.href ? 'text-primary' : ''
              )}
            >
              <span className="relative z-10 flex items-center gap-1">
                {/* Example icon for each link (customize as needed) */}
                {link.name === 'Home' && <span>🏠</span>}
                {link.name === 'About' && <span>👤</span>}
                {link.name === 'Projects' && <span>💼</span>}
                {link.name === 'Skills' && <span>🛠️</span>}
                {link.name === 'Contact' && <span>✉️</span>}
                {link.name}
              </span>
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-primary to-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </a>
          ))}
          {/* Call-to-Action Button */}
          <a
            href="/AdityaKumarCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-purple-500 text-white font-semibold flex items-center gap-2 shadow hover:scale-105 hover:shadow-2xl transition-all border border-primary/20"
          >
            <Eye size={18} /> View CV
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button 
          className={cn(
            "md:hidden p-2 rounded-full border border-primary/10 bg-white/70 shadow hover:bg-primary/10 hover:text-primary transition-all focus:outline-none focus:ring-2 focus:ring-primary/30",
            isMobileMenuOpen ? "scale-110 ring-2 ring-primary/30" : ""
          )}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      <div className={cn(
        'fixed inset-0 top-16 bg-gradient-to-br from-white/90 via-blue-50/90 to-purple-100/90 z-40 transform transition-transform duration-300 ease-in-out md:hidden shadow-lg',
        isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
      )}>
        <nav className="flex flex-col items-center justify-center h-full space-y-8 animate-fade-in">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl font-bold text-primary hover:text-purple-600 transition-colors flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {/* Example icon for each link (customize as needed) */}
              {link.name === 'Home' && <span>🏠</span>}
              {link.name === 'About' && <span>👤</span>}
              {link.name === 'Projects' && <span>💼</span>}
              {link.name === 'Skills' && <span>🛠️</span>}
              {link.name === 'Contact' && <span>✉️</span>}
              {link.name}
            </a>
          ))}
          <a
            href="/AdityaKumarCV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-purple-500 text-white font-semibold flex items-center gap-2 shadow hover:scale-105 hover:shadow-2xl transition-all border border-primary/20"
          >
            <Eye size={20} /> View CV
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
