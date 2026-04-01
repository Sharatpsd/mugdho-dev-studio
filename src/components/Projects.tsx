import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { Github, ExternalLink, ArrowRight, Star } from 'lucide-react';

import projectBite from '@/assets/project-bite1.png';
import projectDairy from '@/assets/project-dairy.png';
import projectCareer from '@/assets/project-career.png';
import projectChai from '@/assets/project-chai.png';

const projects = [
  {
    title: 'Bite - Food Delivery Platform',
    featured: true,
    description: 'Full-stack food delivery platform with real-time tracking, scalable backend, and delightful user experience.',
    image: projectBite,
    tech: ['Django', 'DRF', 'React', 'PostgreSQL', 'JWT', 'Redis', 'Tailwind'],
    github: 'https://github.com/Sharatpsd/Food-Delivery-App-',
    live: 'https://food-delivery-frontend-mktt.onrender.com',
  },
  {
    title: 'Daily Dairy Shop',
    featured: false,
    description: 'Modern e-commerce platform for dairy products with advanced inventory and admin dashboard.',
    image: projectDairy,
    tech: ['Django', 'PostgreSQL', 'Cloudinary', 'Celery', 'Tailwind'],
    github: 'https://github.com/Sharatpsd/DailyDairyShop',
    live: 'https://dailydairyshop-3.onrender.com',
  },
  {
    title: 'Smart Career',
    featured: false,
    description: 'AI-powered career recommendation system using multiple machine learning models.',
    image: projectCareer,
    tech: ['Python', 'Django', 'Scikit-learn', 'Pandas', 'Joblib'],
    github: 'https://github.com/Sharatpsd/smart-career-prediction-using-ml',
    live: 'https://ai-career-guidance.onrender.com/',
  },
  {
    title: 'Chai Order System',
    featured: false,
    description: 'Clean and well-structured tea ordering system with authentication and order management.',
    image: projectChai,
    tech: ['Django', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/Sharatpsd/chai-order-system',
    live: 'https://chai-order-system-5.onrender.com/',
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
  const [hoveredFeatured, setHoveredFeatured] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const featuredParallax = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const featured = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section 
      id="projects" 
      ref={sectionRef} 
      className="relative overflow-hidden bg-[#0a0f1c] py-24 md:py-32 lg:py-40"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.15),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(129,140,248,0.10),transparent_65%)]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-950/60 px-8 py-2 text-sm tracking-[3px] text-cyan-300 mb-6">
            SELECTED WORK
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </motion.div>

        {/* === FEATURED PROJECT === */}
        {featured && (
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] }}
            onMouseEnter={() => setHoveredFeatured(true)}
            onMouseLeave={() => setHoveredFeatured(false)}
            className="group relative mb-24 overflow-hidden rounded-3xl border border-cyan-400/20 bg-slate-900/90 backdrop-blur-2xl shadow-2xl"
          >
            <div className="relative h-[520px] md:h-[620px] overflow-hidden">
              <motion.img
                src={featured.image}
                alt={featured.title}
                style={{ y: featuredParallax }}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-[#0a0f1c]/80 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="rounded-full bg-amber-500/10 border border-amber-500/30 px-4 py-1 text-xs font-medium text-amber-300 flex items-center gap-2">
                      <Star className="h-4 w-4" fill="#fcd34d" />
                      FEATURED PROJECT
                    </div>
                  </div>

                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 leading-none">
                    {featured.title}
                  </h3>

                  <p className="text-xl text-slate-300 mb-10 max-w-lg">
                    {featured.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-10">
                    {featured.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-white/5 border border-white/10 px-5 py-2 text-sm text-white/90 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href={featured.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-3 rounded-2xl border border-slate-600 bg-slate-900 px-8 py-4 text-white hover:border-slate-400 transition-all duration-300"
                    >
                      <Github size={22} />
                      <span>View Source</span>
                    </a>

                    {featured.live && (
                      <a
                        href={featured.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-10 py-4 font-semibold text-white hover:brightness-110 transition-all duration-300"
                      >
                        Live Demo
                        <ExternalLink size={22} className="group-hover:rotate-12 transition-transform" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Light Sweep on Hover */}
              <motion.div
                animate={hoveredFeatured ? { x: ['-150%', '250%'] } : {}}
                transition={{ duration: 2.2, ease: "easeInOut" }}
                className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
            </div>
          </motion.div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 80 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + index * 0.1, duration: 0.8 }}
              whileHover={{ y: -14 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/80 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h4>

                <p className="text-slate-400 leading-relaxed line-clamp-3 mb-8 text-[15px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-slate-800/80 border border-slate-700 px-4 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-slate-600 py-3.5 text-sm font-medium hover:bg-slate-800 transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-cyan-600 py-3.5 text-sm font-medium text-white hover:bg-cyan-500 transition-all"
                    >
                      Live Demo <ArrowRight size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};