// Hero Section Component
import EarthModel from './EarthModel';
export default function HeroSection() {
  return (
    <section id='hero' className='relative min-h-screen bg-black text-white overflow-hidden'>
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
              <h1 className='text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in-up'>
                Vikram
              </h1>
              <h2 className='text-2xl sm:text-3xl font-semibold text-blue-300 animate-fade-in-up'>
                Full Stack Developer
              </h2>
              <p className='text-base sm:text-lg text-gray-400 max-w-md mx-auto leading-relaxed animate-fade-in-up'>
                who builds reliable and UI friendly web applications with modern web frameworks
              </p>
            </div>

            {/* Earth Model */}
            <div className='w-full h-64 sm:h-80 animate-fade-in-up'>
              <EarthModel />
            </div>
          </div>

          {/* Desktop Layout */}
          <div className='hidden lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:min-h-screen'>
            {/* Text Content */}
            <div className='space-y-6 animate-fade-in'>
              <p className='text-2xl xl:text-3xl text-gray-300'>Hi 👋 I'm</p>
              <h1 className='text-6xl xl:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent leading-tight'>
                Vikram
              </h1>
              <h2 className='text-3xl xl:text-4xl font-semibold text-blue-300'>
                Full Stack Developer
              </h2>
              <p className='text-xl xl:text-2xl text-gray-400 max-w-2xl leading-relaxed'>
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
            <div className='h-screen animate-fade-in-right'>
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
