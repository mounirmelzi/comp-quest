import React from "react";
import cseLogo from "../assets/images/cse.png";
import LogoListItem from "./LogoListItem";
import Waves from "../assets/shapes/waves.svg";
import RadioCircle from "../assets/shapes/radioCircle.svg";
import {
  FaLinkedinIn,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <section id="contact" className="relative">
      <div className="text-lightWhite flex flex-col md:flex-row md:justify-around p-4 my-4 gap-16">
        <div className="flex flex-col gap-8 justify-center items-center">
          <h1 className="font-[EvilEmpire] text-4xl md:text-5xl text-center md:text-left drop-shadow-[0_1px_15px_cyan]">
            COMPQUEST 2022
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-8 p-6 pb-0">
            <LogoListItem
              logo={FaLinkedinIn}
              link="https://www.linkedin.com/company/cse-club"
            />
            <LogoListItem
              logo={FaFacebook}
              link="https://web.facebook.com/club.scientifique.esi"
            />
            <LogoListItem
              logo={FaYoutube}
              link="https://www.youtube.com/@ClubScientifiqueESI-CSE/featured"
            />
            <LogoListItem
              logo={FaInstagram}
              link="https://www.instagram.com/cse.club/"
            />
            <LogoListItem
              logo={FaTwitter}
              link="https://twitter.com/CSESI_Club"
            />
          </div>
        </div>

        <div className="flex flex-col gap-3 px-6 md:px-0">
          <h2 className="font-[DaysOne] text-[#8758ff] text-3xl text-center md:text-left drop-shadow-[0_0_90px_magenta]">
            CONTACT
          </h2>

          <p className="font-[Aquire] text-[#c4c4c4] py-2 md:py-0 text-center md:text-left">
            Ecole Nationale Supérieure d'Informatique ex - INI
          </p>

          <p className="font-[Aquire] text-lightWhite tracking-[.1em] text-center md:text-left">
            Website :
            <a
              href="https://www.cse.club/en"
              target="_blank"
              rel="noopener noreferrer"
              className="font-[AquireLight] mx-2 underline"
            >
              cse.club
            </a>
          </p>

          <p className="font-[Aquire] text-lightWhite tracking-[.1em] text-center md:text-left">
            Email :<span className="font-[AquireLight] mx-2">cse@esi.dz</span>
          </p>
        </div>
      </div>

      <div className="w-full mt-10 mb-12 flex flex-col gap-4 justify-center items-center">
        <p className="font-[DaysOne] text-lightWhite tracking-[.3em] text-center">
          MADE BY
        </p>
        <img
          src={cseLogo}
          alt="cse logo"
          className="drop-shadow-[0_0_50px_cyan]"
        ></img>
      </div>

      <img
        src={Waves}
        alt="Waves-shape"
        className="hidden md:block"
        style={{
          position: "absolute",
          top: "0",
          left: "45%",
          width: "4rem",
          zIndex: "-1",
        }}
      ></img>

      <img
        src={Waves}
        alt="Waves-shape"
        className="right-0 md:right-16"
        style={{
          position: "absolute",
          bottom: "-3rem",
          width: "4rem",
          zIndex: "-1",
        }}
      ></img>

      <img
        src={RadioCircle}
        alt="Circle-shape"
        className="absolute top-0 -left-8 h-14 md:h-24"
        style={{
          transform: "rotate(90deg)",
          zIndex: "-1",
        }}
      ></img>
    </section>
  );
}
