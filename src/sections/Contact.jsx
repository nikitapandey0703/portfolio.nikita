
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
    <div id="contact" className=" h-auto w-full flex justify-center items-center">
      <div className=" w-[80%] pt-10  flex-col text-center justify-center ">
        <div
          ref={textRef}
          className={`text-primary text-6xl font-rakkas relative inline-block ${
            inView ? "animate-underline" : ""
          }`}
        >
          Contact Me
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
            Where <span className="text-primary">collaboration</span> meets{" "}
            <span className="text-primary">
              possibility -
              <br />
              contact me.
            </span>
          </p>
        </div>
       <ContactForm />
      </div>
    </div>
  );
}

export default Contact;