import { User, Code, Globe, Shield } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const sectionTitleRef = useRef(null);
  const selfCardRef = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);
  const card3Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([sectionTitleRef.current, selfCardRef.current, card1Ref.current, card2Ref.current, card3Ref.current], {
        y: 60,
        opacity: 0,
        scale: 0.8,
        rotateX: 15
      });

      // Title animation - triggers first
      gsap.to(sectionTitleRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: sectionTitleRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        }
      });

      // Self card animation - triggers when card is visible
      gsap.to(selfCardRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 1,
        ease: 'elastic.out(1, 0.75)',
        scrollTrigger: {
          trigger: selfCardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      // Description cards with stagger - triggers when first card is visible
      gsap.to([card1Ref.current, card2Ref.current, card3Ref.current], {
        y: 0,
        opacity: 1,
        scale: 1,
        rotateX: 0,
        duration: 0.7,
        ease: 'power3.out',
        stagger: {
          amount: 0.4,
          from: 'start'
        },
        scrollTrigger: {
          trigger: card1Ref.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      // Add hover animations for cards
      const cards = [selfCardRef.current, card1Ref.current, card2Ref.current, card3Ref.current];
      
      cards.forEach(card => {
        if (card) {
          const hoverTl = gsap.timeline({ paused: true });
          
          hoverTl.to(card, {
            y: -8,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          });

          card.addEventListener('mouseenter', () => hoverTl.play());
          card.addEventListener('mouseleave', () => hoverTl.reverse());
        }
      });

      // Add floating animation for background elements
      gsap.to('.floating-dot', {
        y: -20,
        duration: 2,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.3
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id='about'
      className='py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden'
    >
      {/* Background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='floating-dot absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full opacity-20'></div>
        <div className='floating-dot absolute top-3/4 right-1/4 w-1 h-1 bg-blue-500 rounded-full opacity-30'></div>
        <div className='floating-dot absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-25'></div>
      </div>

      <div ref={sectionRef} className='max-w-6xl mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <h2 ref={sectionTitleRef} className='text-4xl md:text-5xl font-bold text-white mb-4'>
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
              About Me
            </span>
          </h2>
          <div className='w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Profile Card */}
          <div className='relative'>
            <div
              ref={selfCardRef}
              className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500'
            >
              <div className='flex items-center mb-6'>
                <div className='w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-4'>
                  <User className='w-8 h-8 text-white' />
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-white'>Vikraman</h3>
                  <p className='text-purple-400 font-medium'>Full-Stack Developer</p>
                </div>
              </div>

              <div className='space-y-4'>
                <div className='flex items-center text-gray-300'>
                  <Globe className='w-5 h-5 text-blue-400 mr-3' />
                  <span>Based in India</span>
                </div>
                <div className='flex items-center text-gray-300'>
                  <Code className='w-5 h-5 text-green-400 mr-3' />
                  <span>Self-taught Developer</span>
                </div>
                <div className='flex items-center text-gray-300'>
                  <Shield className='w-5 h-5 text-purple-400 mr-3' />
                  <span>Public Health Background</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className='space-y-6'>
            <div ref={card1Ref} className='bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30'>
              <p className='text-gray-300 leading-relaxed text-lg'>
                Hi, I'm Vikraman, a self-taught full-stack web developer from India with a
                background in public health and preventive medicine and a passion for technology. I
                specialize in building scalable and user-friendly web applications using modern
                technologies like{' '}
                <span className='px-2 py-1 bg-green-500/20 text-green-400 rounded-md border border-green-500/30'>
                  Django
                </span>
                ,{' '}
                <span className='px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md border border-blue-500/30'>
                  React
                </span>
                , and{' '}
                <span className='px-2 py-1 bg-purple-500/20 text-purple-400 rounded-md border border-purple-500/30'>
                  Docker
                </span>
                .
              </p>
            </div>

            <div ref={card2Ref} className='bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30'>
              <p className='text-gray-300 leading-relaxed text-lg'>
                My journey into tech started with curiosity and has grown into a mission — to build
                impactful software and continuously grow as a developer. Whether it's developing
                robust backend systems, designing clean frontends, or deploying applications with
                CI/CD pipelines, I enjoy the full development lifecycle.
              </p>
            </div>

            <div ref={card3Ref} className='bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30'>
              <p className='text-gray-300 leading-relaxed text-lg'>
                I'm a strong believer in continuous learning and open-source collaboration. When I'm
                not coding, I enjoy exploring Linux internals, contributing to forums, and playing
                cricket.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
