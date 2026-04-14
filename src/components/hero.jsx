import Typewriter from 'typewriter-effect';
import IconCloud from './IconCloud';

const Landing = () => {
  return (
    <div className="relative w-full h-screen bg-white text-black dark:bg-black dark:text-white overflow-hidden transition-colors duration-300">
      {/* Right Gradient Background Blur */}
      <div
        className="absolute right-0 top-0 w-[60%] h-full z-0 hidden dark:block pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 60% 40%, #00b4d8 20%, #023e8a 70%)',
          filter: 'blur(120px)',
          opacity: 0.5
        }}
      />

      {/* 3D Icon Cloud - Right Side */}
      <div className="absolute right-0 top-0 w-full md:w-1/2 h-full z-10 flex items-center justify-end md:justify-center pointer-events-auto">
        <div className="w-3/4 md:w-full h-full max-w-lg max-h-lg">
          <IconCloud />
        </div>
      </div>

      <div className="relative flex flex-col justify-center h-full px-10 md:px-20 z-20">
        <p className="text-gray-600 dark:text-gray-400 tracking-widest text-lg md:text-2xl font-bold leading-tight mb-2">
          RAM KUMAR
        </p>

        <h1 className="text-4xl md:text-7xl font-bold leading-tight">
          Developer<br />
          <span className="inline-block">
            <span className="text-gray-400 dark:text-gray-500 text-5xl mr-2">+</span>
            <Typewriter
              options={{
                strings: ['Designer', 'Engineer', 'Creator', 'Innovator'],
                autoStart: true,
                loop: true,
                pauseFor: 2000
              }}
            />
          </span>
        </h1>

        <div className="w-48 h-[1px] bg-gray-950 dark:bg-gray-400 mt-4" />
      </div>
    </div>
  );
};

export default Landing;
