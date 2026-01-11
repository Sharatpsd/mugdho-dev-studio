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
  // Add more experiences here later...
];

export const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const lineProgress = useTransform(scrollYProgress, [0, 0.65, 1], [0, 1, 1]);

  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-120px',
    amount: 0.25
  });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.06),transparent_40%)]" />

      <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-5xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          <div className="mt-6 h-1.5 w-28 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 mx-auto rounded-full" />
        </motion.div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-8 bottom-8 w-0.5 bg-slate-800/70 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-b from-blue-500 via-cyan-400 to-teal-500 origin-top"
              style={{ scaleY: lineProgress }}
            />
          </div>

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: index * 0.25 + 0.3,
                  type: 'spring',
                  stiffness: 90,
                  damping: 18
                }}
                className={`
                  relative mb-16 last:mb-0
                  ${isEven ? 'md:pr-1/2 md:ml-auto' : 'md:pl-1/2'}
                `}
              >
                {/* Timeline dot */}
                <div className="
                  absolute left-0 md:left-1/2 top-4 w-16 h-16 
                  -translate-x-1/2 md:-translate-x-1/2
                  flex items-center justify-center z-10
                ">
                  <div className="
                    w-14 h-14 rounded-full 
                    bg-gradient-to-br from-blue-600 to-cyan-500 
                    flex items-center justify-center shadow-lg
                    ring-8 ring-slate-950
                  ">
                    <Briefcase className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Card */}
                <div className={`
                  relative rounded-2xl p-7 md:p-9
                  bg-gradient-to-b from-slate-800/70 to-slate-900/70 
                  backdrop-blur-xl border border-slate-700/60
                  shadow-2xl shadow-black/30
                  hover:border-slate-500/70 transition-all duration-400
                  ${isEven ? 'md:mr-12' : 'md:ml-12'}
                `}>
                  {/* Period tag */}
                  <div className="flex items-center gap-2 mb-5 text-sm font-medium">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-cyan-300/90">{exp.period}</span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                    {exp.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-3 mb-6">
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                    >
                      {exp.company}
                      <ExternalLink size={14} />
                    </a>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400">{exp.location}</span>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3.5 mb-8">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -15 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                        className="flex items-start gap-3 text-slate-300/90"
                      >
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-1" />
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Certificate Link - only view button */}
                  {exp.certificateLink && (
                    <div className="pt-6 border-t border-slate-700/50">
                      <div className="flex items-center gap-3 mb-4">
                        <Award className="w-5 h-5 text-cyan-400" />
                        <h4 className="text-base font-medium text-white">
                          Certificate of Internship Completion
                        </h4>
                      </div>

                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center gap-2 
                          px-6 py-3 
                          bg-gradient-to-r from-cyan-600 to-cyan-500 
                          hover:from-cyan-500 hover:to-cyan-400 
                          text-white font-medium 
                          rounded-lg shadow-lg hover:shadow-cyan-500/30 
                          transition-all duration-300
                          transform hover:-translate-y-0.5 active:translate-y-0
                        "
                      >
                        View Certificate
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};