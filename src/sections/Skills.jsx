import { Code, Database, Server, Settings, Monitor } from 'lucide-react';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const underlineRef = useRef(null);
  const cardRefs = useRef([]);

  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className='w-6 h-6' />,
      skills: ['Python', 'JavaScript', 'C (currently learning)', 'Lua (exploring)'],
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Frontend',
      icon: <Monitor className='w-6 h-6' />,
      skills: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'GSAP'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Backend',
      icon: <Server className='w-6 h-6' />,
      skills: ['Django', 'Flask', 'REST APIs', 'WebSockets'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'DevOps & Tools',
      icon: <Settings className='w-6 h-6' />,
      skills: [
        'Docker',
        'Git',
        'Vercel',
        'Linux (Arch, Mint, i3wm)',
        'Nvim',
        'Tmux',
        'Bash Scripting (Basics)',
      ],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Databases',
      icon: <Database className='w-6 h-6' />,
      skills: ['PostgreSQL', 'SQLite', 'Redis', 'MongoDB (basics)'],
      gradient: 'from-red-500 to-rose-500',
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

      // Set initial states for all skill items within cards
      cardRefs.current.forEach(card => {
        if (card) {
          const skillItems = card.querySelectorAll('.skill-item');
          gsap.set(skillItems, {
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
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            }
          });

          // Skill items animation within each card
          const skillItems = card.querySelectorAll('.skill-item');
          gsap.to(skillItems, {
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
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            }
          });
        }
      });

      // Hover animations for cards
      cardRefs.current.forEach(card => {
        if (card) {
          const hoverTl = gsap.timeline({ paused: true });
          const icon = card.querySelector('.skill-icon');
          const title = card.querySelector('.skill-title');
          
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
      id='skills'
      className='py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden'
    >
      {/* Background particles */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='floating-particle absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-20'></div>
        <div className='floating-particle absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-500 rounded-full opacity-30'></div>
        <div className='floating-particle absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-pink-500 rounded-full opacity-25'></div>
      </div>
      
      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <h2 ref={titleRef} className='text-4xl md:text-5xl font-bold text-white mb-4'>
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
              🛠️ Skills
            </span>
          </h2>
          <p ref={subtitleRef} className='text-gray-400 text-lg max-w-2xl mx-auto'>
            A comprehensive overview of my technical expertise and the tools I use to build modern
            applications.
          </p>
          <div ref={underlineRef} className='w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4'></div>
        </div>
        
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className='group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20'
            >
              <div className='flex items-center mb-6'>
                <div
                  className={`skill-icon w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className='text-white'>{category.icon}</div>
                </div>
                <h3 className='skill-title text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300'>
                  {category.title}
                </h3>
              </div>
              <div className='space-y-3'>
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className='skill-item flex items-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:bg-gray-700/30'
                  >
                    <div
                      className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} mr-3`}
                    ></div>
                    <span className='text-gray-300 text-sm'>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
