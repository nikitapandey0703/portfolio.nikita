import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#about");
  const [isVisible, setIsVisible] = useState(true);
  const [isTop, setIsTop] = useState(true);

  const lastScrollY = useRef(0);

  const menuItems = [
    { name: "About Me", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#edu" },
    { name: "Achievements", href: "#achievement" },
    { name: "Contact", href: "#contact" },
  ];

  // ------------------------------------------------
  // 1. SMART SCROLL LOGIC
  // ------------------------------------------------
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Top detection
      setIsTop(currentScrollY < 50);

      // Hide/Show logic
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        if (!isMenuOpen) setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  // ------------------------------------------------
  // 2. ACTIVE LINK HIGHLIGHTER
  // ------------------------------------------------
  useEffect(() => {
    const handleActiveOnScroll = () => {
      const sections = menuItems.map((item) =>
        document.querySelector(item.href)
      );
      let currentActive = "";

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          // Trigger when section is in the middle-ish of viewport
          if (rect.top <= 300 && rect.bottom >= 300) {
            currentActive = `#${section.id}`;
          }
        }
      });

      if (currentActive) setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleActiveOnScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleActiveOnScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out border-b
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
          ${
            isTop && !isMenuOpen
              ? "bg-transparent border-transparent py-6"
              : "bg-black/80 backdrop-blur-md border-zinc-800/50 py-4 shadow-lg"
          }
        `}
      >
        {/* 
           Responsive Padding: 
           px-4 (Mobile) -> px-8 (Tablet) -> px-12 (Desktop) 
        */}
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex justify-between items-center">
          {/* --- LOGO --- */}
          <a
            href="#about"
            className="text-2xl lg:text-3xl font-rakkas font-bold text-white tracking-wider z-50 relative"
            onClick={() => setIsMenuOpen(false)}
          >
            Nikita<span className="text-primary">.</span>
          </a>

          {/* --- DESKTOP MENU (Hidden on Mobile & Tablet) --- */}
          {/* Using 'hidden lg:flex' ensures it stays hidden until the screen is large enough */}
          <ul className="hidden lg:flex items-center gap-8 font-inter text-sm font-bold tracking-wide">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`relative py-2 transition-colors duration-300 group
                    ${
                      activeSection === item.href
                        ? "text-primary"
                        : "text-zinc-400 hover:text-white"
                    }
                  `}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300 ease-out
                      ${
                        activeSection === item.href
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* --- HAMBURGER BUTTON (Visible on Mobile & Tablet) --- */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white hover:text-primary transition-colors z-50 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* --- MOBILE/TABLET FULL-SCREEN MENU --- */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 ease-in-out lg:hidden
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-10 pointer-events-none"
            }
          `}
        >
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl sm:text-3xl font-rakkas tracking-wider transition-all duration-300
                ${
                  activeSection === item.href
                    ? "text-primary scale-110"
                    : "text-zinc-400 hover:text-white"
                }
              `}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
