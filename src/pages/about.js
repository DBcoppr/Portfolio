import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Profilepic from "../../public/images/profile/profileabout.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Pagetransition from "@/components/Pagetransition";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <>
      <Head>
        <title>about page</title>
        <meta name="description" content="any description" />
      </Head>
      {/* flex-col add */}
      <Pagetransition />
      <main className="flex w-full items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Growth"
            className=" !text-4xl mb-8 md:!text-7xl lg:!text-8xl sm:mb-16 !leading-tight"
          />
          <div className="grid w-full grid-cols-8  gap-8 sm:gap-16">
            <div className="md:col-span-3 flex flex-col items-start justify-start order-2 col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                About me
              </h2>
              <p className="font-medium">
                Hello, My name is Md Tarikh Khan, and I am a MERN developer with
                a passion for creating functional, interactive websites that
                have a strong backend foundation. While my primary expertise
                lies in the MERN stack, I am always open to learning new
                frameworks and libraries as needed or just for fun. I believe
                that being adaptable and continuously expanding my skillset is
                key to staying ahead in this field
              </p>
              <p className="font-medium my-4">
                Through internships and projects, I honed my skills in React.js
                and Node.js, and learned how to utilize tools such as MongoDB
                and Express.js to create powerful, scalable web applications.{" "}
              </p>
              <p className="font-medium">
                Although I am relatively new to the field, I am eager to
                continue learning and improving my skills as a web developer. I
                am excited to take on new challenges and collaborate with
                experienced developers to create innovative and impactful web
                applications.
              </p>
            </div>
            <div className=" relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 col-span-8  order-1 md:col-span-3 md:order-2">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark "></div>
              <Image
                src={Profilepic}
                alt="profie pic"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw , 33vw"
              ></Image>
            </div>

            <div className="col-span-8 flex flex-row items-end justify-evenly md:col-span-2 lg:items-center order-3 md:flex-col">
              {/* <div className='flex flex-col items-end justify-center '>
                                <span className='inline-block text-7xl font-bold'>
                                    +50
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>satified clients</h2>
                            </div> */}
              <div className="flex flex-col items-center justify-center md:items-end  ">
                <span className="inline-block text-4xl font-bold xs:text-5xl sm:text-6xl md:text-7xl ">
                  <AnimatedNumbers value={8} />+
                </span>
                <h2 className="text-sm font-medium capitalize text-dark/75 xs:text-base sm:text-lg md:text-xl ">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center md:items-end  ">
                <span className="inline-block text-4xl font-bold xs:text-5xl sm:text-6xl md:text-7xl ">
                  <AnimatedNumbers value={7} />+
                </span>
                <h2 className="text-sm font-medium capitalize text-dark/75 xs:text-base sm:text-lg md:text-xl ">
                  months of experience
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default about;
