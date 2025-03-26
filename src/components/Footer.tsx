
import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-8 hover:shadow-md transition-all hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
          
          <div className="text-center">
            <h3 className="text-xl font-display font-medium mb-2">Portfolio</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Creating beautiful digital experiences through thoughtful design and development.
            </p>
          </div>
          
          <div className="h-px w-24 bg-border my-6"></div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
