import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import { GithubIcon, InstagramIcon, LinkedInIcon } from "./Icons";
import { animate, motion } from "framer-motion";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", setIsOpen }) => {
  const router = useRouter();

  return (
    <Link
      href={href}
      className={`${className} relative group text-light my-2`}
      onClick={() => setIsOpen(false)}
    >
      {title}
      <span
        className={`h-[1px] inline-block w-0 bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full  py-8 px-8 font-medium flex items-center justify-between relative z-10 sm:px-12 md:px-16 lg:px-32">
      <button
        className="flex-col justify-center items-center flex lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full justify-between items-center hidden lg:flex">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="ml-4" />
        </nav>
        <nav className="flex justify-center items-center flex-wrap">
          <motion.a
            className="w-6 mr-3"
            href="/https://github.com/DBcoppr"
            target="_blank"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            {" "}
            <GithubIcon />
          </motion.a>
          <motion.a
            className="w-6 mx-3"
            href="/https://www.linkedin.com/in/tarikh-m70/"
            target=""
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon />
          </motion.a>
          <motion.a
            className="w-6 ml-3"
            href="/"
            target=""
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <InstagramIcon />
          </motion.a>
        </nav>
      </div>

      {isOpen && (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col gap-y-6 justify-between items-between z-30 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 rounded-lg backdrop-blur-md py-28"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink href="/" title="Home" setIsOpen={setIsOpen} />
            <CustomMobileLink
              href="/about"
              title="About"
              setIsOpen={setIsOpen}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              setIsOpen={setIsOpen}
            />
          </nav>
          <nav className="flex justify-center items-center flex-wrap">
            <motion.a
              className="w-6 mr-3 bg-light rounded-full"
              href="/"
              target=""
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <GithubIcon />
            </motion.a>
            <motion.a
              className="w-6 mx-3"
              href="/"
              target=""
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <LinkedInIcon />
            </motion.a>
            <motion.a
              className="w-6 ml-3"
              href="/"
              target=""
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <InstagramIcon />
            </motion.a>
          </nav>
        </motion.div>
      )}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}

export default Navbar;
