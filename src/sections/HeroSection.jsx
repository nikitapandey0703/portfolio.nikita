import React from "react";
import img from "../assets/heroImage.png";
import { FaArrowRight } from "react-icons/fa6";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Tagline from "../components/Tagline";

const HeroSection = () => {
  return (
    <div className="relative h-dvh min-h-[600px] w-full flex flex-col items-stretch overflow-hidden bg-transparent">
      <div className="absolute top-0 left-0 w-full z-30">
        <NavBar />
      </div>

      {/* Overlay Fade */}
      <div className="absolute inset-0 bg-linear-to-t from-white/20 via-white/10 to-transparent backdrop-blur-[2px] opacity-0 animate-overlayFade z-10"></div>

      {/* Content Wrapper for stacking on small screens */}
      <div className="relative flex flex-1 w-full h-full items-center justify-center lg:flex-row flex-col-reverse z-20">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start lg:absolute static lg:left-16 lg:top-32 z-30 h-full px-5 lg:px-6 pt-6 lg:pt-0">
          <div
            className="font-inter font-thin text-xl sm:text-2xl text-secondary opacity-0 animate-textFadeUp"
            style={{ animationDelay: "0.2s" }}
          >
            Welcome,
          </div>

          <div
            className="font-rakkas text-5xl sm:text-7xl lg:text-9xl my-2 opacity-0 animate-textFadeUp leading-tight"
            style={{ animationDelay: "0.4s" }}
          >
            I'm{" "}
            <span className="text-primary">
              Nikita
              <br />
              Pandey
            </span>
          </div>

          <div
            className="font-inter font-medium tracking-wider text-2xl sm:text-4xl lg:text-5xl text-secondary opacity-0 animate-textFadeUp"
            style={{ animationDelay: "0.6s" }}
          >
            Developer | Designer
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-2 sm:gap-4 w-full max-w-full">
            <div
              className="opacity-0 animate-buttonPop"
              style={{ animationDelay: "0.8s" }}
            >
              <a href="./resume.pdf" download>
                <Button
                  text="Download My CV"
                  className="bg-primary py-2 px-6 sm:px-10 w-full sm:w-auto"
                  icon={<FaArrowRight />}
                />
              </a>
            </div>

            <div
              className="opacity-0 animate-buttonPop"
              style={{ animationDelay: "1s" }}
            >
              <a href="#contact">
                <Button
                  text="Contact Me"
                  className="text-secondary border border-white py-2 px-6 sm:px-16 w-full sm:w-auto"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="absolute w-full  h-full  flex justify-end items-end z-0">
          <img
            src={img}
            className="hidden lg:block absolute bottom-0 right-0
              w-full max-w-[370px] sm:max-w-[480px] lg:max-w-[550px] xl:max-w-[700px]
               object-contain transform -scale-x-100
              opacity-0 animate-heroSlideUp
              mx-auto lg:mx-0  
              
            "
            alt="Hero"
          />
        </div>
      </div>
    </div>
  );  
};

export default HeroSection;
