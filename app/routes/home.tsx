import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Countdown } from "~/components/Countdown";
import "./home.css";

// Animation variants for framer-motion
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBegin = () => {
    navigate("/letter");
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-900 to-primary-950 px-4 pt-28">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/floral-pattern.png')] opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/30 to-primary-950/80"></div>
        
        {/* Animated floating elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-accent-400/30 animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-12 h-12 rounded-full bg-white/10 animate-float animation-delay-1"></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 rounded-full bg-accent-400/20 animate-float animation-delay-2"></div>
      </div>

      <motion.div 
        className="relative z-10 w-full max-w-4xl text-center"
        initial="hidden"
        animate={isLoaded ? "show" : "hidden"}
        variants={container}
      >
        {/* Couple Image */}
        <motion.div className="mb-8" variants={item}>
          <div className="relative mx-auto w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-white/30 overflow-hidden shadow-2xl">
            <img
              src="/images/couple.jpg"
              alt="Priyanka & Aniket"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/30"></div>
          </div>
        </motion.div>

        {/* Welcome Text */}
        <motion.h2 
          className="text-accent-400 font-serif text-lg md:text-xl mb-1 font-light tracking-widest"
          variants={item}
        >
          We're Getting Married
        </motion.h2>

        {/* Names */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-2 font-serif"
          variants={item}
        >
          <span className="block">Priyanka</span>
          <span className="text-2xl md:text-4xl text-white/70">&</span>
          <span className="block mt-1">Aniket</span>
        </motion.h1>

        {/* Date */}
        <motion.p 
          className="text-white/80 text-base md:text-lg mb-4 font-light tracking-wider"
          variants={item}
        >
          December 2, 2025
        </motion.p>

        {/* Countdown */}
        <motion.div className="mb-2" variants={item}>
          <Countdown date="2025-12-02T12:24:00" />
          {/* <Countdown date="2025-11-27T12:00:00" /> */}
        </motion.div>

        {/* CTA Button */}
        <motion.div variants={item} className="mt-0">
          <button
            onClick={handleBegin}
            className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-12 rounded-full text-2xl tracking-wide transition-all duration-300 transform hover:scale-110 shadow-[0_0_35px_rgba(255,193,7,0.8)] border border-yellow-300/70"
          >
            Begin Our Journey
            <span className="ml-2">→</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}