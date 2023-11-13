import React from "react";
import { motion } from "framer-motion";

const quote = {
  initial: {},
  animate: {
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};
const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};
const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="w-full flex items-center justify-center text-center mx-auto sm:py-2 py-0 overflow-hidden">
      <motion.h1
        className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((item, index) => (
          <motion.span
            key={item + index}
            variants={singleWord}
            className="inline-block"
          >
            {item}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
