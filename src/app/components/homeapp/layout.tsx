import React from "react";
import { Header } from "./header/header";
import { Footer } from "./footer/footer";

const UserLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <div>
        <Header />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};
export default UserLayout;
