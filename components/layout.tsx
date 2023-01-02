import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Head from "next/head";
import logo from "../public/logo.png";
type LayoutProps = {
  children: React.ReactNode;
};
const layout = ({ children }: LayoutProps) => {
  return (
    <div className="w-screen h-screen p-2 overflow-hidden bg-paper">
      
      <Header />
      <main className="w-full h-80%">{children}</main>
      <Footer />
    </div>
  );
};

export default layout;
