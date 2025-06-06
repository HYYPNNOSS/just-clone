
import Carousel from "../utils/carousel/Carousel";

export default function Testimonials() {
    return (
        <section className="w-full">
            <div className="container">
                <div className="w-full my-8 px-6 lg:px-0">
                    <div className="mt-[60px] title flex items-center">
                        <div className="w-[8rem] h-[3px] bg-ruby mr-8"></div>
                        <h2 className="text-[3rem] text-ruby max-sm:text-2xl ">Testimonials</h2>
                    </div>
                    <div className="mt-12">
                        {/* <h3 className="text-ruby text-[2.5rem] my-12 font-[600] max-sm:text-[1.5rem]">
                            Le Lorem Ipsum est simplement <br className="max-sm:hidden"/> du faux texte employé
                        </h3> */}
                        <Carousel />
                    </div>
                </div>
            </div>
        </section>
    );
}