import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/images/logo.png";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav
      className="w-full bg-darkBlue text-lightWhite font-[Segoe UI] z-50"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        borderBottom: "2px solid rgba(217,217,217,0.35)",
      }}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-2">
            <a href="#home">
              <img src={Logo} alt="LOGO" className="w-20" />
            </a>
            <div className="md:hidden">
              <button
                className="p-2 rounded-md outline-none"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <IoMdClose style={{ color: "#8758ff" }} />
                ) : (
                  <FaBars style={{ color: "#8758ff" }} />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div
              className={
                "flex flex-col items-center justify-center md:flex-row gap-8 md:gap-20"
              }
            >
              <ul className="items-center justify-center space-y-4 md:flex md:space-x-6 md:space-y-0 text-center">
                <li>
                  <a
                    href="#home"
                    className="hover:text-cyan hover:drop-shadow-[0_5px_15px_cyan]"
                  >
                    HOME
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-cyan hover:drop-shadow-[0_5px_15px_cyan]"
                  >
                    ABOUT
                  </a>
                </li>
                <li>
                  <a
                    href="#agenda"
                    className="hover:text-cyan hover:drop-shadow-[0_5px_15px_cyan]"
                  >
                    AGENDA
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-cyan hover:drop-shadow-[0_5px_15px_cyan]"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-cyan hover:drop-shadow-[0_5px_15px_cyan]"
                  >
                    CONTACT
                  </a>
                </li>
              </ul>

              <button className="rounded-2xl bg-gradient-to-b from-lightMagenta to-magenta px-8 py-3 mb-4 mx-auto md:my-0 shadow-[0_5px_40px_-10px_#8758ff] justify-center font-[DaysOne]">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
