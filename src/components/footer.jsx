import { Heart, Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, link: "https://github.com/Ram9525", label: "GitHub" },
    { icon: Linkedin, link: "https://www.linkedin.com/in/ram-kumar999/", label: "LinkedIn" },
    { icon: Twitter, link: "https://x.com/RamKumar9525302", label: "Twitter" },
    { icon: Mail, link: "mailto:ramkumar18092005@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative dark:bg-black bg-white border-t border-white/20 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold dark:text-white text-black mb-4">
              Ram Kumar
            </h3>
            <p className="dark:text-gray-400 text-gray-600 leading-relaxed mb-4">
              Developer + Designer creating elegant solutions for the web. Passionate about building experiences that matter.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                
                return (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-3 rounded-lg bg-white/10 dark:bg-white/5 border border-white/20 text-black dark:text-white hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 hover:scale-110"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold dark:text-white text-black mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="dark:text-gray-400 text-gray-600 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold dark:text-white text-black mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2 dark:text-gray-400 text-gray-600">
              <li>
                <a href="mailto:ramkumar18092005@gmail.com" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                  ramkumar18092005@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919525302907" className="hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
                  +91 9525302907
                </a>
              </li>
              <li>NIT Bhopal, Madhya Pradesh, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="dark:text-gray-400 text-gray-600 text-sm flex items-center gap-1">
              © {currentYear} Ram Kumar. Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> and React
            </p>
            <p className="dark:text-gray-400 text-gray-600 text-sm">
              All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </footer>
  );
}
