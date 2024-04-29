import React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import tavar from "../../../../public/tavar.svg";
import key1 from "../../../../public/key1.svg";
import Image from "next/image";
import Link from "next/link";

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <Header />
        <div className="container">
          <div className="flex">
        
            <div className="w-full flex justify-center bg-[#dbe2e448] overflow-y-auto h-screen">
              {children}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
