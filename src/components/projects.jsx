import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Code, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const projectsRef = useRef([]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useGSAP(() => {
    projectsRef.current.forEach((project, index) => {
      gsap.from(project, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: project,
          start: 'top 90%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });
    });
  }, [activeFilter]);

  const projects = [
    {
      title: "Hospital Management System",
      description: "Comprehensive Hospital Management System frontend with 40+ pages across 7 user roles, streamlining patient management, appointments, and OPD workflows.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      category: "frontend",
      github: "https://github.com/consultsan/HMS2",
      live: "https://thms.truehospitals.com/",
      color: "from-purple-500 to-pink-500",
      date: "Sept 2025 - Dec 2025"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website with smooth GSAP animations, 3D elements using Three.js, and dark mode support. Features interactive sections and elegant design.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      tags: ["React", "Tailwind CSS", "GSAP", "Three.js"],
      category: "frontend",
      github: "https://github.com/Ram9525",
      live: "https://kumarram.me",
      color: "from-indigo-500 to-purple-500",
      date: "2024"
    },
    {
      title: "Blog Application",
      description: "Blogging platform with user authentication and dynamic content creation. Utilized Appwrite for backend services with efficient data storage.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
      tags: ["React.js", "Appwrite"],
      category: "fullstack",
      github: "https://github.com/Ram9525/BlogApplication",
      live: "https://blog-application-ram-kumars-projects-4829055b.vercel.app/",
      color: "from-blue-500 to-cyan-500",
      date: "Oct 2024 - Nov 2024"
    },
    {
      title: "Authentication API",
      description: "Robust web application for secure note storage, leveraging MongoDB for efficient data management. Enabled seamless CRUD operations with JWT authentication and bcrypt password hashing.",
      image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80",
      tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
      category: "backend",
      github: "https://github.com/Ram9525/API",
      live: "https://api-ybk3.onrender.com/",
      color: "from-green-500 to-emerald-500",
      date: "July 2024 - Aug 2024"
    },
  ];

  const filters = [
    { name: 'All Projects', value: 'all' },
    { name: 'Frontend', value: 'frontend' },
    { name: 'Backend', value: 'backend' },
    { name: 'Full Stack', value: 'fullstack' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen dark:bg-black bg-white py-20 px-6 md:px-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className={`text-5xl md:text-6xl font-bold bg-black dark:bg-white bg-clip-text text-transparent mb-4 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Featured Projects
          </h2>
          <p className={`text-xl dark:text-gray-300 text-black max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            A showcase of my recent work and side projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.value
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg scale-105'
                : 'bg-white/10 dark:bg-white/5 text-black dark:text-white border border-white/20 hover:scale-105'
                }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              ref={el => (projectsRef.current[index] = el)}
              className="group"
            >
              <div className="relative rounded-2xl overflow-hidden backdrop-blur-lg bg-white/10 dark:bg-white/5 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 flex flex-col h-full">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300`} />

                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white dark:bg-gray-900 rounded-full hover:scale-110 transition-transform"
                    >
                      <Github className="w-5 h-5 text-black dark:text-white" />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white dark:bg-gray-900 rounded-full hover:scale-110 transition-transform"
                      >
                        <ExternalLink className="w-5 h-5 text-black dark:text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold dark:text-white text-black mb-2 flex items-center gap-2">
                    <Code className="w-5 h-5" />
                    {project.title}
                  </h3>
                  <p className="dark:text-gray-300 text-gray-700 text-sm mb-4 leading-relaxed flex-grow line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
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
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <p className="text-xl dark:text-gray-400 text-gray-600">
              No projects found in this category
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
