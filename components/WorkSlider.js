import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import Link from "next/link";
import Image from "next/image";

// data
const workSlider = {
  slides: [
    {
      images: [
        {
          title: "MediCal",
          path: "/onProgress.jpeg",
          link: "https://github.com/AndreyBernardoni/MediCal",
        },
        {
          title: "Portfolio",
          path: "/onProgress.jpeg",
          link: "https://github.com/AndreyBernardoni/Portfolio",
        },
        {
          title: "Loading...",
          path: "/onProgress.jpeg",
          link: "",
        },
        {
          title: "Loading...",
          path: "/onProgress.jpeg",
          link: "",
        },
      ],
    },
    {
      images: [
        {
          title: "Loading...",
          path: "/onProgress.jpeg",
          link: "",
        },
        {
          title: "Loading...",
          path: "/onProgress.jpeg",
          link: "",
        },
        {
          title: "Loading...",
          path: "/onProgress.jpeg",
          link: "",
        },
        {
          title: "Loading...",
          path: "/onProgress.jpeg",
          link: "",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <Link target="_blank" href={image.link}>
                      <div
                        className="flex items-center justify-center relative overflow-hidden
                    group"
                      >
                        <Image src={image.path} width={500} height={300} />
                        <div
                          className="absolute inset-0 bg-gradient-to-l from-transparent 
                      via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 
                      transition-all duration-700"
                        ></div>
                        <div
                          className="absolute bottom-0 translate-y-full 
                      group-hover:-translate-y-10 group-hover:xl:-translate-y-20 
                      transition-all duration-300"
                        >
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div className="delay-100">{image.title}</div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
