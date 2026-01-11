import { motion, useInView, useReducedMotion, Variants } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { Code2, Database, Layers, Cpu } from 'lucide-react';

// ✅ Image import (IMPORTANT)
import profileCity from '@/assets/profile-city.jpg';

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 18,
      mass: 0.8,
      delay: i * 0.08 + 0.2,
    },
  }),
};

const highlights = [
  {
    icon: Database,
    title: 'Backend Architecture',
    description:
      'Designing scalable and maintainable backend architectures using Django, PostgreSQL, and clean domain-driven patterns.',
    accent: 'from-blue-500/30 via-cyan-500/20 to-blue-600/10',
  },
  {
    icon: Code2,
    title: 'API Engineering',
    description:
      'Building secure and well-structured REST APIs with Django REST Framework, JWT authentication, and role-based access.',
    accent: 'from-emerald-500/30 via-teal-500/20 to-emerald-600/10',
  },
  {
    icon: Layers,
    title: 'Full-Stack Integration',
    description:
      'Integrating React frontends with backend systems through clean API contracts and predictable data flows.',
    accent: 'from-purple-500/30 via-pink-500/20 to-purple-600/10',
  },
  {
    icon: Cpu,
    title: 'Applied Machine Learning',
    description:
      'Integrating machine learning models into real applications with a focus on reliability and explainability.',
    accent: 'from-amber-500/30 via-yellow-500/15 to-amber-600/10',
  },
];

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-80px',
    amount: 0.3,
  });

  const prefersReducedMotion = useReducedMotion();

  const headerVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    }),
    []
  );

  return (
    <section
      id="about"
      className="section-padding relative bg-gradient-to-b from-secondary/20 via-secondary/10 to-transparent overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="section-container relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView || prefersReducedMotion ? 'visible' : 'hidden'}
          variants={headerVariants}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="heading-xl mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-accent to-primary/40 mx-auto rounded-full" />
          <p className="body-lg max-w-2xl mx-auto mt-6 text-muted-foreground/90">
            Backend-focused engineer focused on building reliable systems for real-world applications.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT: Image + Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView || prefersReducedMotion ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.15,
            }}
            className="space-y-8"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={profileCity}
                alt="Urban night portrait"
                className="w-full h-[340px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
            </div>

            {/* Text */}
            <div className="space-y-6">
              <p className="body-lg leading-relaxed tracking-tight">
                I am a backend-focused full-stack developer working primarily with Django and Django REST Framework.
              </p>

              <p className="body-md leading-relaxed text-muted-foreground/90">
                My work centers around building systems that are cleanly architected, secure by design,
                and easy to evolve over time, with real production requirements in mind.
              </p>

              <p className="body-md leading-relaxed text-muted-foreground/90">
                From database modeling and authentication flows to API performance and frontend integration,
                I approach development with a long-term, production-oriented mindset.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Highlight cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView || prefersReducedMotion ? 'visible' : 'hidden'}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 400, damping: 25 },
                }}
                whileTap={{ scale: 0.98 }}
                className="group relative rounded-2xl p-6 border border-border/40 bg-card/50 backdrop-blur-md
                           hover:border-primary/40 transition-all duration-300"
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.accent}
                              opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10
                               flex items-center justify-center mb-5
                               group-hover:scale-110 transition-transform duration-300"
                  >
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="font-semibold text-lg mb-2.5 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-muted-foreground/90 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};