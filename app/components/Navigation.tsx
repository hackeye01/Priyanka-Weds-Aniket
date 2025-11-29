import { Link, useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Our Story", path: "/story" },
  { name: "When & Where", path: "/details" },
];

export function Navigation() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary-950/95 backdrop-blur-xl shadow-[0_0_40px_rgba(251,191,36,0.35)] border-b border-white/10 py-3"
          : "bg-gradient-to-b from-primary-950/90 via-primary-900/80 to-transparent backdrop-blur-lg py-6"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center md:justify-between gap-6">
          {/* Left spacer for better centering on large screens */}
          <div className="hidden md:flex w-32" aria-hidden="true" />

          {/* Centered navigation items */}
          <div className="flex items-center space-x-6 md:space-x-10 text-sm md:text-base">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-2 py-1 font-medium tracking-wide uppercase transition-colors ${
                  location.pathname === item.path
                    ? "text-accent-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.9)]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-accent-300 shadow-[0_0_10px_rgba(251,191,36,0.9)] rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Right spacer / mobile menu placeholder */}
          <button className="md:hidden text-white/90">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
