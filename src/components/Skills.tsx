
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

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
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary transition-all duration-1000 ease-out origin-left scale-x-0 active:scale-x-100"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
