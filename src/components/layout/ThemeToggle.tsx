import React from "react";
import { motion } from "framer-motion";

interface ThemeToggleProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, setTheme }) => {
  const isLight = theme === "light";

  return (
    <div
      onClick={() => setTheme(isLight ? "dark" : "light")}
      className={`relative h-[40px] w-[90px] cursor-pointer overflow-hidden rounded-full shadow-inner transition-colors duration-500 ${
        isLight ? "bg-[#33a1e3]" : "bg-[#1d1f21]"
      }`}
    >
      {/* Background Layers for Light Mode (Concentric Circles) */}
      <motion.div
        animate={{
          opacity: isLight ? 1 : 0,
          scale: isLight ? 1 : 0.5,
        }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute -top-4 -left-4 h-20 w-20 rounded-full bg-[#4ab4e8] opacity-60" />
        <div className="absolute -top-2 -left-2 h-16 w-16 rounded-full bg-[#62c1f0] opacity-40" />
        <div className="absolute top-0 left-0 h-12 w-12 rounded-full bg-[#7bcdef] opacity-20" />
      </motion.div>

      {/* Stars for Dark Mode */}
      <motion.div
        animate={{
          opacity: isLight ? 0 : 1,
          y: isLight ? -20 : 0,
        }}
        className="absolute inset-0 z-0 p-2"
      >
        <div className="absolute top-2 left-6 h-1 w-1 rounded-full bg-white opacity-40" />
        <div className="absolute top-6 left-10 h-0.5 w-0.5 rounded-full bg-white opacity-80" />
        <div className="absolute top-3 left-14 h-1 w-1 rounded-full bg-white opacity-20" />
        <div className="absolute top-7 left-4 h-0.5 w-0.5 rounded-full bg-white opacity-60" />
      </motion.div>

      {/* Clouds for Light Mode */}
      <motion.div
        animate={{
          y: isLight ? 0 : 20,
          opacity: isLight ? 1 : 0,
        }}
        className="absolute bottom-[-5px] left-0 right-0 z-10 h-10"
      >
        <div className="relative h-full w-full">
          <div className="absolute -bottom-1 left-2 h-8 w-8 rounded-full bg-white shadow-sm" />
          <div className="absolute -bottom-2 left-8 h-10 w-10 rounded-full bg-white shadow-sm" />
          <div className="absolute -bottom-1 left-16 h-8 w-8 rounded-full bg-white shadow-sm" />
          <div className="absolute -bottom-2 right-2 h-10 w-10 rounded-full bg-white shadow-sm" />
          <div className="absolute -bottom-1 right-10 h-8 w-8 rounded-full bg-white shadow-sm" />
        </div>
      </motion.div>

      {/* The Sun / Moon Knob */}
      <motion.div
        animate={{
          x: isLight ? 5 : 52,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`absolute top-[5px] z-20 h-[30px] w-[30px] rounded-full shadow-lg ${
          isLight 
            ? "bg-[#ffdb00] shadow-[#ffdb00]/50" 
            : "bg-[#e2e2e2] shadow-black/50"
        }`}
      >
        {/* Sun detail: shading */}
        {isLight && (
          <div className="absolute inset-0 rounded-full border-b-2 border-r-2 border-orange-400/50" />
        )}
        
        {/* Moon detail: craters */}
        {!isLight && (
          <div className="relative h-full w-full">
            <div className="absolute top-2 left-2 h-1.5 w-1.5 rounded-full bg-gray-400/40" />
            <div className="absolute bottom-2 right-3 h-2 w-2 rounded-full bg-gray-400/30" />
            <div className="absolute top-4 right-2 h-1 w-1 rounded-full bg-gray-400/20" />
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
