"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../../../../public/Logo.svg";
import uzb from "../../../../../public/uzb.svg";
import key from "../../../../../public/key1.svg";
import search from "../../../../../public/search.svg";
import profile from "../../../../../public/profile.svg";
import sms from "../../../../../public/sms.svg";
import filter from "../../../../../public/filter.svg";
import Request from "@/config/request";

export const Header = () => {
  return (
   <div className="container">
     <div className="h-[92px] shadow-[0px_12px_18px_-2px_rgba(0,0,0,0.04)] ">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 wep:px-16">
        <div className="flex justify-between mt-[16px]">
          <div className="tablet:mt-[8px]">
            <Image src={Logo} alt="Logo" priority={true} />
          </div>
          <div className="flex gap-[10px]">
            <div className=" hidden tablet:flex md:hidden">
              <div className="tablet:w-[250px]">
                <input
                  className=" bg-[#F6F8FA] w-auto h-[38px] border border-yashil pl-[10px] outline-none rounded-[6px]"
                  type="search"
                  placeholder="Qidirish"
                />
              </div>
            </div>
            <div className=" hidden md:flex lg:w-[500px] border border-yashil bg-[#F6F8FA] rounded-[6px] xl:w-[700px] wep:w-[930px]">
              <div className="flex justify-center cursor-pointer">
                <Image src={search} alt="" />
              </div>
              <div className="w-full">
                <input
                  className="bg-[#f6f8fa00] w-[100%] h-[38px] pl-[10px] outline-none"
                  type="search"
                  placeholder="Qidirish"
                />
              </div>
              <div className="cursor-pointer gap-[8px] hidden  bg-yashil w-[118px] lg:flex justify-center ">
                <Image src={filter} alt="" />
                <h3 className="text-[#FFFFFF] mt-[6px] font-semibold">
                  filter
                </h3>
              </div>
            </div>
            <div className=" cursor-pointer flex gap-[6px] mt-[-5px] w-[78px] h-[38px] tablet:mt-[2px] md:bg-[#F6F8FA] md:ml-[20px]  md:rounded-[5px] justify-center">
              <Image
                src={uzb}
                alt="uzb"
                priority={true}
                width={15}
                height={15}
                className="mt-[2px]"
              />
              <h3 className="text-[15px] font-normal text-yashil pt-[10px]">
                Uz
              </h3>
              <Image src={key} alt="img" />
            </div>
            <div className=" tablet:hidden mt-[5px]">
              <Image src={search} alt="" />
            </div>
            <div className=" hidden lg:flex pl-[24px] gap-[24px] justify-center mt-[10px]">
              <div>
                <Image src={sms} alt="" />
              </div>
              <div className="flex gap-[12px] justify-center">
                <h3 className=" text-[#0A0A0A] font-semibold">Kirish</h3>
                <Image className="mt-[-5px]" src={profile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};
