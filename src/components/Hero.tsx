import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Download, MapPin, Code2, Briefcase, BookOpen, Award } from 'lucide-react';
import profileImage from '@/assets/profile-image.png';

const particles = [
  { left: '6%',  top: '14%', duration: 4.5, delay: 0.1, size: 'h-1.5 w-1.5' },
  { left: '14%', top: '68%', duration: 5.2, delay: 0.7, size: 'h-1 w-1' },
  { left: '25%', top: '28%', duration: 4.8, delay: 1.2, size: 'h-2 w-2' },
  { left: '40%', top: '80%', duration: 5.5, delay: 0.4, size: 'h-1 w-1' },
  { left: '55%', top: '18%', duration: 4.7, delay: 1.6, size: 'h-1.5 w-1.5' },
  { left: '70%', top: '62%', duration: 5.3, delay: 0.9, size: 'h-1 w-1' },
  { left: '82%', top: '32%', duration: 4.9, delay: 1.9, size: 'h-2 w-2' },
  { left: '91%', top: '74%', duration: 5.1, delay: 1.1, size: 'h-1.5 w-1.5' },
  { left: '33%', top: '50%', duration: 6.0, delay: 2.1, size: 'h-1 w-1' },
  { left: '75%', top: '12%', duration: 4.3, delay: 0.3, size: 'h-1 w-1' },
];

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.055, delayChildren: delay * i },
    }),
  };
  const child = {
    hidden: { opacity: 0, y: 20, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.3 } },
  };
  return (
    <motion.span variants={container} initial="hidden" animate="visible" className="inline-block">
      {text.split('').map((char, i) => (
        <motion.span key={`${char}-${i}`} variants={child} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.span>
  );
};

const Counter = ({ to, label, icon: Icon, delay }: { to: number; label: string; icon: any; delay: number }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(to / 40);
    const interval = setInterval(() => {
      start += step;
      if (start >= to) { setCount(to); clearInterval(interval); }
      else setCount(start);
    }, 35);
    return () => clearInterval(interval);
  }, [started, to]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex flex-col items-center gap-1.5 rounded-2xl border border-slate-700/50 bg-slate-800/50 px-5 py-3.5 backdrop-blur-xl"
    >
      <Icon size={16} className="text-cyan-400" />
      <span className="text-xl font-bold text-white">{count}+</span>
      <span className="text-xs text-slate-400 text-center leading-tight">{label}</span>
    </motion.div>
  );
};

const TiltImage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [8, -8]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      initial={{ opacity: 0, x: -50, scale: 0.9 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-fit cursor-pointer lg:mx-0"
    >
      <div className="absolute -inset-5 rounded-full bg-[conic-gradient(from_0deg,rgba(6,182,212,0.0),rgba(6,182,212,0.9),rgba(59,130,246,0.9),rgba(168,85,247,0.6),rgba(6,182,212,0.0))] animate-[spin_6s_linear_infinite] blur-[2px]" />
      <div className="absolute -inset-3 rounded-full bg-[conic-gradient(from_180deg,rgba(59,130,246,0.0),rgba(6,182,212,0.6),rgba(59,130,246,0.0))] animate-[spin_10s_linear_infinite_reverse]" />
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-8 rounded-full bg-cyan-500/20 blur-3xl"
      />
      <div className="relative rounded-full bg-slate-900 p-[5px] shadow-[0_0_60px_rgba(6,182,212,0.25)]">
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <motion.div
            key={deg}
            animate={{ opacity: [0.4, 1, 0.4], scale: [1, 1.3, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: deg / 300 }}
            className="absolute h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,1)]"
            style={{
              top: '50%',
              left: '50%',
              transform: `rotate(${deg}deg) translateX(148px) translateY(-50%)`,
            }}
          />
        ))}
        <div className="relative h-60 w-60 overflow-hidden rounded-full border-2 border-cyan-500/30 md:h-72 md:w-72 lg:h-80 lg:w-80">
          <img
            src={profileImage}
            alt="Sharat Acharja Mugdho"
            className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-slate-950/30 to-transparent" />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute -right-2 top-6 flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-900/90 px-3.5 py-2 text-xs font-semibold text-emerald-200 shadow-lg backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to Work
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute -left-4 bottom-10 flex items-center gap-2 rounded-full border border-blue-500/40 bg-slate-900/90 px-3.5 py-2 text-xs font-semibold text-blue-200 shadow-lg backdrop-blur-xl"
        >
          <Code2 size={12} className="text-blue-400" />
          Django Expert
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.18),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.20),transparent_38%),radial-gradient(ellipse_at_center,rgba(168,85,247,0.06),transparent_60%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.7),rgba(2,6,23,0.98))]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {particles.map((p) => (
        <motion.span
          key={`${p.left}-${p.top}`}
          className={`absolute ${p.size} rounded-full bg-cyan-400/60 shadow-[0_0_12px_rgba(34,211,238,0.8)]`}
          style={{ left: p.left, top: p.top }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.85, 0.3], scale: [1, 1.3, 1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}

      <div className="container relative z-10 mx-auto px-5 pb-24 pt-28 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">

          {/* LEFT: Profile Image */}
          <div className="flex-shrink-0">
            <TiltImage />
          </div>

          {/* RIGHT: Text Content */}
          <div className="flex-1 text-center lg:text-left">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/25 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-200"
            >
              <MapPin size={14} />
              <span>Dhaka, Bangladesh</span>
            </motion.div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              <TypewriterText text="Sharat Acharja" delay={0.3} />
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent"
              >
                Mugdho
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-5 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <div className="flex items-center gap-2.5 rounded-xl border border-cyan-500/20 bg-cyan-500/8 px-4 py-2.5">
                <Code2 size={22} className="text-cyan-400" />
                <span className="text-xl font-bold text-white sm:text-2xl">Backend Developer</span>
              </div>
            </motion.div>

         <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.22 }}
  className="mt-4 flex items-center justify-center gap-3 text-lg text-slate-300 lg:justify-start"
>
  <span className="font-bold text-green-400">Django</span>
  <span className="text-slate-600">✦</span>
  <span className="font-bold text-emerald-400">DRF</span>
  <span className="text-slate-600">✦</span>
  <span className="font-bold text-blue-400">React</span>
  <span className="text-slate-600">✦</span>
  <span className="font-bold text-indigo-400">PostgreSQL</span>
</motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.35 }}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 lg:mx-0 md:text-lg"
            >
              Building scalable backends with Django & crafting modern, responsive frontends with React.
              Turning complex ideas into clean, production-ready web applications.
            </motion.p>

           
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.55 }}
              className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <a
                href="https://wa.me/8801783720914"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-2.5 text-sm font-medium text-emerald-200 transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-500/20 hover:scale-[1.03]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.726-6.383-1.963l-.444-.305-2.633.883.883-2.633-.305-.444A9.963 9.963 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                WhatsApp
              </a>

              <a
                href="https://github.com/Sharatpsd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-700/60 bg-slate-800/60 px-4 py-2.5 text-sm font-medium text-slate-200 transition-all duration-300 hover:border-slate-500/70 hover:bg-slate-800 hover:scale-[1.03]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sharat-acharjya/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-blue-700/40 bg-blue-900/20 px-4 py-2.5 text-sm font-medium text-blue-200 transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-900/30 hover:scale-[1.03]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>

              <a
                href="mailto:sharatacharjee6@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-rose-700/40 bg-rose-900/20 px-4 py-2.5 text-sm font-medium text-rose-200 transition-all duration-300 hover:border-rose-500/50 hover:bg-rose-900/30 hover:scale-[1.03]"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-950/40 transition-shadow duration-300 hover:shadow-cyan-500/30"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                Explore My Projects
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1uTY0w8l9ayhY6BN0Lpyy7NGOpfBuY-rq/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 rounded-2xl border border-cyan-500/40 bg-slate-900/60 px-8 py-4 font-semibold text-cyan-200 transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-950/30"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </motion.div>

          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2.0, duration: 0.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 2.0 },
        }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs tracking-widest text-slate-500 uppercase hover:text-slate-300 transition-colors"
      >
        <span>Scroll</span>
        <span className="rounded-full border border-slate-700/60 bg-slate-900/70 p-2.5 text-cyan-300 shadow-lg">
          <ChevronDown size={16} />
        </span>
      </motion.a>
    </section>
  );
};