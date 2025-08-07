import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold text-foreground">Finnthelabel</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" asChild>
                <a href="https://salescentri.com/get-started/free-trial?utm_source=finnthelabel.com&utm_medium=header&utm_campaign=partner_network">
                  Free Trial
                </a>
              </Button>
              <Button className="btn-hero" asChild>
                <a href="https://salescentri.com/get-started/book-demo?utm_source=finnthelabel.com&utm_medium=header&utm_campaign=partner_network">
                  Book Demo
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-muted"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden animate-fade-in-up">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-primary hover:bg-muted'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 px-3 pt-4">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://salescentri.com/get-started/free-trial?utm_source=finnthelabel.com&utm_medium=mobile_menu&utm_campaign=partner_network">
                      Free Trial
                    </a>
                  </Button>
                  <Button className="btn-hero w-full" asChild>
                    <a href="https://salescentri.com/get-started/book-demo?utm_source=finnthelabel.com&utm_medium=mobile_menu&utm_campaign=partner_network">
                      Book Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-foreground text-background">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="text-xl font-bold">Finnthelabel</span>
              </div>
              <p className="text-background/80 mb-4">
                Leading CRM implementation consultancy helping businesses optimize their sales processes.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin size={16} />
                  <span>Raleigh, NC</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone size={16} />
                  <span>(919) 555-0123</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail size={16} />
                  <span>hello@finnthelabel.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/features" className="hover:text-background transition-colors">Features</Link></li>
                <li><Link to="/pricing" className="hover:text-background transition-colors">Pricing</Link></li>
                <li><Link to="/about" className="hover:text-background transition-colors">About Us</Link></li>
                <li><Link to="/blog" className="hover:text-background transition-colors">Blog</Link></li>
                <li><Link to="/faq" className="hover:text-background transition-colors">FAQ</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="https://salescentri.com/solutions/psa-suite?utm_source=finnthelabel.com&utm_medium=footer&utm_campaign=partner_network" className="hover:text-background transition-colors">CRM Setup</a></li>
                <li><a href="https://salescentri.com/services/data-enrichment?utm_source=finnthelabel.com&utm_medium=footer&utm_campaign=partner_network" className="hover:text-background transition-colors">Data Migration</a></li>
                <li><a href="https://salescentri.com/solutions/by-use-case/sdr-teams?utm_source=finnthelabel.com&utm_medium=footer&utm_campaign=partner_network" className="hover:text-background transition-colors">Sales Process Optimization</a></li>
                <li><a href="https://salescentri.com/solutions/psa-suite/integrations?utm_source=finnthelabel.com&utm_medium=footer&utm_campaign=partner_network" className="hover:text-background transition-colors">System Integration</a></li>
                <li><a href="https://salescentri.com/services/sdr-service?utm_source=finnthelabel.com&utm_medium=footer&utm_campaign=partner_network" className="hover:text-background transition-colors">Training & Support</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-background/80">
                <li><a href="https://salescentri.com/contact?utm_source=finnthelabel.com&utm_medium=footer&utm_campaign=partner_network" className="hover:text-background transition-colors">Contact Us</a></li>
                <li><a href="https://salescentri.com/contact/support-request?utm_source=finnthelabel.com&utm_medium=footer&utm_campaign=partner_network" className="hover:text-background transition-colors">Support Center</a></li>
                <li><a href="https://salescentri.com/docs/user-guide?utm_source=finnthelabel.com&utm_medium=footer&utm_campaign=partner_network" className="hover:text-background transition-colors">Documentation</a></li>
                <li><a href="https://salescentri.com/trust/security-privacy?utm_source=finnthelabel.com&utm_medium=footer&utm_campaign=partner_network" className="hover:text-background transition-colors">Security & Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/60 text-sm">
              © 2024 Finnthelabel Solutions. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <a href="https://salescentri.com?utm_source=finnthelabel.com&utm_medium=footer&utm_campaign=partner_network" 
                 className="text-background/60 hover:text-background text-sm transition-colors">
                Powered by Sales Intelligence Platform
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;