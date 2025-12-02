import { useEffect, useState } from "react";
import { BiSolidUpArrow } from "react-icons/bi";

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) setVisible(true);
      else setVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-primary-color text-white p-3 rounded-full shadow-lg hover:bg-[#5b8159] transition-all duration-300 z-50"
          aria-label="Go to top"
        >
          <BiSolidUpArrow size={22} />
        </button>
      )}
    </>
  );
}
