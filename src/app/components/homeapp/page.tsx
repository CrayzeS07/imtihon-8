import React from "react";
import Image from "next/image";
import korzinka from "../../../../public/korzinka.svg";
import { CarouselSlider } from "./slider/slider";
import Link from "next/link";
import key1 from "../../../../public/key1.svg";
import tavar from "../../../../public/tavar.svg";

export default function HomePageApp() {
  return (
    <div className="w-full h-screen">
      <div className="flex gap-[40px]">
        <div>
          <div className="w-[280px] border border-[#5f5e5e13] bg-[#ffffff] h-screen">
            <div className="mt-[30px] flex justify-center">
              <div className="w-[211px] flex justify-center cursor-pointer gap-[12px] h-[36px] bg-yashil text-[#fff] rounded-[6px] text-[13px]">
                <Image className="w-[13.2px]" src={tavar} alt="img" />
                <h3 className="mt-[10px]">Maxsus buyurtma</h3>
              </div>
            </div>
            <div>
              <Link href={"/components/homeapp/Smartfonlar"}>
                <div className="flex justify-between p-[20px] mt-[20px]">
                  <h3 className="text-[14px] text-[#0D1136] pl-[20px] font-roboto font-normal">
                    Smartfonlar
                  </h3>
                  <Image className="rotate-[270deg]" src={key1} alt="img" />
                </div>
              </Link>
              <div className="flex justify-between p-[20px]">
                <h3 className="text-[14px] text-[#0D1136] pl-[20px] font-roboto font-normal">
                  Planshetlar
                </h3>
                <Image className="rotate-[270deg]" src={key1} alt="img" />
              </div>
              <div className="flex justify-between p-[20px]">
                <h3 className="text-[14px] text-[#0D1136] pl-[20px] font-roboto font-normal">
                  Quloqchinlar
                </h3>
                <Image className="rotate-[270deg]" src={key1} alt="img" />
              </div>
              <div className="flex justify-between p-[20px]">
                <h3 className="text-[14px] text-[#0D1136] pl-[20px] font-roboto font-normal">
                  Xotira kartalari
                </h3>
                <Image className="rotate-[270deg]" src={key1} alt="img" />
              </div>
              <div className="flex justify-between p-[20px]">
                <h3 className="text-[14px] text-[#0D1136] pl-[20px] font-roboto font-normal">
                  Smartfon aksesuarlari
                </h3>
                <Image className="rotate-[270deg]" src={key1} alt="img" />
              </div>
              <div className="flex justify-between p-[20px]">
                <h3 className="text-[14px] text-[#0D1136] pl-[20px] font-roboto font-normal">
                  Gadjetlar
                </h3>
                <Image className="rotate-[270deg]" src={key1} alt="img" />
              </div>
              <div className="flex justify-between p-[20px]">
                <h3 className="text-[14px] text-[#0D1136] pl-[20px] font-roboto font-normal">
                  Quvvatlovchi uskunalar
                </h3>
                <Image className="rotate-[270deg]" src={key1} alt="img" />
              </div>
              <div className="flex justify-between p-[20px]">
                <h3 className="text-[14px] text-[#0D1136] pl-[20px] font-roboto font-normal">
                  Kabellar
                </h3>
                <Image className="rotate-[270deg]" src={key1} alt="img" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex justify-center"></div>
        </div>
        <div className="w-[1086px] h-[226px] rounded-[6px] bg-[#fff] mt-[30px]">
          <CarouselSlider />
          <div className="flex mt-[30px] gap-[18px]">
            <Image src={korzinka} alt="korzinka" />
            <h1 className="text-[32px] text-[#0A0A0A] font-bold font-roboto">
              Yangi mahsulotlar
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
