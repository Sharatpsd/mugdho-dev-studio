import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { 
  Code, Database, Layers, Server, Zap, Shield, Brain, 
  Package, Cloud, GitBranch, Play, Smartphone, Settings, 
  Terminal, Globe, Cpu, CloudCog 
} from 'lucide-react';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.94
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-80px 0px",
    amount: 0.2 
  });
  
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <section id="skills" className="py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent mb-5">
            Technical Expertise
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Technologies and tools I work with professionally
          </p>
          <div className="w-28 h-1.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-500 mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                scale: 1.03,
                transition: { duration: 0.4, type: "spring", stiffness: 300 }
              }}
              className={`
                group relative bg-gradient-to-b from-slate-800/70 to-slate-900/70 
                backdrop-blur-md border border-slate-700/60 rounded-2xl p-6 md:p-8 
                overflow-hidden transition-all duration-500
                hover:border-transparent hover:shadow-2xl hover:shadow-blue-900/20
              `}
            >
              {/* Colorful gradient overlay on hover */}
              <div className={`
                absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 
                group-hover:opacity-10 transition-opacity duration-700
              `} />

              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-700/40 relative z-10">
                <div className={`
                  w-14 h-14 rounded-xl flex items-center justify-center shadow-xl
                  bg-gradient-to-br ${category.color} 
                  transform group-hover:scale-110 group-hover:rotate-6
                  transition-all duration-500
                `}>
                  <category.icon className="w-7 h-7 text-white" strokeWidth={2.2} />
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5 relative z-10">
                {category.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="
                      flex items-center justify-between p-3.5 rounded-xl 
                      bg-slate-800/40 border border-slate-700/50
                      group-hover:bg-slate-800/60 group-hover:border-slate-600/70
                      transition-all duration-400 hover:scale-[1.02]
                    "
                  >
                    <div className="flex items-center gap-3.5">
                      <div className="w-9 h-9 rounded-lg bg-slate-700/60 flex items-center justify-center group-hover:bg-blue-900/30 transition-colors">
                        <Code className="w-4.5 h-4.5 text-slate-300 group-hover:text-blue-300 transition-colors" />
                      </div>
                      <div>
                        <div className="font-medium text-white group-hover:text-blue-100 transition-colors">
                          {skill.name}
                        </div>
                        <div className="w-28 h-1.5 bg-slate-700/70 rounded-full mt-1.5 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ 
                              duration: 1.2, 
                              delay: 0.4 + index * 0.15,
                              ease: "easeOut"
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <span className="text-sm font-mono font-bold text-blue-400/90 group-hover:text-blue-300 transition-colors">
                      {skill.level}%
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtle shine effect */}
              <div className="
                absolute -inset-10 bg-gradient-to-r from-transparent via-white/5 to-transparent
                opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full
                transition-all duration-1000 ease-in-out
              "/>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};