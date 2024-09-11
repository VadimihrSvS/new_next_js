
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import ReportsNavbar from "@/components/Navbars/ReportsNavbar";
import SPORNavbar from "@/components/Navbars/SPORNavbar";


export const metadata: Metadata = {
  title: "УП МИНГАЗ",
  description: "APP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
