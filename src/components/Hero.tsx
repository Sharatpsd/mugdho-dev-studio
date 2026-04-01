import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Download, MapPin, Code2 } from 'lucide-react';
import profileImage from '@/assets/profile download.png';

// ─── Looping Typewriter Roles ───────────────────────────────────────────────
const roles = [
  "Backend Engineer",
  "Django Developer",
  "API Specialist",
  "Full Stack Developer"
];

const TypewriterRoles = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 1600);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : role.slice(0, prev.length + 1)
        );
      }, isDeleting ? 45 : 75);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <span className="inline-block text-cyan-400 font-semibold tracking-tight min-h-[1.1em]">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.7, repeat: Infinity }}
        className="inline-block w-0.5 h-9 bg-cyan-400 ml-1 align-middle"
      />
    </span>
  );
};

// ─── 3D Tilt Image (Perfect version you liked) ───────────────────────────────
const TiltImage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 20 });
  const springY = useSpring(y, { stiffness: 120, damping: 20 });
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

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
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-fit"
    >
      {/* Glowing animated rings */}
      <div className="absolute -inset-8 rounded-[220px] bg-[conic-gradient(from_0deg,#06b6d4,#3b82f6,#a855f7,#06b6d4)] opacity-40 blur-xl animate-[spin_20s_linear_infinite]" />
      <div className="absolute -inset-5 rounded-[200px] border border-cyan-400/30 animate-[spin_15s_linear_infinite_reverse]" />

      <div className="relative bg-slate-900 p-3 rounded-[200px] shadow-2xl shadow-cyan-500/20 border border-cyan-500/20">
        <div className="overflow-hidden rounded-[180px] h-[380px] w-[290px] md:h-[460px] md:w-[330px] lg:h-[520px] lg:w-[360px]">
          <img
            src={profileImage}
            alt="Sharat Acharja Mugdho"
            className="h-full w-full object-contain transition-transform duration-700 hover:scale-105"
          />
        </div>

        {/* Open to Work Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1 }}
          className="absolute -right-5 top-8 flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-emerald-200 shadow-lg backdrop-blur-xl"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to Work
        </motion.div>

        {/* Django Expert Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute -left-6 bottom-12 flex items-center gap-2 rounded-full border border-blue-500/40 bg-slate-900/90 px-4 py-2 text-xs font-semibold text-blue-200 shadow-lg backdrop-blur-xl"
        >
          <Code2 size={13} className="text-blue-400" />
          Django Expert
        </motion.div>
      </div>
    </motion.div>
  );
};

// ─── Social Links (Your original) ───────────────────────────────────────────
const socials = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/8801783720914',
    border: 'border-emerald-500/30',
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-200',
    hover: 'hover:border-emerald-400/50 hover:bg-emerald-500/20',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.726-6.383-1.963l-.444-.305-2.633.883.883-2.633-.305-.444A9.963 9.963 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" /></svg>,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Sharatpsd',
    border: 'border-slate-700/60',
    bg: 'bg-slate-800/60',
    text: 'text-slate-200',
    hover: 'hover:border-slate-500/70 hover:bg-slate-800',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sharat-acharjya/',
    border: 'border-blue-700/40',
    bg: 'bg-blue-900/20',
    text: 'text-blue-200',
    hover: 'hover:border-blue-500/50 hover:bg-blue-900/30',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  },
  {
    label: 'Email',
    href: 'mailto:sharatacharjee6@gmail.com',
    border: 'border-rose-700/40',
    bg: 'bg-rose-900/20',
    text: 'text-rose-200',
    hover: 'hover:border-rose-500/50 hover:bg-rose-900/30',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
  },
];

// ─── Main Hero ──────────────────────────────────────────────────────────────
export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950">
      {/* Background */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.18),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.18),transparent_38%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.7),rgba(2,6,23,0.98))]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

      <div className="container relative z-10 mx-auto px-6 pt-28 pb-20 lg:py-0">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-20">

          {/* Right Side - Image */}
          <div className="flex-shrink-0 lg:w-5/12 flex justify-center lg:justify-end">
            <TiltImage />
          </div>

          {/* Left Side - Text Content */}
          <div className="flex-1 text-center lg:text-left">

           

            {/* Name */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-none">
              Sharat Acharja
              <br />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent"
              >
                Mugdho
              </motion.span>
            </h1>

            {/* Animated Roles */}
            <div className="mt-4 text-2xl md:text-3xl font-medium text-slate-300 h-12">
              <TypewriterRoles />
            </div>

            {/* Tech Stack */}
            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-base sm:text-lg">
              {[
                { name: 'Django', color: 'text-green-400' },
                { name: 'DRF', color: 'text-emerald-400' },
                { name: 'React', color: 'text-sky-400' },
                { name: 'PostgreSQL', color: 'text-indigo-400' },
              ].map((tech, i) => (
                <motion.span
                  key={tech.name}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className={`font-semibold ${tech.color}`}
                >
                  {tech.name}
                </motion.span>
              ))}
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="mt-8 max-w-xl mx-auto lg:mx-0 text-lg text-slate-300 leading-relaxed"
            >
              I’m a backend-focused full-stack developer building scalable web applications with Django, DRF, React, and PostgreSQL.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 }}
              className="mt-10 flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2.5 rounded-2xl border ${social.border} ${social.bg} ${social.text} px-5 py-3 text-sm font-medium transition-all hover:scale-105 ${social.hover}`}
                >
                  {social.icon}
                  {social.label}
                </a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-9 py-4 font-semibold text-white shadow-lg shadow-cyan-900/50 hover:shadow-cyan-500/30 overflow-hidden"
              >
                <span className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                Explore My Projects
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1uTY0w8l9ayhY6BN0Lpyy7NGOpfBuY-rq/view?usp=sharing"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 rounded-2xl border border-cyan-400/30 bg-slate-900/70 px-9 py-4 font-semibold text-cyan-200 hover:border-cyan-400 hover:bg-cyan-950/40 transition-all"
              >
                <Download size={20} />
                Download Resume
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 2.2, y: { duration: 2, repeat: Infinity } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-xs tracking-widest text-slate-500 hover:text-slate-300 transition-colors"
      >
        SCROLL
        <div className="mt-2 rounded-full border border-slate-700 p-3">
          <ChevronDown size={18} />
        </div>
      </motion.a>
    </section>
  );
};