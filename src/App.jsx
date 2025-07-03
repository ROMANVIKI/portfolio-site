import Footer from './components/Footer';
import Nav from './components/Nav';
import HeroSection from './sections/HeroSection.jsx';
const App = () => {
  return (
    <div className='relative'>
      <Nav />
      <HeroSection />
      <Footer />
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out 0.3s both;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.6s both;
        }
      `}</style>
    </div>
  );
};

export default App;
