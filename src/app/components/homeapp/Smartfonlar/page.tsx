import React from "react";
import Link from "next/link";
import Image from "next/image";
import orqaga from "../../../../../public/ortga.svg";
import key1 from "../../../../../public/key1.svg";
import tavar from "../../../../../public/tavar.svg";

const Smartfonlar = () => {
  return (
    <div className="flex w-full h-screen">
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
        <div className="w-full h-screen">
          <div className="pl-[24px]">
            <Link href={"/components/homeapp/"}>
              <div className="flex w-[100px] h-[30px] gap-[3px] mt-[24px] rounded-[2px] bg-[#fff] cursor-pointer">
                <Image className="ml-[16px]" src={orqaga} alt="img" />
                <h3 className="text-[15px] text-[#0A0A0A] font-bold font-roboto mt-[5px]">
                  Orqaga
                </h3>
              </div>
            </Link>
          </div>
          <div>
            <h3>Smartfonlar</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Smartfonlar;
