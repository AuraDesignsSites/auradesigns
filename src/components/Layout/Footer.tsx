import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import { scrollToTop } from '@/hooks/use-scroll-to-top';
import logo from '@/assets/auralogo-transparentbg.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img src={logo} alt="Aura Designs" className="h-8 w-auto" />
              <span className="font-normal text-lg">Aura Designs</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Creating high-performing websites for small businesses and professionals using modern development workflows.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:auradesigns.team@gmail.com" className="hover:text-primary transition-colors">
                  auradesigns.team@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+1-555-123-4567" className="hover:text-primary transition-colors">
                  (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-x-1 gap-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={scrollToTop}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get In Touch</h3>
            <p className="text-muted-foreground mb-4">
              Ready to transform your digital presence? Let's discuss your project.
            </p>
            <Link to="/contact" onClick={scrollToTop} className="inline-block btn-ghost text-sm px-6 py-3">
              Start a Project
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © {currentYear} Aura Designs. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;