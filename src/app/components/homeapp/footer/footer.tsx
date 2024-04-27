import React from "react";
import { Footer2 } from "./footer2";
import Logo from "../../../../../public/Logo.svg";
import GooglePlay from "../../../../../public/Footer_icon/googleplay.svg";
import AppStore from "../../../../../public/Footer_icon/appstore.svg";
import Image from "next/image";

export const Footer = () => {
  return (
    <div>
      <div className="flex lg:hidden">
        <Footer2 />
      </div>
      <div className=" hidden lg:flex">
        <div className="container p-[20px]">
          <div className="w-full h-[201px] bg-[#fff] flex justify-between">
            <div>
              <div className="mt-[32px]">
                <Image className="w-[165.71px] h-[40px]" src={Logo} alt="" />
              </div>
              <div className="mt-[24px]">
                <h3 className="text-[19px] font-medium font-roboto">
                  Mobilux © 2022
                </h3>
                <p className="text-[15px] font-normal font-roboto">
                  Barcha huquqlar kafolatlangan
                </p>
              </div>
              <div className="flex gap-[12px] mt-[16px]">
                <div>
                  <Image src={GooglePlay} alt="" />
                </div>
                <div>
                  <Image src={AppStore} alt="" />
                </div>
              </div>
            </div>
            <div className="mt-[32px]">
              <h2 className="text-[19px] font-medium text-[#0D1136] font-roboto">
                Foydali havolalar
              </h2>
              <ul className="mt-[10px]">
                <li className="text-[13px] text-[#0D1136] font-normal font-roboto leading-[25px]">
                  Bosh sahifa
                </li>
                <li className="text-[13px] text-[#0D1136] font-normal font-roboto leading-[25px]">
                  Yordam kerakmi?
                </li>
                <li className="text-[13px] text-[#0D1136] font-normal font-roboto leading-[25px]">
                  Foydalanish shartlari
                </li>
                <li className="text-[13px] text-[#0D1136] font-normal font-roboto leading-[25px]">
                  Maxfiylik siyosati
                </li>
              </ul>
            </div>
            <div className="mt-[32px]">
              <h2 className="text-[19px] font-medium text-[#0D1136] font-roboto">Biz haqimizda</h2>
              <ul>
                <li className=" w-[450px] xl:w-auto text-[13px] text-[#0D1136] font-normal font-roboto leading-[25px]">Manzil: #214, G-dong, Lotte castle, 347 Jongno, Jongno-gu, Seoul, 03113, Crescent Trade ltd</li>
                <li className="text-[13px] text-[#0D1136] font-normal font-roboto leading-[25px]">Korxona nomi: CrayzeS</li>
                <li className="text-[13px] text-[#0D1136] font-normal font-roboto leading-[25px]"> Korxona rahbari: ASAULLAYEV BEXRUZ</li>
                <li className="text-[13px] text-[#0D1136] font-normal font-roboto leading-[25px]">Registratsiya raqami:  433-62-00377</li>
                <li className="text-[13px] text-[#0D1136] font-normal font-roboto leading-[25px]">Telefon raqam: 93 635 96 07</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
