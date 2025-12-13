import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, Calendar } from "lucide-react";

// --- DUMMY DATA ---
const certificates = [
  {
    id: 4,
    title: "UI/UX Designing Internship",
    issuer: "TFP Technologies",
    date: "Sep 2025 - Nov 2025",
    // Save your UI/UX design certificate image as 'uiux.jpg' in public/certificates/
    image: "/UIDesigner.png",
    link: "#",
  },
  {
    id: 1,
    title: "Java Programming Internship",
    issuer: "CodTech IT Solutions",
    date: "Aug 2025",
    // Save your CodTech image as 'codtech.jpg' in public/certificates/
    image: "/codtech.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "National Level Web Dev Hackathon",
    issuer: "Sheryians Coding School",
    date: "Sept 2024",
    // Save your Sheryians image as 'sheryians.jpg' in public/certificates/
    image: "/sherCertificate.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "Frontend App Developer Intern",
    issuer: "MediAlly",
    date: "Nov 2023",
    // Save your MediAlly image as 'medially.jpg' in public/certificates/
    image: "/medially.jpg",
    link: "#",
  },

];

// --- TYPEWRITER EFFECT FOR LIST ITEMS ---
const TypewriterLine = ({ text, delay = 0 }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: delay },
    },
  };

  const child = {
    hidden: { opacity: 0, x: -5 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div variants={container} initial="hidden" animate="visible" className="inline-block">
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className="inline-block whitespace-pre">
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// --- MAIN COMPONENT ---
const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null); // For Modal
  const [hoveredCert, setHoveredCert] = useState(certificates[0]); // For Side Preview
  const [hasLoaded, setHasLoaded] = useState(false);

  // Header Animation State
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setHasLoaded(true); // Trigger list animation
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-24 px-6 min-h-screen flex flex-col justify-center"
      id="achievement"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-center text-center justify-center mb-20 w-full">
          <div
            className={`text-primary 
          text-3xl sm:text-5xl lg:text-6xl 
          font-rakkas relative inline-block
          ${inView ? "animate-underline" : ""}`}
          >
            Achivements
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
          <div  className="font-inter pt-4 sm:pt-6 font-light tracking-wide">
            <p className="text-base sm:text-lg md:text-xl">
              Where <span className="text-primary"> effort </span> meets{" "}
              <span className="text-primary">excellence</span> — through
              <span className="text-primary">
                <br />
                achievement.
              </span>
            </p>
          </div>
        </div>

        {/* --- MAIN CONTENT (Split View) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8  items-start relative w-full">
          {/* LEFT: THE LIST */}
          <div className="flex flex-col gap-4 sm:gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, x: -20 }}
                animate={hasLoaded ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.3, duration: 0.5 }} // Staggered entry
                onMouseEnter={() => setHoveredCert(cert)}
                onClick={() => setSelectedCert(cert)}
                className={`group cursor-pointer p-4 sm:p-6 rounded-xl border transition-all duration-300 relative overflow-hidden
                    ${hoveredCert?.id === cert.id
                    ? "border-primary bg-zinc-900"
                    : "border-zinc-800 bg-transparent hover:border-zinc-600"
                  }`}
              >
                {/* Hover Glow Effect */}
                {hoveredCert?.id === cert.id && (
                  <motion.div
                    layoutId="active-glow"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-primary"
                  />
                )}

                <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-0">
                  <div className="flex flex-col gap-2">
                    {/* Title with Typewriter Effect (only triggers once) */}
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold group-hover:text-primary transition-colors">
                      {hasLoaded ? (
                        <TypewriterLine text={cert.title} delay={index * 0.3} />
                      ) : (
                        <span className="opacity-0">{cert.title}</span>
                      )}
                    </h3>

                    <div className="flex items-center gap-2 text-zinc-400 text-xs sm:text-sm">
                      <Award size={14} className="text-primary" />
                      <span>{cert.issuer}</span>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded mt-2 sm:mt-0">
                    {cert.date}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: THE PREVIEW IMAGE (Sticky) */}
          <div className="w-full md:w-auto sticky md:top-24 h-[250px] xs:h-[300px] sm:h-[350px] md:h-[400px] bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden flex items-center justify-center p-4 sm:p-8 mt-8 md:mt-0">
            <AnimatePresence mode="wait">
              {hoveredCert && (
                <motion.div
                  key={hoveredCert.id}
                  initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full shadow-2xl"
                >
                  {/* The Image looking like a document */}
                  <div className="relative w-full h-full bg-white p-1 sm:p-2 rounded-lg shadow-black/50 shadow-xl flex items-center justify-center">
                    <div className="w-full h-full relative overflow-hidden rounded border border-zinc-200">
                      <img
                        src={hoveredCert.image}
                        alt={hoveredCert.title}
                        className="w-full h-full object-contain object-center"
                      />
                      {/* Overlay to make it look like a preview */}
                      <div
                        className="absolute inset-0 bg-black/10 hover:bg-transparent transition-colors cursor-pointer"
                        onClick={() => setSelectedCert(hoveredCert)}
                      />
                    </div>
                  </div>

                  {/* Floating Label */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg"
                  >
                    Click to View
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {!hoveredCert && (
              <p className="text-zinc-600 animate-pulse text-center text-xs sm:text-base">
                Hover over a certificate...
              </p>
            )}
          </div>
        </div>

        {/* --- MODAL (Full View) --- */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-[#111] max-w-4xl w-full rounded-2xl overflow-hidden border border-zinc-700 relative flex flex-col md:flex-row"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-primary hover:text-black rounded-full text-white transition-all"
                >
                  <X size={20} />
                </button>

                {/* Left: Image */}
                <div className="w-full md:w-2/3 bg-zinc-900 flex items-center justify-center p-4">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-h-[70vh] w-auto shadow-2xl rounded border border-zinc-700"
                  />
                </div>

                {/* Right: Info */}
                <div className="w-full md:w-1/3 p-8 flex flex-col justify-center border-l border-zinc-800">
                  <h2 className="text-2xl font-bold text-primary mb-4">
                    {selectedCert.title}
                  </h2>

                  <div className="space-y-4 text-zinc-300">
                    <div className="flex items-center gap-3">
                      <Award className="text-primary" size={20} />
                      <span className="font-semibold">
                        {selectedCert.issuer}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="text-primary" size={20} />
                      <span>{selectedCert.date}</span>
                    </div>
                  </div>

                  <p className="mt-6 text-sm text-zinc-500 leading-relaxed">
                    This certification validates proficiency in{" "}
                    {selectedCert.title}. It required completing comprehensive
                    modules and a final assessment.
                  </p>

                  <a
                    href={selectedCert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 flex items-center justify-center gap-2 w-full bg-primary text-black font-bold py-3 rounded-lg hover:bg-[#eeca5d] transition-colors"
                  >
                    Verify Credential <ExternalLink size={16} />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;