import React, { useState, useRef, useEffect } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaFigma,
  FaGitAlt,
  FaHtml5,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiAdobephotoshop,
  SiEclipseide,
  SiCanva,
  SiMongodb,
} from "react-icons/si";
import {  FaGithub, FaCss3Alt, FaFeather } from "react-icons/fa6";
import { FaFeatherAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";
import { VscVscodeInsiders } from "react-icons/vsc";

// --- DATA (Standardized to 2x2 Grid) ---
const skillCategories = [
  {
    title: "Frontend Development",
    desc: "Building responsive, interactive & dynamic UIs.",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <IoLogoJavascript /> },
      { name: "React.js", icon: <FaReact /> },
    ],
  },
  {
    title: "Backend & Database",
    desc: "Scalable server-side architectures.",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Java", icon: <FaJava /> },
      { name: "MySQL", icon: <GrMysql /> },
     
    ],
  },
  {
    title: "UI/UX & Design",
    desc: "Crafting pixel-perfect aesthetics.",
    skills: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "Photoshop", icon: <SiAdobephotoshop /> },
      { name: "Canva", icon: <SiCanva /> },
      { name: "Prototyping", icon: <FaFeatherAlt /> },
    ],
  },
  {
    title: "Tools & Workflow",
    desc: "Version control & development environments.",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "Eclipse", icon: <SiEclipseide /> },
      { name: "VS Code", icon: <VscVscodeInsiders /> },
    ],
  },
];

// --- SPOTLIGHT CARD COMPONENT ---
const SpotlightCard = ({ category }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      id="skills"
      className="group relative h-full border border-zinc-800 bg-zinc-900/50 overflow-hidden rounded-2xl px-8 py-10 transition-colors duration-500 hover:border-primary/50"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 189, 71, 0.10),
              transparent 80%
            )
          `,
        }}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-between z-10">
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-2">
            {category.title}
          </h3>
          <p className="text-zinc-400 text-sm font-light tracking-wide">
            {category.desc}
          </p>
        </div>

        {/* 
           CUSTOMIZED ICON SPACING: 
           Used 'flex flex-wrap' instead of 'grid'.
           Added 'gap-x-10' (horizontal space) and 'gap-y-8' (vertical space).
        */}
        <div className="flex flex-wrap gap-x-10 gap-y-8">
          {category.skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center gap-3 group/icon"
            >
              {/* Added a subtle background box for better visual weight */}
              <div className="relative p-3 rounded-xl bg-zinc-800/30 group-hover/icon:bg-primary/10 transition-all duration-300 border border-zinc-700/30 group-hover/icon:border-primary/30">
                <span className="text-3xl text-zinc-400 group-hover/icon:text-primary transition-colors duration-300">
                  {skill.icon}
                </span>
              </div>

              <span className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 group-hover/icon:text-white transition-colors duration-300">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- MAIN SECTION ---
const Skills = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
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
      className="bg-black text-white py-24 px-6 min-h-[80vh] flex flex-col justify-center"
      id="skills"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center justify-center mb-20 w-full">
          <div
            className={`text-primary text-6xl font-rakkas relative inline-block ${
              inView ? "animate-underline" : ""
            }`}
          >
            Skills
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
              <span className="text-primary"> capability</span> — through
              <span className="text-primary">
                <br />
                skills.
              </span>
            </p>
          </div>
        </div>

        {/* --- ORIGINAL SYMMETRICAL GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <SpotlightCard category={cat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
