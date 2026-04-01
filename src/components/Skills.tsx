import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Server, 
  Globe, 
  Database, 
  Layers, 
  Ship, 
  GitBranch, 
  Sparkles 
} from 'lucide-react';

const skillsData = [
  {
    id: 1,
    name: "Django",
    icon: Server,
    category: "Backend Framework",
    color: "from-emerald-400 to-teal-400",
    dotColor: "bg-emerald-400",
    description: "High-level Python web framework that encourages rapid development and clean, pragmatic design.",
    strengths: [
      "Built-in admin interface",
      "Powerful ORM",
      "Excellent security features",
      "Scalable architecture"
    ],
    level: "Expert"
  },
  {
    id: 2,
    name: "REST API",
    icon: Globe,
    category: "API Development",
    color: "from-cyan-400 to-blue-400",
    dotColor: "bg-cyan-400",
    description: "Designing and implementing robust, scalable, and well-documented RESTful APIs using DRF.",
    strengths: [
      "DRF Serializers & ViewSets",
      "Authentication & Permissions",
      "Rate limiting & throttling",
      "Comprehensive documentation"
    ],
    level: "Advanced"
  },
  {
    id: 3,
    name: "PostgreSQL",
    icon: Database,
    category: "Database",
    color: "from-indigo-400 to-violet-400",
    dotColor: "bg-indigo-400",
    description: "Advanced relational database management with focus on performance and data integrity.",
    strengths: [
      "Complex query optimization",
      "JSONField & ArrayField",
      "Advanced indexing",
      "Transaction management"
    ],
    level: "Expert"
  },
  {
    id: 4,
    name: "React",
    icon: Layers,
    category: "Frontend",
    color: "from-sky-400 to-blue-500",
    dotColor: "bg-sky-400",
    description: "Building modern, responsive, and interactive user interfaces with React ecosystem.",
    strengths: [
      "Component architecture",
      "State management",
      "Performance optimization",
      "Seamless API integration"
    ],
    level: "Advanced"
  },
  {
    id: 5,
    name: "Docker",
    icon: Ship,
    category: "DevOps",
    color: "from-blue-400 to-cyan-400",
    dotColor: "bg-blue-400",
    description: "Containerization and deployment of applications for consistent development and production environments.",
    strengths: [
      "Multi-container applications",
      "Docker Compose orchestration",
      "Optimized Dockerfiles",
      "CI/CD integration"
    ],
    level: "Advanced"
  },
  {
    id: 6,
    name: "Git & GitHub",
    icon: GitBranch,
    category: "Version Control",
    color: "from-orange-400 to-amber-400",
    dotColor: "bg-orange-400",
    description: "Professional version control workflows, collaboration, and deployment pipelines.",
    strengths: [
      "Branching strategies",
      "Code review processes",
      "GitHub Actions",
      "Repository management"
    ],
    level: "Expert"
  }
];

export const Skills = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);

  return (
    <section id="skills" className="relative overflow-hidden bg-[#0a0f1c] py-24 md:py-32 lg:py-40">
      {/* Background Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(6,182,212,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(129,140,248,0.08),transparent_65%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <div className="mx-auto mb-5 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-950/60 px-8 py-2 text-sm tracking-[3px] text-cyan-300">
            <Sparkles className="h-4 w-4" /> SKILL JOURNEY
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
            My Skills Timeline
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-slate-400">
            Hover over each milestone to explore my technical expertise in detail
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Interactive Timeline */}
          <div className="lg:col-span-2">
            <div className="relative pl-8">
              {/* Glowing Timeline Line */}
              <div className="absolute left-4 top-6 bottom-6 w-px bg-gradient-to-b from-cyan-400/30 via-blue-400/30 to-transparent" />

              {skillsData.map((skill, index) => {
                const Icon = skill.icon;
                const isActive = activeSkill.id === skill.id;

                return (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, x: -40 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.12 }}
                    onMouseEnter={() => setActiveSkill(skill)}
                    className={`group relative mb-12 last:mb-0 cursor-pointer transition-all duration-300 ${isActive ? 'scale-[1.02]' : ''}`}
                  >
                    {/* Timeline Dot */}
                    <div className={`absolute -left-[9px] top-4 h-5 w-5 rounded-full border-4 border-[#0a0f1c] transition-all duration-300 ${skill.dotColor} ${isActive ? 'scale-125 ring-4 ring-cyan-400/40' : 'group-hover:scale-110'}`} />

                    <div className={`rounded-3xl border p-6 backdrop-blur-xl transition-all duration-300 ${isActive 
                      ? 'border-cyan-400/50 bg-slate-900/90 shadow-2xl shadow-cyan-500/20' 
                      : 'border-slate-700/60 bg-slate-900/60 hover:border-slate-600 group-hover:bg-slate-900/80'}`}>
                      
                      <div className="flex items-start gap-5">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${skill.color} flex-shrink-0 shadow-lg`}>
                          <Icon className="h-7 w-7 text-white" />
                        </div>
                        
                        <div className="flex-1 pt-1">
                          <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-semibold text-white tracking-tight">{skill.name}</h3>
                            <span className="text-xs font-mono uppercase tracking-widest text-cyan-300">{skill.level}</span>
                          </div>
                          <p className="mt-1 text-sm text-slate-400">{skill.category}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Dynamic Detail Panel */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeSkill.id}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              className="sticky top-8 rounded-3xl border border-slate-700/60 bg-slate-900/70 p-10 md:p-14 backdrop-blur-2xl shadow-2xl"
            >
              <div className="flex items-center gap-6 mb-10">
                <div className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br ${activeSkill.color} shadow-xl`}>
                  <activeSkill.icon className="h-10 w-10 text-white" />
                </div>
                <div>
                  <div className="text-sm uppercase tracking-[2px] text-cyan-400 font-medium">{activeSkill.category}</div>
                  <h3 className="text-4xl font-bold tracking-tight text-white mt-1">{activeSkill.name}</h3>
                </div>
              </div>

              <p className="text-lg leading-relaxed text-slate-300 mb-10">
                {activeSkill.description}
              </p>

              <div>
                <h4 className="uppercase text-xs tracking-widest text-slate-400 mb-5 font-medium">KEY STRENGTHS</h4>
                <ul className="space-y-4">
                  {activeSkill.strengths.map((strength, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                      <span className="text-slate-300">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Level Indicator */}
              <div className="mt-12 pt-8 border-t border-slate-700/50 flex items-center gap-4">
                <div className="text-xs text-slate-500">PROFICIENCY</div>
                <div className="flex-1 h-px bg-gradient-to-r from-cyan-400/30 to-transparent" />
                <div className="font-mono text-xl font-semibold text-cyan-300 tracking-wider">{activeSkill.level}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};