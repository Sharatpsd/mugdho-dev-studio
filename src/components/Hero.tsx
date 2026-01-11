import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin, Code2 } from 'lucide-react';
import profileImage from '@/assets/profile-image.png';

// Typewriter effect component
const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.07, delayChildren: delay * i },
    }),
  };

  const child = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {text.split('').map((char, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.92 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative group"
          >
            <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-cyan-500/30 shadow-2xl group-hover:border-cyan-400/60 transition-all duration-500">
              <img
                src={profileImage}
                alt="Sharat Acharja Mugdho"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700" />
          </motion.div>

          {/* Right side content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 text-cyan-300/80 text-sm font-medium"
            >
              <MapPin size={16} />
              <span>Dhaka, Bangladesh</span>
            </motion.div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <TypewriterText text="Sharat Acharja" />
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                Mugdho
              </span>
            </h1>

            {/* Main Title - Full Stack Developer */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-3xl md:text-4xl font-semibold text-white flex items-center justify-center lg:justify-start gap-3 flex-wrap"
            >
              <Code2 size={36} className="text-cyan-400" />
              Full Stack Developer
            </motion.h2>

            {/* Django + React combo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-xl md:text-2xl text-cyan-300/90 flex items-center justify-center lg:justify-start gap-3"
            >
              <span className="font-bold">Django</span>
              <span className="text-white/40">+</span>
              <span className="font-bold">React</span>
              <span className="text-cyan-400/90 font-medium">Combo</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              Building scalable backends with Django & crafting modern, responsive frontends with React.  
              Turning complex ideas into clean, production-ready web applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 pt-4"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl text-white font-medium shadow-lg shadow-cyan-900/30 hover:shadow-cyan-600/40 hover:scale-[1.03] transition-all duration-300"
              >
                Explore My Projects
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://drive.google.com/file/d/1z9DW6YewWH3OG3iOXov34RHG3V8rCQ-j/view"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-300 hover:text-cyan-200 hover:border-cyan-400 rounded-xl font-medium transition-all duration-300 hover:bg-cyan-950/30"
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