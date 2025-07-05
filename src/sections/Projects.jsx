import {
  ExternalLink,
  Github,
  Code,
  Server,
  Smartphone,
  Globe,
  Shield,
  BarChart3,
} from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const cardRefs = useRef([]);
  const ctaRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: 'Social Media App',
      subtitle: 'React + Django + Redis',
      description:
        'Real-time messaging app with authentication, feed options, commenting, liking, and following other users with elegant chat UI.',
      icon: <Smartphone className='w-6 h-6 project-icon' />,
      tags: ['React', 'Django', 'Redis', 'WebSocket', 'REST API'],
      gradient: 'from-pink-500 to-purple-600',
    },
    {
      id: 2,
      title: 'Modern Text Editor & Blog',
      subtitle: 'NextJS + Django + PostgreSQL',
      description:
        'Built with NextJS, Django, DRF, Simple JWT for authentication, PostgreSQL for storing data with rich text editing capabilities.',
      icon: <Code className='w-6 h-6 project-icon' />,
      tags: ['NextJS', 'Django', 'PostgreSQL', 'JWT', 'DRF'],
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      id: 3,
      title: 'IoT Temperature Dashboard',
      subtitle: 'Django + MQTT + Real-time Data',
      description:
        'Django-based dashboard for displaying real-time sensor data using MQTT and graph plotting. Includes login/auth and admin control.',
      icon: <BarChart3 className='w-6 h-6 project-icon' />,
      tags: ['Django', 'MQTT', 'IoT', 'Real-time', 'Charts'],
      gradient: 'from-green-500 to-teal-600',
    },
    {
      id: 4,
      title: 'Startup Landing Page',
      subtitle: 'NextJS + Tailwind + GSAP',
      description:
        'Built with NextJS, Tailwind CSS, GSAP for smooth animations and modern interactive elements.',
      icon: <Globe className='w-6 h-6 project-icon' />,
      tags: ['NextJS', 'Tailwind', 'GSAP', 'Animation'],
      gradient: 'from-orange-500 to-red-600',
    },
    {
      id: 5,
      title: 'Nike Clone Website',
      subtitle: 'NextJS + Three.js + React Fiber',
      description:
        'Built with NextJS, Tailwind CSS, react-fiber, ThreeJS for 3D product visualization and interactive experiences.',
      icon: <Server className='w-6 h-6 project-icon' />,
      tags: ['NextJS', 'ThreeJS', 'React Fiber', '3D'],
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      id: 6,
      title: 'Authentication System',
      subtitle: 'FastAPI + JWT + Role-based Access',
      description:
        'Secure user login/register system with token-based authentication, protected routes, and role-based access control.',
      icon: <Shield className='w-6 h-6 project-icon' />,
      tags: ['FastAPI', 'JWT', 'Security', 'Authentication'],
      gradient: 'from-indigo-500 to-blue-600',
    },
  ];

    useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for header elements
      gsap.set([titleRef.current, subtitleRef.current], {
        y: 50,
        opacity: 0,
        scale: 0.9
      });

      // Set initial states for all cards
      gsap.set(cardRefs.current, {
        y: 80,
        opacity: 0,
        scale: 0.8,
        rotateX: 20
      });

      // Set initial state for CTA
      gsap.set(ctaRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.9
      });

      // Set initial states for elements within cards
      cardRefs.current.forEach(card => {
        if (card) {
          const icon = card.querySelector('.project-icon');
          const title = card.querySelector('.project-title');
          const subtitle = card.querySelector('.project-subtitle');
          const description = card.querySelector('.project-description');
          const tags = card.querySelectorAll('.project-tag');
          const buttons = card.querySelectorAll('.project-button');
          
          gsap.set([icon, title, subtitle, description], {
            y: 30,
            opacity: 0,
            scale: 0.9
          });

          gsap.set(tags, {
            x: -20,
            opacity: 0,
            scale: 0.8
          });

          gsap.set(buttons, {
            scale: 0,
            opacity: 0
          });
        }
      });

      // Title animation
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      // Subtitle animation
      gsap.to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        }
      });

      // Animate each card individually
      cardRefs.current.forEach((card, index) => {
        if (card) {
          // Card entrance animation
          gsap.to(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 0.8,
            ease: 'back.out(1.2)',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          });

          // Card content animation
          const icon = card.querySelector('.project-icon');
          const title = card.querySelector('.project-title');
          const subtitle = card.querySelector('.project-subtitle');
          const description = card.querySelector('.project-description');
          const tags = card.querySelectorAll('.project-tag');
          const buttons = card.querySelectorAll('.project-button');
          
          gsap.to([icon, title, subtitle, description], {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            }
          });

          // Tags animation
          gsap.to(tags, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
            stagger: {
              amount: 0.3,
              from: 'start'
            },
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          });

          // Buttons animation
          gsap.to(buttons, {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: 'back.out(1.7)',
            stagger: 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            }
          });
        }
      });

      // CTA animation
      gsap.to(ctaRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      // Hover animations for cards
      cardRefs.current.forEach(card => {
        if (card) {
          const hoverTl = gsap.timeline({ paused: true });
          const icon = card.querySelector('.project-icon');
          const title = card.querySelector('.project-title');
          const overlay = card.querySelector('.project-overlay');
          
          hoverTl.to(card, {
            y: -12,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          })
          .to(icon, {
            scale: 1.15,
            rotate: 5,
            duration: 0.3,
            ease: 'back.out(1.7)'
          }, 0)
          .to(title, {
            color: '#d8b4fe',
            duration: 0.3,
            ease: 'power2.out'
          }, 0)
          .to(overlay, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
          }, 0);

          card.addEventListener('mouseenter', () => hoverTl.play());
          card.addEventListener('mouseleave', () => hoverTl.reverse());
        }
      });

      // Floating animation for background particles
      gsap.to('.floating-particle', {
        y: -20,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.5
      });

      // Rotation animation for particles
      gsap.to('.floating-particle', {
        rotation: 360,
        duration: 8,
        ease: 'none',
        repeat: -1,
        stagger: 0.3
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for header elements
      gsap.set([titleRef.current, subtitleRef.current], {
        y: 50,
        opacity: 0,
        scale: 0.9
      });

      // Set initial states for all cards
      gsap.set(cardRefs.current, {
        y: 80,
        opacity: 0,
        scale: 0.8,
        rotateX: 20
      });

      // Set initial state for CTA
      gsap.set(ctaRef.current, {
        y: 60,
        opacity: 0,
        scale: 0.9
      });

      // Set initial states for elements within cards
      cardRefs.current.forEach(card => {
        if (card) {
          const icon = card.querySelector('.project-icon');
          const title = card.querySelector('.project-title');
          const subtitle = card.querySelector('.project-subtitle');
          const description = card.querySelector('.project-description');
          const tags = card.querySelectorAll('.project-tag');
          const buttons = card.querySelectorAll('.project-button');
          
          gsap.set([icon, title, subtitle, description], {
            y: 30,
            opacity: 0,
            scale: 0.9
          });

          gsap.set(tags, {
            x: -20,
            opacity: 0,
            scale: 0.8
          });

          gsap.set(buttons, {
            scale: 0,
            opacity: 0
          });
        }
      });

      // Title animation
      gsap.to(titleRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      // Subtitle animation
      gsap.to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: subtitleRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        }
      });

      // Animate each card individually
      cardRefs.current.forEach((card, index) => {
        if (card) {
          // Card entrance animation
          gsap.to(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 0.8,
            ease: 'back.out(1.2)',
            delay: index * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          });

          // Card content animation
          const icon = card.querySelector('.project-icon');
          const title = card.querySelector('.project-title');
          const subtitle = card.querySelector('.project-subtitle');
          const description = card.querySelector('.project-description');
          const tags = card.querySelectorAll('.project-tag');
          const buttons = card.querySelectorAll('.project-button');
          
          gsap.to([icon, title, subtitle, description], {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            }
          });

          // Tags animation
          gsap.to(tags, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.5,
            ease: 'power2.out',
            stagger: {
              amount: 0.3,
              from: 'start'
            },
            scrollTrigger: {
              trigger: card,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            }
          });

          // Buttons animation
          gsap.to(buttons, {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: 'back.out(1.7)',
            stagger: 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            }
          });
        }
      });

      // CTA animation
      gsap.to(ctaRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.2)',
        scrollTrigger: {
          trigger: ctaRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        }
      });

      // Hover animations for cards
      cardRefs.current.forEach(card => {
        if (card) {
          const hoverTl = gsap.timeline({ paused: true });
          const icon = card.querySelector('.project-icon');
          const title = card.querySelector('.project-title');
          const overlay = card.querySelector('.project-overlay');
          
          hoverTl.to(card, {
            y: -12,
            scale: 1.02,
            duration: 0.3,
            ease: 'power2.out'
          })
          .to(icon, {
            scale: 1.15,
            rotate: 5,
            duration: 0.3,
            ease: 'back.out(1.7)'
          }, 0)
          .to(title, {
            color: '#d8b4fe',
            duration: 0.3,
            ease: 'power2.out'
          }, 0)
          .to(overlay, {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out'
          }, 0);

          card.addEventListener('mouseenter', () => hoverTl.play());
          card.addEventListener('mouseleave', () => hoverTl.reverse());
        }
      });

      // Floating animation for background particles
      gsap.to('.floating-particle', {
        y: -20,
        duration: 3,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.5
      });

      // Rotation animation for particles
      gsap.to('.floating-particle', {
        rotation: 360,
        duration: 8,
        ease: 'none',
        repeat: -1,
        stagger: 0.3
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);


  return (
    <section
      id='projects'
      className='py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden'
      ref={sectionRef}
    >
      {/* Background particles effect */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full opacity-20 animate-pulse'></div>
        <div className='absolute top-3/4 right-1/4 w-1 h-1 bg-blue-500 rounded-full opacity-30 animate-pulse delay-1000'></div>
        <div className='absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-25 animate-pulse delay-500'></div>
        <div className='absolute top-1/2 right-1/3 w-1 h-1 bg-pink-500 rounded-full opacity-20 animate-pulse delay-1500'></div>
      </div>

      <div className='max-w-7xl mx-auto relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2
            ref={titleRef}
            className='text-4xl md:text-5xl font-bold text-white mb-4'
          >
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
              🚀 Projects
            </span>
          </h2>
          <p
            ref={subtitleRef}
            className='text-gray-400 text-lg max-w-2xl mx-auto'
          >
            A showcase of my latest work in full-stack development, featuring modern technologies
            and innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (cardRefs.current[index] = el)}
              className='group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 project-card'
            >
              {/* Project Icon with Gradient */}
              <div
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${project.gradient} mb-4 group-hover:scale-110 transition-transform duration-300 project-icon`}
              >
                <div className='text-white'>{project.icon}</div>
              </div>

              {/* Project Content */}
              <div className='space-y-4'>
                <div>
                  <h3 className='text-xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300 project-title'>
                    {project.title}
                  </h3>
                  <p className='text-sm text-purple-400 font-medium project-subtitle'>{project.subtitle}</p>
                </div>

                <p className='text-gray-300 text-sm leading-relaxed project-description'>{project.description}</p>

                {/* Tech Stack Tags */}
                <div className='flex flex-wrap gap-2'>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='px-3 py-1 text-xs font-medium bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-300 rounded-full border border-purple-500/30 hover:border-purple-400/50 transition-colors duration-300 project-tag'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className='absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none project-overlay'></div>

              {/* Action Buttons */}
              <div className='absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <button className='project-button p-2 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600/50 hover:border-purple-500/50 transition-colors duration-300'>
                  <Github className='w-4 h-4 text-gray-300 hover:text-purple-300' />
                </button>
                <button className='project-button p-2 bg-gray-800/80 backdrop-blur-sm rounded-lg border border-gray-600/50 hover:border-purple-500/50 transition-colors duration-300'>
                  <ExternalLink className='w-4 h-4 text-gray-300 hover:text-purple-300' />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16' ref={ctaRef}>
          <p className='text-gray-400 mb-6'>Want to see more of my work?</p>
          <div className='flex justify-center gap-4'>
            <button className='px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25'>
              View GitHub
            </button>
            <button className='px-8 py-3 bg-transparent border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105'>
              Live Demos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

