import { useState, useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useGSAP(() => {
    experienceRef.current.forEach((exp, index) => {
      gsap.from(exp, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: exp,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  const experiences = [
    {
      role: "Frontend Intern",
      company: "T.R.U.E. Hospitals",
      location: "Remote",
      period: "Sept 2025 - Dec 2025",
      color: "from-purple-500 to-pink-500",
      description: "Built a comprehensive Hospital Management System with 40+ pages across 7 user roles, featuring real-time queue handling, patient management, and scalable state management using React Context API.",
      tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS"]
    },
    {
      role: "Tech Lead",
      company: "FiNIT - The Finance Society",
      location: "NIT Bhopal",
      period: "Sep 2024 - Present",
      color: "from-blue-500 to-cyan-500",
      description: "Led development and deployment of the official society website. Implemented Git workflow for collaborative development and optimized performance by 40%.",
      tags: ["React", "Git", "Performance Optimization"]
    }
  ];

  return (
    <section id="experience" className="min-h-screen dark:bg-black bg-white py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold bg-black dark:bg-white bg-clip-text text-transparent mb-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Experience
          </h2>
          <p className={`text-xl dark:text-gray-300 text-black max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Professional journey and contributions
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={el => (experienceRef.current[index] = el)}
              className="group"
            >
              <div className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-r ${exp.color} p-1 flex-shrink-0 self-start`}>
                    <div className="w-full h-full bg-white dark:bg-gray-900 rounded-lg flex items-center justify-center">
                      <Briefcase className="w-6 h-6 md:w-7 md:h-7 text-gray-700 dark:text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold dark:text-white text-black mb-1">
                      {exp.role}
                    </h3>
                    <p className="text-base md:text-lg font-semibold text-purple-500 dark:text-purple-400 mb-3">
                      {exp.company}
                    </p>

                    <div className="flex flex-wrap gap-4 text-sm dark:text-gray-400 text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="dark:text-gray-300 text-gray-700 leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-white/20 dark:bg-white/10 text-black dark:text-white rounded-full backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
