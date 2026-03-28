import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import { Github, ExternalLink, Star, X, ArrowRight } from 'lucide-react';

import projectBite from '@/assets/project-bite.png';
import projectDairy from '@/assets/project-dairy.png';
import projectCareer from '@/assets/project-career.png';
import projectChai from '@/assets/project-chai.png';

const filters = ['All', 'Full Stack', 'Backend', 'ML/AI'] as const;
type Filter = (typeof filters)[number];

const projects = [
  {
    title: 'Bite - Food Delivery Platform',
    featured: true,
    category: 'Full Stack' as Filter,
    description:
      'Full-featured food delivery platform connecting customers and restaurants with scalable REST architecture.',
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
    title: 'Daily Dairy Shop - E-Commerce',
    featured: false,
    category: 'Backend' as Filter,
    description:
      'Production-grade e-commerce solution for dairy products with custom admin panel and inventory management.',
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
    title: 'Smart Career - ML Prediction',
    featured: false,
    category: 'ML/AI' as Filter,
    description:
      'AI-powered career recommendation system built with multiple machine learning models.',
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
  {
    title: 'Chai Order System',
    featured: false,
    category: 'Backend' as Filter,
    description:
      'A Django-based full-stack tea ordering system with structured backend architecture and real-world deployment on Render. Includes authentication, order management flow, clean database design, and complete README documentation.',
    image: projectChai,
    tech: ['Django', 'Python', 'PostgreSQL', 'Render'],
    highlights: [
      'Full authentication & order management',
      'Clean database design & architecture',
      'Production deployment on Render',
      'Complete documentation',
    ],
    github: 'https://github.com/Sharatpsd/chai-order-system',
    live: 'https://chai-order-system-5.onrender.com/',
  },
];

const ProjectCard = ({
  project,
  index,
  isInView,
  onOpen,
}: {
  project: (typeof projects)[number];
  index: number;
  isInView: boolean;
  onOpen: (image: string) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 180, damping: 18 });
  const springY = useSpring(rotateY, { stiffness: 180, damping: 18 });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const centerX = bounds.width / 2;
    const centerY = bounds.height / 2;

    rotateY.set(((x - centerX) / centerX) * 8);
    rotateX.set(-((y - centerY) / centerY) * 8);
  };

  const resetTilt = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 60, scale: 0.94 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      exit={{ opacity: 0, y: 30, scale: 0.96 }}
      transition={{
        duration: 0.55,
        delay: index * 0.1 + 0.12,
        type: 'spring',
        stiffness: 95,
        damping: 18,
      }}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1200,
      }}
      whileHover={{ y: -10 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="group relative overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/60 backdrop-blur-xl"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] via-transparent to-cyan-500/[0.03]" />

      <div className="relative aspect-[4/3] cursor-pointer overflow-hidden" onClick={() => onOpen(project.image)}>
        <img
          src={project.image}
          alt={`${project.title} screenshot`}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-70 transition-opacity group-hover:opacity-80" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full border border-slate-700/50 bg-slate-900/85 px-6 py-3 text-sm font-medium text-white">
            <ArrowRight size={16} />
            View larger
          </span>
        </div>

        {project.featured && (
          <div className="absolute left-4 top-4 overflow-hidden rounded-full">
            <div className="relative flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 px-3.5 py-1.5 text-xs font-semibold text-white shadow-lg ring-1 ring-amber-500/40">
              <motion.span
                className="absolute inset-y-0 left-[-50%] w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                animate={{ x: ['-120%', '280%'] }}
                transition={{ duration: 2.1, repeat: Infinity, ease: 'easeInOut' }}
              />
              <Star size={14} fill="white" className="relative z-10" />
              <span className="relative z-10">Featured</span>
            </div>
          </div>
        )}
      </div>

      <div className="relative p-6 md:p-7">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-200">
            {project.category}
          </span>
        </div>

        <h3 className="mb-3 text-xl font-bold text-white transition-colors group-hover:text-cyan-300 md:text-2xl">
          {project.title}
        </h3>

        <p className="mb-5 line-clamp-3 text-slate-300/90">{project.description}</p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-xs font-medium text-cyan-300/90"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mb-6 space-y-2.5">
          {project.highlights.map((highlight) => (
            <p key={highlight} className="text-sm text-slate-400">
              {highlight}
            </p>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-5 py-2.5 text-slate-200 transition-all hover:border-slate-500 hover:bg-slate-800/80 hover:text-white"
          >
            <Github size={16} />
            Code
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-cyan-950/25 transition-all hover:from-cyan-500 hover:to-blue-500"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-120px' });
  const [activeFilter, setActiveFilter] = useState<Filter>('All');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.4, 1, 1, 0.6]);
  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    if (!lightbox) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setLightbox(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
    >
      <motion.div style={{ opacity }} className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.09),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,rgba(6,182,212,0.08),transparent_45%)]" />
      </motion.div>

      <div className="container relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center md:mb-16"
        >
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="mx-auto mt-6 h-1.5 w-32 rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-400" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300/90">
            Production-grade applications • Clean architecture • Real-world problem solving
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`relative rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'border-cyan-400/40 bg-cyan-500/15 text-cyan-100'
                  : 'border-slate-700/60 bg-slate-900/60 text-slate-300 hover:border-slate-500/70'
              }`}
            >
              {activeFilter === filter && (
                <motion.span
                  layoutId="project-filter-pill"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/15 to-blue-500/15"
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isInView={isInView}
                onOpen={setLightbox}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              className="relative w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-14 right-0 rounded-full border border-slate-700 bg-slate-900/80 p-3 text-white transition-colors hover:bg-slate-800"
              >
                <X size={28} />
              </button>

              <img
                src={lightbox}
                alt="Project enlarged view"
                className="w-full rounded-2xl border border-slate-800 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
