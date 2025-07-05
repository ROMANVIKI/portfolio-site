import { Code, Server, Award, CheckCircle, BookOpen, FileCode, Monitor, Cloud } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const underlineRef = useRef(null);
  const cardRefs = useRef([]);
  const ctaRef = useRef(null);

  const certifications = [
    {
      title: '100 Days of Code: The Complete Python Pro Bootcamp',
      provider: 'By Dr. Angela Yu (Udemy)',
      status: 'completed',
      icon: <FileCode className='w-6 h-6' />,
      gradient: 'from-blue-500 to-green-500',
    },
    {
      title: 'Django Web Framework',
      provider: 'Meta',
      status: 'completed',
      icon: <Monitor className='w-6 h-6' />,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Programming with JavaScript',
      provider: 'Meta',
      status: 'completed',
      icon: <Code className='w-6 h-6' />,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Learn Advanced React',
      provider: 'Scrimba',
      status: 'completed',
      icon: <Server className='w-6 h-6' />,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Database Design and Basic SQL in PostgreSQL',
      provider: 'University of Michigan',
      status: 'completed',
      icon: <Cloud className='w-6 h-6' />,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states for header elements
      gsap.set([titleRef.current, subtitleRef.current, underlineRef.current], {
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
          const icon = card.querySelector('.cert-icon');
          const title = card.querySelector('.cert-title');
          const provider = card.querySelector('.cert-provider');
          const status = card.querySelector('.cert-status');
          const button = card.querySelector('.cert-button');
          
          gsap.set([icon, title, provider, status, button], {
            x: -30,
            opacity: 0,
            scale: 0.9
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

      // Underline animation
      gsap.to(underlineRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)',
        scrollTrigger: {
          trigger: underlineRef.current,
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
          const icon = card.querySelector('.cert-icon');
          const title = card.querySelector('.cert-title');
          const provider = card.querySelector('.cert-provider');
          const status = card.querySelector('.cert-status');
          const button = card.querySelector('.cert-button');
          
          gsap.to([icon, title, provider, status, button], {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: 'power2.out',
            stagger: {
              amount: 0.3,
              from: 'start'
            },
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
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
          const icon = card.querySelector('.cert-icon');
          const title = card.querySelector('.cert-title');
          
          hoverTl.to(card, {
            y: -8,
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
          }, 0);

          card.addEventListener('mouseenter', () => hoverTl.play());
          card.addEventListener('mouseleave', () => hoverTl.reverse());
        }
      });

      // Floating animation for background particles
      gsap.to('.floating-particle', {
        y: -15,
        duration: 2.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        stagger: 0.4
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id='certifications'
      className='py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden'
    >
      {/* Background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='floating-particle absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full opacity-20'></div>
        <div className='floating-particle absolute top-3/4 right-1/4 w-1 h-1 bg-blue-500 rounded-full opacity-30'></div>
        <div className='floating-particle absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-25'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <h2 ref={titleRef} className='text-4xl md:text-5xl font-bold text-white mb-4'>
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
              📜 Certifications
            </span>
          </h2>
          <p ref={subtitleRef} className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Continuous learning through structured courses and professional certifications to stay
            current with industry trends.
          </p>
          <div ref={underlineRef} className='w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {certifications.map((cert, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className='group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20'
            >
              <div className='flex items-start justify-between mb-4'>
                <div className='flex items-center'>
                  <div
                    className={`cert-icon w-12 h-12 rounded-xl bg-gradient-to-r ${cert.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className='text-white'>{cert.icon}</div>
                  </div>
                  <div>
                    <h3 className='cert-title text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300'>
                      {cert.title}
                    </h3>
                    <p className='cert-provider text-purple-400 text-sm font-medium'>{cert.provider}</p>
                  </div>
                </div>

                <div className='flex items-center'>
                  {cert.status === 'completed' ? (
                    <CheckCircle className='w-6 h-6 text-green-400' />
                  ) : (
                    <BookOpen className='w-6 h-6 text-orange-400' />
                  )}
                </div>
              </div>

              <div className='flex items-center justify-between'>
                <span
                  className={`cert-status px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'completed'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}
                >
                  {cert.status === 'completed' ? '✅ Completed' : '📖 In Progress'}
                </span>

                <button className='cert-button opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-gray-800/50 rounded-lg border border-gray-600/50 hover:border-purple-500/50'>
                  <Award className='w-4 h-4 text-gray-300 hover:text-purple-300' />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div ref={ctaRef} className='text-center mt-16'>
          <div className='bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20'>
            <h3 className='text-2xl font-bold text-white mb-4'>Always Learning</h3>
            <p className='text-gray-400 mb-6'>
              Committed to continuous improvement and staying current with the latest technologies
              and industry best practices.
            </p>
            <button className='px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25'>
              View All Credentials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
