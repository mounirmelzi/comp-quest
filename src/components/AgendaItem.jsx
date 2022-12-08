import React from "react";

export default function AgendaItem(props) {
  return (
    <div className="flex items-center gap-8">
      <div className="w-10 h-10 bg-gradient-to-bl from-[#5cbbe4] to-magenta rounded-full"></div>

      <div>
        <p className="text-[#c5bdbd] font-medium text-left">{props.time}</p>
        <p className="text-[#fff] font-[Aquire] text-left">
          {props.description}
        </p>
      </div>
    </div>
  );
}
