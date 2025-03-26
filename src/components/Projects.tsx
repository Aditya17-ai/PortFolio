
import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '@/lib/utils';

type Project = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    live?: string;
    github?: string;
  };
};

const Projects = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    const elements = [titleRef.current, ...projectRefs.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const projects: Project[] = [
    {
      title: 'BrainBrawl',
      description: 'A full-featured Quiz Web Application built with React, Node.js, and MongoDB. Features include product search, cart management, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80',
      tags: ['React', 'Node.js', 'Express.js', 'Socket.io'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and TailwindCSS. Features smooth animations, dynamic content loading, and contact form.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80',
      tags: ['React', 'TailwindCSS', 'Framer Motion'],
      links: {
        live: '#',
        github: '#',
      },
    },
    {
      title: 'Task Management App',
      description: 'A productivity app that helps users manage tasks, set deadlines, and track progress. Features include drag-and-drop organization, reminders, and data visualization.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80',
      tags: ['TypeScript', 'React', 'Firebase', 'ChartJS'],
      links: {
        live: '#',
        github: '#',
      },
    },
  ];

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="section-title reveal-animation"
          >
            My Projects
          </h2>
          <p className="section-subtitle">Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              ref={el => projectRefs.current[index] = el}
              className={cn(
                "glass-card rounded-xl overflow-hidden group hover:shadow-xl transition-all duration-300 reveal-animation",
                "transform hover:-translate-y-2"
              )}
              style={{ transitionDelay: `${200 + (index * 100)}ms` }}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-secondary rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-display font-medium mb-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center space-x-3">
                  {project.links.live && (
                    <a 
                      href={project.links.live}
                      className="text-sm flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  
                  {project.links.github && (
                    <a 
                      href={project.links.github}
                      className="text-sm flex items-center gap-1 text-foreground hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
