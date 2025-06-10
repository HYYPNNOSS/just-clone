import Image from "next/image";
import { MdOutlineStar } from "react-icons/md";


export default function     Testimonial() {
    return (
        <div className="w-[350px] flex flex-col items-center gap-[1rem] border border-solid rounded-3xl border-ruby max-xl:w-[300px] mx-12">
            <div className=" w-[160px] h-[160px] rounded-full relative mt-12 ">
                <Image src={"/profile/profile1.png"} fill={true} alt="client image"></Image>
            </div>
            <h4 className="">James Pattinson</h4>
            <div className="flex ">
                <MdOutlineStar color="orange" size={"30px"} />
                <MdOutlineStar color="orange" size={"30px"} />
                <MdOutlineStar color="orange" size={"30px"} />
                <MdOutlineStar color="orange" size={"30px"} />
                <MdOutlineStar color="orange" size={"30px"} />
            </div>
            <p className="mb-8 mx-8 text-center">Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus tortor donec ipsum consequat semper consequat adipiscing ultrices.</p>
        </div>
    );
  }