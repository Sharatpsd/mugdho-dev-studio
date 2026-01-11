import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, Star, X, ArrowRight } from 'lucide-react';

import projectBite from '@/assets/project-bite.png';
import projectDairy from '@/assets/project-dairy.png';
import projectCareer from '@/assets/project-career.png';

const projects = [
  {
    title: 'Bite — Food Delivery Platform',
    featured: true,
    description: 'Full-featured food delivery platform connecting customers and restaurants with scalable REST architecture.',
    image: projectBite,
    tech: ['Django REST Framework', 'React', 'PostgreSQL', 'JWT', 'Tailwind CSS', 'Redis'],
    highlights: [
      'JWT + role-based authentication system',
      'Real-time order tracking & restaurant dashboard',
      'Complete cart, checkout & payment flows',
      'Responsive React frontend with smooth UX',
    ],
    github: 'https://github.com/Sharatpsd/Food-Delivery-App-',
    live: 'https://food-delivery-frontend-mktt.onrender.com',
  },
  {
    title: 'Daily Dairy Shop — E-Commerce',
    featured: false,
    description: 'Production-grade e-commerce solution for dairy products with custom admin panel and inventory management.',
    image: projectDairy,
    tech: ['Django', 'PostgreSQL', 'Cloudinary', 'Celery', 'Tailwind CSS'],
    highlights: [
      'Custom admin dashboard with analytics',
      'Advanced inventory & stock management',
      'Optimized image handling via Cloudinary',
      'Clean, fast customer shopping experience',
    ],
    github: 'https://github.com/Sharatpsd/DailyDairyShop',
    live: 'https://dailydairyshop-3.onrender.com',
  },
  {
    title: 'Smart Career — ML Prediction',
    featured: false,
    description: 'AI-powered career recommendation system built with multiple machine learning models.',
    image: projectCareer,
    tech: ['Python', 'Django', 'Scikit-learn', 'Pandas', 'Joblib'],
    highlights: [
      'Evaluated 7+ classification algorithms',
      'Random Forest model selected (highest accuracy)',
      'Clean API integration with Django',
      'Interactive result visualization',
    ],
    github: 'https://github.com/Sharatpsd/smart-career-prediction-using-ml',
    live: 'https://ai-career-guidance.onrender.com/',
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-120px' });

  const [lightbox, setLightbox] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.4, 1, 1, 0.6]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background decoration */}
      <motion.div style={{ opacity }} className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.07),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(34,197,94,0.06),transparent_45%)]" />
      </motion.div>

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="mt-6 h-1.5 w-32 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 mx-auto rounded-full" />
          <p className="mt-6 text-lg text-slate-300/90 max-w-2xl mx-auto">
            Production-grade applications • Clean architecture • Real-world problem solving
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 60, scale: 0.94 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.12 + 0.2,
                type: 'spring',
                stiffness: 90,
                damping: 18
              }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="
                group relative rounded-2xl overflow-hidden
                bg-gradient-to-b from-slate-800/70 to-slate-900/70
                backdrop-blur-xl border border-slate-700/60
                shadow-2xl shadow-black/30
                hover:border-slate-500/70 transition-all duration-400
              "
            >
              {/* Image Container */}
              <div 
                className="relative aspect-[4/3] overflow-hidden cursor-pointer"
                onClick={() => setLightbox(project.image)}
              >
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="
                    w-full h-full object-cover object-top
                    transition-transform duration-700
                    group-hover:scale-110
                  "
                />

                <div className="
                  absolute inset-0 bg-gradient-to-t 
                  from-black/70 via-black/20 to-transparent 
                  opacity-60 group-hover:opacity-80 transition-opacity
                "/>

                <div className="
                  absolute inset-0 flex items-center justify-center
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500
                ">
                  <span className="
                    px-6 py-3 bg-slate-900/80 backdrop-blur-md rounded-full
                    text-sm font-medium text-white border border-slate-700/50
                    flex items-center gap-2
                  ">
                    <ArrowRight size={16} />
                    View larger
                  </span>
                </div>

                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <div className="
                      flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold
                      bg-gradient-to-r from-amber-500 to-yellow-600
                      text-white rounded-full shadow-lg ring-1 ring-amber-500/40
                    ">
                      <Star size={14} fill="white" />
                      Featured
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <h3 className="
                  text-xl md:text-2xl font-bold text-white mb-3 
                  group-hover:text-cyan-300 transition-colors
                ">
                  {project.title}
                </h3>

                <p className="text-slate-300/90 mb-5 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="
                        px-3 py-1 text-xs font-medium rounded-full
                        bg-slate-800/80 text-cyan-300/90 border border-slate-700/60
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap items-center gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                      bg-slate-800/70 hover:bg-slate-700/70 border border-slate-700
                      text-slate-200 hover:text-white transition-all
                    "
                  >
                    <Github size={16} />
                    Code
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2 px-5 py-2.5 rounded-lg
                        bg-gradient-to-r from-cyan-600 to-teal-600
                        hover:from-cyan-500 hover:to-teal-500
                        text-white font-medium transition-all shadow-lg shadow-cyan-900/30
                      "
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-6xl w-full"
          >
            <button
              onClick={() => setLightbox(null)}
              className="
                absolute -top-14 right-0 p-3 rounded-full
                bg-slate-900/80 border border-slate-700 text-white
                hover:bg-slate-800 transition-colors
              "
            >
              <X size={28} />
            </button>

            <img
              src={lightbox}
              alt="Project enlarged view"
              className="w-full rounded-2xl shadow-2xl border border-slate-800"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};