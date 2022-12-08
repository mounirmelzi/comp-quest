import React from "react";
import Waves from "../assets/shapes/waves.svg";
import AgendaItem from "./AgendaItem";

export default function Agenda() {
  return (
    <section
      id="agenda"
      style={{ minHeight: "100vh" }}
      className="text-lightWhite px-4 relative"
    >
      <div className="text-center text-lightCyan font-[DaysOne] tracking-[.7em] text-4xl pt-24">
        AGENDA
      </div>
      <div className="md:flex md:justify-around md:items-center relative">
        <div className="flex flex-col relative gap-8 mt-14 md:mt-8 px-4">
          <h2 className="border-[2px] border-solid border-lightMagenta rounded-3xl shadow-[0_4px_0_#8758ff] px-8 md:px-14 py-3 mx-auto font-[Segoe UI] font-bold tracking-[.1em] text-center drop-shadow-[0_0_80px_magenta]">
            DAY 01{" "}
            <span className="text-pink font-medium drop-shadow-[2px_4px_4px_#9705ae]">
              {"//"}
            </span>
            <span className="font-medium"> Thursday, Dec 29th</span>
          </h2>

          <p className="absolute top-12 -left-2 text-4xl font-bold">{"{"}</p>

          <div className="w-full flex flex-col gap-3">
            <AgendaItem time="16:00 - 17:00" description="CHECK-IN" />
            <AgendaItem time="17:00 - 18:00" description="Opening caremony" />
            <AgendaItem
              time="18:00 - 19:00"
              description="Talk 1 : problem solving"
            />
            <AgendaItem time="19:00" description="The Start of the Conquest!" />
            <AgendaItem time="22:00 - 22:45" description="Dinner Break" />
          </div>
        </div>

        <div className="absolute h-80 bottom-0 w-[2px] bg-lightWhite hidden md:block"></div>

        <div className="flex flex-col relative gap-8 mt-14 md:mt-8 px-4">
          <h2 className="border-[2px] border-solid border-lightMagenta rounded-3xl shadow-[0_4px_0_#8758ff] px-8 md:px-14 py-3 mx-auto font-[Segoe UI] font-bold tracking-[.1em] text-center drop-shadow-[0_0_80px_magenta]">
            DAY 02{" "}
            <span className="text-pink font-medium drop-shadow-[2px_4px_4px_#9705ae]">
              {"//"}
            </span>
            <span className="font-medium"> Friday, Dec 30th</span>
          </h2>

          <p className="absolute bottom-12 right-4 text-4xl font-bold">{"}"}</p>

          <div className="w-full flex flex-col gap-3">
            <AgendaItem time="09:00 - 10:00" description="Breakfast" />
            <AgendaItem
              time="10:00 - 12:00"
              description="Competition Resumption"
            />
            <AgendaItem
              time="12:00 - 13:00"
              description="Talk 2 : Programming habits"
            />
            <AgendaItem time="13:15" description="End of the Competition" />
            <AgendaItem time="13:15 - 14:15" description="Closing Caremony" />
          </div>
        </div>
      </div>

      <img
        src={Waves}
        alt="Waves-shape"
        className="absolute top-8 md:top-32"
        style={{
          left: "0rem",
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
          bottom: "-1rem",
          width: "4rem",
          zIndex: "-1",
        }}
      ></img>
    </section>
  );
}
