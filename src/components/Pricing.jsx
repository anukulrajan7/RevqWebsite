import React from "react";
import creatorBackground from "../assets/creator_gradient.svg"
import PersonwithLaptop from "../assets/person_with_laptop.svg";
import linearSeller2 from "../assets/linear_seller_2.png"
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
const Pricing = () => {
    return (
        <div>
            <div className="bg-[#150637] w-full" style={{
                backgroundImage: `url(${creatorBackground})`,
                backgroundPosition: "top",
                marginBottom: "40px"
            }}>
                <Navbar />
                <section className="max-w-[1320px] w-full mx-auto md:px-7 px-4 flex  py-[3rem]  flex-col md:flex-row md:items-start justify-between  space-x-3">
                    <h1 className="md:text-[50px] text-[2.3rem] leading-[1.14] font-bold text-white text-wrap text-center">Seller Pricing</h1>
                    <div className="flex h-[100%] justify-between flex-col py-2 text-center md:items-start gap-4 w-full md:w-[70%] mx-auto ">

                        <p className="md:text-[1.7rem] font-semibold text-[1.4rem] font-inter  text-[#ffffff] ">
                            All RevQ users get started completely free.
                        </p>

                        <p className="md:text-[1.2rem] font-light text-[1.2rem] font-inter md:w-[80%]  text-[#ffffff] ">
                            When you’re ready to activate products and go live with affiliates, simply upgrade to one of the below paid plans.
                        </p>

                    </div>


                </section>

                <section className="min-h-[289px]   mt-[4rem] mx-auto px-7 py-[5em] md:rounded-tl-[70px] md:rounded-tr-[70px] flex flex-col bg-[#fbfffd]  justify-center space-y-[4rem] items-center">
                    <p className="md:text-[2rem] text-[1.5rem] font-bold text-[#000000] font-inter first-letter:capitalize text-center">  Looking for a volume discount? We offer custom plans for high-volume
                        <br />Sellers.</p>
                    <Link to={"/contact"} className="border-2 border-[#3A0CA3] text-[#3A0CA3] text-sm md:text-[1rem] capitalize px-7 py-2 rounded-sm">Contact Us</Link>

                </section>

            </div>

            <div className="md:rounded-tl-[60px] md:rounded-tr-[60px] h-[100%]" style={{
                backgroundImage: `url(${linearSeller2})`,
                backgroundPosition: 'center',
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat',
                padding: "0",

            }}>

                <section className="flex flex-col justify-center max-w-[1320px] mx-auto py-7 md:pt-[7rem] items-center w-full md:px-7  px-7">
                    <div className="flex font-inter md:flex-row flex-col  justify-between md:items-start items-center p-7 pb-0 md:gap-[7rem]  my-0  gap-4">
                        <div className="md:w-[50%] w-full  md:relative">
                            <img src={PersonwithLaptop} alt="" className="object-contain  md:absolute md:w-[100%]  w-full" style={{
                                bottom: "-230px",
                                left: "0"
                            }} />
                        </div>
                        <div className="flex flex-col text-[#ffff] pb-7 space-y-2 text-center md:text-start">

                            <h2 className="md:text-[30px] text-[1.5rem] font-semibold capitalize">Make affiliate marketing your
                                competitive advantage</h2>
                            <p className="text-sm ">
                                Publishers prioritize promoting brands that use Levanta over the competition
                            </p>


                        </div>
                        <button className="
                    bg-[#B5179E] text-xs  text-white capitalize rounded-md md:px-8 px-4 md:text-[1rem] py-[18px] text-nowrap">SignUp for Beta</button>

                    </div>
                </section>

            </div>
        </div>
    );
}

export default Pricing;