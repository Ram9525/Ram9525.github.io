import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './themeSwitchbutton'
import logo from '../assets/Ram_bro.jpg'


const header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Education', href: '#education', type: 'scroll' },
    { name: 'Experience', href: '#experience', type: 'scroll' },
    { name: 'Skills', href: '#skills', type: 'scroll' },
    { name: 'Projects', href: '#projects', type: 'scroll' },
    { name: 'Contact', href: '#contact', type: 'scroll' },
    { name: 'Resume', href: 'https://drive.google.com/file/d/1BiosHAa2Lt9eZTsNADXppHT9bnbQJ4f1/view?usp=drive_link', type: 'external' },
  ]

  const handleNavClick = (e, link) => {
    if (link.type === 'external') {
      window.open(link.href, '_blank');
      setIsMenuOpen(false);
      return;
    }

    e.preventDefault();
    const element = document.querySelector(link.href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className='z-50 text-black bg-white/80 ml-4 mr-4 dark:bg-gray-900/80 dark:text-white rounded-2xl fixed top-4 left-0 right-0 shadow-lg backdrop-blur-md'>
      <nav className='flex justify-between items-center p-4 px-8 gap-6'>
        <Link to='/' className='hover:scale-110 transition-transform'>
          <div className='w-16 h-16 rounded-full overflow-hidden bg-gradient-to-r from-purple-500 to-cyan-500 p-[2px] shadow-lg'>
            <div className='w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden'>
              <img src={logo} alt="Logo" className='w-full h-full object-cover' />
            </div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:block'>
          <ul className='flex space-x-8'>
            {navLinks.map(link => (
              <li
                key={link.name}
                className="relative font-[500] transition-all hover:text-purple-500 dark:hover:text-purple-400 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-current after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
              >
                {link.type === 'external' ? (
                  <a 
                    href={link.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="cursor-pointer"
                  >
                    {link.name}
                  </a>
                ) : (
                  <a href={link.href} onClick={(e) => handleNavClick(e, link)}>
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-center gap-4'>
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            className='md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden'>
          <ul className='py-4'>
            {navLinks.map(link => (
              <li key={link.name}>
                {link.type === 'external' ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMenuOpen(false)}
                    className='block px-8 py-3 font-[500] hover:bg-purple-500/10 hover:text-purple-500 dark:hover:text-purple-400 transition-all'
                  >
                    {link.name}
                  </a>
                ) : (
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link)}
                    className='block px-8 py-3 font-[500] hover:bg-purple-500/10 hover:text-purple-500 dark:hover:text-purple-400 transition-all'
                  >
                    {link.name}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}

export default header