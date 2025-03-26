
import React, { useEffect, useRef } from 'react';
import { Award, Briefcase, Calendar } from 'lucide-react';

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

  const stats = [
    { 
      icon: <Calendar size={24} className="mb-4 text-primary/80" />,
      value: "5+",
      label: "Years Experience"
    },
    { 
      icon: <Briefcase size={24} className="mb-4 text-primary/80" />,
      value: "50+",
      label: "Projects Completed"
    },
    { 
      icon: <Award size={24} className="mb-4 text-primary/80" />,
      value: "10+",
      label: "Awards Received"
    }
  ];

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
                Hello! I'm a passionate designer and developer with a keen eye for detail and a love for creating
                beautiful, functional digital experiences. My journey in the digital world began over 5 years ago,
                and I've been honing my craft ever since.
              </p>
              <p>
                I believe that great design is not just about aesthetics, but also about solving problems and
                creating intuitive user experiences. I strive to create work that not only looks beautiful but
                also serves a purpose and delivers results.
              </p>
              <p>
                When I'm not designing or coding, you can find me exploring new technologies, reading design
                blogs, or seeking inspiration in nature and architecture.
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
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                ref={el => statRefs.current[index] = el}
                className="glass-card p-6 rounded-xl text-center flex flex-col items-center reveal-animation"
                style={{ transitionDelay: `${300 + (index * 100)}ms` }}
              >
                {stat.icon}
                <span className="text-3xl font-bold mb-1">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
