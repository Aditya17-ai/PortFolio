
import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = [titleRef.current, subtitleRef.current, buttonRef.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 hero-gradient">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <span className="inline-block px-3 py-1 mb-6 text-xs font-medium bg-secondary rounded-full animate-fade-in">
          Welcome to my portfolio
        </span>
        
        <h1 
          ref={titleRef}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 reveal-animation"
          style={{ transitionDelay: '200ms' }}
        >
          <span className="block">Creative</span>
          <span className="block">Designer & Developer</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 reveal-animation"
          style={{ transitionDelay: '400ms' }}
        >
          I create elegant, functional, and memorable digital experiences that leave a lasting impression.
        </p>
        
        <a 
          ref={buttonRef}
          href="#projects"
          className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:shadow-lg hover:translate-y-[-2px] active:translate-y-0 reveal-animation btn-hover"
          style={{ transitionDelay: '600ms' }}
        >
          View My Work
        </a>
        
        <a 
          href="#about" 
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm text-muted-foreground hover:text-foreground transition-colors animate-fade-in"
          style={{ animationDelay: '1.2s' }}
        >
          <span className="mb-2">Scroll Down</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
