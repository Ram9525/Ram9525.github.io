import profileImage from '../assets/Ram_Kumar.png'; // replace with your image
import { Link } from 'react-router-dom';
import { SendHorizonal } from 'lucide-react';
import gsap from 'gsap';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(useGSAP);

gsap.registerPlugin(CSSRulePlugin);

const AboutMe = () => {

  useGSAP(() => {

    const aboutText = CSSRulePlugin.getRule('.about-animation::after');
    const aboutText2 = CSSRulePlugin.getRule('.about-animation::before');

    gsap.timeline({
      scrollTrigger: {
        trigger: ".left-section",
        start: "top 90%",
        toggleActions: "play none none none",
      }
    })
      .from(".about-1", {
        duration: 1,
        opacity: 0,
        y: 500,
      })
      .from(".about-2", {
        duration: 1,
        opacity: 0,
        y: 500,
      }, "-=0.5");



    gsap.to(aboutText, {
      width: '100%',
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.about-animation',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },

    })
    gsap.fromTo(aboutText2, {
      opacity: 0,
    }, {
      opacity: 1,
      duration: 1,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.about-animation',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    }, '-=0.5');
  }, []);

  return (
    <>
      <style>{`
        .about-animation::after {
          content: '';
          position: absolute;
          bottom: -0.5rem;
          left: 0;
          height: 4px;
          width: 0;
          background-color: #06b6d4; /* cyan-500 */
        }
        .about-animation::before {
          content: '';
          position: absolute;
          bottom: 1.25rem;
          left: -1.25rem;
          height: 1.25rem;
          width: 1.25rem;
          border-radius: 50%;
          background-color: #06b6d4;
        }
      `}</style>

      <div id="about" className="min-h-screen text-gray-800 bg:white dark:bg-black dark:text-gray-400 px-8 py-16 flex flex-col md:flex-row items-center md:items-center md:justify-center gap-24 relative">
        {/* Left Section - Text */}
        <div className="left-section md:w-1/3 relative md:-top-10">
          <h1 className="text-4xl font-bold mb-6">Hi there</h1>
          <p className="about-1 text-xl mb-6 leading-relaxed ">
            I’m <span className="font-semibold">Ram Kumar</span>, Undergraduate at <Link className='text-cyan-400 underline'>NIT Bhopal</Link> and diving deep into full-stack development with a focus on React, Node.js, and MongoDB. I’m part of <Link href="#" className="text-cyan-400 underline">FiNIT</Link> – The Finance Society at NIT Bhopal – where I handle everything from web development to event tech. My projects span dynamic UI design, backend APIs, and smooth frontend animations. If you're curious, check out <Link href="#" className="text-cyan-400 underline">my stack</Link>.
          </p>
          <p className="about-2 text-xl mb-6 leading-relaxed">
            In my free time, I explore Documentaries, watch Animes and webseries, play with open-source tools, and help build interactive experiences for tech fests. I’m always open to hearing about new ideas, so feel free to <Link href="#contact" className="text-cyan-400 underline">drop me a line</Link>.
          </p>
          <a
            href="mailto:ramkumar18092005@gmail.com"
            className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:underline"
          >
            <SendHorizonal /> Send me a message
          </a>
        </div>

        {/* Right Section - Image */}
        <div className="md:w-1/3 relative md:top-20">
          <span className="about-animation relative text-2xl font-bold dark:text-cyan-500 text-black
             ">
            About Me
          </span>

          <img

            src={profileImage}
            alt="Ram Kumar"
            className="rounded-lg shadow-lg w-full max-w-sm object-cover mt-8"
          />
        </div>
      </div>
    </>
  );
};

export default AboutMe;
