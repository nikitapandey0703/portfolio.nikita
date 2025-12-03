
import React, { useRef, useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
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
    <section
      id="contact"
      className="
       bg-black text-white py-24 px-6 min-h-screen flex flex-col justify-center
      "
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        <div
          ref={textRef}
          className={`
           text-primary 
            text-3xl sm:text-5xl lg:text-6xl 
            font-rakkas relative inline-block
            ${inView ? "animate-underline" : ""}`}
        >
          Contact Me
          <span className="dot-container ml-2">
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
            Where <span className="text-primary">collaboration</span> meets{" "}
            <span className="text-primary">
              possibility
            </span>
            <span className="text-primary">
              <span className="hidden sm:inline"> – contact me.</span>
              <br className="sm:hidden" />
              <span className="sm:hidden">– contact me.</span>
            </span>
          </p>
        </div>
        <div className="w-full mt-8">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
