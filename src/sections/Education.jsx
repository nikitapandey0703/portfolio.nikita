import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
// MAKE SURE THIS PATH IS CORRECT FOR YOUR FOLDER STRUCTURE
import EducationCard from "../components/EducationCard";

const Education = () => {
  const textRef = useRef(null);
  const [inView, setInView] = useState(false);

  // Data
  const educationData = [
    {
      title: "B.Tech in Computer Science",
      name: "Vindhya Institute of Technology & Science",
      subName: "Satna, MP",
      year: "2022 – 2026",
      result: "7.3 CGPA",
    },
    {
      title: "Senior Secondary (12th)",
      name: "Saraswati Higher Secondary School",
      subName: "Satna, MP",
      year: "2021 – 2022",
      result: "85.5 %",
    },
    {
      title: "High School (10th)",
      name: "Saraswati Higher Secondary School",
      subName: "Satna, MP",
      year: "2019 – 2020",
      result: "95.5 %",
    },
  ];

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
    <section
      id="edu"
      className="bg-black text-white py-24 px-6 min-h-screen flex flex-col justify-center"
    >
      {/* Animation Styles */}
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
        @keyframes underline-grow { to { width: 100%; } }
      `}</style>

     
        {/* --- HEADER --- */}


        <div className="flex flex-col items-center text-center justify-center mb-20 w-full">
          <div
            ref={textRef}
            className={`text-primary text-6xl font-rakkas relative inline-block ${
              inView ? "animate-underline" : ""
            }`}
          >
            Education
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

          <div className="font-inter pt-6 font-light tracking-wide text-zinc-400">
            <p>
              Where <span className="text-primary">insight</span> meets
              <span className="text-primary"> improvement</span> — through
              <span className="text-primary">
                <br />
                education.
              </span>
            </p>
          </div>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mx-20 items-stretch">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="h-full"
            >
              <EducationCard
                title={item.title}
                name={item.name}
                subName={item.subName}
                year={item.year}
                result={item.result}
              />
            </motion.div>
          ))}
        </div>

    </section>
  );
};

export default Education;
