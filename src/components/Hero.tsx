import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';
import profileImage from '@/assets/profile-image.png';

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="section-container pt-32 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative group"
          >
            <div className="profile-ring w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 group-hover:shadow-xl transition-shadow duration-300" style={{ boxShadow: 'var(--shadow-lg)' }}>
              <img
                src={profileImage}
                alt="Sharat Acharja Mugdho"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle glow on hover */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 -z-10" />
          </motion.div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-4"
            >
              <MapPin size={16} />
              <span className="text-sm font-medium">Dhaka, Bangladesh</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="heading-xl mb-6"
            >
              <span className="gradient-text">Backend-Focused</span>
              <br />
              Full-Stack Developer
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="body-lg max-w-2xl mx-auto lg:mx-0 mb-4"
            >
              I build scalable Django backends, secure REST APIs, and production-ready web applications—integrating modern React frontends and applied machine learning.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg font-medium text-foreground mb-8"
            >
              Turning complex requirements into reliable, real-world systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a href="#projects" className="btn-primary group">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/file/d/1z9DW6YewWH3OG3iOXov34RHG3V8rCQ-j/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
