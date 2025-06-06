import { FiMail, FiPhone } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";

import Form from "../utils/Form/Form";

export default function Contact() {
    return (
        <section className="w-full" id="Contact">
            <div className="container my-8 py-8">
                <div className="w-full flex justify-between items-center mb-8 h-full max-md:flex-col max-md:items-start px-6 lg:px-0">
                    <div className="w-2/5 max-md:w-full">
                        <div>
                            <h2 className="text-[3rem] text-ruby mb-8"> Let&apos;s Talk</h2>
                            <p className="">We collaborate with thousands of creators, 
                            entrepreneurs and complete legends.</p>
                        </div>
                        <div className="my-8 py-8">
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-ruby rounded-full flex items-center justify-center">
                                        <FiMail size={24} color="white" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1">Our email</h4>
                                        <p>test@gmail.com</p>
                                    </div>                                
                                </div>
                            </div>
                            <div className="my-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-ruby rounded-full flex items-center justify-center">
                                        <FiPhone size={24} color="white" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1">Call us</h4>
                                        <p>+123 456 7890</p>
                                    </div>                                
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-ruby rounded-full flex items-center justify-center">
                                        <TbBrandLinkedin size={24} color="white" />
                                    </div>
                                    <div>
                                        <h4 className="mb-1">LinkedIn</h4>
                                        <p>linkedin.com/company</p>
                                    </div>                                
                                </div>
                            </div>
                        </div>
                        {/* <div className="flex items-center gap-8">
                            <div className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 transition duration-300">
                                <FiFacebook size={30} color="white" />
                            </div>
                            <div className="p-2 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-full hover:from-pink-600 hover:via-red-600 hover:to-yellow-600 transition duration-300">
                                <FaInstagram size={30} color="white" />
                            </div>
                            <div className="p-2 bg-blue-700 rounded-full hover:bg-blue-800 transition duration-300">
                                <TbBrandLinkedin size={33} color="white" />
                            </div>
                        </div> */}
                    </div>
                    <Form />
                </div>
                <div className="w-full border rounded-lg px-6 lg:px-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.640116843133!2d-7.6190971244117485!3d33.588692142065014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2993a7f1d03%3A0xd240d8f389164a18!2sCabinet%20fiduciaire%20de%20gestion%20des%20entreprises!5e0!3m2!1sfr!2sma!4v1732275177885!5m2!1sfr!2sma" width="1400" height="300" loading="lazy" className="border w-full rounded-lg"></iframe>
                </div>
            </div>
        </section>
    );
}