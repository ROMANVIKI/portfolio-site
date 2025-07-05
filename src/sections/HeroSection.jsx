import EarthModel from './EarthModel';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';

export default function HeroSection() {
  const nameRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const earthRef = useRef();
  const nameRefDesktop = useRef();
  const titleRefDesktop = useRef();
  const descRefDesktop = useRef();
  const earthRefDesktop = useRef();

  useEffect(() => {
    // Create GSAP timeline
    const tl = gsap.timeline();

    // Mobile elements
    const mobileElements = [nameRef.current, titleRef.current, descRef.current];
    // Desktop elements
    const desktopElements = [
      nameRefDesktop.current,
      titleRefDesktop.current,
      descRefDesktop.current,
    ];

    // Set initial state for mobile elements
    gsap.set(mobileElements.filter(Boolean), {
      opacity: 0,
      x: 150,
    });

    // Set initial state for desktop elements
    gsap.set(desktopElements.filter(Boolean), {
      opacity: 0,
      x: 150,
    });

    // Animate mobile elements
    tl.to(mobileElements.filter(Boolean), {
      x: 0,
      opacity: 1,
      duration: 0.7,
      ease: 'power4.out',
      stagger: 0.2,
    });

    // Animate desktop elements
    tl.to(
      desktopElements.filter(Boolean),
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        ease: 'power4.out',
        stagger: 0.2,
      },
      0
    ); // Start at the same time as mobile

    // Animate Earth models
    if (earthRef.current) {
      gsap.set(earthRef.current, { opacity: 0, y: 50 });
      tl.to(
        earthRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power4.out',
        },
        '-=0.3'
      );
    }

    if (earthRefDesktop.current) {
      gsap.set(earthRefDesktop.current, { opacity: 0, y: 50 });
      tl.to(
        earthRefDesktop.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power4.out',
        },
        '-=0.3'
      );
    }
  }, []);

  return (
    <section
      id='hero'
      className='relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden'
    >
      {/* Animated background stars */}
      <div className='absolute inset-0 overflow-hidden'>
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className='absolute w-1 h-1 bg-white rounded-full animate-pulse'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className='relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-7xl mx-auto'>
          {/* Mobile Layout */}
          <div className='flex flex-col lg:hidden items-center text-center space-y-8 pt-20'>
            {/* Text Content */}
            <div className='space-y-4'>
              <p className='text-xl sm:text-2xl text-gray-300 animate-fade-in'>Hi 👋 I'm</p>
              <h1
                ref={nameRef}
                className='text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent'
              >
                Vikram
              </h1>
              <h2 ref={titleRef} className='text-2xl sm:text-3xl font-semibold text-blue-300'>
                Full Stack Developer
              </h2>
              <p
                ref={descRef}
                className='text-base sm:text-lg text-gray-400 max-w-md mx-auto leading-relaxed'
              >
                who builds reliable and UI friendly web applications with modern web frameworks
              </p>
            </div>

            {/* Earth Model */}
            <div ref={earthRef} className='w-full h-64 sm:h-80'>
              <EarthModel />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className='hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:min-h-screen'>
            {/* Text Content */}
            <div className='space-y-6'>
              <p className='text-2xl xl:text-3xl text-gray-300 animate-fade-in'>Hi 👋 I'm</p>
              <h1
                ref={nameRefDesktop}
                className='text-6xl xl:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight'
              >
                Vikram
              </h1>
              <h2
                ref={titleRefDesktop}
                className='text-3xl xl:text-4xl font-semibold text-blue-300'
              >
                Full Stack Developer
              </h2>
              <p
                ref={descRefDesktop}
                className='text-xl xl:text-2xl text-gray-400 max-w-2xl leading-relaxed'
              >
                who builds reliable and UI friendly web applications with modern web frameworks
              </p>

              {/* CTA Buttons */}
              <div className='flex space-x-6 pt-8'>
                <button className='bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 shadow-lg'>
                  View My Work
                </button>
                <button className='border-2 border-white/20 hover:border-white/40 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 backdrop-blur-sm'>
                  Get In Touch
                </button>
              </div>
            </div>

            {/* Earth Model */}
            <div ref={earthRefDesktop} className='h-screen'>
              <EarthModel />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-white/30 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse'></div>
        </div>
      </div>
    </section>
  );
}
