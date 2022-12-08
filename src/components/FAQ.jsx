import React from "react";
import Waves from "../assets/shapes/waves.svg";
import Triangle from "../assets/shapes/triangle.svg";
import Circle from "../assets/shapes/circle.svg";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="text-lightWhite mb-16 relative"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center text-lightCyan font-[DaysOne] tracking-[.2em] text-5xl pt-24 md:pt-30">
        FAQ
      </div>
      <div className="flex flex-col md:flex-row mt-14 md:mt-8 gap-12 md:gap-0">
        <div className="flex flex-col gap-6 px-14 mx-auto relative">
          <h2 className="font-semibold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#eb0089] via-[#c50333] to-[#c50333] drop-shadow-[0_0_80px_magenta]">
            GENERAL
          </h2>

          <div className="bg-pink w-32 h-[3px]"></div>

          <div>
            <p className="font-[Segoe UI] text-lightMagenta font-bold text-2xl">
              Who can apply ?
            </p>
            <p className="font-[Segoe UI] text-[#fff] font-semibold text-xl">
              All Students who have programming skills
            </p>
          </div>
          <div>
            <p className="font-[Segoe UI] text-lightMagenta font-bold text-2xl">
              What will i gain from competing in this game ?
            </p>
            <p className="font-[Segoe UI] text-[#fff] font-semibold text-xl">
              Competing in <span>CompQuest</span> will help you improve both
              your soft & technical skills to make a further step into the
              professional world.
            </p>
          </div>
          <div>
            <p className="font-[Segoe UI] text-lightMagenta font-bold text-2xl">
              What should I bring ?
            </p>
            <p className="font-[Segoe UI] text-[#fff] font-semibold text-xl">
              Bring your student ID and anything else you'd need for a
              productive and healthy weekend {"("}laptop, charger, change of
              clothes, and so on{")"}.
            </p>
          </div>

          <p className="absolute top-16 left-4 text-6xl text-cyan font-bold">
            {"{"}
          </p>

          <p className="absolute md:hidden bottom-0 right-7 text-6xl text-cyan font-bold">
            {"}"}
          </p>
        </div>

        <div className="flex flex-col gap-6 px-14 mx-auto relative">
          <h2 className="font-semibold text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#eb0089] via-[#c50333] to-[#c50333] drop-shadow-[0_0_80px_magenta]">
            TEAMS
          </h2>

          <div className="bg-pink w-24 h-[3px]"></div>

          <div>
            <p className="font-[Segoe UI] text-lightMagenta font-bold text-2xl">
              Setting up a Team ?
            </p>
            <p className="font-[Segoe UI] text-[#fff] font-semibold text-xl">
              Everyone can form up to 5 players team.
            </p>
          </div>
          <div>
            <p className="font-[Segoe UI] text-lightMagenta font-bold text-2xl">
              Don't Have a Team ?
            </p>
            <p className="font-[Segoe UI] text-[#fff] font-semibold text-xl">
              Don't worry! Our Organizers will do their best to find you one.
            </p>
          </div>
          <div>
            <p className="font-[Segoe UI] text-lightMagenta font-bold text-2xl">
              Making a GOOD Team ?
            </p>
            <p className="font-[Segoe UI] text-[#fff] font-semibold text-xl">
              It is preferable to form a team containing players from diffrent
              fields {"("}Cyber Security - AI/ML - Competitive Programming{")"}.
            </p>
          </div>

          <p className="absolute md:hidden top-16 left-4 text-6xl text-cyan font-bold">
            {"{"}
          </p>

          <p className="absolute bottom-0 right-7 text-6xl text-cyan font-bold">
            {"}"}
          </p>
        </div>
      </div>

      <img
        src={Waves}
        alt="Waves-shape"
        style={{
          position: "absolute",
          top: "7rem",
          left: "0",
          width: "4rem",
          zIndex: "-1",
        }}
      ></img>

      <img
        src={Waves}
        alt="Waves-shape"
        className="hidden md:block"
        style={{
          position: "absolute",
          bottom: "0",
          right: "0",
          width: "4rem",
          zIndex: "-1",
        }}
      ></img>

      <img
        src={Triangle}
        alt="Waves-shape"
        className="hidden md:block"
        style={{
          position: "absolute",
          bottom: "0",
          left: "50%",
          zIndex: "-1",
        }}
      ></img>
      <img
        src={Triangle}
        alt="Waves-shape"
        className="hidden md:block"
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "50%",
          zIndex: "-1",
        }}
      ></img>

      <img
        src={Circle}
        alt="Waves-shape"
        style={{
          position: "absolute",
          width: "4rem",
          top: "2.5rem",
          right: "0",
          zIndex: "-1",
        }}
      ></img>

      <img
        src={Circle}
        alt="Waves-shape"
        style={{
          position: "absolute",
          bottom: "-2rem",
          left: "0",
          zIndex: "-1",
          transform: "rotate(180deg)",
          opacity: "0.2",
        }}
      ></img>
    </section>
  );
}
