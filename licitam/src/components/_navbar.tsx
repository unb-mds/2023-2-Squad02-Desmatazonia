import Link from "next/link";
import React from "react";
import { AiFillHome, AiFillGithub, AiFillInfoCircle } from "react-icons/ai";
import clsx from "clsx";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="barras">
        <Link href="/">
          <AiFillHome className="ic-home" />
        </Link>
        <Link href="/sobre">
          <AiFillInfoCircle className="ic-info" />
        </Link>
        <Link href="https://github.com/unb-mds/2023-2-Squad02">
          <AiFillGithub className="ic-git" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
