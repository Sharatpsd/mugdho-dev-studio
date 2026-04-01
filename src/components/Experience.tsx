import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, ExternalLink, CheckCircle2 } from 'lucide-react';

const experiences = [
  {
    title: 'Backend Developer Intern',
    company: 'Robo Tech Valley',
    abbr: 'RTV',
    website: 'https://robotechvalley.com/',
    location: 'Mirpur, Dhaka',
    period: 'Oct 2025 – Dec 2025',
    type: 'Full-time Internship',
    highlights: [
      'Built complete Django-based e-commerce platform with full backend architecture',
      'Implemented secure JWT authentication and role-based access control',
      'Designed performant RESTful APIs using Django REST Framework',
      'Developed product catalog, cart, order processing & payment flows',
      'Collaborated in agile team with Git and code reviews',
    ],
    skillsUsed: ['Django', 'DRF', 'PostgreSQL', 'JWT', 'REST API'],
    certificateLink: 'https://drive.google.com/file/d/1Jw82jFGXPvliJHYxBPOUh6oIlpm-j8mE/view?usp=sharing',
  },
];

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0a0f1c] py-20 md:py-28 lg:py-32"
    >
      {/* Soft Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(6,182,212,0.08),transparent_60%)]" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
            Professional Experience
          </h2>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/70 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-500"
            >
              <div className="grid md:grid-cols-[280px_1fr]">

                {/* LEFT: Company & Meta */}
                <div className="border-b border-slate-700/60 bg-slate-950/50 p-8 md:border-b-0 md:border-r md:p-10">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 font-bold text-white text-2xl shadow-md">
                    {exp.abbr}
                  </div>

                  <div className="mt-6">
                    <h3 className="font-semibold text-white text-lg">{exp.company}</h3>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-300 transition-colors"
                    >
                      Visit website
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>

                  <div className="mt-8 space-y-5 text-sm">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-4 w-4 text-slate-500" />
                      <span className="text-slate-300">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <MapPin className="h-4 w-4 text-slate-500" />
                      <span className="text-slate-300">{exp.location}</span>
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="text-xs uppercase tracking-widest text-slate-500 mb-2">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.skillsUsed.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300 border border-slate-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* RIGHT: Role & Highlights */}
                <div className="p-8 md:p-10">
                  <div className="flex items-start justify-between">
                    <h4 className="text-2xl font-semibold tracking-tight text-white">
                      {exp.title}
                    </h4>
                    <span className="text-xs font-medium px-4 py-1.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-400/20">
                      {exp.type}
                    </span>
                  </div>

                  <div className="mt-8">
                    <ul className="space-y-4">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + i * 0.08 }}
                          className="flex gap-4 text-slate-300 text-[15px]"
                        >
                          <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {exp.certificateLink && (
                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-10 inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-white transition-colors"
                    >
                      View Certificate →
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