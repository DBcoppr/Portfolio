import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className=" absolute flex items-center justify-center bg-dark rounded-full font-semibold text-light shadow-dark cursor-pointer py-3 px-6"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.3 }}
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold w-full text-center text-8xl mt-64">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center bg-dark rounded-full font-semibold text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-20vw" y="-2vw" />
        <Skill name="Reactjs" x="-5vw" y="-8vw" />
        <Skill name="Nodejs" x="20vw" y="6vw" />
        <Skill name="Express" x="0vw" y="12vw" />
        <Skill name="MongoDb" x="-28vw" y="-10vw" />
        <Skill name="Javascript" x="15vw" y="-12vw" />
        <Skill name="Python" x="32vw" y="-5vw" />
        <Skill name="HTML" x="0vw" y="-20vw" />
        <Skill name="Redux Toolkit" x="-25vw" y="18vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
