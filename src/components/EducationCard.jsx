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
      className="
        group relative h-full border border-zinc-800 bg-zinc-900/50 
        overflow-hidden rounded-2xl 
        p-4 sm:p-6 md:p-8 
        transition-colors duration-500 hover:border-primary/50 flex flex-col
        min-w-0
      "
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Overlay */}
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
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
          <div className="
            mb-5 sm:mb-6 inline-flex items-center justify-center 
            rounded-xl bg-zinc-800/50 
            p-2 sm:p-3 md:p-4 
            border border-zinc-700/50 
            text-primary 
            group-hover:text-white group-hover:bg-primary 
            transition-all duration-300 shadow-lg
          ">
            <FaGraduationCap 
              size={20} 
              className="sm:size-[24px] md:size-[28px]" 
              // using tailwind 'size-[xxpx]' for better scaling
            />
          </div>

          {/* Title */}
          <h3 className="
            text-lg sm:text-xl md:text-2xl 
            font-rakkas text-white mb-2 sm:mb-3 tracking-wide 
            min-h-12 sm:min-h-16 flex items-center
          ">
            {title}
          </h3>

          {/* School Name */}
          <div className="
            flex flex-col gap-1 
            text-zinc-400 text-xs sm:text-sm font-light leading-relaxed mb-5 sm:mb-8
          ">
            <div className="flex items-start gap-2">
              <FaSchool className="mt-0.5 shrink-0 text-zinc-500 text-xs sm:text-base" />
              <span className="font-medium text-zinc-300 break-words">{name}</span>
            </div>
            {subName && <p className="pl-6 text-[11px] sm:text-xs text-zinc-500">{subName}</p>}
          </div>
        </div>

        {/* Bottom: Stats */}
        <div className="
          pt-4 sm:pt-6 border-t border-zinc-800 
          flex flex-col sm:flex-row items-start sm:items-center 
          justify-between gap-2 sm:gap-0 mt-auto
        ">
          <div className="flex items-center gap-2 text-zinc-500 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider mb-0.5 sm:mb-0">
            <FaCalendarAlt className="text-zinc-600 group-hover:text-primary transition-colors text-xs sm:text-sm" />
            <span>{year}</span>
          </div>
          <div className="
            flex items-center gap-2 
            px-2 sm:px-3 py-1 sm:py-1.5 
            rounded-full bg-zinc-800/50 
            border border-zinc-700/50 
            group-hover:border-primary/30 transition-colors
          ">
            <FaStar className="text-primary text-xs sm:text-sm" />
            <span className="text-primary text-xs sm:text-sm font-bold">{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
