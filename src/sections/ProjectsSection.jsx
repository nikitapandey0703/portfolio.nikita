import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Github, ExternalLink, Play } from "lucide-react";

// --- DUMMY DATA ---
const projects = [
  {
    id: 1,
    title: "KeyPulse",
    category: "React Project",
    image:
      "/pro1.png",
    video: "/keyPulse.mp4", // Make sure this file is in your public/ folder
    shortDesc: "KeyPulse",
    fullDesc:
      "KeyPulse is a modern typing-speed testing platform built specifically for programmers. It allows users to practice typing using both normal English paragraphs and real code snippets in languages like C++, SQL, Java, and JavaScript. The platform offers multiple difficulty levels (Easy, Medium, Hard) and features a clean, distraction-free UI with smooth transitions. Designed with responsiveness and speed in mind, KeyPulse delivers accurate WPM, accuracy, and error analytics using a lightweight React + Tailwind stack.",
    tech: ["React", "Tailwind CSS"],
    links: { live: "https://keypulse-tm.vercel.app/", github: "https://github.com/nikitapandey0703/KeyPulse-Programmer-Typing-Master" },
  },
  {
    id: 2,
    title: "Collaboard Major Project",
    category: "Desktop Application",
    image:
      "/pro2.png",
    video: "/vid2.mp4",
    shortDesc: "Collaboard Major Project",
    fullDesc:
      "CollabBoard is a powerful desktop application that brings real-time collaboration to brainstorming, sketching ideas, and writing code. Built using Electron and React, it features a full whiteboard environment powered by TLDraw, enabling users to draw, annotate, and design together seamlessly. The app also integrates a shared code editor for team coding, making it ideal for group projects, planning, or remote teamwork. Supabase handles authentication and real-time data sync, ensuring smooth multi-user collaboration across devices. Designed as a major project, CollabBoard focuses on performance, usability, and real-time synchronization.",
    tech: ["Electron", "React", "TLDraw", "Supabase"],
    links: { live: "https://github.com/nikitapandey0703/Major-Project", github: "https://github.com/nikitapandey0703/Major-Project" },
  },
  {
    id: 3,
    title: "Ford Reimagined",
    category: "Frontend / Creative Web Design",
    image:
      "/pro3.png",
    video: "/vid3.mp4",
    shortDesc: "Ford Reimagined",
    fullDesc:
      "Ford Reimagined is a visually engaging concept website created for a Sheryians Hackathon. It redesigns the Ford brand experience with a futuristic aesthetic, smooth UI interactions, and bold typography. Using GSAP animations, the site delivers rich motion effects, dynamic transitions, and an immersive browsing flow. Built purely with HTML, CSS, and JavaScript, the project showcases creative web design skills and a strong focus on animation-driven storytelling.",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "GSAP"],
    links: { live: "https://the-triple-threat-reimagine-round1.vercel.app/", github: "https://github.com/nikitapandey0703/Ford" },
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
      {/* CSS for Header Animations with #FFBD47 and responsive tweaks */}
      <style>{`
        .dot-container { display: inline-block; margin-left: 5px; }
        .dot { opacity: 0; transition: opacity 0.5s ease-in-out; color: #FFBD47; }
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
          background-color: #FFBD47;
          animation: underline-grow 1s ease-out forwards;
        }
        @keyframes underline-grow {
          to { width: 100%; }
        }

        /* Responsive tweaks for modal scroll */
        @media (max-width: 768px) {
          .project-modal-content {
            max-height: 90vh;
            min-height: 0;
          }
        }
      `}</style>

      <section
        className="bg-black text-white py-24 px-6 min-h-screen flex flex-col justify-center  "
        id="projects"
      >
        <div className="max-w-6xl w-full mx-auto  ">
          {/* --- HEADER SECTION --- */}
          <div className="flex flex-col items-center text-center justify-center mb-14 sm:mb-20 w-full">
            {/* Main Title "My Projects" with Animation */}
            <div
              ref={textRef}
              className={`text-primary 
            text-3xl sm:text-5xl lg:text-6xl 
            font-rakkas relative inline-block
            ${inView ? "animate-underline" : ""}`}
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
            <div className="font-inter pt-4 sm:pt-6 font-light tracking-wide">
              <p className="text-base sm:text-lg md:text-xl">
                Where <span className="text-primary">creativity</span> meets{" "}
                <span className="text-primary">functionality</span>— through
                <span className="text-primary">
                  <br className="hidden xs:block" />
                  projects.
                </span>
              </p>
            </div>
          </div>
          {/* --- END HEADER SECTION --- */}

          {/* Project Grid (responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`card-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="group relative h-64 sm:h-80 rounded-2xl overflow-hidden cursor-pointer bg-zinc-900 border border-zinc-800 flex"
                whileHover="hover"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/80 to-black/40 p-4 sm:p-6 flex flex-col justify-end"
                  initial={{ y: "100%" }}
                  variants={{ hover: { y: "0%" } }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                    {project.title}
                  </h3>
                  <div className="text-xs sm:text-sm font-medium text-white/90 h-10 sm:h-12 overflow-hidden">
                    <motion.div
                      variants={{ hover: { opacity: 1 } }}
                      initial={{ opacity: 0 }}
                    >
                      <TypewriterText text={project.shortDesc} />
                    </motion.div>
                  </div>
                  <div className="mt-2 sm:mt-4 flex items-center gap-2 text-white text-xs font-bold uppercase tracking-wider">
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
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
                >
                  <motion.div
                    layoutId={`card-${selectedProject.id}`}
                    className="project-modal-content bg-[#111] w-full max-w-2xl sm:max-w-3xl lg:max-w-5xl rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative flex flex-col md:flex-row max-h-[90vh]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
                    >
                      <X size={20} />
                    </button>

                    {/* Video Section */}
                    <div className="w-full md:w-3/5 bg-black flex items-center justify-center relative min-h-[180px] xs:min-h-[220px] sm:min-h-[250px] md:min-h-[300px] md:min-h-auto border-b md:border-b-0 md:border-r border-zinc-800">
                      <video
                        src={selectedProject.video}
                        controls
                        autoPlay
                        muted
                        loop
                        className="w-full h-full object-contain bg-black"
                        style={{ maxHeight: "400px" }}
                      />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-2/5 p-4 sm:p-8 flex flex-col overflow-y-auto max-h-[400px] md:max-h-none">
                      <span className="text-primary font-bold tracking-wider text-xs sm:text-sm mb-1 sm:mb-2">
                        {selectedProject.category}
                      </span>
                      <h2 className="text-xl sm:text-3xl font-bold mb-2 sm:mb-4">
                        {selectedProject.title}
                      </h2>
                      <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                        {selectedProject.fullDesc}
                      </p>

                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-6 sm:mb-8">
                        {selectedProject.tech.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-1 sm:px-3 sm:py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700 mb-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="mt-auto flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-zinc-800">
                        <a
                          href={selectedProject.links.live}
                          className="flex-1 bg-white text-black font-bold py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-primary transition-colors text-center text-sm sm:text-base"
                        >
                          <ExternalLink size={18} /> Live Demo
                        </a>
                        <a
                          href={selectedProject.links.github}
                          className="flex-1 bg-zinc-800 text-white font-bold py-2 sm:py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-zinc-700 transition-colors text-center text-sm sm:text-base"
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
