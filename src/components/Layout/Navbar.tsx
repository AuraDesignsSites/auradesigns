import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { scrollToTop } from '@/hooks/use-scroll-to-top';
import logo from '@/assets/auralogo-transparentbg.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 navbar-glass" style={{ background: 'transparent' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={scrollToTop}>
            <img src={logo} alt="Aura Designs" className="h-12 w-auto" loading="eager" decoding="async" />
            <span className={`font-normal text-xl transition-colors ${isScrolled ? 'text-white' : 'text-foreground'}`}>Aura Designs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={scrollToTop}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.href) ? 'text-primary' : isScrolled ? 'text-white' : 'text-muted-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="btn-hero">
              <Link to="/contact" onClick={scrollToTop}>Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center space-y-1 group"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* Animated Hamburger Lines */}
            <div className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`font-medium transition-colors hover:text-primary ${
                    isActive(link.href) ? 'text-primary' : isScrolled ? 'text-white' : 'text-muted-foreground'
                  }`}
                  onClick={() => {
                    setIsOpen(false);
                    scrollToTop();
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="btn-hero mt-4">
                <Link to="/contact" onClick={scrollToTop}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;