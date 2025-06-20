import React, { useEffect, useRef } from 'react';
import { Award, Briefcase } from 'lucide-react';

const About = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    const elements = [titleRef.current, contentRef.current, ...statRefs.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const stats = [];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="section-title reveal-animation"
          >
            About Me
          </h2>
          <p className="section-subtitle">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={contentRef}
            className="reveal-animation"
            style={{ transitionDelay: '200ms' }}
          >
            <h3 className="text-2xl font-display font-medium mb-4">
              Creating digital experiences with passion and purpose
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
               Hi, I'm Aditya Kumar, a B.Tech student in Computer Science and Engineering with a deep passion for building impactful and efficient software solutions. I specialize in full-stack web development, particularly using technologies like React, Node.js, Express, and MongoDB.
              </p>
              <p>
                As an enthusiastic learner and a problem-solver, I enjoy turning ideas into real-world applications — from scalable web apps and real-time chat systems to data-driven dashboards and automation tools. I’ve worked on projects that involve real-time processing, background task queues, and RESTful APIs, and I’m always exploring ways to optimize performance and user experience.
              </p>
              <p>
                Currently, I’m focused on strengthening my backend development and system design skills while contributing to open-source and building my own products. I believe in clean code, collaboration, and constantly pushing the boundaries of what I can create.
              </p>
            </div>
            
            <div className="mt-8">
              <a 
                href="#contact"
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:shadow-md hover:translate-y-[-2px] active:translate-y-0 btn-hover inline-block"
              >
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <a
              href="https://github.com/aditya17-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white font-medium shadow-md hover:bg-gray-800 transition-colors btn-hover"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
              </svg>
              <span>My GitHub</span>
            </a>
            <a
              href="https://www.instagram.com/a.ditya_882/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-medium shadow-md hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition-colors btn-hover"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span>My Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
