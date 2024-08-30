import React from "react";
import automaticbilling from "../assets/automatic_billing.svg";
import reviewicon from "../assets/review_icon.svg";
import monthlyInvoice from "../assets/monthly_invoice.svg";
import personsmilling from "../assets/aevq_person_smiling.svg";
import Kpivalogo from "../assets/kapiva_logo.svg"
import plumlogo from "../assets/plum_logo.svg"
import bsclogo from "../assets/bsc_logo.svg"
import sovi from "../assets/sovi_logo.svg";
import CreatorDashboard from "../assets/creators_dashboard.svg"
import creatorBackground from "../assets/creator_gradient.svg"
import Navbar from "./Navbar";
import bussinessIcon from "../assets/business_icon.svg"
import growthIcon from "../assets/growth_icon.svg"
import getStarted from "../assets/aevq_get_started.svg"
import arrowBeforIcon from "../assets/aevq_before.svg"
import arrowAfterIcon from "../assets/arrow_after.svg"

const Creators = () => {
    return (<>
        <div className="w-full overflow-x-hidden " style={{
            backgroundImage: `url(${creatorBackground})`
        }}>
            <Navbar />
            <section className="max-w-[1320px] w-full mx-auto md:px-7 px-4 flex  flex-col md:flex-row items-center justify-start  space-x-3">
                <div className="flex h-[100%] justify-between flex-col  my-[4rem]  items-start gap-7 w-full md:w-[50%] ">
                    <p className="text-[#B5179E] font-semibold">For Creators</p>
                    <h1 className="md:text-[50px] text-[2.3rem] leading-[1.14] font-bold text-white text-wrap ">Earn more &
                        partner directly
                        with Amazon Sellers</h1>
                    <p className="md:text-[1.5rem] font-light text-[1.2rem] font-inter  text-[#ffffff] ">
                        All Creators join for free!
                    </p>
                    <div className="flex items-center space-x-4 ">
                        <input type="text" name="Name" className="bg-white px-7 py-3 text-sm md:text-xl w-[60%] rounded-md placeholder:text-black outline-none text-black capitalize" placeholder="Enter your email..." />
                        <button className="
                    bg-[#B5179E] text-xs  text-white capitalize rounded-md md:px-8 px-4 md:text-[1rem] py-[18px]">SignUp for Beta</button>
                    </div>
                </div>
                <div className="md:w-[60%] w-full px-7 relative  flex justify-center ">
                    <img src={CreatorDashboard} alt="" className="w-[120%] md:absolute right-[-20%] bottom-[-200px]" />
                </div>


            </section>

            <section className="min-h-[289px]  mt-[4rem] mx-auto px-7 py-7 md:rounded-tl-[70px] md:rounded-tr-[70px] flex flex-col bg-[#fbfffd]  justify-center space-y-[4rem] items-center">
                <p className="md:text-[1.5rem] text-[1.2rem]  text-[#444] font-inter first-letter:capitalize text-center">  We work with some of the most forward-thinking Amazon sellers</p>
                <div className="flex flex-wrap md:flex-row max-w-[1320px] flex-col gap-8 justify-between items-center w-[80%] lg:w-[60%]">
                    <img className="object-contain h-[40px]" src={Kpivalogo} alt="" />
                    <img className="object-contain h-[40px]" src={plumlogo} alt="" />
                    <img className="object-contain h-[40px]" src={sovi} alt="" />
                    <img className="object-contain h-[40px]" src={bsclogo} alt="" />
                </div>
            </section>

        </div>
        <div className=" bg-[#F4F4F6]  w-full md:py-[2rem]">
            <section className=" grid md:grid-cols-2 max-w-[1320px] mx-auto w-full md:my-[2rem] my-[2rem] items-center gap-5 grid-cols-1 md:items-start px-7">
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

        </div>
        <div>
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

    </>);
}

export default Creators