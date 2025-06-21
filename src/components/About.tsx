import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const headingText = 'About Me';

  return (
    <section
      className="flex justify-center items-center min-h-screen px-4 py-12"
      style={{
        background:
          'linear-gradient(135deg, rgb(0, 0, 0) 0%, rgb(34, 67, 78) 50%, rgb(0,0,0) 100%)',
      }}
    >
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10">
        {/* Avatar Section */}
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <motion.div
            className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-[22rem] md:h-[22rem]"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
          >
            {/* Purple Blobby Background Shape */}
            <svg
              viewBox="0 0 600 600"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute inset-0 w-full h-full"
            >
              <g transform="translate(300,400)">
  
</g>

            </svg>
            <img
              src="https://github.com/VSRINITHI/Portfolio/blob/main/public/assets/chibi_avatar_transparent.png"
              alt="Developer"
              className="absolute inset-0 z-10 w-full h-full object-contain rounded-full"
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left px-2">
          {/* Animated Heading */}
          <motion.h2 className="text-4xl sm:text-5xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600">
            <div className="flex justify-center md:justify-start">
              {headingText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  viewport={{ once: false }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.h2>

          {/* Gradient Line - always under heading */}
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 my-4 mx-auto md:mx-0 rounded-full" />

          {/* Paragraph */}
          <motion.p
            className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false, amount: 0.4 }}
          >
            Hi, I'm Srinithi! I am currently pursuing a B.Tech in Artificial Intelligence and Data Science.
            With a passion for web development and design, I’m dedicated to creating dynamic and responsive
            websites that deliver seamless user experiences.
          </motion.p>

          {/* Download Button */}
          <motion.a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#6E4DFF] hover:bg-[#5c3fe1] text-white font-bold py-3 px-10 rounded-full transition text-base sm:text-lg inline-block shadow-lg"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'backOut' }}
            viewport={{ once: false, amount: 0.4 }}
          >
            Download CV
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;
