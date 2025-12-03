import React, { useRef, useEffect, useState } from "react";
import { FaFeatherAlt } from "react-icons/fa";

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
      className="bg-black text-white py-24 px-6 min-h-screen flex flex-col justify-center items-center
        overflow-x-hidden
      "
    >
      <div
        className="
          w-full max-w-7xl 
          flex flex-col items-center text-center justify-center
          bg-transparent
        "
      >
        <div
          ref={textRef}
          className={`
            text-primary 
            text-3xl sm:text-5xl lg:text-6xl 
            font-rakkas relative inline-block
            ${inView ? "animate-underline" : ""}
          `}
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
        <div className="font-rakkas text-2xl sm:text-4xl md:text-5xl mt-6 sm:mt-10 tracking-normal">
          I'm <span className="text-primary">Nikita Pandey</span> <br className="md:hidden" />
          Aspiring Software Developer & UI Designer
        </div>
        <div className="font-inter font-light py-6 sm:py-10 px-2 sm:px-8 md:px-14 text-base sm:text-lg md:text-[22px] w-full">
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
        <div className="relative w-full max-w-7xl mx-auto">
          <hr className="border-t border-primary" />
          <FaFeatherAlt className="absolute -top-7 -right-5 sm:-right-7 text-2xl sm:text-3xl text-primary" />
        </div>
      </div>
    </div>
  );
};
