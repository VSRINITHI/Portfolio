import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const roles = [
  "Freelancer",
  "Software Developer",
  "Data Analyst",
  "Full Stack Developer",
  "Frontend Developer",
  "Data Scientist",
  "Software Tester",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(false);
      setTimeout(() => {
        setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsAnimating(true);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.2, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 1.2, opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.7)",
          }}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        {/* Text Left */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 text-white" style={{ fontFamily: 'Bright Retro, sans-serif' }}>
            <span className="gradient-text">Srinithi V</span>
          </h1>

          {/* Animated Role */}
          <div className="mt-3 mb-6">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: isAnimating ? 1 : 0,
                scale: isAnimating ? 1 : 0.95,
              }}
              transition={{ duration: 0.4 }}
              className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"
            >
              {roles[roleIndex]}
            </motion.p>
          </div>

          <p className="mt-8 text-gray-300 text-sm sm:text-base">
            Hi, I'm Srinithi! I’m currently pursuing a B.Tech in Artificial Intelligence and Data Science. With a passion for web development and design, I create responsive websites and also work with data science and analytics.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-6 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-full text-sm text-center"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-6 py-2 border border-white text-white hover:bg-white hover:text-gray-900 rounded-full text-sm text-center"
            >
              View Projects
            </a>
          </div>
        </motion.div>

        {/* Image Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/assets/dev.png"
            alt="Developer"
            className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-md"
            loading="lazy"
          />
        </motion.div>
      </div>

      {/* Scroll Arrow */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <a
          href="#about"
          className="text-white opacity-70 hover:opacity-100 transition-opacity"
        >
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}
