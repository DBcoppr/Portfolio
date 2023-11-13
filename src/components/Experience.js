import { motion, useScroll } from "framer-motion";
import React, { useRef } from "react";
import Licon from "./Licon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between "
    >
      <Licon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitlaize font-bold text-lg sm:text-2xl xs:text-xl ">
          {position} &nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            {" "}
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};
const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className=" my-32 md:my-64 ">
      <h2 className="font-bold text-4xl mb-16 w-full text-center lg:text-8xl sm:text-6xl md:mb-32">
        Experience
      </h2>
      <div ref={ref} className="w-full md:w-[75%] mx-auto relative ">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-[20px] xs:left-[30px]  xs:w-[2px] md:[w-px] md:left-9 top-0 h-full w-[4px]  bg-dark origin-top "
        />
        <ul className="w-full flex flex-col items-start justify-between  ml-2 xs:ml-4">
          <Details
            position="Web Development Intern"
            company="Instamedz"
            companyLink="https://instamedz.com"
            time="Dec”22 – Mar”23"
            address="Remote"
            work="Increased website traffic by 60% and improved user experience by collaborating with the UI/UX team to redesign the company website from scratch and made it mobile-responsive also.
                Designed, developed, and integrated API with Database using Expressjs, Nodejs, and MongoDB.
                Incorporated website with admin features like doctor onboarding and adding blog posts. 
                "
          ></Details>
          <Details
            position="Project Engineer Trainee"
            company="Wipro"
            companyLink="https://olympus1.mygreatlearning.com/certificate/BEQNCZHC"
            time="May”22 – Aug”22"
            address="Remote"
            work="Under the Wipro Turbo training program I have been trained with the latest tech and worked on industry-level projects like an E-Commerce website, library management software, one-one chat using socket.io.
                "
          ></Details>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
