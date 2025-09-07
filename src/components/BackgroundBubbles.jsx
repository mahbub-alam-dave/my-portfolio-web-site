import React from "react";
import { motion } from "framer-motion";

const bubbles = Array.from({ length: 10 }); // number of bubbles

const BackgroundBubbles = () => {
  return (
    <div className="">
      {bubbles.map((_, i) => {
        const size = Math.random() * 60 + 20; // 30px–100px
        const duration = Math.random() * 10 + 15; // 15s–25s
        const delay = Math.random() * 5; // stagger bubbles
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gray-400 dark:bg-gray-600 opacity-10"
            style={{
              width: size,
              height: size,
              left: `${Math.random() * 100}%`,
              bottom: `-${size}px`, // start below screen
            }}
            animate={{
              y: [-100, -800], // move upward continuously
              opacity: [0.1, 0.20, 0.1], // fade in/out a bit
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay,
              ease: "linear",
            }}
          />
        );
      })}
    </div>
  );
};

export default BackgroundBubbles;
