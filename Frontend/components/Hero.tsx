import React from "react";
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '../components/BackgroundCircles'
import Link from "next/link";


type Props = {};

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, The Name's Yasir Obaidullah",
            "Guy-Who-loves-Coke.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

  return ( 
<div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
    <BackgroundCircles />
    <img
    className="relative rounded-full h-32 w-32 mx-auto object-cover"
    src="https://avatars.githubusercontent.com/u/83706868?s=400&u=7f0d460392c053314271776223b3427271350d6d&v=4" alt=""
    />
    <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] ">
        full-stack developer
        </h2>
    <h1 className="text-5xl lg:text-6xl font-semibold px-10">
<span className="mr-3">{text}</span>
<Cursor cursorColor="#ffd700" />
</h1>
    
    <div className="pt-5">
        <Link href="#about">
        <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
        <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skill">
        <button className="heroButton">Skills</button>
        </Link>
        <Link href="#project">
        <button className="heroButton">Projects</button>
        </Link>
        </div>
   </div>
</div>

  );
}
