import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { FaCalendarAlt, FaStar, FaGraduationCap } from "react-icons/fa";
import { FaSchool } from "react-icons/fa6";

const EducationCard = ({ title, name, subName, year, result }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      className="group relative h-full border border-zinc-800 bg-zinc-900/50 overflow-hidden rounded-2xl p-6 transition-colors duration-500 hover:border-primary/50 flex flex-col"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              500px circle at ${mouseX}px ${mouseY}px,
              rgba(255, 189, 71, 0.10),
              transparent 80%
            )
          `,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10 flex flex-col grow justify-between h-full">
        {/* Top: Header Info */}
        <div>
          {/* Icon Box */}
          <div className="mb-6 inline-flex items-center justify-center rounded-xl bg-zinc-800/50 p-3 border border-zinc-700/50 text-primary group-hover:text-white group-hover:bg-primary transition-all duration-300 shadow-lg">
            <FaGraduationCap size={24} />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-rakkas text-white mb-3 tracking-wide min-h-16 flex items-center">
            {title}
          </h3>

          {/* School Name */}
          <div className="flex flex-col gap-1 text-zinc-400 text-sm font-light leading-relaxed mb-8">
            <div className="flex items-start gap-2">
              <FaSchool className="mt-1 shrink-0 text-zinc-500" />
              <span className="font-medium text-zinc-300">{name}</span>
            </div>
            {subName && <p className="pl-6 text-xs text-zinc-500">{subName}</p>}
          </div>
        </div>

        {/* Bottom: Stats */}
        <div className="pt-6 border-t border-zinc-800 flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2 text-zinc-500 text-xs font-mono font-bold uppercase tracking-wider">
            <FaCalendarAlt className="text-zinc-600 group-hover:text-primary transition-colors" />
            <span>{year}</span>
          </div>

          {/* FIXED LINE BELOW */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-800/50 border border-zinc-700/50 group-hover:border-primary/30 transition-colors">
            <FaStar className="text-primary text-xs" />
            <span className="text-primary text-xs font-bold">{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
