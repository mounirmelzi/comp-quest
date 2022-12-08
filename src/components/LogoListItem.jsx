import React from "react";

export default function LogoListItem(props) {
  const Logo = props.logo;
  const Link = props.link;

  return (
    <a
      className="w-14 h-14 rounded-full bg-[#2b3159] flex justify-center items-center"
      href={Link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Logo className="text-lightWhite w-6 h-6 hover:text-cyan" />
    </a>
  );
}
