import { motion, useInView, useAnimation, Variants } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Server, Smartphone, Database, CloudCog, Code2 } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend',
    icon: Server,
    color: 'from-cyan-400 via-blue-500 to-indigo-500',
    glow: 'rgba(34,211,238,0.35)',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Django', level: 92 },
      { name: 'Django REST Framework', level: 90 },
      { name: 'REST API Design', level: 88 },
      { name: 'JWT Authentication', level: 85 },
    ],
  },
  {
    title: 'Frontend',
    icon: Smartphone,
    color: 'from-sky-400 via-indigo-500 to-violet-500',
    glow: 'rgba(99,102,241,0.35)',
    skills: [
      { name: 'React', level: 87 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'TypeScript', level: 84 },
      { name: 'HTML/CSS', level: 93 },
    ],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-cyan-400 to-sky-500',
    glow: 'rgba(34,211,238,0.32)',
    skills: [
      { name: 'PostgreSQL', level: 91 },
      { name: 'MySQL', level: 86 },
      { name: 'Redis', level: 82 },
      { name: 'MongoDB', level: 78 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: CloudCog,
    color: 'from-blue-500 to-cyan-500',
    glow: 'rgba(14,165,233,0.32)',
    skills: [
      { name: 'Docker', level: 84 },
      { name: 'Git/GitHub', level: 96 },
      { name: 'CI/CD Pipelines', level: 82 },
      { name: 'Linux', level: 85 },
      { name: 'Postman', level: 91 },
    ],
  },
];

const deviconMap: Record<string, string> = {
  Python: 'python/python-original.svg',
  Django: 'django/django-plain.svg',
  'Django REST Framework': 'django/django-plain.svg',
  'REST API Design': 'fastapi/fastapi-original.svg',
  'JWT Authentication': 'jsonwebtokens/jsonwebtokens-original.svg',
  React: 'react/react-original.svg',
  'Next.js': 'nextjs/nextjs-original.svg',
  'Tailwind CSS': 'tailwindcss/tailwindcss-original.svg',
  TypeScript: 'typescript/typescript-original.svg',
  'HTML/CSS': 'html5/html5-original.svg',
  PostgreSQL: 'postgresql/postgresql-original.svg',
  MySQL: 'mysql/mysql-original.svg',
  Redis: 'redis/redis-original.svg',
  MongoDB: 'mongodb/mongodb-original.svg',
  Docker: 'docker/docker-original.svg',
  'Git/GitHub': 'git/git-original.svg',
  'CI/CD Pipelines': 'githubactions/githubactions-original.svg',
  Linux: 'linux/linux-original.svg',
  Postman: 'postman/postman-original.svg',
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 90,
      damping: 20,
      delay: i * 0.08,
    },
  }),
};

const SkillIcon = ({ name }: { name: string }) => {
  const [failed, setFailed] = useState(false);
  const src = deviconMap[name]
    ? `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${deviconMap[name]}`
    : null;

  if (!src || failed) {
    return (
      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800">
        <Code2 className="h-5 w-5 text-slate-400" />
      </div>
    );
  }

  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-800/80 p-1.5 backdrop-blur-sm">
      <img
        src={src}
        alt={name}
        className="h-7 w-7 object-contain transition-transform duration-300 group-hover:scale-110"
        onError={() => setFailed(true)}
        loading="lazy"
      />
    </div>
  );
};

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px', amount: 0.25 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <section id="skills" className="relative overflow-hidden bg-slate-950 py-20 md:py-32 lg:py-40">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(34,211,238,0.09),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_70%,rgba(99,102,241,0.08),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center md:mb-20"
        >
          <div className="mx-auto mb-4 inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-950/60 px-6 py-2 text-sm font-medium tracking-widest text-cyan-400">
            EXPERTISE
          </div>

          <h2 className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-6xl lg:text-7xl">
            Technical Skills
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
            Technologies and tools I master to build scalable, high-performance applications
          </p>

          <div className="mx-auto mt-8 h-1 w-28 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              custom={idx}
              variants={cardVariants}
              whileHover={{
                y: -12,
                transition: { duration: 0.4, ease: 'easeOut' },
              }}
              className="group relative overflow-hidden rounded-3xl border border-slate-700/60 bg-slate-900/70 p-8 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-2xl hover:shadow-cyan-500/10"
            >
              {/* Subtle Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-700 group-hover:opacity-5`} />

              {/* Category Header */}
              <div className="relative z-10 mb-8 flex items-start justify-between">
                <div className="flex items-center gap-5">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} shadow-lg shadow-cyan-500/30`}>
                    <category.icon className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight text-white">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-[2px] text-slate-500">Proficiency</p>
                  </div>
                </div>

                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-medium text-slate-300">
                  {category.skills.length}
                </div>
              </div>

              {/* Skills List */}
              <div className="relative z-10 space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-4">
                        <SkillIcon name={skill.name} />
                        <span className="font-medium text-white transition-colors group-hover/skill:text-cyan-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-cyan-300 tabular-nums">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative h-2.5 w-full overflow-hidden rounded-full bg-slate-800">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${category.color} relative`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.4, delay: 0.3 + idx * 0.05 + skillIndex * 0.06 }}
                      >
                        {/* Shimmer Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={isInView ? { x: '280%' } : {}}
                          transition={{
                            duration: 1.8,
                            delay: 1.2 + skillIndex * 0.1,
                            repeat: Infinity,
                            repeatDelay: 3,
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Glow Line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};