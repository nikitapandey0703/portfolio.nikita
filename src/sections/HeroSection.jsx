import React from "react";
import img from "../assets/heroImage.png";
import { FaArrowRight } from "react-icons/fa6";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Tagline from "../components/Tagline";

const HeroSection = () => {
  return (
    <div className="h-dvh w-full flex relative overflow-hidden ">
      <div className="absolute top-0 left-0 w-full z-30">
        <NavBar />
      </div>

      {/* Overlay Fade */}
      <div className="absolute inset-0 bg-linear-to-t from-white/20 via-white/10 to-transparent backdrop-blur-[2px] opacity-0 animate-overlayFade z-10"></div>

      {/* Hero Image */}
      <div className="w-full h-full flex justify-end items-end z-10 ">
        <img
          src={img}
          className="
            w-[40%] h-auto object-contain transform -scale-x-100
            opacity-0 animate-heroSlideUp
          "
        />
      </div>

      {/* Text Section */}
      <div className="absolute z-30 h-full w-1/2 top-32 px-6 left-16">
        <div
          className="font-inter font-thin text-2xl  text-secondary opacity-0 animate-textFadeUp"
          style={{ animationDelay: "0.2s" }}
        >
          Welcome,
        </div>

        <div
          className="font-rakkas text-9xl my-2 opacity-0 animate-textFadeUp"
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
          className="font-inter font-medium tracking-wider text-5xl text-secondary opacity-0 animate-textFadeUp"
          style={{ animationDelay: "0.6s" }}
        >
         Developer | Designer
        </div>

        {/* Buttons */}
        <div className="mt-8 flex gap-1">
          <div
            className="opacity-0 animate-buttonPop"
            style={{ animationDelay: "0.8s" }}
          >
            <a href="./resume.pdf" download>
              <Button
                text="Download My CV"
                className="bg-primary py-2 px-10"
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
                className="text-secondary border border-white py-2 px-16"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
