import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education: React.FC = () => {
  const [refHeader, inViewHeader] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [refEducation, inViewEducation] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [refCertifications, inViewCertifications] = useInView({ triggerOnce: false, threshold: 0.1 });

  const educationItems = [
    {
      degree: 'B.TECH - Artificial Intelligence And Data Science',
      institution: 'Sri Krishna College Of Technology, Coimbatore',
      year: '2022 - 2026',
      score: 'CGPA - 7.96',
    },
    {
      degree: 'Higher Secondary School Certificate (HSLC)',
      institution: 'Kurinji Hr. Sec. School, Namakkal',
      year: '2020 - 2022',
      score: 'Percentage - 92.67',
    },
    {
      degree: 'Secondary School Certificate (SSLC)',
      institution: 'Kalaimagal Matriculation Hr. Sec. School, Namakkal',
      year: '2019 - 2020',
      score: 'Percentage - 89.2',
    },
  ];

  const certifications = [
    'The Joy of Computing using Python - Elite Nptel',
    'Excel Skills For Business - Forage',
    'SQL - BASICS - Code Chef',
    'Power BI Data Modelling Basics - Forage',
    'Data Analytics And Visualization - Forage',
    'Micro Certification Welcome To Service Now',
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="education"
      className="section py-20"
      style={{
        background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(34, 67, 78) 50%,rgb(0,0,0) 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Header Animation: Zoom In & Rotate */}
        <motion.div
          ref={refHeader}
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={inViewHeader ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl md:text-5xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-4 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-white text-lg font-semibold">
            My academic background and professional certifications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Education Slide-In from Left */}
          <motion.div
            ref={refEducation}
            initial={{ opacity: 0, x: -100 }}
            animate={inViewEducation ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-white/80 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
              <GraduationCap className="w-6 h-6 mr-2 text-primary-500" />
              Education
            </h3>

            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inViewEducation ? 'visible' : 'hidden'}
                  className="border-l-2 border-primary-200 pl-6 relative"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full"></div>
                  <h4 className="text-xl font-semibold text-gray-800">{item.degree}</h4>
                  <p className="text-gray-600 mb-1">{item.institution}</p>
                  <div className="flex items-center text-gray-500 mb-2">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span>{item.year}</span>
                  </div>
                  <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm">
                    {item.score}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications Slide-In from Right */}
          <motion.div
            ref={refCertifications}
            initial={{ opacity: 0, x: 100 }}
            animate={inViewCertifications ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="bg-white/80 p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
              <Award className="w-6 h-6 mr-2 text-secondary-500" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={inViewCertifications ? 'visible' : 'hidden'}
                  className="flex items-start"
                >
                  <div className="w-4 h-4 rounded-full bg-secondary-500 mt-1 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">{cert}</p>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <motion.div
              variants={itemVariants}
              initial="hidden"
              animate={inViewCertifications ? 'visible' : 'hidden'}
              className="mt-8 pt-8 border-t border-gray-200"
            >
              <h4 className="text-xl font-semibold mb-4 text-gray-800">Languages</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-700">English</span>
                  <span className="text-gray-500">Proficient</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Tamil</span>
                  <span className="text-gray-500">Proficient</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Telugu</span>
                  <span className="text-gray-500">Proficient</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
