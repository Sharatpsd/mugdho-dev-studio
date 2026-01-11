import { motion, useInView, useAnimationControls } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { FileText, ExternalLink, Eye, Brain, BarChart3, Stethoscope, Sparkles } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

const highlightVariants = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  hover: { 
    scale: 1.04, 
    y: -4,
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    transition: { duration: 0.3 }
  }
};

export const Research = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const researchHighlights = [
    { icon: Eye, text: "Multi-disease ocular classification", accent: "Retinal Fundus Images" },
    { icon: Brain, text: "ResNet50 Transfer Learning", accent: "Fine-tuned Architecture" },
    { icon: BarChart3, text: "Advanced Explainability", accent: "Grad-CAM + SHAP" },
    { icon: Stethoscope, text: "Clinical Decision Support", accent: "Guideline-based" },
  ];

  return (
    <section id="research" className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-background to-secondary/40">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Sparkles size={18} />
            <span className="text-sm font-medium">Featured Research</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
            Explainable AI in Ophthalmology
          </h2>
          
          <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering deep learning approaches for multi-disease detection with clinical-grade interpretability
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-8" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <div className="relative">
            {/* Decorative gradient border */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 opacity-70 blur-xl" />
            
            <div className="relative bg-card/90 backdrop-blur-xl border border-border/50 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                {/* Left side - Main content */}
                <div className="flex-1">
                  <motion.div variants={fadeInUp} className="inline-block mb-6">
                    <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full">
                      Research Paper 2024–2025
                    </span>
                  </motion.div>

                  <motion.h3 
                    variants={fadeInUp}
                    className="text-3xl md:text-4xl font-bold leading-tight mb-6 bg-gradient-to-br from-foreground to-foreground/80 bg-clip-text text-transparent"
                  >
                    Explainable Deep Learning for Multi-Disease Ocular Classification and Severity-Aware Myopia Analysis
                  </motion.h3>

                  <motion.p 
                    variants={fadeInUp}
                    className="text-lg text-muted-foreground leading-relaxed mb-10"
                  >
                    Developed an end-to-end explainable AI framework for retinal disease classification using transfer learning, achieving both high diagnostic accuracy and clinical interpretability through state-of-the-art visualization techniques.
                  </motion.p>

                  {/* Highlights grid */}
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                    {researchHighlights.map((item, index) => (
                      <motion.div
                        key={index}
                        variants={highlightVariants}
                        whileHover="hover"
                        className="group relative p-5 rounded-2xl bg-secondary/40 border border-border/40 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                            <item.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{item.text}</p>
                            <p className="text-sm text-muted-foreground mt-1">{item.accent}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right side - Call to action & decoration */}
                <motion.div 
                  variants={fadeInUp}
                  className="lg:w-80 lg:flex-shrink-0 lg:pt-10"
                >
                  <div className="sticky top-8">
                    <div className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 via-accent/5 to-transparent border border-primary/10 text-center">
                      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <FileText className="w-10 h-10 text-primary-foreground" />
                      </div>
                      
                      <h4 className="text-xl font-semibold mb-4">Read Full Paper</h4>
                      <p className="text-sm text-muted-foreground mb-8">
                        Detailed methodology, results, visualizations and clinical implications
                      </p>

                      <a
                        href="https://drive.google.com/file/d/1EkV9sDJQ2V4Pq7loVsDbD5z4v42Br2lD/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0"
                      >
                        View Research Paper
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};