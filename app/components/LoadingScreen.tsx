// app/components/LoadingScreen.tsx
import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface LoadingScreenProps {
  brideName?: string;
  groomName?: string;
  onComplete?: () => void;
  duration?: number;
}

export function LoadingScreen({ 
  brideName = "Priyanka", 
  groomName = "Aniket",
  onComplete,
  duration = 2000 // 4 seconds default
}: LoadingScreenProps) {
  
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete?.();
    }, duration);

    return () => clearTimeout(timer);
  }, [onComplete, duration]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-100 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Florals */}
        <motion.div
          className="absolute top-1/4 left-1/6 text-rose-200 text-4xl"
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          ❀
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/5 text-pink-200 text-3xl"
          animate={{ y: [0, 15, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          ✿
        </motion.div>
        <motion.div
          className="absolute bottom-1/4 left-1/3 text-rose-300 text-2xl"
          animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          ❁
        </motion.div>
        
        {/* Subtle Sparkles */}
        <motion.div
          className="absolute top-1/2 right-1/4 w-2 h-2 bg-yellow-300 rounded-full"
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-yellow-200 rounded-full"
          animate={{ scale: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-md mx-4">
        {/* Animated Rings */}
        <div className="relative mb-8">
          <motion.div
            className="absolute inset-0 border-4 border-rose-200 rounded-full"
            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute inset-4 border-2 border-pink-300 rounded-full"
            animate={{ scale: [1.1, 1, 1.1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
          />
          
          {/* Central Heart */}
          <motion.div
            className="relative mx-auto w-24 h-24"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg viewBox="0 0 24 24" className="w-full h-full text-rose-500 drop-shadow-lg">
              <motion.path
                fill="currentColor"
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                initial={{ pathLength: 0, fill: "rgba(244, 63, 94, 0)" }}
                animate={{ pathLength: 1, fill: "rgba(244, 63, 94, 1)" }}
                transition={{
                  default: { duration: 2, ease: "easeInOut" },
                  fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                }}
              />
            </svg>
          </motion.div>
        </div>

        {/* Names */}
        <motion.h1
          className="text-3xl font-bold text-gray-800 mb-2 font-serif"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <span className="text-rose-600">{brideName}</span>
          <span className="text-gray-500 mx-2">&</span>
          <span className="text-rose-800">{groomName}</span>
        </motion.h1>

        {/* Wedding Date */}
        <motion.p
          className="text-lg text-gray-600 mb-6 font-light tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          December 2, 2025
        </motion.p>

        {/* Loading Message */}
        <motion.p
          className="text-gray-500 italic mb-8 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          Preparing our special day for you...
        </motion.p>

        {/* Elegant Progress Bar */}
        <div className="relative">
          <div className="h-1 bg-rose-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-rose-400 to-pink-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: duration / 1000, ease: "easeInOut" }}
            />
          </div>
          
          {/* Moving Dot */}
          <motion.div
            className="absolute top-1/2 w-3 h-3 bg-white border-2 border-rose-500 rounded-full -mt-1.5"
            animate={{ left: ["0%", "100%"] }}
            transition={{ 
              duration: (duration / 1000) * 0.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>

        {/* Decorative Elements */}
        <div className="flex justify-center space-x-2 mt-6">
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              className="w-2 h-2 bg-rose-300 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: item * 0.2 }}
            />
          ))}
        </div>
      </div>

      {/* Bottom Corner Accents */}
      <motion.div
        className="absolute bottom-8 left-8 text-rose-200 text-xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute bottom-8 right-8 text-pink-200 text-xl"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        ✦
      </motion.div>
    </div>
  );
}