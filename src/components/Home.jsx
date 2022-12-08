import React from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import TeaserVideoSrc from "../assets/videos/teaser.mp4";
import Waves from "../assets/shapes/waves.svg";
import BigCircle from "../assets/shapes/bigCircle.svg";
import SmallCircle from "../assets/shapes/smallCircle.svg";
import RadioCircle from "../assets/shapes/radioCircle.svg";
import Triangle from "../assets/shapes/triangle.svg";
import Styles from "./Home.module.css";

export default function Home() {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row-reverse justify-around items-center p-16 pt-24 md:pt-32 text-lightWhite relative"
      style={{ minHeight: "100vh" }}
    >
      <div className="border-darkMagenta bg-darkMagenta border-solid border-8 rounded-lg relative">
        <video autoPlay controls className="w-96 z-20">
          <source src={TeaserVideoSrc} type="video/mp4"></source>
        </video>

        <img src={Waves} alt="Waves-shape" className={Styles.wavesTeaser}></img>

        <img
          src={BigCircle}
          alt="BigCircle-shape"
          className={Styles.bigCircleTeaser}
        ></img>

        <img
          src={Triangle}
          alt="Triangle-shape"
          className={Styles.TriangleOneTeaser}
        ></img>
        <img
          src={Triangle}
          alt="Triangle-shape"
          className={Styles.TriangleTwoTeaser}
        ></img>
      </div>

      <div className="flex flex-col gap-8">
        <h1 className="font-[EvilEmpire] text-4xl md:text-7xl text-center md:text-left drop-shadow-[0_5px_30px_cyan]">
          COMPQUEST 2022
        </h1>

        <p className="text-lightBlue font-[Aquire] md:text-2xl hidden md:block">
          COMPETE AGAINST OTHER PROGRAMMERS AND
          <br />
          HACK OUTSIDE YOUR BOX !
        </p>

        <div className="flex flex-col justify-center gap-4">
          <div className="flex items-center font-[DaysOne] text-sm md:text-base gap-3">
            <GoLocation />
            <span>Higher school of Computer Science - Algiers -</span>
          </div>

          <div className="flex items-center font-[DaysOne] text-sm md:text-base gap-3">
            <FaCalendarAlt />
            <span>December 28th, 29th 2022</span>
          </div>
        </div>

        <button className="rounded-2xl bg-gradient-to-b from-lightMagenta to-magenta px-8 py-2 w-44 h-14 shadow-[0_5px_40px_-10px_#8758ff] mx-auto md:mx-0 font-[DaysOne] text-sm">
          Discover more
        </button>
      </div>

      <img
        src={Waves}
        alt="Waves-shape"
        style={{
          position: "absolute",
          top: "45%",
          left: "0rem",
          width: "4rem",
          zIndex: "-1",
        }}
      ></img>

      <img
        src={SmallCircle}
        alt="SmallCircle-shape"
        style={{
          position: "absolute",
          top: "3rem",
          left: "30%",
          width: "4rem",
          zIndex: "-1",
        }}
      ></img>

      <img
        src={RadioCircle}
        alt="RadioCircle-shape"
        style={{
          position: "absolute",
          bottom: "0",
          right: "15%",
          width: "4rem",
          zIndex: "-1",
        }}
      ></img>
      <img
        src={RadioCircle}
        alt="RadioCircle-shape"
        style={{
          position: "absolute",
          bottom: "-2.6rem",
          right: "15%",
          width: "4rem",
          zIndex: "-1",
          transform: "rotate(180deg) scale(-1, 1)",
        }}
      ></img>

      <img
        src={Triangle}
        alt="Triangle-shape"
        style={{
          position: "absolute",
          bottom: "2.75rem",
          left: "15%",
          zIndex: "-1",
        }}
      ></img>
      <img
        src={Triangle}
        alt="Triangle-shape"
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "15%",
          zIndex: "-1",
        }}
      ></img>
    </section>
  );
}
