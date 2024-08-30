import React from "react";
import revqlogo from "../assets/revq.svg"

const Footer = () => {
    return (
        <footer className="bg-[#12182d] w-full py-7">
            <div className="flex md:flex-row flex-col justify-between my-[2rem]  items-center mx-auto  max-w-[1320px] w-full px-7 ">
                <ul className="text-white flex md:flex-row  flex-col text-xl items-center md:space-y-0 space-y-4 justify-center h-[80%]">
                    <img src={revqlogo} alt="Revq logo" className="w-[140px]" />
                    <li><a href="#" className="block text-sm py-2 px-4">Sellers</a></li>
                    <li><a href="#" className="block text-sm py-2 px-4">Creators</a></li>
                    <li><a href="#" className="block  text-sm py-2 px-4">Pricing</a></li>
                    <li><a href="#" className="block text-sm py-2 px-4">About us</a></li>
                    <li><a href="#" className="block  text-sm py-2 px-4">Contact us</a></li>


                </ul>

                <button className="bg-[#B5179E] text-[14px] text-white capitalize rounded-sm px-8 py-[7px]">Contact us</button>

            </div>
            <div className="border-2  mx-auto w-full max-w-[1320px] mb-[2rem] border-[#3A0CA3]">

            </div>
            <p className="max-w-[1320px] px-7 mx-auto text-sm text-white md:text-start text-center">Copyright © 2024 RevQ. All rights reserved.
                Privacy Policy |
                Terms of Service</p>
        </footer>
    );
}

export default Footer;