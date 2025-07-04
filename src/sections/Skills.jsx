import { Code, Database, Server, Settings, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code className='w-6 h-6' />,
      skills: ['Python', 'JavaScript', 'SQL', 'C (currently learning)', 'Rust (exploring)'],
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
      skills: ['Django', 'FastAPI', 'Flask', 'REST APIs', 'WebSockets'],
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'DevOps & Tools',
      icon: <Settings className='w-6 h-6' />,
      skills: ['Docker', 'Git', 'Jenkins', 'Vercel', 'Linux (Arch, Mint, i3wm)', 'Nginx'],
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Databases',
      icon: <Database className='w-6 h-6' />,
      skills: ['PostgreSQL', 'SQLite', 'Redis', 'MongoDB (basics)', 'Firebase (auth & storage)'],
      gradient: 'from-red-500 to-rose-500',
    },
  ];

  return (
    <section
      id='skills'
      className='py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden'
    >
      {/* Background particles */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/3 right-1/4 w-2 h-2 bg-blue-500 rounded-full opacity-20 animate-pulse'></div>
        <div className='absolute bottom-1/3 left-1/4 w-1 h-1 bg-purple-500 rounded-full opacity-30 animate-pulse delay-700'></div>
        <div className='absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-pink-500 rounded-full opacity-25 animate-pulse delay-1200'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
              🛠️ Skills
            </span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            A comprehensive overview of my technical expertise and the tools I use to build modern
            applications.
          </p>
          <div className='w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4'></div>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className='group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20'
            >
              <div className='flex items-center mb-6'>
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className='text-white'>{category.icon}</div>
                </div>
                <h3 className='text-xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300'>
                  {category.title}
                </h3>
              </div>

              <div className='space-y-3'>
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className='flex items-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30 hover:border-purple-500/30 transition-all duration-300 hover:bg-gray-700/30'
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
