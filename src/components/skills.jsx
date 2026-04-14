import { useState, useEffect, useRef } from 'react';
import { Code2, Database, Wrench, Brain } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useGSAP(() => {
    skillsRef.current.forEach((skill, index) => {
      gsap.from(skill, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.1,
        scrollTrigger: {
          trigger: skill,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "C/C++", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "HTML", level: 95 },
        { name: "SQL", level: 80 },
      ]
    },
    {
      title: "Frameworks",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Cursor", level: 85 },
        { name: "Microsoft Visual Studio", level: 80 },
      ]
    },
    {
      title: "CourseWork",
      icon: Brain,
      color: "from-indigo-500 to-purple-500",
      skills: [
        { name: "OOPs", level: 85 },
        { name: "DBMS", level: 80 },
        { name: "Operating System", level: 80 },
        { name: "Data Structure & Algorithms", level: 90 },
      ]
    },
  ];

  return (
    <section id="skills" className="min-h-screen dark:bg-black bg-white py-20 px-6  relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold bg-black dark:bg-white bg-clip-text text-transparent mb-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Skills & Expertise
          </h2>
          <p className={`text-xl dark:text-gray-300 text-black max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid - 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8  mx-auto">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;

            return (
              <div
                key={index}
                ref={el => (skillsRef.current[index] = el)}
                className="group"
              >
                <div className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-1 mb-6`}>
                    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-gray-700 dark:text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold dark:text-white text-black mb-6">
                    {category.title}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-base dark:text-gray-300 text-gray-700 font-medium">
                            {skill.name}
                          </span>
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <div
                                key={i}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${i < Math.round(skill.level / 20)
                                  ? `bg-gradient-to-r ${category.color}`
                                  : 'bg-gray-300 dark:bg-gray-700'
                                  }`}
                                style={{
                                  transitionDelay: `${index * 100 + skillIndex * 50 + i * 50}ms`
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
