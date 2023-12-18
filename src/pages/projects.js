import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Projectimg from "../../public/images/projects/instamedz_img.png";
import freelflyimg from "../../public/images/projects/freeflywings_img.png";
import ecom from "../../public/images/projects/ecom.png";
import housing from "../../public/images/projects/housing.png";
import stackoverflow from "../../public/images/projects/stackoverflow.png";
import stock from "../../public/images/projects/stock.png";
import Pagetransition from "@/components/Pagetransition";

const Projtype1 = ({ link, title, gitlink, img, summary, type }) => {
  return (
    <article className="py-4">
      <Link href={link} target="_blank">
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div>
        <h3 className="text-primary text-base  sm:text-[18px] font-semibold mt-3">
          {type}
        </h3>
        <h1 className="font-bold text-2xl sm:text-3xl text-left my-2 ">
          {title}
        </h1>
        <p className="my-2 text-sm font-medium text-dark sm:text-base">
          {summary}
        </p>
        <span className="flex items-center my-4">
          <Link href={gitlink} target="_blank" className="w-8">
            <GithubIcon className="w-full" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-4 sm:px-6 text-base font-semibold hover:text-dark hover:bg-light hover:underline underline-offset-2"
          >
            visit Project
          </Link>
        </span>
      </div>
    </article>
  );
};

const projects = () => {
  return (
    <>
      <Head>
        <title>Projects page</title>
        <meta name="description" content="any description" />
      </Head>
      <Pagetransition />
      <main className="w-full mb-16 flex items-center flex-col justify-center">
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className=" !text-4xl mb-8 md:!text-7xl lg:!text-8xl sm:mb-16 !leading-tight"
          />
          <div className="grid grid-cols-4 gap-0 sm:grid-cols-8 sm:gap-8 lg:grid-cols-12  border-dark border-y-2 ">
            <div class="col-span-4">
              <Projtype1
                link="https://freeflywings.com"
                gitlink="https://github.com/Instamedz/instamedz-final-backend"
                title="Freeflywings"
                type="Freelancing"
                img={freelflyimg}
                summary="Freeflywings provides assistance to businesses in establishing an online presence by offering services such as website/app development and marketing support. I am responsible building this website from scratch along with UI/UX developer. Tech used-Reactjs"
              ></Projtype1>
            </div>
            <div className="col-span-4">
              <Projtype1
                link="https://github.com/DBcoppr/Housing"
                gitlink="https://github.com/DBcoppr/Housing"
                title="Real Estate"
                type="Personal Project"
                img={housing}
                summary="Created a platform where estate owner can publish their assets for sale. Having features like JWT and OAuth based authentication using firebase, state mangement with redux toolkit
                Implement Firebase Storage for seamless image uploading within the platform."
              />
            </div>
            <div className="col-span-4">
              <Projtype1
                link="https://github.com/DBcoppr/stackoverflow-clone_frontend"
                gitlink="https://github.com/DBcoppr/stackoverflow-clone_frontend"
                title="StackOverflow Clone"
                type="Personal Project"
                img={stackoverflow}
                summary="Developed a StackOverflow clone using the MERN stack.
                    Implemented features such as authentication, question, and answer posting, upvoting/downvoting"
              />
            </div>
            <div className="col-span-4">
              <Projtype1
                link="https://github.com/DBcoppr/stock_comp"
                gitlink="https://github.com/DBcoppr/stock_comp"
                title="Stock Equity comparison"
                type="Personal Project"
                img={stock}
                summary="This site helps to calculate and compare stock based on yearly growth % specifically between two
                    dates of a year for the last 10yr or 5yr.
                    Used Axiosall to make multiple requests to BSE(Bombay stock exchange) API and Chartjs library to
                    plot the graph."
              />
            </div>
            <div className="col-span-4">
              <Projtype1
                link="https://github.com/DBcoppr/Furniture-Site"
                gitlink="https://github.com/DBcoppr/Furniture-Site"
                title="E-commerce"
                type="Personal Project"
                img={ecom}
                summary="Developed an e-commerce website for furniture with a microservice architectural Back-end layout, utilized RestAPIs for integration purposes, and connected it to the NoSQL data layer MongoDB."
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default projects;
