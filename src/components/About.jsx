import React from "react";
import Map from "../assets/shapes/map.svg";
import Waves from "../assets/shapes/waves.svg";
import BigCircle from "../assets/shapes/bigCircle.svg";
import Triangle from "../assets/shapes/triangle.svg";

export default function About() {
  return (
    <section
      id="about"
      className="text-lightWhite mb-16 relative"
      style={{ minHeight: "100vh" }}
    >
      <h1 className="text-center text-[#5cbbe4] font-[DaysOne] tracking-[.05em] text-5xl pt-28 md:pt-32">
        <span className="text-lightMagenta font-medium tracking-[.0rem] mr-6 drop-shadow-[1px_3px_10px_#8758ff]">
          {"//"}
        </span>
        What is CompQuest
      </h1>

      <div className="md:flex md:flex-row-reverse md:justify-around md:items-center">
        <div className="transform: rotate(-7.5deg) md:w-2/5 drop-shadow-[0_0_250px_cyan]">
          <img src={Map} alt="RadioCircle-shape"></img>
        </div>

        <p className="p-5 md:p-20 font-[DaysOne] text-2xl md:w-3/5">
          <span className="text-lightMagenta">CompQuest</span> is a programming
          competition where participants will be divided in{" "}
          <span className="text-[#cdedfd]">teams</span>.
          <br />
          Each team will start from a point in map, try to solve problems
          represented in zones with points that they will take over, the first
          team who solves it takes all the points and the zone remains theirs
          ,thus, the second takes less points ! The winner is the one who has
          the maximum number of points at the end of the time.
        </p>
      </div>

      <img
        src={Waves}
        alt="RadioCircle-shape"
        className="hidden md:block"
        style={{
          position: "absolute",
          bottom: "5%",
          left: "0",
          width: "4rem",
          zIndex: "-1",
        }}
      ></img>

      <img
        src={BigCircle}
        alt="RadioCircle-shape"
        className="hidden md:block"
        style={{
          position: "absolute",
          top: "2rem",
          right: "0rem",
          zIndex: "-1",
        }}
      ></img>

      <img
        src={Triangle}
        alt="RadioCircle-shape"
        className="hidden md:block"
        style={{
          position: "absolute",
          bottom: "3.5rem",
          right: "10%",
          zIndex: "-1",
        }}
      ></img>
      <img
        src={Triangle}
        alt="RadioCircle-shape"
        className="hidden md:block"
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "10%",
          zIndex: "-1",
        }}
      ></img>
    </section>
  );
}
