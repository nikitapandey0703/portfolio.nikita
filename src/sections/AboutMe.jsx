import React, { useRef, useEffect, useState } from "react";
import { FaFeatherAlt } from "react-icons/fa";
import img from "../assets/heroImage.png";


export const AboutMe = () => {
  const textRef = useRef(null);
  const [inView, setInView] = useState(false);

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
    <div
      id="about"
      className="bg-black text-white py-24 px-6 min-h-screen flex flex-col justify-center items-center overflow-x-hidden"
    >
      {/* Heading centered at the top */}
      <div className="flex flex-col items-center text-center justify-center mb-20 w-full">
        <div
          ref={textRef}
          className={
            `text-primary 
          text-3xl sm:text-5xl lg:text-6xl 
          font-rakkas relative inline-block
          ${inView ? "animate-underline" : ""}`}
        >
          About me
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
            Turning <span className="text-primary">ideas</span> into functional
            and meaningful{" "}
            <span className="text-primary">
              digital <br className="hidden sm:block" />
              experiences.
            </span>
          </p>
        </div>
      </div>
      {/* Image & content side by side */}
      <div className="w-full max-w-7xl flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16 bg-transparent ">
        {/* Image Section - left */}
        <div className=" w-full h-full md:w-1/2 flex justify-center items-center mb-10 md:mb-0 ">
          {/* Replace the src below with your picture or an avatar */}
          <img
            src={img}
            alt="Nikita Pandey Portrait"
            className="rounded-2xl md:rounded-3xl shadow-xl object-cover w-56 h-56 md:w-full md:h-full border-4 border-primary bg-zinc-900"
            
          />
        </div>
        {/* Main Content Section - right */}
        <div className="flex-1 flex flex-col items-center text-center w-full ">

          <div className="font-rakkas text-2xl sm:text-4xl md:text-5xl mt-6 sm:mt-10 tracking-normal">
            I'm <span className="text-primary">Nikita Pandey</span> <br className="md:hidden" />
            Aspiring Software Developer & UI Designer
          </div>
          <div className="font-inter font-light py-6 sm:py-10 px-2 sm:px-0 md:px-4 text-base sm:text-lg md:text-[22px] w-full">
            <p className="mb-4">
              I enjoy creating clean, modern, and user-friendly digital
              experiences. My journey started with simple HTML pages, and today I’m
              growing my skills in Java, web development, design principles, and
              real-world problem-solving.
            </p>
            <p>
              I love combining creativity with logic — designing intuitive
              interfaces and building functional digital solutions. Every day, I
              learn, experiment, and improve through hands-on projects and
              consistent practice.
            </p>
          </div>
          <div className="relative w-full mt-4">
            <hr className="border-t border-primary" />
            <FaFeatherAlt className="absolute -top-7 -right-5 sm:-right-7 text-2xl sm:text-3xl text-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};
