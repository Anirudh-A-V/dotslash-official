import localFont from "next/font/local";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const PPNeueMachinaFont = localFont({
    src: [
        {
            path: "../../public/fonts/PPNeueMachina-Light.otf",
            weight: "400",
            style: "normal",
        },
    ],
});

const Hero = () => {
    const [introPlayed, setIntroPlayed] = useState(false);
    const loopRef = useRef(null);
    const loopRefPortrait = useRef(null);
    useEffect(() => {
        if (introPlayed) {
            if (loopRef.current) {
                loopRef.current.muted = true;
                loopRef.current.autoPlay = true;
                loopRef.current.play();
            }
            if (loopRefPortrait.current) {
                loopRefPortrait.current.muted = true;
                loopRefPortrait.current.autoPlay = true;
                loopRefPortrait.current.play();
            }
        }
    }, [introPlayed]);

    return (
        <div className="flex flex-col justify-center items-center w-full h-screen overflow-hidden">
            <video
                className={`${
                    introPlayed ? "z-[0]" : "md:z-[5] z-[0]"
                } md:flex hidden hero_intro_vid_md absolute w-screen h-screen object-cover duration-150 ease-in-out`}
                src="videos/intro.mp4"
                muted
                autoPlay
                onEnded={() => setIntroPlayed((state) => true)}
            />
            <video
                ref={loopRef}
                className="md:z-[4] z-0 md:flex hidden hero_loop_vid_md scale-[70%] absolute w-screen h-screen object-cover"
                src="videos/loop.mp4"
                muted
                loop
            />
            <video
                className={`${
                    introPlayed ? "z-[0]" : "md:z-0 z-[3]"
                } md:hidden flex hero_intro_vid absolute w-screen h-screen object-cover duration-150 ease-in-out  border-green-400`}
                src="videos/intro-portrait.mp4"
                muted
                autoPlay
                onEnded={() => setIntroPlayed((state) => !state)}
            />
            <video
                ref={loopRefPortrait}
                className="md:z-0 md:hidden flex z-[2] hero_loop_vid scale-[90%] absolute w-screen h-screen object-cover  border-green-400"
                src="videos/loop-portrait.mp4"
                muted
                loop
            />
            <div className="hero_intro_text absolute z-10 bottom-[10%] flex flex-col gap-4 justify-center items-center">
                <img className=" w-full" src="/hero-logo.svg" alt="hero logo" />
                <h2
                    className={`text-center text-white font-normal text-[12px] lg:text-[16px] leading-normal tracking-[0.6em] lg:tracking-[1em]${PPNeueMachinaFont.className}`}
                >
                    ANNUAL TECHNO-CULTURAL FEST
                </h2>
            </div>
        </div>
    );
};

export default Hero;
