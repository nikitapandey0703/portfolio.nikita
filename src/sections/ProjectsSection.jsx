import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Play } from "lucide-react";

// --- DUMMY DATA ---
const projects = [
  {
    id: 1,
    title: "KeyPuse",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    video: "/keyPulse.mp4", // Make sure this file is in your public/ folder
    shortDesc: "A comprehensive dashboard for managing sales and inventory.",
    fullDesc:
      "This project is a high-performance admin dashboard built to manage large-scale e-commerce inventories. It features real-time data visualization, order tracking, and user role management. The UI is designed for maximum efficiency with dark mode support.",
    tech: ["React", "Tailwind", "Node.js", "MongoDB"],
    links: { live: "#", github: "#" },
  },
  {
    id: 2,
    title: "AI Image Generator",
    category: "AI / ML Wrapper",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    shortDesc: "Generate stunning visuals using Stable Diffusion API.",
    fullDesc:
      "An intuitive interface interacting with the Stable Diffusion API. Users can input prompts, select styles, and upscale images. Optimized for speed with server-side caching and a responsive masonry grid layout for the gallery.",
    tech: ["Next.js", "OpenAI API", "Framer Motion"],
    links: { live: "#", github: "#" },
  },
  {
    id: 3,
    title: "Fintech Landing Page",
    category: "UI/UX Design",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    shortDesc: "Modern banking interface with 3D elements.",
    fullDesc:
      "A pixel-perfect landing page for a neo-bank startup. Features complex CSS animations, 3D spline integration, and scroll-triggered reveals. Focus was placed on accessibility and mobile-first performance.",
    tech: ["Vue.js", "Three.js", "GSAP"],
    links: { live: "#", github: "#" },
  },
];

// --- TYPEWRITER COMPONENT ---
const TypewriterText = ({ text }) => {
  const letters = text.split("");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.1 },
    },
  };
  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="flex flex-wrap"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Header Animation State
  const textRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Intersection Observer for Header
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
    };
  }, []);

  return (
    <>
      {/* CSS for Header Animations with #FFBD47 */}
      <style>{`
        .dot-container { display: inline-block; margin-left: 5px; }
        .dot { opacity: 0; transition: opacity 0.5s ease-in-out; color: #FFBD47; } /* Updated Color */
        .dot-appear { opacity: 1; }
        .delay-1 { transition-delay: 0.2s; }
        .delay-2 { transition-delay: 0.4s; }
        .delay-3 { transition-delay: 0.6s; }
        
        .animate-underline::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 0;
          height: 3px; 
          background-color: #FFBD47; /* Updated Color */
          animation: underline-grow 1s ease-out forwards;
        }
        @keyframes underline-grow {
          to { width: 100%; }
        }
      `}</style>

      <section
        className="bg-black text-white py-20 px-6 min-h-screen"
        id="projects"
      >
        <div className="max-w-7xl mx-auto">
          {/* --- HEADER SECTION --- */}
          <div className="flex flex-col items-center text-center justify-center mb-20 w-full">
            {/* Main Title "My Projects" with Animation */}
            <div
              ref={textRef}
              className={`text-primary text-6xl font-rakkas relative inline-block ${
                inView ? "animate-underline" : ""
              }`}
            >
              My Projects
              <span className="dot-container">
                <span className={`dot ${inView ? "dot-appear delay-1" : ""}`}>
                  .
                </span>
                <span className={`dot ${inView ? "dot-appear delay-2" : ""}`}>
                  .
                </span>
                <span className={`dot ${inView ? "dot-appear delay-3" : ""}`}>
                  .
                </span>
              </span>
            </div>
            <div className="font-inter pt-6 font-light tracking-wide">
              <p>
                Where <span className="text-primary">creativity</span> meets{" "}
                <span className="text-primary">functionality</span>— through
                <span className="text-primary">
                  <br />
                  projects.
                </span>
              </p>
            </div>
          </div>
          {/* --- END HEADER SECTION --- */}

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-20">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-800"
                whileHover="hover"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <motion.div
                  // Updated Gradient Colors to #FFBD47
                  className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/80 to-black/40 p-6 flex flex-col justify-end"
                  initial={{ y: "100%" }}
                  variants={{ hover: { y: "0%" } }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <div className="text-sm font-medium text-white/90 h-12 overflow-hidden">
                    <motion.div
                      variants={{ hover: { opacity: 1 } }}
                      initial={{ opacity: 0 }}
                    >
                      <TypewriterText text={project.shortDesc} />
                    </motion.div>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
                    View Project <Play size={12} className="fill-current" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* --- MODAL --- */}
          <AnimatePresence>
            {selectedProject && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                  <motion.div
                    layoutId={`card-${selectedProject.id}`}
                    className="bg-[#111] w-full max-w-5xl rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
                    >
                      <X size={20} />
                    </button>

                    {/* Video Section */}
                    <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative min-h-[300px] md:min-h-auto border-b md:border-b-0 md:border-r border-zinc-800">
                      <video
                        src={selectedProject.video}
                        controls
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-contain bg-black"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-2/5 p-8 flex flex-col overflow-y-auto">
                      <span className="text-primary font-bold tracking-wider text-sm mb-2">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-3xl font-bold mb-4">
                        {selectedProject.title}
                      </h2>
                      <p className="text-zinc-400 leading-relaxed mb-6">
                        {selectedProject.fullDesc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {selectedProject.tech.map((t) => (
                          <span
                            key={t}
                            className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex gap-4 pt-6 border-t border-zinc-800">
                        <a
                          href={selectedProject.links.live}
                          className="flex-1 bg-white text-black font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary transition-colors"
                        >
                          <ExternalLink size={18} /> Live Demo
                        </a>
                        <a
                          href={selectedProject.links.github}
                          className="flex-1 bg-zinc-800 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors"
                        >
                          <Github size={18} /> Source
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;
