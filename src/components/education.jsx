import { useState, useEffect } from 'react';
import { GraduationCap, Award, Calendar, MapPin, TrendingUp, Star } from 'lucide-react';
import schollImg from '../assets/school.png';
import manitLogo from '../assets/manitLogo.jpg';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function EducationJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const cardsRef = useRef([]);
  const nodeRefs = useRef([]);

  useGSAP(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;
      gsap.from(card, {
        y: 100,
        opacity: 0,
        duration: 2,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',

        },
      });
    });

    nodeRefs.current.forEach((node, index) => {
      if (!node) return;
      gsap.from(node, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: node,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, []);

  const education = [
    {
      title: "Bachelor of Technology (B.Tech)",
      year: "Aug 2023 - Present",
      school: "Maulana Azad National Institute of Technology (MANIT), Bhopal",
      image: manitLogo,
      description: "Pursuing B.Tech with CGPA 8.98/10, focusing on Computer Science and Engineering.",
      grade: "CGPA: 8.98/10",
      color: "from-purple-500 to-pink-500",
      icon: GraduationCap,
      status: "current",
      achievements: ["Tech Lead at FiNIT", "CodeChef Max Rating: 1422", "Smart India Hackathon 2024"]
    },
    {
      title: "Senior Secondary Education (CBSE)",
      year: "April 2021 - May 2022",
      school: "Jesus and Mary Academy, Darbhanga, Bihar",
      image: schollImg,
      description: "Completed 12th grade with 94.6%, specializing in Physics, Chemistry, and Mathematics.",
      grade: "94.6%",
      color: "from-blue-500 to-cyan-500",
      icon: Award,
      status: "completed",
      achievements: ["PCM Excellence", "Top Performer", "Academic Excellence"]
    },
    {
      title: "Secondary Education (CBSE)",
      year: "2019 - 2020",
      school: "Jesus and Mary Academy, Darbhanga, Bihar",
      image: schollImg,
      description: "Completed 10th grade with 96.6%, demonstrating strong academic foundation.",
      grade: "96.6%",
      color: "from-green-500 to-emerald-500",
      icon: Star,
      status: "completed",
      achievements: ["Academic Excellence", "School Topper", "Perfect Attendance"]
    },
  ];

  return (
    <section id="education" className="min-h-screen dark:bg-black py-20 px-6 md:px-20 relative overflow-hidden">


      <div className="relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-bold bg-black dark:bg-white bg-clip-text text-transparent mb-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            My Education Journey
          </h2>
          <p className={`text-xl dark:text-gray-300 text-black max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            A timeline of academic excellence and continuous learning
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Central Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-green-500 rounded-full"></div>

              {education.map((step, index) => {
                const IconComponent = step.icon;
                const isLeft = index % 2 === 0;
                const isActive = activeIndex === index;

                return (
                  <div
                    key={index}
                    className={`relative mb-16 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                    style={{ transitionDelay: `${index * 200}ms` }}
                  >
                    {/* Timeline Node */}
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-4 dark:border-white border-black shadow-2xl cursor-pointer hover:scale-110 ${step.status === 'current'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse'
                        : `bg-gradient-to-r ${step.color}`
                        } ${isActive ? 'scale-125 shadow-purple-500/50' : ''}`}
                      onClick={() => setActiveIndex(index)}
                      ref={el => (nodeRefs.current[index] = el)}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`w-5/12 ${isLeft ? 'mr-auto pr-16' : 'ml-auto pl-16'} `}
                      ref={el => (cardsRef.current[index] = el)}
                    >
                      <div
                        className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${isActive ? 'scale-105' : ''
                          }`}
                        onClick={() => setActiveIndex(index)}
                      >
                        <div className={`relative p-8 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 ${isActive ? 'bg-white/20 shadow-purple-500/30' : ''
                          }`}>
                          {/* Grade Badge */}
                          <div className={`absolute -top-4 ${isLeft ? 'right-8' : 'left-8'} px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r ${step.color} dark:text-white text-black shadow-lg`}>
                            {step.grade}
                          </div>

                          {/* Status Indicator */}
                          {step.status === 'current' && (
                            <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                          )}

                          {/* College/School Logo */}
                          <div className="mb-6">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl overflow-hidden shadow-lg border-2 border-white/30">
                              <img
                                src={step.image}
                                alt={`${step.school} logo`}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>

                          <div className="flex flex-col md:flex-row md:items-start gap-4">
                            {/* Icon */}
                            <div className="flex-shrink-0 self-start">
                              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-r ${step.color} p-1`}>
                                <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                                  <IconComponent className="w-6 h-6 md:w-7 md:h-7 text-gray-700" />
                                </div>
                              </div>
                            </div>

                            <div className="flex-1">
                              <h3 className="text-xl md:text-2xl font-bold dark:text-white text-black mb-2 darK:group-hover:text-purple-200 transition-colors">
                                {step.title}
                              </h3>
                              <div className="flex items-center gap-4 mb-3">
                                <div className="flex items-center gap-2 dark:text-purple-200 text-black">
                                  <Calendar className="w-4 h-4" />
                                  <span className="text-sm font-medium">{step.year}</span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-cyan-500 mb-4">
                                <MapPin className="w-4 h-4" />
                                <span className="text-sm">{step.school}</span>
                              </div>
                              <p className="dark:text-gray-300 text-black mb-4 leading-relaxed">
                                {step.description}
                              </p>

                              {/* Achievements */}
                              <div className="flex flex-wrap gap-2">
                                {step.achievements.map((achievement, i) => (
                                  <span
                                    key={i}
                                    className="px-3 py-1 text-xs font-medium dark:bg-white/20 bg-gray-300 dark:text-white text-black rounded-full backdrop-blur-sm"
                                  >
                                    {achievement}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            <div className="relative ml-8">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-cyan-500 to-green-500 rounded-full"></div>

              {education.map((step, index) => {
                const IconComponent = step.icon;

                return (
                  <div
                    key={index}
                    ref={el => (cardsRef.current[index + 100] = el)}
                    className="mb-12 ml-8 relative"
                  >
                    {/* Timeline Node */}
                    <div
                      ref={el => (nodeRefs.current[index + 100] = el)}
                      className={`absolute -left-14 top-4 w-12 h-12 rounded-full border-4 dark:border-white border-black shadow-xl bg-gradient-to-r ${step.color} ${step.status === 'current' ? 'animate-pulse' : ''}`}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="group">
                      <div className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-white/20 shadow-2xl">
                        {/* Grade Badge */}
                        <div className={`absolute -top-3 right-4 px-3 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${step.color} dark:text-white text-black shadow-lg`}>
                          {step.grade}
                        </div>

                        {/* Status Indicator */}
                        {step.status === 'current' && (
                          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-ping"></div>
                        )}

                        {/* College/School Logo */}
                        <div className="mb-4">
                          <div className="w-20 h-20 rounded-lg overflow-hidden shadow-lg border-2 border-white/30">
                            <img
                              src={step.image}
                              alt={`${step.school} logo`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>

                        <div className="flex items-start gap-3 mb-3">
                          {/* Icon */}
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${step.color} p-1 flex-shrink-0`}>
                            <div className="w-full h-full bg-white dark:bg-gray-900 rounded-md flex items-center justify-center">
                              <IconComponent className="w-5 h-5 text-gray-700 dark:text-white" />
                            </div>
                          </div>

                          <h3 className="text-xl font-bold dark:text-white text-black flex-1">
                            {step.title}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 dark:text-purple-200 text-purple-600 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{step.year}</span>
                        </div>
                        <div className="flex items-center gap-2 text-cyan-500 mb-3">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{step.school}</span>
                        </div>
                        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                          {step.description}
                        </p>

                        {/* Achievements */}
                        <div className="flex flex-wrap gap-2">
                          {step.achievements.map((achievement, i) => (
                            <span
                              key={i}
                              className="px-2 py-1 text-xs font-medium bg-white/20 text-white rounded-full backdrop-blur-sm"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}