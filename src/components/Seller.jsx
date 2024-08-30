import React from "react";
import SellerDashboard from "../assets/seller_1_dashboard.svg";
import SellerPrice from "../assets/seller_price.svg";
import automaticbilling from "../assets/automatic_billing.svg";
import reviewicon from "../assets/review_icon.svg";
import monthlyInvoice from "../assets/monthly_invoice.svg";
import PersonwithLaptop from "../assets/person_with_laptop.svg";
import sellerDesktop from "../assets/seller_desktop.svg";
import personsmilling from "../assets/aevq_person_smiling.svg";
import Kpivalogo from "../assets/kapiva_logo.svg"
import plumlogo from "../assets/plum_logo.svg"
import bsclogo from "../assets/bsc_logo.svg"
import linearSeller2 from "../assets/linear_seller_2.png"
import sovi from "../assets/sovi_logo.svg";
import gradientBg from "../assets/gradient_bg.svg"
import Navbar from "./Navbar";

const Seller = () => {
    return (
        <>
            <div className="bg-[#150637] w-full" style={{
                backgroundImage: `url(${gradientBg})`
            }}>
                <Navbar />
                <section className="max-w-[1320px] w-full mx-auto md:px-7 px-4 flex   flex-col items-center justify-between  space-x-3">
                    <div className="flex h-[100%] justify-between flex-col my-[4rem] items-center gap-7 w-full md:w-[70%] mx-auto ">
                        <h1 className="md:text-[50px] text-[2.3rem] leading-[1.14] font-bold text-white text-wrap text-center">Unlock a new affiliate marketing
                            channel for your Amazon Store</h1>
                        <p className="md:text-[1.5rem] font-light text-[1.2rem] font-inter  text-[#ffffff] ">
                            All-in-one software for partnering with affiliates, creators, and publishers
                        </p>
                        <div className="flex items-center space-x-4 ">
                            <input type="text" name="Name" className="bg-white px-7 py-3 text-sm md:text-xl w-[60%] rounded-md placeholder:text-black outline-none text-black capitalize" placeholder="Enter your email..." />
                            <button className="
                    bg-[#B5179E] text-xs  text-white capitalize rounded-md md:px-8 px-4 md:text-[1rem] py-[18px]">SignUp for Beta</button>
                        </div>
                    </div>
                    <div className="w-full px-7">
                        <img src={SellerDashboard} alt="" className="w-full" />
                    </div>
                    <div className="flex max-w-[1320px] items-center md:flex-row flex-col gap-5 px-7">
                        <div className="md:w-[50%] w-full">
                            <img src={SellerPrice} alt="" className="w-full" />
                        </div>
                        <div className="text-white items-start w-full text-start md:w-[70%] space-y-2">
                            <h1 className="md:text-[36px] text-[1.2rem] font-bold  ">Integrating with RevQ is as simple as
                                connecting your Amazon account. Upload
                                all of your ASINs in one-click.</h1>
                            <p className="text-[#B5179E] flex items-center space-x-7"><div className="bg-[#B5179E] w-7 h-1"></div><span>Get started, it's free</span></p>
                        </div>
                    </div>

                </section>

                <section className="min-h-[289px]     mt-[4rem] mx-auto px-7 py-7 md:rounded-tl-[70px] md:rounded-tr-[70px] flex flex-col bg-[#fbfffd]  justify-center space-y-[4rem] items-center">
                    <p className="md:text-[1.5rem] text-[1.2rem]  text-[#444] font-inter first-letter:capitalize text-center">  We work with some of the most forward-thinking Amazon sellers</p>
                    <div className="flex flex-wrap md:flex-row flex-col gap-8 justify-between items-center w-[80%] lg:w-[60%]">
                        <img className="object-contain h-[40px]" src={Kpivalogo} alt="" />
                        <img className="object-contain h-[40px]" src={plumlogo} alt="" />
                        <img className="object-contain h-[40px]" src={sovi} alt="" />
                        <img className="object-contain h-[40px]" src={bsclogo} alt="" />
                    </div>
                </section>

            </div>
            <section className="bg-white grid md:grid-cols-2 max-w-[1320px] mx-auto w-full md:my-[3rem] my-[2rem] items-center gap-5 grid-cols-1 md:items-start px-7">
                <div className="flex flex-col items-start  space-y-7 lg:px-7  ">
                    <h2 className="text-[#0E0425] font-bold text-[1.5rem] md:text-[36px]">Activate revenue-generating affiliates, creators, and publishers</h2>

                    <div className="flex justify-between items-start space-x-4">
                        <img src={automaticbilling} alt="" className="w-[30px] pt-2" />
                        <p className="text-[#000000] text-[1rem] md:text-[20px] font-semibold">Setup automatic billing or pay manually</p>
                    </div>

                    <div className="flex justify-between items-start space-x-4">
                        <img src={reviewicon} alt="" className="w-[30px] pt-2" />
                        <p className="text-[#000000] text-[1rem] md:text-[20px] font-semibold">Review your affiliate payment breakdown
                            with Levanta Ledger</p>
                    </div>

                    <div className="flex justify-between items-start space-x-4">
                        <img src={monthlyInvoice} alt="" className="w-[30px] pt-2" />
                        <p className="text-[#000000] text-[1rem] md:text-[20px] font-semibold">You pay one monthly invoice, we distribute
                            to the publisher</p>
                    </div>
                    <button className="text-white text-[20px] bg-[#480CA8] px-8 py-2 rounded-md">
                        Join Now
                    </button>
                </div>
                <div>
                    <img src={personsmilling} alt="" />
                </div>
            </section>
            <div className="md:rounded-tl-[60px] md:rounded-tr-[60px] h-[100%]" style={{
                backgroundImage: `url(${linearSeller2})`,
                backgroundPosition: 'center',
                backgroundSize: "cover",
                backgroundRepeat: 'no-repeat',
                padding: "0",

            }}>

                <section className="flex flex-col justify-center max-w-[1320px] mx-auto py-7 md:pt-[7rem] items-center w-full md:px-7  px-7">
                    <div className="flex flex-col gap-2 text-white items-center">
                        <h1 className="md:text-[36px] text-[1.5rem] font-semibold ">Qualify for Amazon’s Brand Referral Bonus</h1>
                        <p className="md:text-[22px] text-[1rem] text-white font-semibold"><span className="text-[#F9AD13]">Earn a 10% </span> kickback for generating sales from non-Amazon channels</p>
                        <button className="bg-[#0E0425] my-[2rem] text-white text-[14px] py-3 shadow-sm rounded-sm px-8">Get Started</button>
                    </div>
                    <img src={sellerDesktop} alt="" className="md:w-[80%] md:mb-[7rem] my-4 w-full " />
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
        </>
    );
}

export default Seller;