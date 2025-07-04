import { useRef, useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  User,
  MessageCircle,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const form = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success('Message sent successfully!', {
            className: 'responsive-toast',
          });
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          toast.error('Failed to send message. Please try again.', {
            className: 'responsive-toast',
          });
        }
      );
  };

  return (
    <section
      id='contact'
      className='py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden relative'
    >
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full opacity-20 animate-pulse'></div>
        <div className='absolute top-3/4 right-1/4 w-1 h-1 bg-blue-500 rounded-full opacity-30 animate-pulse delay-1000'></div>
        <div className='absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-25 animate-pulse delay-500'></div>
      </div>

      <div className='max-w-6xl mx-auto relative z-10'>
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
            <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent'>
              Let's Connect
            </span>
          </h2>
          <p className='text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4'>
            Have a project in mind or just want to chat? I'd love to hear from you.
          </p>
          <div className='w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4'></div>
        </div>

        <div className='grid lg:grid-cols-2 gap-6 lg:gap-8'>
          {/* Contact Info */}
          <div className='space-y-6 lg:space-y-8'>
            <div className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500'>
              <h3 className='text-xl md:text-2xl font-bold text-white mb-6'>Get in Touch</h3>

              <div className='space-y-4 md:space-y-6'>
                <div className='flex items-center group'>
                  <div className='w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                    <Mail className='w-5 h-5 md:w-6 md:h-6 text-white' />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='text-gray-400 text-sm'>Email</p>
                    <p className='text-white font-medium text-sm md:text-base break-all'>
                      vikraman@example.com
                    </p>
                  </div>
                </div>

                <div className='flex items-center group'>
                  <div className='w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                    <Phone className='w-5 h-5 md:w-6 md:h-6 text-white' />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='text-gray-400 text-sm'>Phone</p>
                    <p className='text-white font-medium text-sm md:text-base'>+91 xxx xxx xxxx</p>
                  </div>
                </div>

                <div className='flex items-center group'>
                  <div className='w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-3 md:mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                    <MapPin className='w-5 h-5 md:w-6 md:h-6 text-white' />
                  </div>
                  <div className='min-w-0 flex-1'>
                    <p className='text-gray-400 text-sm'>Location</p>
                    <p className='text-white font-medium text-sm md:text-base'>Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500'>
              <h3 className='text-lg md:text-xl font-bold text-white mb-4 md:mb-6'>Follow Me</h3>
              <div className='grid grid-cols-2 gap-3 md:gap-4'>
                {/* Repeatable social links */}
                <a
                  href='#'
                  className='flex items-center p-3 md:p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group'
                >
                  <Github className='w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-purple-400 mr-2 md:mr-3' />
                  <span className='text-gray-300 group-hover:text-white text-sm md:text-base truncate'>
                    GitHub
                  </span>
                </a>
                <a
                  href='#'
                  className='flex items-center p-3 md:p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group'
                >
                  <Linkedin className='w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-blue-400 mr-2 md:mr-3' />
                  <span className='text-gray-300 group-hover:text-white text-sm md:text-base truncate'>
                    LinkedIn
                  </span>
                </a>
                <a
                  href='#'
                  className='flex items-center p-3 md:p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 group'
                >
                  <Twitter className='w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-cyan-400 mr-2 md:mr-3' />
                  <span className='text-gray-300 group-hover:text-white text-sm md:text-base truncate'>
                    Twitter
                  </span>
                </a>
                <a
                  href='#'
                  className='flex items-center p-3 md:p-4 bg-gray-800/50 rounded-xl border border-gray-700/50 hover:border-pink-500/50 transition-all duration-300 group'
                >
                  <ExternalLink className='w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-pink-400 mr-2 md:mr-3' />
                  <span className='text-gray-300 group-hover:text-white text-sm md:text-base truncate'>
                    Portfolio
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* ✅ Contact Form */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className='bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-500 space-y-4 md:space-y-6'
          >
            <h3 className='text-xl md:text-2xl font-bold text-white mb-6'>Send Message</h3>

            <div>
              <label className='block text-gray-300 text-sm font-medium mb-2'>Name</label>
              <div className='relative'>
                <User className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                <input
                  type='text'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder='Your Name'
                  className='w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm md:text-base'
                />
              </div>
            </div>

            <div>
              <label className='block text-gray-300 text-sm font-medium mb-2'>Email</label>
              <div className='relative'>
                <Mail className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                <input
                  type='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder='your@email.com'
                  className='w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 text-sm md:text-base'
                />
              </div>
            </div>

            <div>
              <label className='block text-gray-300 text-sm font-medium mb-2'>Message</label>
              <div className='relative'>
                <MessageCircle className='absolute left-3 top-3 w-5 h-5 text-gray-400' />
                <textarea
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  placeholder='Tell me about your project...'
                  className='w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 resize-none text-sm md:text-base'
                />
              </div>
            </div>

            <button
              type='submit'
              className='w-full py-3 md:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 flex items-center justify-center group text-sm md:text-base'
            >
              <Send className='w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300' />
              Send Message
            </button>
          </form>
        </div>
      </div>
      <ToastContainer position='top-right' autoClose={3000} />
    </section>
  );
};

export default Contact;
