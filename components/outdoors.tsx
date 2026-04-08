"use client";

import { motion } from "motion/react";

export function Rays() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 0.2,
      }}
      transition={{
        duration: 2,
        ease: [0.26, 1, 0.6, 1],
      }}
      className="fixed pointer-events-none top-0 left-0 z-20 flex h-screen w-screen flex-col items-center justify-center gap-32 bg-linear-to-l from-[#121212] to-white to-75%"
      style={{
        maskImage:
          "linear-gradient(to right, rgba(0,0,0,0) 30%, rgba(0,0,0,1) 40%, rgba(0,0,0,1) 100%)",
      }}
    >
      <div
        className="bg-background z-15 mt-80 ml-[50vw] min-h-34 w-[200vw] blur-md rotate-12"
        style={{
          animation: "sway 7s infinite",
        }}
      />
      <div
        className="bg-background z-15 mt-48 ml-[50vw] min-h-30 w-[200vw] blur-md rotate-12"
        style={{
          animation: "sway 6s infinite",
        }}
      />
      <div
        className="bg-background z-15 mt-18 ml-[50vw] min-h-64 w-[200vw] blur-md rotate-12"
        style={{
          animation: "sway 8s infinite",
        }}
      />
    </motion.div>
  );
}

export function Tree() {
  return (
    <motion.video
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 0.5,
      }}
      transition={{
        duration: 2,
        ease: [0.26, 1, 0.6, 1],
      }}
      className="leaves"
      src="/leaves.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="none"
    />
  );
}
