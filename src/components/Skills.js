import { motion } from "framer-motion";
import React from "react";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className=" absolute text-sm flex items-center justify-center bg-dark rounded-full font-semibold text-light shadow-dark cursor-pointer lg:py-3 lg:px-6 md:px-2 md:py-4 py-1.5 px-3 "
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
      <h2 className="font-bold w-full text-center text-6xl mt-32 md:text-8xl md:mt-64 mb-9 md:mb-16 lg:mb-24 ">
        Skills
      </h2>
      <div className="w-full h-[50vh] relative flex items-center mb-32 md:mb-64 justify-center rounded-full bg-circularLightSm sm:bg-circularLightMd md:bg-circularLightLg  xs:h-[60vh] md:h-[80vh] lg:h-screen">
        <motion.div
          className="flex p-2 items-center justify-center bg-dark rounded-full font-semibold text-light lg:p-8 shadow-dark cursor-pointer sm:p-4 md:p-6"
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
        <Skill name="Typescript" x="-25vw" y="18vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
      </div>
    </>
  );
};

export default Skills;
