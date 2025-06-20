import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ParticlesProps {
  id?: string;
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

const ParticleBackground = ({ id = "particles-js", className }: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const handleResize = () => {
      const container = canvas.parentElement;
      if (!container) return;
      
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      setDimensions({ width: canvas.width, height: canvas.height });
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0 || dimensions.height === 0) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const particleCount = 80;
    const particles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 1,
        speedY: (Math.random() - 0.5) * 1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }
    
    let mouseX = 0;
    let mouseY = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };
    
    canvas.addEventListener('mousemove', handleMouseMove);
    
    let animationFrameId: number;
    
    const render = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);
      
      particles.forEach((particle, i) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        if (particle.x > dimensions.width) particle.x = 0;
        else if (particle.x < 0) particle.x = dimensions.width;
        
        if (particle.y > dimensions.height) particle.y = 0;
        else if (particle.y < 0) particle.y = dimensions.height;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(108, 99, 255, ${particle.opacity})`;
        ctx.fill();
        
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(108, 99, 255, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
        
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 2000;
          particle.speedX -= Math.cos(angle) * force;
          particle.speedY -= Math.sin(angle) * force;
          
          particle.speedX *= 0.99;
          particle.speedY *= 0.99;
        }
      });
      
      animationFrameId = requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);
  
  return (
    <motion.div
      id={id}
      className={`absolute inset-0 -z-10 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <canvas 
        ref={canvasRef} 
        className="w-full h-full block"
      />
    </motion.div>
  );
};

export default ParticleBackground;