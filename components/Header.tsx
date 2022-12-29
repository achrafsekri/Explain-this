import React from "react";
import Logo from "../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <div className="relative mx-auto max-w-7xl container h-10%">
      <Link href="/">
        <span className="absolute transition duration-300 top-4 hover:opacity-90 hover:scale-105">
          <Image src={Logo} alt="logo" width={150} height={150} />
        </span>
      </Link>
    </div>
  );
};

export default Header;
