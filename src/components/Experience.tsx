import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, ExternalLink, CheckCircle2, Award } from 'lucide-react';

const experiences = [
  {
    title: 'Backend Developer Intern',
    company: 'Robo Tech Valley',
    website: 'https://robotechvalley.com/',
    location: 'Mirpur, Dhaka',
    period: 'Oct 2025 – Dec 2025',
    highlights: [
      'Developed a complete Django-based full-stack e-commerce platform from scratch',
      'Implemented secure JWT authentication, role-based access control & session management',
      'Designed and documented performant RESTful APIs with comprehensive Swagger documentation',
      'Built product catalog, shopping cart, order processing and payment integration flows',
      'Collaborated in agile team using Git flow, code reviews and conventional commits',
    ],
    certificateLink: 'https://drive.google.com/file/d/1a1vq8o_-_wrCj8YMlzKkf448TD9u0Hf_/view?usp=sharing',
  },
  // You can easily add more entries later
];

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const lineProgress = useTransform(scrollYProgress, [0, 0.7, 1], [0, 1, 1]);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: "-80px",
    amount: 0.18 // more mobile-friendly trigger
  });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-16 sm:py-20 md:py-28 lg:py-36 bg-gradient-to-b from-slate-950 via-slate-920 to-slate-950 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.05),transparent_50%)]" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="
            text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
            font-extrabold tracking-tight
            bg-gradient-to-r from-white via-blue-200 to-cyan-200 
            bg-clip-text text-transparent
          ">
            Professional Experience
          </h2>
          <div className="
            mt-5 sm:mt-6 h-1.5 w-24 sm:w-28 md:w-32 
            bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 
            mx-auto rounded-full
          "/>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="
            absolute left-6 sm:left-8 md:left-1/2 
            top-8 bottom-0 w-0.5 bg-slate-800/60 rounded-full overflow-hidden
          ">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-500 via-cyan-400 to-teal-500 origin-top"
              style={{ scaleY: lineProgress }}
            />
          </div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: index * 0.22 + 0.25,
                type: 'spring',
                stiffness: 100,
                damping: 18
              }}
              className={`
                relative mb-12 sm:mb-16 last:mb-0
                pl-14 sm:pl-16 md:pl-0
                ${index % 2 === 0 ? 'md:pr-[52%] md:ml-auto' : 'md:pl-[52%]'}
              `}
            >
              {/* Timeline dot */}
              <div className="
                absolute left-0 sm:left-6 md:left-1/2 top-2
                -translate-x-1/2 md:-translate-x-1/2
                w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center z-10
              ">
                <div className="
                  w-10 h-10 sm:w-12 sm:h-12 rounded-full 
                  bg-gradient-to-br from-blue-600 to-cyan-500 
                  flex items-center justify-center shadow-xl
                  ring-8 ring-slate-950/90
                ">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </div>

              {/* Content Card */}
              <div className="
                relative rounded-2xl sm:rounded-2.5xl p-6 sm:p-7 md:p-8 lg:p-9
                bg-gradient-to-b from-slate-800/65 to-slate-900/70
                backdrop-blur-xl border border-slate-700/50
                shadow-xl shadow-black/25
                hover:border-slate-500/60 hover:shadow-2xl hover:shadow-blue-950/20
                transition-all duration-400
              ">
                {/* Meta row */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4 text-sm">
                  <div className="flex items-center gap-1.5 text-cyan-400/90">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                  <span className="text-slate-600 hidden sm:inline">•</span>
                  <span className="text-slate-400">{exp.location}</span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                  {exp.title}
                </h3>

                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium transition-colors mb-5 sm:mb-6"
                >
                  {exp.company}
                  <ExternalLink size={14} />
                </a>

                {/* Highlights */}
                <ul className="space-y-3 sm:space-y-3.5 mb-7 sm:mb-8">
                  {exp.highlights.map((highlight, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                      className="flex items-start gap-3 text-slate-300/90 text-sm sm:text-base"
                    >
                      <CheckCircle2 className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Certificate */}
                {exp.certificateLink && (
                  <div className="pt-5 sm:pt-6 border-t border-slate-700/50">
                    <div className="flex items-center gap-2.5 mb-4">
                      <Award className="w-5 h-5 text-cyan-400" />
                      <h4 className="text-sm sm:text-base font-medium text-white">
                        Internship Completion Certificate
                      </h4>
                    </div>

                    <a
                      href={exp.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        inline-flex items-center gap-2
                        px-5 sm:px-6 py-2.5 sm:py-3
                        bg-gradient-to-r from-cyan-600 to-cyan-500
                        hover:from-cyan-500 hover:to-cyan-400
                        text-white font-medium text-sm sm:text-base
                        rounded-lg shadow-lg hover:shadow-cyan-500/30
                        transition-all duration-300 active:scale-98
                      "
                    >
                      View Certificate
                      <ExternalLink size={15} />
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