import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Code, Server, Smartphone, Database, CloudCog } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend',
    icon: Server,
    color: 'from-blue-600 to-cyan-500',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Django', level: 92 },
      { name: 'Django REST Framework', level: 90 },
      { name: 'REST API Design', level: 88 },
      { name: 'JWT Authentication', level: 85 }
    ]
  },
  {
    title: 'Frontend',
    icon: Smartphone,
    color: 'from-purple-600 to-pink-500',
    skills: [
      { name: 'React', level: 87 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'TypeScript', level: 84 },
      { name: 'HTML/CSS', level: 93 }
    ]
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-emerald-600 to-teal-500',
    skills: [
      { name: 'PostgreSQL', level: 91 },
      { name: 'MySQL', level: 86 },
      { name: 'Redis', level: 82 },
      { name: 'MongoDB', level: 78 }
    ]
  },
  {
    title: 'DevOps & Tools',
    icon: CloudCog,
    color: 'from-amber-600 to-orange-500',
    skills: [
      { name: 'Docker', level: 84 },
      { name: 'Git/GitHub', level: 96 },
      { name: 'CI/CD Pipelines', level: 82 },
      { name: 'Linux', level: 85 },
      { name: 'Postman', level: 91 }
    ]
  }
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 45, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 17,
      delay: i * 0.07 + 0.1
    }
  })
};

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px", amount: 0.2 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 md:py-28 lg:py-36 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 sm:mb-16 md:mb-20 lg:mb-24"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
            Technical Expertise
          </h2>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light tracking-wide">
            Core technologies & tools I use daily
          </p>

          <div className="w-24 sm:w-28 md:w-32 h-1.5 md:h-2 mt-5 sm:mt-6 mx-auto bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 rounded-full" />
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } } }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 md:gap-7 lg:gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              custom={idx}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.015 }}
              className="group relative bg-gradient-to-b from-slate-800/65 to-slate-900/75 backdrop-blur-xl border border-slate-700/50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 lg:p-8 transition-all duration-400"
            >
              <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />

              <div className="relative flex items-center gap-3.5 sm:gap-4 mb-6 sm:mb-7 pb-5 sm:pb-6 border-b border-slate-700/50 z-10">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${category.color}`}>
                  <category.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4 sm:space-y-5 relative z-10">
                {category.skills.map(skill => (
                  <div key={skill.name} className="flex items-center justify-between py-3 px-3.5 sm:px-4 rounded-xl bg-slate-800/45 border border-slate-700/50">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-700/60 flex items-center justify-center">
                        <Code className="w-4 h-4 text-slate-300" />
                      </div>

                      <div>
                        <div className="font-medium text-white text-sm sm:text-base">{skill.name}</div>
                        <div className="w-24 sm:w-28 md:w-32 h-1.5 bg-slate-700/70 rounded-full mt-1.5 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.4, delay: 0.25 + idx * 0.07 }}
                          />
                        </div>
                      </div>
                    </div>

                    <span className="text-xs sm:text-sm font-mono font-bold text-blue-400">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
