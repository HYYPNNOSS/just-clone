import React from "react";
import Testimonial from "../Testimonial/Testimonial";

const Carousel = () => {

  return (
    <div
      className="relative inline-flex h-[5%] w-full flex-nowrap overflow-hidden font-general-sans [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] "
      id="about"
    >
      {/* Original List */}
      <div className="animate-infinite-scroll pause flex">
        <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 sm:[&_li]:mx-16 lg:[&_li]:mx-20">
            <Testimonial></Testimonial>
            <Testimonial></Testimonial>
            <Testimonial></Testimonial>
        </ul>

        {/* Duplicated List */}
        <ul
            className="flex  items-center justify-center md:justify-start [&_li]:mx-8 sm:[&_li]:mx-16 lg:[&_li]:mx-20"
            aria-hidden="true"
        >
            <Testimonial></Testimonial>
            <Testimonial></Testimonial>
            <Testimonial></Testimonial>
        </ul>
      </div>
    </div>
  );
};

export default Carousel;