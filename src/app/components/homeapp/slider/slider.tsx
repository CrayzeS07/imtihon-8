import React from "react";
import Image from "next/image";
import Phone from "../../../../../public/Phone.svg";
import Apple from "../../../../../public/Apple.svg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselSlider() {
  return (
    <Carousel className="w-[1086px]">
      <CarouselContent>
        <CarouselItem>
          <div className="flex">
            <div>
              <Image src={Phone} alt="Slide 1" />
            </div>
            <div className="mt-[60px]">
              <div className="flex justify-center">
                <Image src={Apple} alt="Iphone" />
              </div>
              <div className="flex justify-center">
                <h2 className="text-[24px] font-bold font-roboto text-[#1C1C1C] leading-[27.6px]">
                  iPhone 13
                </h2>
              </div>
              <div className="flex justify-center">
                <p className="texxt-[20px] text-[#1C1C1C] font-normal font-roboto">
                  Yangi yashil rangda
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="flex">
            <div>
              <Image src={Phone} alt="Slide 1" />
            </div>
            <div className="mt-[60px]">
              <div className="flex justify-center">
                <Image src={Apple} alt="Iphone" />
              </div>
              <div className="flex justify-center">
                <h2 className="text-[24px] font-bold font-roboto text-[#1C1C1C] leading-[27.6px]">
                  iPhone 12
                </h2>
              </div>
              <div className="flex justify-center">
                <p className="texxt-[20px] text-[#1C1C1C] font-normal font-roboto">
                  Yangi yashil rangda
                </p>
              </div>
            </div>
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="w-[1086px] h-[226px]">
            <img
              className="w-[1086px] h-[226px]"
              src="https://about.att.com/ecms/dam/snr/2020/November2020/StoryLevelBanner/11042020_iPhoneProMax_STORY_LEVEL_BANNER_1600x483.jpg"
              alt="Slide 1"
            />
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
