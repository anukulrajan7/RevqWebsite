import React, { useState } from "react";
import ContactPerson from "../assets/contact_us_person.svg"
import contactusIcon from "../assets/contactus_icon.svg"
import contactBackground from "../assets/contact_us.svg"
import Navbar from "./Navbar";

const Contact = () => {
    const [lastName, setLastName] = useState("")
    const [firstName, setFirstName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState("")

    const handleSubmit = () => {
        console.log("Submit Form");
    };


    return (
        <div style={{ backgroundImage: `url(${contactBackground})` }} className="bg-center bg-cover">
            <Navbar />
            <section className="max-w-[1320px] mx-auto w-full md:px-[5rem] px-4 flex py-1 gap-7 flex-col-reverse md:flex-row items-center overflow-hidden mt-8 md:space-x-10">
                <div className="text-white flex flex-col space-y-10 items-center ">
                    <div className="flex flex-col space-y-3">
                        <h1 className="text-[2rem] md:text-[56px] font-semibold">Contact us</h1>
                        <p>Add your details below and we’ll be in touch!</p>
                    </div>
                    <div>
                        <img src={ContactPerson} alt="Contact us RevQ" className="w-[70%] object-contain" />
                    </div>
                </div>
                <div className="flex flex-col rounded-md">
                    <div className="flex space-x-4 bg-[#7209B7] px-4 py-4">
                        <img src={contactusIcon} alt="" className="w-[60px]" />
                        <p className="text-[1rem] text-white font-semibold">Provide a brief description of your inquiry
                            and we will respond as soon as possible.</p>
                    </div>
                    <div className="bg-white flex flex-col py-7  px-7">
                        <div className="flex flex-col items-center gap-6 ">
                            <div className="grid grid-cols-1 md:grid-cols-2 w-full  gap-6" >
                                <div>
                                    <p className="text-[#878787] text-[14px] capitalize mb-2">First Name</p>
                                    <input type="text" name="" placeholder="Your Frist Name" id="" className="w-full text-[15px] outline-none py-2 px-4 rounded-sm bg-gray-300 placeholder:text-[#242525] text-[#242525]"
                                        onChange={(event) => {
                                            setFirstName(event.target.value);
                                        }} />

                                </div>
                                <div>
                                    <p className="text-[#878787] text-[14px] capitalize mb-2">Last Name</p>
                                    <input type="text" onChange={(event) => {
                                        setLastName(event.target.value);
                                    }} name="" placeholder="Your Frist Name" id="" className="w-full text-[15px] outline-none py-2 px-4 rounded-sm bg-gray-300 placeholder:text-[#242525] text-[#242525]" />
                                </div>
                                <div>
                                    <p className="text-[#878787] text-[14px] capitalize mb-2">Business Email Address</p>
                                    <input onChange={(event) => {
                                        setEmail(event.target.value);
                                    }} className="w-full outline-none py-2 px-4 rounded-sm bg-gray-300 placeholder:text-[#242525] text-[15px] text-[#242525]" type="email" name="" placeholder="Your Email Address" id="" />
                                </div>
                                <div>
                                    <p className="text-[#878787] text-[14px] capitalize mb-2">Phone no</p>
                                    <input onChange={(event) => setPhoneNo(event.target.value)} className="w-full outline-none py-2 px-4 rounded-sm bg-gray-300 placeholder:text-[#242525] text-[15px] text-[#242525]" type="email" name="" placeholder="Your Email Address" id="" />
                                </div>
                            </div>
                            <button className="w-full bg-[#480CA8] py-2 text-white" onClick={handleSubmit}>Submit</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>);
}

export default Contact;