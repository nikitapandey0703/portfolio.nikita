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
    <div id="about" className="h-dvh w-full flex justify-center items-center">
      <div className="h-dvh w-[80%] pt-10  flex-col text-center justify-center">
        <div
          ref={textRef}
          className={`text-primary text-6xl font-rakkas relative inline-block ${
            inView ? "animate-underline" : ""
          }`}
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
        <div className="font-inter pt-6 font-light tracking-wide">
          <p>
            Turning <span className="text-primary">ideas</span> into functional
            and meaningful{" "}
            <span className="text-primary">
              digital <br />
              experiences.
            </span>
          </p>
        </div>
        <div className="font-rakkas text-5xl mt-10 tracking-normal">
          I'm <span className="text-primary">Nikita Pandey</span> Aspiring
          Software Developer & UI Designer
        </div>
        <div className="font-inter font-light p-14 text-[22px]">
          <p>
            I enjoy creating clean, modern, and user-friendly digital
            experiences.My journey started with simple HTML pages, and today I’m
            growing my skills in Java, web development, design principles, and
            real-world problem-solving.
          </p>
          <p>
            I love combining creativity with logic — designing intuitive
            interfaces and building functional digital solutions.Every day, I
            learn, experiment, and improve through hands-on projects and
            consistent practice.
          </p>
        </div>
        <div className="relative w-full ">
          <hr className="border-t border-primary" />
          <FaFeatherAlt className="absolute -top-7 -right-6 text-3xl text-primary" />
        </div>
      </div>
    </div>
  );
};
