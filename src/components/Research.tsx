import { motion, useInView, useAnimationControls } from 'framer-motion';
import { useRef, useEffect } from 'react';
import {
  FileText,
  ExternalLink,
  Eye,
  Brain,
  BarChart3,
  Stethoscope,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const progress = 94;
const radius = 62;
const circumference = 2 * Math.PI * radius;
const targetOffset = circumference * (1 - progress / 100);

export const Research = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const researchHighlights = [
    { icon: Eye, text: 'Multi-disease ocular classification', accent: 'Retinal Fundus Images' },
    { icon: Brain, text: 'ResNet50 Transfer Learning', accent: 'Fine-tuned Architecture' },
    { icon: BarChart3, text: 'Advanced Explainability', accent: 'Grad-CAM + SHAP' },
    { icon: Stethoscope, text: 'Clinical Decision Support', accent: 'Guideline-based' },
  ];

  return (
    <section
      id="research"
      className="relative overflow-hidden bg-slate-950 py-24 md:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.08),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_38%)]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-8" ref={ref}>
        <motion.div
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="mb-16 text-center md:mb-20"
        >
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-cyan-200">
              <Sparkles size={18} />
              <span className="text-sm font-medium">Featured Research</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-emerald-200">
              <CheckCircle2 size={18} />
              <span className="text-sm font-medium">IEEE Published • 2024-2025</span>
            </div>
          </div>

          <h2 className="bg-gradient-to-r from-white via-cyan-100 to-blue-200 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl">
            Explainable AI in Ophthalmology
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300 md:text-xl">
            Pioneering deep learning approaches for multi-disease detection with clinical-grade
            interpretability
          </p>

          <div className="mx-auto mt-8 h-1.5 w-24 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
        </motion.div>

        <motion.div
          initial="hidden"
          animate={controls}
          variants={staggerContainer}
          className="mx-auto max-w-6xl"
        >
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-cyan-500/25 via-blue-500/25 to-cyan-500/25 opacity-80 blur-xl" />

            <div className="relative rounded-3xl border border-slate-700/50 bg-slate-800/60 p-8 backdrop-blur-xl shadow-2xl sm:p-10 lg:p-12">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
                <div className="flex-1">
                  <motion.h3
                    variants={fadeInUp}
                    className="mb-6 bg-gradient-to-br from-white to-slate-300 bg-clip-text text-3xl font-bold leading-tight text-transparent md:text-4xl"
                  >
                    Explainable Deep Learning for Multi-Disease Ocular Classification and
                    Severity-Aware Myopia Analysis
                  </motion.h3>

                  <motion.p
                    variants={fadeInUp}
                    className="mb-10 text-lg leading-relaxed text-slate-300"
                  >
                    Developed an end-to-end explainable AI framework for retinal disease
                    classification using transfer learning, achieving both high diagnostic accuracy and
                    clinical interpretability through state-of-the-art visualization techniques.
                  </motion.p>

                  <div className="grid gap-4 md:grid-cols-2 md:gap-6">
                    {researchHighlights.map((item) => (
                      <motion.div
                        key={item.text}
                        variants={fadeInUp}
                        whileHover={{ y: -4 }}
                        className="group rounded-2xl border border-slate-700/50 bg-slate-900/45 p-5 transition-all duration-300 hover:border-cyan-400/30 hover:ring-1 hover:ring-cyan-400/40"
                      >
                        <div className="flex items-start gap-4">
                          <motion.div
                            whileHover={{ y: -4 }}
                            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15 text-cyan-300"
                          >
                            <item.icon className="h-6 w-6" />
                          </motion.div>
                          <div>
                            <p className="font-medium text-white">{item.text}</p>
                            <p className="mt-1 text-sm text-slate-400">{item.accent}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div variants={fadeInUp} className="relative lg:w-80 lg:shrink-0 lg:pt-6">
                  <motion.div
                    className="absolute inset-8 -z-10 rounded-[30px] bg-cyan-500/20 blur-3xl"
                    animate={{ opacity: [0.3, 0.7, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  />

                  <div className="rounded-2xl border border-slate-700/50 bg-slate-900/70 p-8 text-center backdrop-blur-xl">
                    <div className="relative mx-auto mb-8 flex h-40 w-40 items-center justify-center">
                      <svg className="h-full w-full -rotate-90" viewBox="0 0 160 160">
                        <circle
                          cx="80"
                          cy="80"
                          r={radius}
                          stroke="rgba(51,65,85,0.7)"
                          strokeWidth="12"
                          fill="none"
                        />
                        <motion.circle
                          cx="80"
                          cy="80"
                          r={radius}
                          stroke="url(#researchGradient)"
                          strokeWidth="12"
                          strokeLinecap="round"
                          fill="none"
                          strokeDasharray={circumference}
                          initial={{ strokeDashoffset: circumference }}
                          animate={
                            isInView
                              ? { strokeDashoffset: targetOffset }
                              : { strokeDashoffset: circumference }
                          }
                          transition={{ duration: 1.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        />
                        <defs>
                          <linearGradient id="researchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#06b6d4" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                        </defs>
                      </svg>

                      <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-3xl font-bold text-white">94%+</span>
                        <span className="mt-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
                          Model Accuracy
                        </span>
                      </div>
                    </div>

                    <div className="mb-6 flex justify-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-500">
                        <FileText className="h-10 w-10 text-white" />
                      </div>
                    </div>

                    <h4 className="mb-4 text-xl font-semibold text-white">Read Full Paper</h4>
                    <p className="mb-8 text-sm text-slate-400">
                      Detailed methodology, results, visualizations and clinical implications
                    </p>

                    <a
                      href="https://drive.google.com/file/d/1EkV9sDJQ2V4Pq7loVsDbD5z4v42Br2lD/view"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-medium text-white shadow-lg transition-all hover:from-cyan-500 hover:to-blue-500 hover:shadow-cyan-500/20"
                    >
                      View Research Paper
                      <ExternalLink size={18} />
                    </a>
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
