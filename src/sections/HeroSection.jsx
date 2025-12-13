import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import NavBar from "../components/NavBar";
import Button from "../components/Button";

const HeroSection = () => {
  return (
    <section className="relative h-dvh min-h-[600px] w-full flex flex-col items-stretch overflow-hidden bg-black">
      {/* Soft gradient overlays */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {/* Top left primary gradient */}
        <div className="absolute left-0 top-0 w-[32vw] h-[38vh] bg-gradient-to-br from-primary/50 via-primary/20 to-transparent blur-2xl opacity-70 rounded-full animate-moveGradient-1" />
        {/* Bottom right primary gradient */}
        <div className="absolute right-0 bottom-0 w-[32vw] h-[34vh] bg-gradient-to-tl from-primary/30 via-primary/15 to-transparent blur-[90px] opacity-60 rounded-full animate-moveGradient-2" />
        {/* Subtle radial center fade */}
        <div className="absolute inset-0 w-full h-full bg-gradient-radial from-primary/10 via-transparent to-transparent" />
        {/* Animated additional subtle moving primary gradient overlay */}
        <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] min-w-[350px] min-h-[350px] bg-gradient-radial from-primary/20 via-transparent to-transparent blur-[75px] opacity-30 animate-moveGradient-3" />
      </div>
      {/* Additional tailwindcss for animation (can be placed in global css) */}
      <style>{`
        @keyframes moveGradient1 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(30px, 60px) scale(1.06); }
        }
        @keyframes moveGradient2 {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-45px, -45px) scale(0.97);}
        }
        @keyframes moveGradient3 {
          0%, 100% { transform: translate(-50%, -50%) scale(1);}
          50% { transform: translate(-48%, -52%) scale(1.04);}
        }
        .animate-moveGradient-1 {
          animation: moveGradient1 11s ease-in-out infinite alternate;
        }
        .animate-moveGradient-2 {
          animation: moveGradient2 15s ease-in-out infinite alternate;
        }
        .animate-moveGradient-3 {
          animation: moveGradient3 17s ease-in-out infinite alternate;
        }
      `}</style>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-30">
        <NavBar />
      </div>

      {/* Content */}
      <div className="relative flex flex-1 w-full h-full items-center justify-center z-20">
        <div className="w-full max-w-5xl px-6 flex flex-col justify-center items-center text-center gap-8">
          {/* Tag/Intro */}
          <div
            className="font-inter font-semibold uppercase tracking-wider text-primary/80 text-base sm:text-lg opacity-0 animate-textFadeUp"
            style={{ animationDelay: "0.15s" }}
          >
            Hi, my name is
          </div>

          {/* Main Headline */}
          <h1
            className="font-rakkas text-5xl sm:text-7xl xl:text-8xl leading-tight font-bold tracking-[-1px] opacity-0 animate-textFadeUp"
            style={{ animationDelay: "0.3s" }}
          >
            Nikita Pandey
          </h1>

          <div
            className="font-inter text-xl sm:text-3xl xl:text-4xl mt-1 text-secondary tracking-tight opacity-0 animate-textFadeUp"
            style={{ animationDelay: "0.45s" }}
          >
            <span className="bg-gradient-to-tr from-primary/80 to-primary/60 text-transparent bg-clip-text">
              Developer
            </span>{" "}
            <span className="mx-2 text-white/50">|</span>{" "}
            <span className="bg-gradient-to-l from-primary/80 via-primary/80 to-primary/50 text-transparent bg-clip-text">
              Designer
            </span>
          </div>

          <p
            className="max-w-2xl mx-auto text-lg sm:text-xl text-white/80 font-inter font-light tracking-wide mt-2 opacity-0 animate-textFadeUp"
            style={{ animationDelay: "0.6s" }}
          >
            I build thoughtful digital experiences, combining creative interfaces with robust software.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3 sm:gap-6 w-full max-w-md mx-auto">
            <div
              className="opacity-0 animate-buttonPop"
              style={{ animationDelay: "0.75s" }}
            >
              <a href="./resume.pdf" download>
                <Button
                  text="Download My CV"
                  className="bg-primary hover:bg-primary/90 text-black shadow-lg py-3 px-9 w-full sm:w-auto"
                  icon={<FaArrowRight />}
                />
              </a>
            </div>
            <div
              className="opacity-0 animate-buttonPop"
              style={{ animationDelay: "0.9s" }}
            >
              <a href="#contact">
                <Button
                  text="Contact Me"
                  className="text-secondary border border-primary hover:bg-primary/10 py-3 px-9 w-full sm:w-auto"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
