import {motion} from "framer-motion"
import React from 'react'

const Tagline = ({text,onComplete}) => {
  const letters = text.split("");
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
  };
  // In the framer motion, transition would be define inside the visible object, here container is the perent object.

const child = {
  hidden: {
    opacity: 0,
    y: 10, // small downward offset
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
    },
  },
};



 return (
   <motion.h2
     variants={container}
     initial="hidden"
     animate="visible"
     onAnimationComplete={onComplete}
     className="font-rakkas text-4xl pt-6  font-bold text-center mb-8 tracking-wider"
   >
     {letters.map((char, index) => (
       <motion.span key={index} variants={child} className="inline-block">
         {char === " " ? "\u00A0" : char}
       </motion.span>
     ))}
   </motion.h2>
 );

}

export default Tagline