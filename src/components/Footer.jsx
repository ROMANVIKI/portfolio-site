import React, { useState, useEffect } from 'react';
import {   Heart, ArrowUp, Mail } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className='bg-gradient-to-br from-gray-900 via-black to-gray-900 border-t border-gray-800/50 relative overflow-hidden'>
      {/* Background effects */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full opacity-10 animate-pulse'></div>
        <div className='absolute top-3/4 right-1/4 w-1 h-1 bg-blue-500 rounded-full opacity-20 animate-pulse delay-1000'></div>
      </div>

      <div className='max-w-6xl mx-auto px-6 py-16 relative z-10'>
        <div className='grid md:grid-cols-4 gap-8'>
          {/* Brand */}
          <div className='md:col-span-2'>
            <h3 className='text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4'>
              Vikram
            </h3>
            <p className='text-gray-400 text-sm leading-relaxed mb-6 max-w-md'>
              Full-stack developer passionate about creating impactful web applications. Always
              learning, always building, always growing.
            </p>
            <div className='flex space-x-4'>
              <a
                href='https://github.com/ROMANVIKI'
                className='w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300'
              >
                <FaGithub className='w-5 h-5 text-white' />
              </a>
              <a
                href='https://www.linkedin.com/in/vikraman-m-4067b5252'
                className='w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300'
              >
                <FaLinkedin className='w-5 h-5 text-white' />
              </a>
              <a
                href='mailto:vikramanm.py@gmail.com'
                className='w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300'
              >
                <Mail className='w-5 h-5 text-white' />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-white font-semibold text-lg mb-4'>Quick Links</h4>
            <ul className='space-y-2'>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className='text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm'
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-white font-semibold text-lg mb-4'>Services</h4>
            <ul className='space-y-2 text-sm'>
              <li className='text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer'>
                Web Development
              </li>
              <li className='text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer'>
                Backend Systems
              </li>
              <li className='text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer'>
                API Integration
              </li>
              <li className='text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer'>
                DevOps & Deployment
              </li>
              <li className='text-gray-400 hover:text-purple-400 transition-colors duration-300 cursor-pointer'>
                Technical Consulting
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='border-t border-gray-800/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center'>
          <div className='flex items-center text-gray-400 text-sm mb-4 md:mb-0'>
            <span>Made with</span>
            <Heart className='w-4 h-4 text-red-500 mx-1 animate-pulse' />
            <span>by Vikraman</span>
          </div>

          <div className='text-gray-400 text-sm'>© 2025 Vikraman. All rights reserved.</div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className='fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-purple-500/25 z-50'
        >
          <ArrowUp className='w-6 h-6' />
        </button>
      )}
    </footer>
  );
};

export default Footer;
