import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import React Icons
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-router-dom';

import revqlogo from "../assets/revq.svg"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-transparent h-[100px] px-7 m-0 overflow-x-hidden w-full">
            <nav className="max-w-[1320px] lg:px-[2rem] mx-auto flex justify-between items-center h-[100%]">
                <img src={revqlogo} alt="Revq logo" className="w-[140px]" />

                {/* Responsive Menu Button for Small Screens */}
                <div className="lg:hidden">
                    <button className="text-white text-[1.5rem] font-[400]" onClick={handleToggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Responsive Menu for Small Screens */}
                {isMenuOpen && (
                    <div className="lg:hidden fixed inset-0 bg-opacity-70 bg-gray-900 z-50">
                        <div className="flex justify-end p-8">
                            <button className="text-white text-[1.5rem]" onClick={handleToggleMenu}>
                                <RxCross1 />
                            </button>
                        </div>
                        <ul className="text-white flex flex-col text-xl items-center space-y-7 transition-all   justify-center h-[80%]">
                            <li><Link to="/seller" className="block py-2 px-4">Sellers</Link></li>
                            <li><Link to="/creators" className="block py-2 px-4">Creators</Link></li>
                            <li><Link to={"/pricing"} className="block py-2 px-4">Pricing</Link></li>
                            <li><a href="#" className="block py-2 px-4">About us</a></li>
                            <li><Link to={"/contact"} className="block py-2 px-4">Contact us</Link></li>

                            <button className="bg-[#B5179E] text-[14px] text-white capitalize rounded-md px-8 py-[6px]">Sign up</button>

                        </ul>
                    </div>
                )}

                {/* Original Navigation Items for Larger Screens */}
                <ul className="hidden lg:flex space-x-7 text-white">
                    <li><Link to="/seller" className="text-[14px] text-white font-[400] font-inter">Sellers</Link></li>
                    <li><Link to="/creators" className="text-[14px] text-white font-[400] font-inter">Creators</Link></li>
                    <li><Link to={"/pricing"} className="text-[14px] text-white font-[400] font-inter">Pricing</Link></li>
                    <li><a href="#" className="text-[14px] text-white font-[400] font-inter">About us</a></li>
                    <li><Link to={"/contact"} className="text-[14px] text-white font-[400] font-inter">Contact us</Link></li>
                    <button className="bg-[#B5179E] text-[14px] text-white capitalize rounded-md px-8 py-[6px]">Sign up</button>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
