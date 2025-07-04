import { Code, Server, Award, CheckCircle, BookOpen, FileCode, Monitor, Cloud } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Python for Everybody',
      provider: 'University of Michigan (Coursera)',
      status: 'completed',
      icon: <FileCode className='w-6 h-6' />,
      gradient: 'from-blue-500 to-green-500',
    },
    {
      title: 'Frontend Development with React',
      provider: 'Meta',
      status: 'completed',
      icon: <Monitor className='w-6 h-6' />,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Full Stack Development Track',
      provider: 'Platform Name',
      status: 'completed',
      icon: <Code className='w-6 h-6' />,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Linux for Developers',
      provider: 'Platform Name',
      status: 'completed',
      icon: <Server className='w-6 h-6' />,
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'System Design & DevOps Fundamentals',
      provider: 'In Progress',
      status: 'ongoing',
      icon: <Cloud className='w-6 h-6' />,
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section
      id='certifications'
      className='py-20 px-6 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden'
    >
      {/* Background elements */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full opacity-20 animate-pulse'></div>
        <div className='absolute top-3/4 right-1/4 w-1 h-1 bg-blue-500 rounded-full opacity-30 animate-pulse delay-1000'></div>
        <div className='absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-25 animate-pulse delay-500'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
              📜 Certifications
            </span>
          </h2>
          <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
            Continuous learning through structured courses and professional certifications to stay
            current with industry trends.
          </p>
          <div className='w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4'></div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {certifications.map((cert, index) => (
            <div
              key={index}
              className='group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/20'
            >
              <div className='flex items-start justify-between mb-4'>
                <div className='flex items-center'>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className='text-white'>{cert.icon}</div>
                  </div>
                  <div>
                    <h3 className='text-lg font-bold text-white group-hover:text-purple-300 transition-colors duration-300'>
                      {cert.title}
                    </h3>
                    <p className='text-purple-400 text-sm font-medium'>{cert.provider}</p>
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
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'completed'
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                      : 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
                  }`}
                >
                  {cert.status === 'completed' ? '✅ Completed' : '📖 In Progress'}
                </span>

                <button className='opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-2 bg-gray-800/50 rounded-lg border border-gray-600/50 hover:border-purple-500/50'>
                  <Award className='w-4 h-4 text-gray-300 hover:text-purple-300' />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className='text-center mt-16'>
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
