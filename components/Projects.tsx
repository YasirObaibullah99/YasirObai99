import React from 'react'
import Image from "next/image";
import heroImg from "./images/Project1.png"; 
import heroImg1 from "./images/Project2.png";
import heroImg2 from "./images/Project3.png";
import react from "./images/icon/react.png"; 
import css from "./images/icon/tailwind-css.png"; 
import firebase from "./images/icon/Firebase.png";
import mui from "./images/icon/material-ui.png";
import redux from "./images/icon/redux.png"; 
import node from "./images/icon/node.png"; 
import {motion} from "framer-motion";

type Props = {}

function Projects({}: Props) {
  // const projects = [1, 2, 3];
  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen relative flex overflow-hidden flex-col text-left 
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
        </h3>
        <div className="relative w-full flex overflow-x-scroll overall-y-hidden snap-x snap-mandatory z-20
        scrollbar scrollbar-medium scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80"> 
        {/* z-20 for keeping that layer to top */}
        {/* {projects.map((project, i) => ( */}
          <motion.div
          initial={{
            y: -300,
            opacity:0}}
          whileInView={{opacity:1, y: 0}}
          transition={{duration:1.2}}
          viewport={{once: true}}
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center 
          p-20 md:p-40 h-screen ">
          <Image className="object-scale-down rounded-full w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center 
          p-20 md:p-40 h-screen"
                priority src={heroImg} /* layout="responsive" objectFit='cover' */ alt=""/>
          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              Case Study 1 of 3: {" "}
              <span className="underline decoration-[#F7AB0A]/50">
              <a href="https://github.com/yasirobai99/Foodora" 
              target="_blank" rel="noopener noreferrer">Foodora</a>
              </span>
              {/* Case Study { i + 1} of {projects.length}: */}
            </h4>
            {/* <ul >
              <li>Stack: HTML & CSS, Java, AngularJS, Firebase</li>
            </ul> */}
            <div className=" grid grid-flow-col justify-start gap-5">
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={react} alt=""/> </div>
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={css} alt=""/> </div>
              
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={mui} alt=""/> </div>
                <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={redux} alt=""/> </div>
                <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={firebase} alt=""/> </div>
                <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                    <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={node} alt=""/> </div>
            </div>
            <p className= "break-before text-lg text-center md:text-left">
            Foodora is a one-stop solution where you can order all kinds of food items which is available in our database.
            Implemented Firebase auth for authentication and firebase Database for storing user's data and order history.
            Framer motion animations are used without affecting the loading speed and used responsive Material UI designs.
            </p>
          </div>
        </motion.div>
        {/* ))}  */}

          <motion.div
          initial={{
            y: -300,
            opacity:0}}
          whileInView={{opacity:1, y: 0}}
          transition={{duration:1.2}}
          viewport={{once: true}}
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center 
          p-20 md:p-40 h-screen ">
          <Image className="object-scale-down rounded-full w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center 
          p-20 md:p-40 h-screen"
                priority src={heroImg1} /* layout="responsive" objectFit='cover' */ alt=""/>
          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
                Case Study 2 of 3:{" "}
                <span className="underline decoration-[#F7AB0A]/50">
                  <a href="https://github.com/yasirobai99/nft_market" 
                  target="_blank" rel="noopener noreferrer">NFT's</a>
                </span>
            </h4>
            <div className=" grid grid-flow-col justify-start gap-5">
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={react} alt=""/> </div>
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={css} alt=""/> </div>
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={node} alt=""/> </div>
                <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={redux} alt=""/> </div>
            </div>
            <p className="text-lg text-center md:text-left">
            NFTs is a marketplace for NFT it is React js website where users can buy NFT which is been uploaded by our Seller and can even see the top Seller.
            Integrated meta-mask into the website as a payment option where users can use their cryptocurrency.
            Used Tailwind CSS to style the website which will give Modern UI/UX look to the website.
            </p>
          </div>
        </motion.div>
         {/* ))}  */}
        <motion.div
          initial={{
            y: -300,
            opacity:0}}
          whileInView={{opacity:1, y: 0}}
          transition={{duration:1.2}}
          viewport={{once: true}}
          className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center 
          p-20 md:p-40 h-screen ">
          <Image className="object-scale-down rounded-full w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center 
          p-20 md:p-40 h-screen"
                priority src={heroImg2} /* layout="responsive" objectFit='cover' */ alt=""/>
          <div className="space-y-5 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
                Case Study 3 of 3:{" "}
                <span className="underline decoration-[#F7AB0A]/50">
                  <a href="https://github.com/yasirobai99/HomePros" 
                  target="_blank" rel="noopener noreferrer">HOME LAND</a>
                </span>
            </h4>
            <div className=" grid grid-flow-col justify-start gap-5">
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={react} alt=""/> </div>
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={css} alt=""/> </div>
              <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={node} alt=""/> </div>
                <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                  <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={redux} alt=""/> </div>
                <div className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter ">
                    <Image className="flex items-center justify-center rounded-full border border-gray-500 object-cover w-10 h-10  
                xl:w-10 xl:h-10 filter " src={mui} alt=""/> </div>
            </div>
            <p className="text-lg text-center md:text-left">
            This is a real estate website that is made with reactjs and it has used tailwind-CSS to give the modern UI for the Client: Reactjs, Redux, TailwindCSS, Framer motion, Material UI Server: Nodejs
            </p>
          </div>
        </motion.div>
        {/* ))}                                                                                                                       */}
        </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] skew-y-12 ">

      </div>
    </motion.div>
  )
}
export default Projects;