import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    quickLinks: [
      { name: 'Home', href: '#home' },
      { name: 'About Us', href: '#about' },
      { name: 'Projects', href: '#projects' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Contact', href: '#contact' },
    ],
    propertyTypes: [
      { name: 'N.A. Plots', href: '#projects' },
      { name: 'Farm House Plots', href: '#projects' },
      { name: 'Residential', href: '#projects' },
      { name: 'Commercial', href: '#projects' },
    ],
    projects: [
      { name: 'Mount Castle', href: '#projects' },
      { name: 'Royal Vista', href: '#projects' },
      { name: 'Royal Casa', href: '#projects' },
      { name: 'Royal Greens', href: '#projects' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/majesticrealties', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/majesticrealtiespune', label: 'Instagram' },
    { icon: Twitter, href: 'https://x.com/majesticrealti', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/majesticrealties/', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://www.youtube.com/channel/UCfIYfQweloVUxZikAFsQjXA', label: 'YouTube' },
  ];

  return (
    <footer className="bg-dark relative">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-accent to-accent-light py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark mb-2">
                Ready to Invest in Your Future?
              </h3>
              <p className="text-dark/70">
                Let us help you find the perfect property for your needs.
              </p>
            </div>
            <a href="#contact" className="bg-dark text-white px-8 py-4 rounded-full font-semibold hover:bg-primary transition-colors shadow-lg">
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <a href="#home" className="flex items-center gap-2 mb-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <span className="text-dark font-bold text-2xl">M</span>
                </div>
                <span className="text-white font-serif text-2xl font-semibold">
                  Majestic Realties
                </span>
              </a>
              <p className="text-white/60 mb-6 max-w-sm">
                Since 2014, Majestic Realties has been shaping exceptional living spaces. 
                Explore our portfolio and let's build your vision together.
              </p>
              <div className="space-y-3">
                <a href="tel:+917843077794" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                  <Phone size={18} className="text-accent" />
                  +91 78430 77794
                </a>
                <a href="mailto:zakki@majesticrealties.com" className="flex items-center gap-3 text-white/60 hover:text-accent transition-colors">
                  <Mail size={18} className="text-accent" />
                  zakki@majesticrealties.com
                </a>
                <div className="flex items-start gap-3 text-white/60">
                  <MapPin size={18} className="text-accent shrink-0 mt-1" />
                  <span>3rd Floor, Bandal Spaces, Paud Rd., Kothrud, Pune</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.quickLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/60 hover:text-accent transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Property Types */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Property Types</h4>
              <ul className="space-y-3">
                {footerLinks.propertyTypes.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/60 hover:text-accent transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Projects */}
            <div>
              <h4 className="text-white font-semibold text-lg mb-6">Our Projects</h4>
              <ul className="space-y-3">
                {footerLinks.projects.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/60 hover:text-accent transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center text-white/60 hover:bg-accent hover:text-dark transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            <p className="text-white/40 text-sm text-center">
              © 2026 Majestic Realties. All rights reserved. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500 fill-current" /> in Pune
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-dark rounded-full flex items-center justify-center shadow-lg z-40 hover:bg-accent-light transition-colors"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;
