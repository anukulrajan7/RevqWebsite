import React from "react";
import RevqHome from "../assets/Revq_Home_1_Product.webp"
import { FaArrowRightLong } from "react-icons/fa6";
import affilateIcon from "../assets/affiliate_icon.png"
import unlockIcon from "../assets/unlock_icon.svg"
import Kpivalogo from "../assets/kapiva_logo.svg"
import plumlogo from "../assets/plum_logo.svg"
import bsclogo from "../assets/bsc_logo.svg"
import sovi from "../assets/sovi_logo.svg"
import affiliatePatnership from "../assets/aevq_2_affiliate_partner.svg"
import Partner from "../assets/aevq_partner_with_brand.svg"
import getStarted from "../assets/aevq_get_started.svg"
import bussinessIcon from "../assets/business_icon.svg"
import growthIcon from "../assets/growth_icon.svg"
import arrowBeforIcon from "../assets/aevq_before.svg"
import arrowAfterIcon from "../assets/arrow_after.svg"
import Navbar from "./Navbar";
const Home = () => {
    return (
        <>
            <div className="bg-[#3A0CA3] w-full">
                <Navbar />
                <section className="max-w-[1320px] w-full mx-auto md:px-7 px-4 flex  md:flex-row flex-col items-center md:justify-between md:items-start space-x-3">
                    <div className="flex h-[100%] justify-between flex-col my-[4rem] items-start space-y-[2rem] w-full md:w-[50%]">
                        <h1 className="md:text-[3.5rem] text-[2.3rem] leading-[1.14] font-bold text-white text-wrap">Unlock a new Amazon
                            revenue stream</h1>
                        <p className="md:text-[1.5rem] text-[1.2rem] font-inter  text-[#ffffff] font-[400]">Drive high-converting traffic with creators,
                            influencers, and affiliate partnerships</p>
                        <div className="flex items-center space-x-4 w-[100%]">
                            <input type="text" name="Name" className="bg-white px-7 py-3 text-sm md:text-xl w-[60%] rounded-md placeholder:text-black outline-none text-black capitalize" placeholder="Enter your email..." />
                            <button className="
                    bg-[#B5179E] text-xs  text-white capitalize rounded-md md:px-8 px-4 md:text-[1rem] py-[18px]">SignUp for Beta</button>
                        </div>
                    </div>
                    <div className="md:w-[50%]">
                        <img src={RevqHome} alt="Revq Product Image" className="object-contain w-[100%] mx-auto" />
                    </div>
                </section>
                <section className="max-w-[1320px] w-full mx-auto md:px-7 space-y-5 px-4 flex flex-col md:flex-row  justify-between items-center">
                    <h1 className="font-inter md:w-[50%] w-full md:text-[2.4rem] text-[1.8rem] font-[600] capitalize text-white">Affiliate Marketing
                        Software Purpose-Built
                        for Amazon Sellers</h1>
                    <div className="grid md:grid-cols-2 grid-cols-1  items-center justify-center space-y-5 space-x-0 md:space-y-0  md:space-x-5">
                        <div className="bg-[#480ca8] shadow-md sahdow-[#480ca8] w-full flex flex-col items-start space-y-7 p-7 px-[2rem] text-white">
                            <img src={affilateIcon} className="w-[100px]" alt=" Affilate for Creators" />
                            <div className="flex space-x-3 items-center text-[20px] text-[#ea5dd5]">
                                <FaArrowRightLong />   <p>For Creators</p>
                            </div>
                            <p className="text-[18px] text-white">Take control of your amazon affiliate revenue</p>
                        </div>
                        <div className="bg-[#480ca8] w-full  shadow-md sahdow-[#480ca8]  flex flex-col items-start space-y-7 p-7 px-[2rem] text-white">
                            <img src={unlockIcon} className="w-[80px]" alt=" Affilate for Creators" />
                            <div className="flex space-x-3 items-center text-[20px] text-[#ea5dd5]">
                                <FaArrowRightLong />   <p>For Sellers</p>
                            </div>
                            <p className="text-[18px] text-white">Unlock a new marketing channel for your amazon store</p>
                        </div>
                    </div>
                </section>
                <section className="min-h-[289px]  mt-[4rem] mx-auto px-7 py-7 md:rounded-tl-[70px] md:rounded-tr-[70px] flex flex-col bg-[#fbfffd]  justify-center space-y-[4rem] items-center">
                    <p className="md:text-[1.5rem] text-[1.2rem] max-w-[1320px]   text-[#444] font-inter first-letter:capitalize text-center">  We work with some of the most forward-thinking Amazon sellers</p>
                    <div className="flex flex-wrap md:flex-row flex-col gap-8 justify-between items-center w-[80%] lg:w-[60%]">
                        <img className="object-contain h-[40px]" src={Kpivalogo} alt="" />
                        <img className="object-contain h-[40px]" src={plumlogo} alt="" />
                        <img className="object-contain h-[40px]" src={sovi} alt="" />
                        <img className="object-contain h-[40px]" src={bsclogo} alt="" />
                    </div>
                </section>
            </div>
            <div className="bg-[#fbfffd] w-full">
                <section className="px-7  py-7 max-w-[1320px] w-full mx-auto grid-cols-1 justify-between items-center md:space-x-4 space-y-7 md:space-y-0 grid md:grid-cols-2">
                    <div className="w-[100%] flex items-center justify-center md:p-10">
                        <img src={affiliatePatnership} alt="Make affiliate partnerships your competitive advantages" className="md:object-cover object-contain md:h-[600px] w-[100%]" />
                    </div>

                    <div className="flex flex-col justify-center items-start space-y-[1.5rem]">
                        <p className="text-[#b5179e] font-bold font-inter text-sm md:text-[1.2rem] ">For Seller</p>
                        <h1 className="text-[#12182d] leading-[1.22] font-bold text-[1.2rem] md:text-[2.4rem]">
                            Make affiliate partnerships your competitive advantages
                        </h1>
                        <div className="linearBorder bg-green-100  w-[97%] h-[2px]">

                        </div>
                        <div className="flex flex-col space-y-1 items-start text-left ">
                            <p className="text-[22px] font-[600] font-inter text-[#12182d] ">Attract the best publishers, affiliates, and content
                                creators to promote your Amazon listings</p>
                            <p className="text-[#12182d] text-[1rem]">Levanta software enables you to effectively track and manage your
                                associates while offering more competitive commissions</p>
                        </div>
                        <div className="flex flex-col space-y-1 items-start text-left ">
                            <p className="text-[22px] font-[600] font-inter text-[#12182d]">Earn an average of a 10% Brand Referral Bonus</p>
                            <p className="text-[#12182d] text-[1rem]">Get Amazon’s Brand Referral bonus when Levanta publishers drive sales
                                to your Amazon listings</p>
                        </div>
                        <button className="
                    bg-[#3a0ca3] text-[14px] text-white capitalize rounded-md px-8  py-2">Join Now</button>
                    </div>

                </section>
                <section className="px-7  py-7 max-w-[1320px] w-full grid-cols-1 justify-between items-center md:space-x-4 md:space-y-0 space-y-7 grid md:grid-cols-2 mx-auto">
                    <div className="flex flex-col lg:pr-[5rem] justify-center mx-auto items-start  space-y-[1.9rem]">
                        <p className="text-[#b5179e] font-bold font-inter text-sm md:text-[1.2rem] ">For Seller</p>
                        <h1 className="text-[#12182d] leading-[1.22] font-bold text-[1.2rem] md:text-[2.4rem]">
                            Make affiliate partnerships your competitive advantages
                        </h1>
                        <div className="linearBorder bg-green-100  w-[97%] h-[2px]">

                        </div>
                        <div className="flex flex-col space-y-1 items-start text-left ">
                            <p className="text-[22px] font-[600] font-inter text-[#12182d] ">Earn more when promoting Amazon listings</p>
                            <p className="text-[#12182d] text-[1rem]">Partner directly with brands that pay a supplemental
                                commission to your Amazon Associates’ commission</p>
                        </div>
                        <div className="flex flex-col space-y-1 items-start text-left ">
                            <p className="text-[22px] font-[600] font-inter text-[#12182d]">Levanta is your all-in-one Amazon affiliate
                                dashboard</p>
                            <p className="text-[#12182d] text-[1rem]">Manage links, review your affiliate income, and track your
                                performance with easy-to-use reporting</p>
                        </div>
                        <button className="
                    bg-[#3a0ca3] text-[14px] text-white capitalize rounded-md px-8  py-2">Join Now</button>
                    </div>

                    <div className="w-[100%] flex  justify-end items-center md:p-10">
                        <img src={Partner} alt="Make affiliate partnerships your competitive advantages" className="md:object-cover  mx-auto w-[100%] md:h-[600px]" />
                    </div>
                </section>
                <section className=" max-w-[1320px] w-full mx-auto my-[3rem] grid  grid-cols-1 space-y-7  px-7 ">
                    <p className="text-[#b5179e] font-bold font-inter text-sm md:text-[1.2rem] text-left ">Testimonials</p>

                    <h2 className="lg:w-[40%] text-start md:text-start  text-[#12182d] text-[2.2rem] font-[600] font-inter">What sellers and creators are saying</h2>
                    <div className=" mx-auto grid md:grid-cols-2 grid-cols-1 justify-center md:space-x-[3rem] gap-[2rem] items-center">
                        <div className="w-full px-[3rem] py-[3rem] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] border-[#7209b7] border-2 flex items-start flex-col space-y-3">
                            <p className="text-[12182d] text-[22px] italic">“Levanta is essentially everything I wished would
                                come to pass in the Amazon affiliate ecosystem.</p>
                            <p className="text-[#3a0ca3] border-l-[3px] border-l-[#3a0ca3]  pl-4 text-[1rem] font-semibold">Mike Mallazzo | Principal of Business Development, Forum Brands
                                & Co-Founder of Brandable</p>
                        </div>
                        <div className="w-full px-[3rem] h-[100%] py-[3rem] rounded-tl-[40px] rounded-tr-[40px] rounded-bl-[40px] border-[#7209b7] border-2 flex items-start flex-col space-y-3">
                            <p className="text-[12182d] text-[22px] italic ">“Levanta is leading the charge in developing tools
                                to address the amazon affiliate marketing space.</p>
                            <p className="text-[#3a0ca3] border-l-[3px] border-l-[#3a0ca3] pl-4 text-[1rem] font-semibold">Gabe Carey | Founder, Editor-In-Chief, Acceleramota</p>
                        </div>
                    </div>
                </section>
                <section className=" max-w-[1320px] mx-auto w-[full] flex flex-col space-y-7 px-7 my-[5rem]">
                    <p className="text-[#12182d] font-semibold font-inter text-xl md:text-[2.2rem] text-left ">Getting started is simple</p>
                    <div className="flex flex-col md:flex-row space-x-2 my-[3rem] items-center justify-center md:space-y-0 space-y-4">
                        <div className="flex flex-col md:items-start  md:h-[280px]  justify-center space-y-5 border-[1px] md:w-[500px] p-7 border-[#e4e4e4] bg-white">
                            <img src={getStarted} className="w-[44px]" alt="Get started it's free" />
                            <div className="flex flex-col space-y-4">
                                <p className="text-[22px] font-bold text-[#12182d]">Get started, it’s free</p>
                                <p className="text-[1rem]  text-[#12182d]">Sign up and setup your account with no
                                    credit card required. When you’re ready to
                                    start earning revenue you can upgrade to
                                    one of our paid accounts.</p>
                            </div>

                        </div>
                        <img src={arrowBeforIcon} alt="" className="md:rotate-0 rotate-90 h-6" />
                        <div className="flex flex-col md:h-[280px] items-start  space-y-5 border-[1px] md:w-[500px] p-7 border-[#e4e4e4] bg-white">
                            <img className="w-[44px]" src={bussinessIcon} alt="Grow your business with
                                    partnerships" />
                            <div className="flex flex-col space-y-4">
                                <p className="text-[22px] font-bold text-[#12182d]">Grow your business with
                                    partnerships</p>
                                <p className="text-[1rem]  text-[#12182d]"> Our tools make it easy to find and manage
                                    new revenue-generating partnerships</p>
                            </div>

                        </div>
                        <img src={arrowAfterIcon} alt="" className="md:rotate-0 rotate-90" />
                        <div className="flex h-[100%]  md:min-h-[270px] flex-col items-start space-y-5 border-[1px] md:w-[500px] p-7 border-[#e4e4e4] bg-white">
                            <img className="w-[44px]" src={growthIcon} alt="Measure growth and automate
                                    payments" />
                            <div className="flex flex-col space-y-2">
                                <p className="text-[22px] font-bold text-[#12182d]">Measure growth and automate
                                    payments</p>
                                <p className="text-[1rem]  text-[#12182d]"> Leverage actionable insights and reports.
                                    Payments are handled automatically by
                                    Levanta.</p>
                            </div>

                        </div>

                    </div>

                </section>
            </div>
        </>
    );
}

export default Home