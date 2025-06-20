import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";

type SkillCategory = {
  name: string;
  skills: {
    name: string;
    level: number;
  }[];
};

const Skills = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const categoryRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    const elements = [titleRef.current, ...categoryRefs.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const skillCategories: SkillCategory[] = [
    {
      name: 'Frontend Development',
      skills: [
        { name: 'HTML & CSS', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'TailwindCSS', level: 90 },
      ],
    },
    {
      name: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'Spring Boot', level: 70 },
        { name: 'MongoDB', level: 70 },
        { name: 'SQL', level: 65 },
        { name: 'REST API', level: 85 },
      ],
    },
    {
      name: 'Tools & Others',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'UI/UX Design', level: 80 },
        { name: 'Responsive Design', level: 90 },
        { name: 'Testing', level: 70 },
        { name: 'Performance Optimization', level: 75 },
      ],
    },
  ];

  const skillIconMap: Record<string, string> = {
    'HTML & CSS': '🌐',
    'JavaScript': '🟨',
    'React': '⚛️',
    'TypeScript': '🔷',
    'TailwindCSS': '💨',
    'Node.js': '🟩',
    'Express': '🚂',
    'Spring Boot': '🌱',
    'MongoDB': '🍃',
    'SQL': '🗄️',
    'REST API': '🔗',
    'Git & GitHub': '🐙',
    'UI/UX Design': '🎨',
    'Responsive Design': '📱',
    'Testing': '🧪',
    'Performance Optimization': '⚡',
  };

  // Add a description for each skill
  const skillDescriptions: Record<string, string> = {
    'HTML & CSS': 'Markup and styling for building web pages.',
    'JavaScript': 'Dynamic scripting language for web development.',
    'React': 'A JavaScript library for building user interfaces.',
    'TypeScript': 'Typed superset of JavaScript for scalable apps.',
    'TailwindCSS': 'Utility-first CSS framework for rapid UI development.',
    'Node.js': 'JavaScript runtime for server-side development.',
    'Express': 'Minimal and flexible Node.js web application framework.',
    'Spring Boot': 'Java-based framework for building robust backend applications.',
    'MongoDB': 'NoSQL database for modern applications.',
    'SQL': 'Structured Query Language for relational databases.',
    'REST API': 'Architectural style for networked applications.',
    'Git & GitHub': 'Version control and collaboration platform.',
    'UI/UX Design': 'Designing user interfaces and experiences.',
    'Responsive Design': 'Building layouts that adapt to any device.',
    'Testing': 'Ensuring code quality and reliability.',
    'Performance Optimization': 'Improving speed and efficiency of apps.',
  };

  return (
    <section id="skills" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="section-title reveal-animation"
          >
            My Skills
          </h2>
          <p className="section-subtitle">What I bring to the table</p>
        </div>

        <TooltipProvider>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.name}
              ref={el => categoryRefs.current[index] = el}
              className="glass-card rounded-xl p-6 reveal-animation"
              style={{ transitionDelay: `${200 + (index * 150)}ms` }}
            >
              <h3 className="text-xl font-display font-medium mb-6 text-center">
                {category.name}
              </h3>
              <div className="space-y-4 flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <Tooltip key={skill.name}>
                    <TooltipTrigger asChild>
                      <button
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 shadow hover:bg-primary/90 hover:text-white transition-colors cursor-pointer border border-primary/20 text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary"
                        type="button"
                      >
                        <span className="text-xl">{skillIconMap[skill.name] || '🔹'}</span>
                        <span>{skill.name}</span>
                      </button>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      {skillDescriptions[skill.name] || 'No description available.'}
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          ))}
        </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default Skills;
