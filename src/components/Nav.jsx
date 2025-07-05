import { useState } from 'react';
import { navLinks } from '../constants/navigation.js';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin); // 👈 REGISTER HERE
export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();

    setIsMenuOpen(false);

    setTimeout(() => {
      gsap.to(window, { duration: 2, scrollTo: href, ease: 'circ.inOut' });
    }, 100);
  };

  return (
    <nav className='fixed font-orbitron top-0 w-full py-4 px-4 lg:px-8 z-50 bg-black/20 backdrop-blur-md border-b border-white/10'>
      {/* Desktop Navigation */}
      <div className='hidden md:flex justify-between items-center'>
        <div className='text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
          Vikram
        </div>
        <div className='flex space-x-8'>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className='text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium hover:scale-105 transform transition-transform'
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className='flex md:hidden justify-between items-center'>
        <div className='text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent'>
          Vikram
        </div>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className='text-white p-2 hover:bg-white/10 rounded-lg transition-colors'
        >
          <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            {isMenuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-b border-white/10'>
          <div className='flex flex-col space-y-4 p-4'>
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className='text-gray-300 hover:text-white transition-colors duration-300 text-lg font-medium py-2 border-b border-gray-800 last:border-b-0'
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
