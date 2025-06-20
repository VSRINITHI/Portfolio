import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [headingRef, headingInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [paraRef, paraInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    isError: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus({ isSubmitting: true, isSubmitted: false, isError: false });

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setFormStatus({ isSubmitting: false, isSubmitted: true, isError: false });
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-primary-500" />,
      title: 'Phone',
      info: '+91 8610212991',
      link: 'tel:+918610212991',
    },
    {
      icon: <Mail className="w-5 h-5 text-primary-500" />,
      title: 'Email',
      info: 'srinithi182004@gmail.com',
      link: 'mailto:srinithi182004@gmail.com',
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary-500" />,
      title: 'Location',
      info: 'Coimbatore, Tamil Nadu, India',
      link: 'https://maps.google.com?q=Coimbatore,Tamil Nadu,India',
    },
  ];

  return (
    <section id="contact" className="section py-20"
      style={{
        background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(34, 67, 78) 50%,rgb(0,0,0) 100%)',
      }}
    >
      {/* Embedded Animation Styles */}
      <style>{`
        @keyframes focus-in-expand {
          0% {
            letter-spacing: -0.5em;
            filter: blur(12px);
            opacity: 0;
          }
          100% {
            filter: blur(0);
            opacity: 1;
          }
        }

        @keyframes blur-in {
          0% {
            filter: blur(10px);
            opacity: 0;
          }
          100% {
            filter: blur(0);
            opacity: 1;
          }
        }

        .focus-in-expand {
          animation: focus-in-expand 0.8s ease-out forwards;
        }

        .blur-in {
          animation: blur-in 0.8s ease-out forwards;
        }
      `}</style>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2
            ref={headingRef}
            className={`text-3xl md:text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600 ${headingInView ? 'focus-in-expand' : ''
              }`}
          >
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-4 rounded-full"></div>
          <p
            ref={paraRef}
            className={`max-w-3xl mx-auto text-white text-lg font-semibold ${paraInView ? 'blur-in' : ''
              }`}
          >
            Have a question or want to work together? Feel free to contact me using the form below.
          </p>
        </motion.div>

        <div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/80 p-6 rounded-lg shadow-md h-full">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.title === 'Location' ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start group"
                  >
                    <div className="p-3 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-gray-700 font-medium">{item.title}</h4>
                      <p className="text-gray-600 group-hover:text-primary-600 transition-colors duration-300">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>
              
              <div className="mt-8">
                <h4 className="text-gray-700 font-medium mb-4">Connect with me</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.linkedin.com/in/srinithi-v-profile"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a
                    href="https://github.com/VSRINITHI"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 transition-colors duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/80 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Send me a message</h3>
              
              {formStatus.isSubmitted ? (
                <div className="bg-green-50 border border-green-200 text-green-700 p-4 rounded-lg flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <p className="font-medium">Message sent successfully!</p>
                    <p className="text-sm mt-1">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Your email"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Subject of your message"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={formStatus.isSubmitting}
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
                  >
                    {formStatus.isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
