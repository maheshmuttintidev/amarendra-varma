"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import styles from "./page.module.css";
import "./globals.css";
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });
import IronMan from "../../public/iron_man.png";
import CaptainAmericaShield from "../../public/captain_america_shield.png";

import Image from "next/image";

export default function Home() {
  const [age, setAge] = useState(0);

  useEffect(() => {
    const birthDate = new Date("1997-07-19");
    const today = new Date();
    const currentYear = today.getFullYear();
    const nextBirthdayDate = new Date(
      currentYear,
      birthDate.getMonth(),
      birthDate.getDate()
    );

    if (today > nextBirthdayDate) {
      nextBirthdayDate.setFullYear(currentYear + 1);
    }

    setAge(currentYear - birthDate.getFullYear());
  }, []);

  const audioRefs = useRef([]);
  const audioSources = ["/audio_1.mp3"];

  useEffect(() => {
    const playNextAudio = (index: any) => {
      if (index >= audioSources.length) {
        index = 0;
      }
      const audio = new Audio(audioSources[index]);
      // @ts-ignore
      audioRefs.current[index] = audio;
      audio.play();
      audio.addEventListener("ended", () => playNextAudio(index + 1));
    };

    const init = async () => {
      await navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(() => {
          playNextAudio(0);
        })
        .catch(() => {
          console.log("audio permission denied");
        });
    };
    init();
  }, []);

  return (
    <div className="bg-[url('/avengers_bg_2.jpg')] bg-no-repeat bg-cover">
      <div className={styles.container}>
        <Image
          src={IronMan}
          alt="iron man"
          className="object-contain h-40 w-full py-5 from-red-600 to-red-500 border-b-4 bg-gradient-to-br"
        />

        <h1 className="text-3xl py-3 text-white font-bold bg-slate-600 px-3 decoration-wavy decoration-1 decoration-slate-50">
          Wish You Happy Birthday Amarendra Varma!
        </h1>
        <div>
          <section className="px-3 text-white py-5 rounded-md flex flex-row mx-auto bg-slate-300 flex-wrap gap-7 bg-[url('/avengers_bg_1.jpg')] bg-no-repeat bg-cover justify-center items-center">
            <Image
              src={CaptainAmericaShield}
              alt="iron man"
              className="object-contain w-60 h-60 fixed left-[60%] translate-x-[-50%]"
            />
            <video
              className={
                "left-[50%] bottom-[-50%] translate-x-[-50%] fixed z-0 w-40 h-full object-contain"
              }
              autoPlay
              loop
              muted
            >
              <source src={"/bg-video.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className={styles.threedlook}>
              <div>
                <h2 className="text-xl font-bold bg-black px-3 py-2 rounded-md">
                  July 19, 1997
                </h2>
                <div className="relative">
                  <div className="relative object-contain w-screen md:w-[300px] mt-4 rounded-full p-3 h-40 inline-flex gap-10 justify-between items-center border-4 border-yellow-400">
                    <h1 className="text-3xl md:text-4xl text-white font-bold">
                      Amarendra Varma
                    </h1>
                  </div>
                  <p className="text-3xl absolute bottom-[-10px] left-[50%] translate-x-[-50%] text-yellow-600 font-bold bg-yellow-100 rounded-full h-12 w-12 flex justify-center items-center border-2 border-yellow-500">
                    {age}
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className={styles.firecrackers}>🎉🎇✨</div>
                <div className={styles.giftBox}>🎁</div>
              </div>
            </div>
          </section>
        </div>
        <Confetti />
      </div>
    </div>
  );
}
