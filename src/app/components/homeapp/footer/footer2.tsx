import React from "react";
import Home from "../../../../../public/Footer_icon/Home.svg";
import Profile from "../../../../../public/Footer_icon/Profil.svg";
import catalog from "../../../../../public/Footer_icon/catalog.svg";
import qoshish from "../../../../../public/Footer_icon/qo'shish.svg";
import savat from "../../../../../public/Footer_icon/savat.svg";
import Link from "next/link";
import Image from "next/image";

export const Footer2 = () => {
  return (
    <div className="flex justify-between w-full h-[51px] bg-[#FFFFFF] ">
      <div className="w-[75px] h-[51px]">
        <div className="flex justify-center mt-[5px]">
          <Image className="w-[24px] h-[24px]" src={Home} alt="" />
        </div>
        <div className="flex justify-center">
          <h2 className="text-[12px] text-[#0A0A0A] font-roboto">Asosiy</h2>
        </div>
      </div>
      <div className="w-[75px] h-[51px] ">
        <div className="flex justify-center mt-[5px]">
          <Image className="w-[24px] h-[24px]" src={catalog} alt="" />
        </div>
        <div className="flex justify-center">
          <h2 className="text-[12px] text-[#0A0A0A] font-normal font-roboto">
            Katalog
          </h2>
        </div>
      </div>
      <div className="w-[75px] h-[51px] ">
        <div className="flex justify-center mt-[5px]">
          <Image className="w-[24px] h-[24px]" src={qoshish} alt="" />
        </div>
        <div className="flex justify-center">
          <h2 className="text-[9px] text-[#0A0A0A] font-normal font-roboto w-[61px] text-center leading-[9px]">
            Maxsus buyurtma
          </h2>
        </div>
      </div>
      <div className="w-[75px] h-[51px] ">
        <div className="flex justify-center mt-[5px]">
          <Image className="w-[24px] h-[24px]" src={savat} alt="" />
        </div>
        <div className="flex justify-center">
          <h2 className="text-[12px] text-[#0A0A0A] font-normal font-roboto">
            Savat
          </h2>
        </div>
      </div>
      <div className="w-[75px] h-[51px] ">
        <div className="flex justify-center mt-[5px]">
          <Image className="w-[24px] h-[24px]" src={Profile} alt="" />
        </div>
        <div className="flex justify-center">
          <h2 className="text-[12px] text-[#0A0A0A] font-normal font-roboto">
            Profil
          </h2>
        </div>
      </div>
    </div>
  );
};
