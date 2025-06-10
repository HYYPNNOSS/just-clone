import Image from "next/image";
import { BsBuilding } from "react-icons/bs";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import ThenaStamp from "../utils/ThenaStamp/ThenaStamp";

export default function Footer() {
    return (
        <footer className="bg-[#F5EDEF]  leading-5">
            <div className="container flex justify-between gap-20 py-8 max-sm:flex-col max-sm:gap-12">
                <div className="flex-1">
                    <div className="relative w-[128px] h-[64px] mb-6">
                        <Image src={"/Logo/Cafge_logo.svg"}  alt="logo of Cafge accountant firm" fill={true} ></Image> 
                    </div>
                    <p>We&apos;re a team of strategic creator and digital innovator,<br/> united focus in our pursuit of mastery and joyful.</p>
                </div>
                <div className="flex-1">
                    <h4 className="h-[64px] text-ruby text-2xl flex items-center mb-6">Address</h4>
                    <div className="flex gap-4 mb-4 items-center">
                        <BsBuilding color="#af1837" size={28}/>
                        <p>234 Rue Mostafa El Maani, Casablanca 20130</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <LuPhoneCall color="#af1837" size={28}/>
                        <p><span>test@gmail.com</span><br /><span>+212 522 268 660</span></p>
                    </div>
                </div>
                <div className="flex-1">
                    <h4 className="h-[64px] text-ruby text-2xl flex items-center mb-6">Social Media</h4>
                    <ul className=" flex gap-4">
                        <li className="w-[48px] h-[48px] bg-white flex justify-center items-center"><FaFacebookF color="#af1837" size={26}/></li>
                        <li className="w-[48px] h-[48px] bg-white flex justify-center items-center"><FaLinkedinIn color="#af1837" size={26}/></li>
                        <li className="w-[48px] h-[48px] bg-white flex justify-center items-center "><FaInstagram color="#af1837" size={28}/></li>
                    </ul>
                </div>
            </div>
            <ThenaStamp />
        </footer>
    );
  }