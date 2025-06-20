import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Award,
  Users,
  Target,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const experienceItems = [
  {
    title: "Data Science Intern",
    company: "Postulate Infotech",
    period: "July 2024",
    location: "Remote",
    type: "Intern",
    icon: <Target className="w-6 h-6 text-blue-500" />,
    description: [
      "Hands-on experience in data analysis, machine learning, and visualization.",
      "Built models (Logistic Regression, Decision Trees, CNN), tackled class imbalance.",
      "Used Power BI and Matplotlib for visualization.",
    ],
    
  },
  {
    title: "Data Analyics Intern",
    company: "OneYes Infotech Solutions",
    period: "May 2025 - June 2025",
    location: "Remote",
    type: "Intern",
    icon: <Target className="w-6 h-6 text-blue-500" />,
    description: [
      "Hands-on experience in data analysis, machine learning, and visualization.",
      "Built models for Customer Segementation and clustering techniques",
      "Used Power BI and Matplotlib for visualization.",
    ],
    
  },
  {
    title: "Secretary",
    company: "AI & DS Association",
    period: "2023 - Present",
    location: "Sri Krishna College Of Technology",
    type: "Leadership",
    icon: <Award className="w-6 h-6 text-purple-500" />,
    description: [
      "Coordinated events and workshops.",
      "Organized tech sessions on AI/Data Science.",
      "Fostered knowledge-sharing across departments.",
    ],
    responsibilities: [
      "Manage communication across committees.",
      "Plan and schedule tech meetups.",
      "Maintain event logs and reports.",
    ],
  },
  {
    title: "Class Representative",
    company: "Sri Krishna College Of Technology",
    period: "2025-2026",
    location: "Coimbatore",
    type: "Leadership",
    icon: <Users className="w-6 h-6 text-green-500" />,
    description: [
      "Acted as liaison between students and faculty.",
      "Managed class communications and updates.",
      "Ensured smooth academic coordination.",
    ],
    responsibilities: [
      "Act as the bridge between faculty and students.",
      "Coordinate class-level academic logistics.",
      "Relay important announcements and updates.",
    ],
  },
  {
    title: "Team Leader",
    company: "Smart India Hackathon 2024",
    period: "2024",
    location: "Virtual",
    type: "Project",
    icon: <Briefcase className="w-6 h-6 text-orange-500" />,
    description: [
      "Led an innovation team remotely.",
      "Delegated roles and ensured milestones.",
      "Presented outcomes to stakeholders.",
    ],
    responsibilities: [
      "Lead brainstorming and development sessions.",
      "Track deliverables and team contributions.",
      "Ensure timely project submission and review.",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Experience: React.FC = () => {
  const ref = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);

  const inView = useInView(ref, { once: false, threshold: 0.2 });
  const headingInView = useInView(headingRef, { once: false, threshold: 0.4 });
  const descInView = useInView(descriptionRef, { once: false, threshold: 0.4 });

  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState<"experience" | "responsibilities">("responsibilities");
  const [showTyping, setShowTyping] = useState(false);

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  useEffect(() => {
    if (descInView) {
      setShowTyping(false);
      const timeout = setTimeout(() => setShowTyping(true), 100); // reset typing animation
      return () => clearTimeout(timeout);
    }
  }, [descInView]);

  const filteredItems = experienceItems.filter(item =>
  activeTab === "experience"
    ? item.type === "Full-time" || item.type === "Intern"
    : item.type !== "Full-time" && item.type !== "Intern"
);


  return (
    <section
      id="experience"
      // className="py-24 bg-gradient-to-br from-white via-slate-50 to-white"
      style={{
        background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(34, 67, 78) 50%,rgb(0,0,0) 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        {/* Zoom-in Heading */}
        <motion.div
          ref={headingRef}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={headingInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
          className="text-center mb-10"
        >
        <br></br>  
        <motion.h2
                  className="text-5xl md:text-6xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-600"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'backOut' }}
                >
                  My Professional Journey
                </motion.h2>  
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto my-4 rounded-full"></div>

          {/* Typing Animation */}
          <div ref={descriptionRef}>
            {showTyping && (
              <TypeAnimation
                sequence={[
                  'A quick glance at my roles, experiences, and accomplishments.',
                  2000,
                ]}
                wrapper="p"
                speed={50}
                repeat={1}
                className="max-w-2xl mx-auto text-white text-lg font-semibold"
              />
            )}
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "experience"
                ? "bg-blue-500 text-white"
                : "bg-slate-200 text-gray-700"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("responsibilities")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition ${
              activeTab === "responsibilities"
                ? "bg-purple-500 text-white"
                : "bg-slate-200 text-gray-700"
            }`}
          >
            Responsibilities
          </button>
        </div>

        {/* Cards */}
        <motion.div
          key={activeTab}
          ref={ref}
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/80 rounded-3xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex items-center mb-4 space-x-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-100 to-slate-200 shadow-inner">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.company}</p>
                </div>
              </div>

              <div className="text-sm text-gray-600 space-y-1 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-blue-500" />
                  {item.period}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2 text-purple-500" />
                  {item.location}
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-green-500" />
                  {item.type}
                </div>
              </div>

              <h4 className="font-semibold text-gray-800 mb-2">
                {activeTab === "experience" ? "Highlights" : "Key Responsibilities"}
              </h4>
              <ul className="text-gray-700 space-y-2 text-sm list-disc list-inside">
                {(activeTab === "experience" ? item.description : item.responsibilities).map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
