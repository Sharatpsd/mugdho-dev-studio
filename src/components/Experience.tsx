import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, ExternalLink, CheckCircle2, Award } from 'lucide-react';

const experiences = [
  {
    title: 'Backend Developer Intern',
    company: 'Robo Tech Valley',
    website: 'https://robotechvalley.com/',
    location: 'Mirpur, Dhaka',
    period: 'Oct 2025 - Dec 2025',
    highlights: [
      'Developed a complete Django-based full-stack e-commerce platform from scratch',
      'Implemented secure JWT authentication, role-based access control & session management',
      'Designed and documented performant RESTful APIs with comprehensive Swagger documentation',
      'Built product catalog, shopping cart, order processing and payment integration flows',
      'Collaborated in agile team using Git flow, code reviews and conventional commits',
    ],
    skillsUsed: ['Django', 'DRF', 'JWT', 'PostgreSQL', 'Git', 'REST API', 'Swagger'],
    certificateLink:
      'https://drive.google.com/file/d/1a1vq8o_-_wrCj8YMlzKkf448TD9u0Hf_/view?usp=sharing',
  },
];

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 0.6, 1], [0, 1, 1]);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px',
    amount: 0.2,
  });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-slate-950 py-20 sm:py-24 md:py-32 lg:py-40"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(34,211,238,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.06),transparent_60%)]" />

      <div className="container relative z-10 mx-auto max-w-5xl px-6 sm:px-8 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center md:mb-20 lg:mb-24"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-950/50 px-5 py-1.5 text-sm font-medium text-cyan-400">
            <Briefcase className="h-4 w-4" />
            JOURNEY SO FAR
          </div>
          
          <h2 className="mt-6 bg-gradient-to-r from-white via-slate-200 to-cyan-100 bg-clip-text text-4xl font-bold tracking-tighter text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Professional Experience
          </h2>
          
          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </motion.div>

        <div className="relative mx-auto max-w-3xl">
          {/* Timeline Line */}
          <div className="absolute left-8 top-6 bottom-12 w-[3px] bg-gradient-to-b from-transparent via-slate-700 to-transparent md:left-10">
            <motion.div
              className="absolute left-0 top-0 w-full origin-top bg-gradient-to-b from-cyan-400 via-blue-500 to-cyan-400 shadow-[0_0_20px_rgb(34,211,238)]"
              style={{ scaleY: lineProgress }}
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative mb-16 pl-20 md:pl-24"
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 top-8 z-20 md:left-8">
                <motion.div
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative flex h-14 w-14 items-center justify-center"
                >
                  {/* Pulsing outer ring */}
                  <div className="absolute inset-0 rounded-full border border-cyan-400/30" />
                  <motion.div
                    animate={{ scale: [1, 1.6], opacity: [0.7, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                    className="absolute inset-0 rounded-full border border-cyan-400/40"
                  />
                  
                  {/* Main Icon */}
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl shadow-cyan-500/30 ring-8 ring-slate-950">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Experience Card */}
              <div className="group rounded-3xl border border-slate-700/50 bg-slate-900/70 p-8 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-500/30 hover:bg-slate-900/90 hover:shadow-2xl hover:shadow-cyan-950/30 md:p-10">
                
                {/* Date & Location */}
                <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                  <div className="flex items-center gap-2 text-cyan-400">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                  <div className="text-slate-500">•</div>
                  <span className="text-slate-400">{exp.location}</span>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-2xl font-semibold tracking-tight text-white md:text-3xl">
                  {exp.title}
                </h3>

                {/* Company */}
                <div className="mb-8 flex items-center gap-4">
                  <div className="rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-600/10 px-4 py-2 text-sm font-bold tracking-wide text-blue-300 border border-blue-500/30">
                    RTV
                  </div>
                  <a
                    href={exp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 font-medium text-lg text-white transition-all hover:text-cyan-300"
                  >
                    {exp.company}
                    <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                  </a>
                </div>

                {/* Highlights */}
                <ul className="mb-9 space-y-4">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex gap-4 text-slate-300"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-400" />
                      <span className="leading-relaxed">{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Skills */}
                <div className="mb-9 flex flex-wrap gap-2">
                  {exp.skillsUsed.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-cyan-400/20 bg-cyan-950/60 px-4 py-1.5 text-xs font-medium text-cyan-300 transition-all hover:border-cyan-400/40 hover:bg-cyan-900/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Certificate */}
                {exp.certificateLink && (
                  <div className="border-t border-slate-700 pt-7">
                    <div className="mb-4 flex items-center gap-3">
                      <div className="rounded-lg bg-amber-500/10 p-2">
                        <Award className="h-5 w-5 text-amber-400" />
                      </div>
                      <div>
                        <p className="font-medium text-white">Internship Completion Certificate</p>
                        <p className="text-xs text-slate-400">Verified by Robo Tech Valley</p>
                      </div>
                    </div>

                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-medium text-white shadow-lg shadow-cyan-500/25 transition-all hover:from-cyan-400 hover:to-blue-500 hover:shadow-xl hover:shadow-cyan-500/40 active:scale-[0.985]"
                    >
                      View Certificate
                      <ExternalLink className="h-5 w-5 transition-transform group-hover:rotate-45" />
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};