import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: 'Bite — Food Delivery Platform',
    featured: true,
    description: 'A full-stack food delivery application with role-based access, real-time order management, and a responsive React frontend.',
    tech: ['Django REST Framework', 'React', 'PostgreSQL', 'JWT', 'Tailwind CSS'],
    highlights: [
      'JWT-based authentication and role-based access control',
      'Cart, checkout, menu, and order management systems',
      'Scalable REST API architecture',
      'Responsive React frontend with modern UX',
    ],
    github: 'https://github.com/Sharatpsd/Food-Delivery-App-',
    live: 'https://food-delivery-frontend-mktt.onrender.com',
  },
  {
    title: 'Daily Dairy Shop — E-Commerce Platform',
    featured: false,
    description: 'A complete e-commerce solution with custom admin dashboard, inventory management, and Cloudinary-optimized image storage.',
    tech: ['Django', 'PostgreSQL', 'Bootstrap', 'Cloudinary'],
    highlights: [
      'Custom admin dashboard (not default Django admin)',
      'Inventory, order, and customer management',
      'Session-based cart and authentication',
      'Cloudinary image storage and optimization',
    ],
    github: 'https://github.com/Sharatpsd/DailyDairyShop',
    live: 'https://dailydairyshop-3.onrender.com',
  },
  {
    title: 'Smart Career Prediction — ML Application',
    featured: false,
    description: 'An AI-powered career recommendation system using machine learning models integrated into a Django web application.',
    tech: ['Python', 'Django', 'Scikit-learn', 'Machine Learning'],
    highlights: [
      'AI-based career recommendation system',
      'Multiple ML model evaluation and comparison',
      'Random Forest model selected and integrated',
      'Clean Django web interface',
    ],
    github: 'https://github.com/Sharatpsd/smart-career-prediction-using-ml',
    live: null,
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`card-elevated p-8 ${project.featured ? 'border-primary/20' : ''}`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    {project.featured && (
                      <span className="flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-primary/10 to-accent/10 text-primary">
                        <Star size={12} fill="currentColor" />
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <h3 className="heading-md mb-3">{project.title}</h3>
                  <p className="body-md mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="skill-tag text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm py-2 px-4"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-sm py-2 px-4"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
