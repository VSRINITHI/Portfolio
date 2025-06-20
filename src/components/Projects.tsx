import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { motion, useAnimation, useInView } from 'framer-motion';

// Helper to highlight the middle character of a string
const highlightMiddle = (text: string) => {
  if (!text) return '';
  const mid = Math.floor(text.length / 2);
  return (
    <>
      {text.substring(0, mid)}
      <span className="text-blue-400 font-extrabold drop-shadow-glow animate-pulse">
        {text[mid]}
      </span>
      {text.substring(mid + 1)}
    </>
  );
};

const projects = [
  {
    title: 'Event Organizing Portal',
    description:
      'Full-stack app for event organizing with booking, admin dashboard, payments, and authentication.',
    image:
      'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    githubLink: 'https://github.com/VSRINITHI/App_Development',
  },
  {
    title: 'Eco - Chatbot',
    description:
      '24/7 chatbot for instant responses and automated museum ticketing and show bookings.',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['NLP', 'Python', 'Machine Learning', 'UI/UX'],
    githubLink: 'https://github.com/VSRINITHI/Eco-Chatbot',
  },
  {
    title: 'Credit Card Fraud Detection',
    description:
      'Machine learning for real-time fraud detection, with model optimization.',
    image:
      'https://images.pexels.com/photos/6347752/pexels-photo-6347752.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['Python', 'Machine Learning', 'Data Analysis'],
    githubLink: 'https://github.com/VSRINITHI/CODSOFT/blob/main/Fraud.ipynb',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.18,
      duration: 0.7,
      type: 'spring',
      stiffness: 70,
      damping: 14,
    },
  }),
};

const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { threshold: 0.3, triggerOnce: false });

  const headingControls = useAnimation();
  const paraControls = useAnimation();

  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    if (isInView) {
      headingControls.start({ opacity: 1, y: 0, scale: 1 });
      paraControls.start({ opacity: 1, y: 0 });
    } else {
      headingControls.start({ opacity: 0, y: 20, scale: 0.9 });
      paraControls.start({ opacity: 0, y: 20 });
    }
  }, [isInView]);

  return (
    <section
      id="projects"
      className="py-16 overflow-hidden relative min-h-screen"
      style={{
        background:
          'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(34, 67, 78) 50%,rgb(0,0,0) 100%)',
      }}
      ref={sectionRef}
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"
          animate={headingControls}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          Projects
        </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-4 rounded-full"></div>

        <motion.p
          animate={paraControls}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto text-gray-200 text-base font-semibold"
        >
          Showcasing some of my recent work and projects that demonstrate my technical skills.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              whileHover={{
                scale: 1.07,
                boxShadow:
                  '0 12px 32px 0 rgba(59,130,246,0.18), 0 1.5px 8px 0 rgba(59,130,246,0.10)',
                transition: { duration: 0.3 },
              }}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transition-all duration-700 ease-out transform flex flex-col items-center border-2 border-blue-100"
              style={{
                maxWidth: 400,
                minHeight: 320,
              }}
            >
              <div className="relative w-full aspect-video max-w-full overflow-hidden group shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 flex flex-col justify-center items-center px-6 text-center bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <h3 className="text-white font-extrabold text-xl mb-2 drop-shadow-glow animate-glow">
                    {highlightMiddle(project.title)}
                  </h3>
                  <p className="text-gray-200 text-sm font-semibold">
                    {project.description}
                  </p>
                </motion.div>
              </div>

              <div className="p-5 w-full">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ scale: 0.85, opacity: 0.7 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.3, delay: 0.1 * tagIndex }}
                      className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-bold shadow-sm animate-pulse"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                <div className="flex justify-between mt-2">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-700 hover:text-blue-900 font-bold transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    <span className="text-xs">Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
