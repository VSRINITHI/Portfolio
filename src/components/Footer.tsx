import React from 'react';
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Srinithi V</h3>
            <p className="text-gray-400 mb-4">
              SOFTWARE DEVELOPER | DATA ANALYST
            </p>
            <p className="text-gray-400">
              Passionate about creating efficient, innovative solutions to complex problems.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hero" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">About</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Experience</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Projects</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-gray-400" />
                <a href="tel:+918610212991" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  +91 8610212991
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-gray-400" />
                <a href="mailto:srinithi182004@gmail.com" className="text-gray-400 hover:text-primary-400 transition-colors duration-300">
                  srinithi182004@gmail.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/VSRINITHI" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/srinithi-v-profile" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:srinithi182004@gmail.com" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            &copy; {currentYear} Srinithi V. All rights reserved. 
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;