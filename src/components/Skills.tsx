import React from 'react';
import {
  SiPython, SiCplusplus, SiHtml5, SiReact, SiCss3, SiJavascript, SiGit,
  SiMysql, SiSelenium, SiSpringboot,
} from 'react-icons/si';
import { FaAws, FaJava, FaFileExcel } from 'react-icons/fa';
import { motion } from 'framer-motion';

const skillIcons = [
  { icon: <SiPython size={40} />, name: 'Python', color: '#4B8BBE' },
  { icon: <FaJava size={40} />, name: 'Java', color: '#EA2D2E' },
  { icon: <SiCplusplus size={40} />, name: 'C++', color: '#00599C' },
  { icon: <SiHtml5 size={40} />, name: 'HTML', color: '#E44D26' },
  { icon: <SiReact size={40} />, name: 'React', color: '#61DAFB' },
  { icon: <SiCss3 size={40} />, name: 'CSS3', color: '#264DE4' },
  { icon: <SiJavascript size={40} />, name: 'JavaScript', color: '#F7DF1E' },
  { icon: <FaFileExcel size={40} />, name: 'Excel', color: '#217346' },
  { icon: <SiGit size={40} />, name: 'Git', color: '#F1502F' },
  { icon: <SiMysql size={40} />, name: 'MySQL', color: '#00758F' },
  { icon: <FaAws size={40} />, name: 'AWS', color: '#FF9900' },
  { icon: <SiSelenium size={40} />, name: 'Selenium', color: '#43B02A' },
  { icon: <SiSpringboot size={40} />, name: 'Spring Boot', color: '#6DB33F' },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col md:flex-row w-full min-h-screen justify-between gap-12 px-6 md:px-16 py-20"
      style={{
        background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(34, 67, 78) 50%,rgb(0,0,0) 100%)',
      }}
    >
      {/* LEFT QUOTE SECTION */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left text-white"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'backOut' }}
        >
          My Skills
        </motion.h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 my-4 rounded-full"></div>
        <p className="text-xl font-bold mb-4 leading-snug text-gray-200">
          "Your Next Big Idea Starts Here"
        </p>
        <p className="text-sm md:text-base text-gray-100 mb-6 max-w-md">
          Let’s collaborate and bring your vision to life.
        </p>
        <motion.button
          onClick={() => window.location.href = "#contact"}
          className="bg-[#6E4DFF] hover:bg-[#5c3fe1] text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Contact Me
        </motion.button>
      </motion.div>

      {/* RIGHT SKILL ICONS */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false }}
      >
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 justify-items-center">
          {skillIcons.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: false }}
              whileHover={{ scale: 1.1 }}
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut', delay: index * 0.05 }}
                style={{ color: skill.color }}
              >
                {skill.icon}
              </motion.div>
              <span className="text-sm text-white font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
