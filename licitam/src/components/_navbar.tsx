import Link from 'next/link';
import React from 'react';
import { AiFillHome, AiFillGithub, AiFillInfoCircle } from "react-icons/ai";
import clsx from 'clsx';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="barras">
                {}
                <AiFillHome />
                <AiFillInfoCircle />
                <AiFillGithub />
            </div> 
        </div>
    )
}



export default Navbar;
