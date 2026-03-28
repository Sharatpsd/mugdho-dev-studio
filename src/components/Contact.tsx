import emailjs from '@emailjs/browser';
import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState, type ChangeEvent, type FormEvent } from 'react';
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Loader2,
} from 'lucide-react';

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'sharatacharjee6@gmail.com',
    href: 'mailto:sharatacharjee6@gmail.com',
    copyValue: 'sharatacharjee6@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+880 1783 720914',
    href: 'tel:+8801783720914',
    copyValue: '+8801783720914',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Sharatpsd',
    href: 'https://github.com/Sharatpsd',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sharat-acharjee',
    href: 'https://www.linkedin.com/in/sharat-acharjee-49276830b/',
  },
];

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export const Contact = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  useEffect(() => {
    if (!copiedLabel) return undefined;

    const timeout = window.setTimeout(() => setCopiedLabel(null), 2000);
    return () => window.clearTimeout(timeout);
  }, [copiedLabel]);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleCopy = async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedLabel(label);
    } catch {
      setCopiedLabel(null);
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setStatus('idle');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );

      setFormData(initialForm);
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-950 py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.09),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.12),transparent_40%)]" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <div className="mx-auto mb-4 mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Interested in working together? Let's connect and discuss how I can contribute to your
            team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4 text-center text-sm font-medium text-cyan-100 backdrop-blur-xl"
        >
          ⚡ Response time: &lt; 24 hours | Available for: Full-time · On-site Dhaka · Remote
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="rounded-2xl border border-slate-700/50 bg-slate-800/60 p-6 backdrop-blur-xl sm:p-7"
          >
            <h3 className="text-2xl font-semibold text-white">Send a message</h3>
            <p className="mt-2 text-sm text-slate-400">
              Fill out the form and I'll get back to you as soon as possible.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-white focus:border-cyan-500/70 focus:outline-none"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
                className="w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-white focus:border-cyan-500/70 focus:outline-none"
              />

              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-white focus:border-cyan-500/70 focus:outline-none"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={4}
                required
                className="w-full rounded-xl border border-slate-700/50 bg-slate-800/50 px-4 py-3 text-white focus:border-cyan-500/70 focus:outline-none"
              />

              <button
                type="submit"
                disabled={isSending}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 px-4 py-3 font-medium text-white transition-all hover:from-cyan-500 hover:to-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending && <Loader2 className="h-4 w-4 animate-spin" />}
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            {status === 'success' && (
              <div className="mt-4 flex items-center gap-2 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
                <CheckCircle2 className="h-4 w-4" />
                <span>Message sent! I'll get back to you within 24 hours.</span>
              </div>
            )}

            {status === 'error' && (
              <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                Something went wrong. Please try again.
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="space-y-4"
          >
            {contactLinks.map((link, index) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="rounded-2xl border border-slate-700/50 bg-slate-800/60 p-5 backdrop-blur-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-500/15">
                    <link.icon className="h-5 w-5 text-cyan-300" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-sm text-slate-400">{link.label}</p>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="mt-1 flex items-center gap-2 truncate font-medium text-white transition-colors hover:text-cyan-300"
                    >
                      <span className="truncate">{link.value}</span>
                      <ArrowUpRight className="h-4 w-4 shrink-0" />
                    </a>
                  </div>

                  {link.copyValue ? (
                    <button
                      type="button"
                      onClick={() => handleCopy(link.label, link.copyValue)}
                      className="flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-900/70 px-3 py-2 text-sm text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-200"
                    >
                      <Copy className="h-4 w-4" />
                      <span>{copiedLabel === link.label ? 'Copied!' : 'Copy'}</span>
                    </button>
                  ) : null}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
