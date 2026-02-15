import { motion, useInView, useReducedMotion, Variants } from 'framer-motion';
import { useRef, useMemo } from 'react';
import { Code2, Database, Layers, Cpu } from 'lucide-react';

// 1. Import your image (adjust path according to your project structure)
import profileCity from '@/assets/profile-city.jpg'; // ← most common Vite/Alias path

// 2. Define highlights array (missing in your snippet)
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

// 3. Card animation variants (missing in your latest version)
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
      delay: i * 0.08 + 0.2,
    },
  }),
};

export const About = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isInView = useInView(ref, {
    once: true,
    margin: '-40px',
    amount: 0.2,
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
      className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-b from-secondary/20 via-secondary/10 to-transparent overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-accent/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container relative z-10 px-5 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={isInView || prefersReducedMotion ? 'visible' : 'hidden'}
          variants={headerVariants}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 md:mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary via-accent to-primary/40 mx-auto rounded-full mb-5 sm:mb-6" />
          <p className="text-base sm:text-lg md:text-xl max-w-xl mx-auto text-muted-foreground/90 leading-relaxed">
            Backend-focused engineer building reliable systems for real-world applications.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 xl:gap-16 items-start">
          {/* LEFT - Image + Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView || prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1,
            }}
            className="space-y-7 sm:space-y-9 order-1 lg:order-none"
          >
            {/* Image */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-xl shadow-black/10">
              <div className="aspect-[4/5] sm:aspect-[5/4] md:aspect-[16/10] w-full">
                <img
                  src={profileCity}
                  alt="Urban night portrait"
                  className="absolute inset-0 h-full w-full object-cover object-top sm:object-center"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent" />
            </div>

            {/* Text */}
            <div className="space-y-5 sm:space-y-6 px-1 sm:px-0">
              <p className="text-base sm:text-lg leading-relaxed tracking-tight">
                I am a backend-focused full-stack developer working primarily with Django and Django REST Framework.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground/90">
                My work centers around building systems that are cleanly architected, secure by design,
                and easy to evolve over time, with real production requirements in mind.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-muted-foreground/90">
                From database modeling and authentication flows to API performance and frontend integration,
                I approach development with a long-term, production-oriented mindset.
              </p>
            </div>
          </motion.div>

          {/* RIGHT - Highlights cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 order-2 lg:order-none">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={isInView || prefersReducedMotion ? 'visible' : 'hidden'}
                whileHover={!prefersReducedMotion ? { y: -6, scale: 1.015 } : {}}
                whileTap={{ scale: 0.98 }}
                className="group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-border/30 bg-card/60 backdrop-blur-md hover:border-primary/50 transition-all duration-300 touch-manipulation"
              >
                <div
                  className={`absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-80 sm:group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10 flex flex-col items-start h-full">
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition-transform duration-300"
                  >
                    <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>

                  <h3 className="font-semibold text-base sm:text-lg mb-2 sm:mb-2.5 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground/90 leading-relaxed grow">
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