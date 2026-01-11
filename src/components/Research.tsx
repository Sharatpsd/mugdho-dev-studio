import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FileText, ExternalLink, Brain, Eye, BarChart3, Stethoscope } from 'lucide-react';

export const Research = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const researchHighlights = [
    { icon: Eye, text: 'Multi-disease ocular classification using retinal fundus images' },
    { icon: Brain, text: 'ResNet50-based transfer learning architecture' },
    { icon: BarChart3, text: 'Explainability with Grad-CAM and SHAP' },
    { icon: Stethoscope, text: 'Guideline-based clinical decision support' },
  ];

  return (
    <section id="research" className="section-padding bg-muted/30">
      <div className="section-container" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">Research</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="card-elevated p-8 lg:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <FileText className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <span className="text-sm font-medium text-accent uppercase tracking-wider">Research Paper</span>
                <h3 className="heading-md mt-1 leading-snug">
                  Explainable Deep Learning for Multi-Disease Ocular Classification and Severity-Aware Myopia Analysis
                </h3>
              </div>
            </div>

            <p className="body-md mb-8">
              This research focuses on developing an explainable AI system for medical image analysis, specifically targeting ocular diseases. The model uses transfer learning with ResNet50 architecture and incorporates explainability techniques to provide clinically interpretable results.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {researchHighlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background"
                >
                  <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{item.text}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="https://drive.google.com/file/d/1EkV9sDJQ2V4Pq7loVsDbD5z4v42Br2lD/view"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
            >
              <FileText size={18} />
              View Research Paper
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
