import React from "react";
import { Mail, ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const FooterCTA = () => {
  return (
    <>
      {/* 1. Custom Styles for the Animations */}
      <style>{`
        @keyframes background-shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .text-shimmer {
          background: linear-gradient(
            90deg,
            #FFBD47 0%,    /* Your Brand Gold */
            #ffffff 50%,   /* White Shine */
            #FFBD47 100%   /* Your Brand Gold */
          );
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: background-shine 3s linear infinite;
        }
      `}</style>

      <footer className="bg-black text-white pt-20 pb-10 px-6 border-t border-zinc-900 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* --- TOP SECTION: CTA & NAV --- */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-10">
            {/* Left: Big Text */}
            <div className="max-w-2xl w-full">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tighter leading-tight mb-8">
                Have an idea ? <br />
                {/* Glass/Shimmer Animation applied here */}
                <span className="text-shimmer">Let's build it together.</span>
              </h2>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 text-primary hover:text-[#bb7c0c] text-lg font-medium transition-all"
              >
                Get in touch
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight size={24} />
                </span>
              </a>
            </div>

            {/* Right: Navigation Links (Animated) */}
            <div className="flex flex-col gap-2 w-full  md:w-auto md:text-right ">
              <NavLink href="#projects" text="Selected Work" />
              <NavLink href="#about" text="About Me" />
              <NavLink href="#skill" text="Skills" />
            </div>
          </div>

          {/* --- BOTTOM SECTION: SOCIALS & COPYRIGHT --- */}
          <div className="flex flex-col-reverse md:flex-row justify-between items-center pt-8 border-t border-zinc-900 gap-6">
            {/* Brand / Name */}
            <div className="flex flex-col md:items-start items-center gap-1">
              <h3 className="text-2xl font-bold font-rakkas tracking-wider">
                Nikita.
              </h3>
              <p className="text-sm text-zinc-600 block md:hidden">
                Crafted with passion & precision.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6">
              <SocialLink
                href="https://github.com/nikitapandey0703"
                icon={<FaGithub size={20} />}
                label="GitHub"
              />
              <SocialLink
                href="https://www.linkedin.com/in/nikitapandey07/"
                icon={<FaLinkedin size={20} />}
                label="LinkedIn"
              />
              <SocialLink
                href="https://x.com/Pand61468Nikita"
                icon={<FaXTwitter size={20} />}
                label="X (Twitter)"
              />
              <SocialLink
                href="mailto:nikkinikitapandey@example.com?subject=Project%20Inquiry"
                icon={<Mail size={20} />}
                label="Email"
              />
            </div>

            {/* Desktop Tagline */}
            <p className="text-sm text-zinc-600 hidden md:block">
              Crafted with passion & precision.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

// --- HELPER COMPONENTS (For cleaner code) ---

// 1. Navigation Link with Underline Animation
const NavLink = ({ href, text }) => (
  <a href={href} className="group relative w-fit md:ml-auto text-zinc-400 hover:text-white transition-colors duration-300">
    <span className="text-lg">{text}</span>
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
  </a>
);

// 2. Social Icon Wrapper
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target={href.startsWith('mailto') ? "_self" : "_blank"}
    rel="noopener noreferrer"
    className="text-zinc-500 hover:text-white hover:scale-110 transition-all duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

export default FooterCTA;