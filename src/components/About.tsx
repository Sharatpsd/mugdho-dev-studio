import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, useMemo } from 'react';

// 1. Import your image (adjust path according to your project structure)
import profileCity from '@/assets/profile-city.jpg'; // ← most common Vite/Alias path


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
        <motion.div
          className="max-w-3xl mx-auto space-y-7 sm:space-y-9"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView || prefersReducedMotion ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.1,
          }}
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
              Hello! I'm Sharat Acharja Mugdho, a Computer Science graduate from Green University of Bangladesh and a backend-focused full-stack developer.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground/90">
              I work mainly with Django and Django REST Framework to build reliable, well-structured backend systems. I focus on clean code, proper database design, and secure authentication flows that are built for real-world use.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground/90">
              I care about how a system behaves in production — not just how it runs locally. From API development and JWT-based authentication to deployment and debugging real issues, I aim to build applications that are stable, maintainable, and ready to scale.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground/90">
              I also integrate React frontends with backend systems through clear API communication and consistent data flow, ensuring smooth interaction between both sides.
            </p>

            <p className="text-sm sm:text-base leading-relaxed text-muted-foreground/90">
              My goal is simple: to build backend systems that are clean, secure, and designed to last.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};