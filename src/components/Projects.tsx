import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, Star, X } from 'lucide-react';

import projectBite from '@/assets/project-bite.png';
import projectDairy from '@/assets/project-dairy.png';
import projectCareer from '@/assets/project-career.png';

const projects = [
  {
    title: 'Bite — Food Delivery Platform',
    featured: true,
    description: 'A full-stack food delivery platform supporting customers and restaurant partners through a scalable REST-based architecture.',
    image: projectBite,
    tech: ['Django REST Framework', 'React', 'PostgreSQL', 'JWT', 'Tailwind CSS'],
    highlights: [
      'JWT-based authentication & role-based access',
      'Cart, checkout, menu & order management',
      'Scalable Django REST API',
      'Responsive React frontend',
    ],
    github: 'https://github.com/Sharatpsd/Food-Delivery-App-',
    live: 'https://food-delivery-frontend-mktt.onrender.com',
  },
  {
    title: 'Daily Dairy Shop — E-Commerce Platform',
    featured: false,
    description: 'A production-ready Django e-commerce platform for online dairy product sales with a custom admin dashboard.',
    image: projectDairy,
    tech: ['Django', 'PostgreSQL', 'Bootstrap', 'Cloudinary'],
    highlights: [
      'Custom admin dashboard (inventory & orders)',
      'Session-based cart & authentication',
      'Cloudinary image storage',
      'Clean customer UI',
    ],
    github: 'https://github.com/Sharatpsd/DailyDairyShop',
    live: 'https://dailydairyshop-3.onrender.com',
  },
  {
    title: 'Smart Career Prediction — ML Web App',
    featured: false,
    description: 'An AI-based career recommendation system using supervised machine learning models.',
    image: projectCareer,
    tech: ['Python', 'Django', 'Scikit-learn'],
    highlights: [
      'Multiple ML models evaluated',
      'Random Forest selected for best performance',
      'Integrated ML predictions into Django',
    ],
    github: 'https://github.com/Sharatpsd/smart-career-prediction-using-ml',
    live: null,
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section id="projects" className="section-padding">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="body-md max-w-2xl mx-auto">
            Real-world applications built with production-ready architecture and best practices.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="project-card group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Project Image */}
                <div 
                  className="relative h-64 lg:h-auto lg:min-h-[320px] overflow-hidden cursor-pointer"
                  onClick={() => setLightboxImage(project.image)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="project-image"
                  />
                  <div className="project-overlay lg:hidden" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card hidden lg:block" />
                  
                  {/* Hover overlay with zoom hint */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="px-4 py-2 bg-background/90 rounded-lg text-sm font-medium backdrop-blur-sm">
                      Click to expand
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg">
                        <Star size={12} fill="currentColor" />
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Project Content */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="heading-md mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="body-md mb-5">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((tech) => (
                      <span key={tech} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm py-2.5 px-5"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm py-2.5 px-5"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-5xl w-full"
          >
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <img
              src={lightboxImage}
              alt="Project screenshot enlarged"
              className="w-full rounded-xl border border-border shadow-2xl"
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
