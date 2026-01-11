import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Database, Layers, Cpu } from 'lucide-react';

const highlights = [
  {
    icon: Database,
    title: 'Backend Architecture',
    description: 'Designing robust, scalable server-side solutions with Django and PostgreSQL.',
  },
  {
    icon: Code2,
    title: 'API Development',
    description: 'Building secure REST APIs with Django REST Framework and JWT authentication.',
  },
  {
    icon: Layers,
    title: 'Full-Stack Integration',
    description: 'Seamlessly connecting React frontends with powerful backend systems.',
  },
  {
    icon: Cpu,
    title: 'Applied ML',
    description: 'Integrating machine learning models into production applications.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="body-lg mb-6">
              I'm a backend-focused full-stack developer with deep expertise in <strong className="text-foreground">Django</strong> and <strong className="text-foreground">Django REST Framework</strong>. My approach prioritizes building systems that are maintainable, secure, and ready for real-world demands.
            </p>
            <p className="body-md mb-6">
              My experience spans real-world e-commerce platforms, API-driven applications, and research in explainable medical AI. I specialize in architecting backends that handle complex business logic while integrating seamlessly with modern React frontends.
            </p>
            <p className="body-md">
              Whether it's designing database schemas, implementing secure authentication flows, or optimizing API performance—I focus on delivering production-grade solutions that solve actual business problems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                className="card-elevated p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
