import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import profileCity from '@/assets/profile-city.jpg';

const statPills = ['500+ Commits', '4 Deployed Projects', '1 IEEE Publication'];
const tickerItems = ['Currently Learning 🔥', 'FastAPI', 'System Design', 'AWS', 'Docker Advanced', 'Microservices'];

const educationData = [
  {
    icon: GraduationCap,
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Green University of Bangladesh',
    year: '2026',
    grade: 'Graduated',
    color: 'from-cyan-500/20 to-blue-500/20',
    iconColor: 'text-cyan-300',
    borderColor: 'border-cyan-500/30',
    dotColor: 'bg-cyan-400',
    glowColor: 'shadow-cyan-500/20',
  },
  {
    icon: BookOpen,
    degree: 'Higher Secondary Certificate (HSC) – Science',
    institution: 'Bajitput Government College,Kishorgonj',
    year: '2020',
    grade: 'GPA: 4.67',
    color: 'from-blue-500/20 to-purple-500/20',
    iconColor: 'text-blue-300',
    borderColor: 'border-blue-500/30',
    dotColor: 'bg-blue-400',
    glowColor: 'shadow-blue-500/20',
  },
  {
    icon: School,
    degree: 'Secondary School Certificate (SSC) – Science',
    institution: 'Bajitput Pilot High School,Kishorgonj',
    year: '2018',
    grade: 'GPA: 4.33',
    color: 'from-purple-500/20 to-pink-500/20',
    iconColor: 'text-purple-300',
    borderColor: 'border-purple-500/30',
    dotColor: 'bg-purple-400',
    glowColor: 'shadow-purple-500/20',
  },
];

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-40px',
    amount: 0.15,
  });

  const prefersReducedMotion = useReducedMotion();

  const headerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 24 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        },
      },
    }),
    []
  );

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-slate-950 py-20 md:py-28 lg:py-32"
    >
      <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-cyan-500/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-16 left-0 h-96 w-96 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8" ref={ref}>

        <motion.div
          initial="hidden"
          animate={isInView || prefersReducedMotion ? 'visible' : 'hidden'}
          variants={headerVariants}
          className="mb-14 text-center sm:mb-16 md:mb-20"
        >
          <h2 className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
            About Me
          </h2>
          <div className="mx-auto mb-5 mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 sm:w-24" />
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg md:text-xl">
            Backend-focused engineer building reliable systems for real-world applications.
          </p>
        </motion.div>

        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.1fr] lg:gap-10">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView || prefersReducedMotion ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-slate-700/50 bg-slate-800/60 p-3 backdrop-blur-xl shadow-2xl shadow-black/30">
              <div className="relative overflow-hidden rounded-[22px]">
                <div className="aspect-[4/5] w-full md:aspect-[5/4] lg:aspect-[4/5]">
                  <img
                    src={profileCity}
                    alt="Urban night portrait"
                    className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                {statPills.map((pill, index) => (
                  <motion.div
                    key={pill}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView || prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.45, delay: 0.35 + index * 0.1 }}
                    className="rounded-full border border-cyan-500/25 bg-slate-900/80 px-4 py-2 text-xs font-semibold text-cyan-100 shadow-lg backdrop-blur-xl sm:text-sm"
                  >
                    {pill}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView || prefersReducedMotion ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-5"
          >
            <div className="rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6 backdrop-blur-xl sm:p-7">
              <div className="space-y-4">
                <p className="text-base leading-relaxed tracking-tight text-white sm:text-lg">
                  Hello! I'm Sharat Acharja Mugdho, a Computer Science graduate from Green University
                  of Bangladesh and a backend-focused full-stack developer.
                </p>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  I work mainly with Django and Django REST Framework to build reliable, well-structured
                  backend systems. I focus on clean code, proper database design, and secure
                  authentication flows that are built for real-world use.
                </p>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  I also integrate React frontends with backend systems through clear API communication
                  and consistent data flow, ensuring smooth interaction between both sides.
                </p>
                <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
                  My goal is simple: to build backend systems that are clean, secure, and designed to last.
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={isInView || prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6 backdrop-blur-xl sm:p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20">
                  <GraduationCap className="h-5 w-5 text-cyan-300" />
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300/80">
                  Education
                </p>
              </div>

              <div className="relative space-y-0">
                <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-blue-500/40 to-purple-500/40" />

                {educationData.map((edu, index) => {
                  const Icon = edu.icon;
                  return (
                    <motion.div
                      key={edu.degree}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView || prefersReducedMotion ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.45 + index * 0.12 }}
                      className="relative pl-12 pb-6 last:pb-0"
                    >
                      <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center">
                        <motion.div
                          animate={{ scale: [1, 1.15, 1] }}
                          transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.6 }}
                          className={`h-4 w-4 rounded-full ${edu.dotColor} ring-4 ring-slate-900 shadow-lg ${edu.glowColor}`}
                        />
                      </div>

                      <motion.div
                        whileHover={{ x: 4, scale: 1.01 }}
                        transition={{ duration: 0.2 }}
                        className={`rounded-xl border ${edu.borderColor} bg-slate-900/60 p-4 backdrop-blur-sm shadow-lg ${edu.glowColor} hover:shadow-xl transition-all duration-300`}
                      >
                        <div className="flex items-start gap-3">
                          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${edu.color}`}>
                            <Icon className={`h-4 w-4 ${edu.iconColor}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold leading-snug text-white sm:text-base">
                              {edu.degree}
                            </p>
                            <p className="mt-1 text-xs text-slate-400 sm:text-sm">
                              {edu.institution}
                            </p>
                            <div className="mt-2 flex flex-wrap items-center gap-2">
                              <span className={`inline-flex items-center rounded-full border ${edu.borderColor} bg-slate-800/70 px-2.5 py-0.5 text-xs font-medium ${edu.iconColor}`}>
                                {edu.grade}
                              </span>
                              <span className="inline-flex items-center rounded-full bg-slate-800/70 border border-slate-700/50 px-2.5 py-0.5 text-xs font-medium text-slate-400">
                                {edu.year}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView || prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 overflow-hidden rounded-full border border-slate-700/50 bg-slate-900/70 py-3 sm:mt-14"
        >
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="flex min-w-max gap-8 whitespace-nowrap px-6 text-sm font-medium text-cyan-100"
          >
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`} className="inline-flex items-center gap-2">
                {item}
                <span className="text-cyan-400">•</span>
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};