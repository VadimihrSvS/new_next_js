
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "УП МИНГАЗ",
  description: "APP",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {

  return (
    <html lang="en" >
      {/* <body suppressHydrationWarning={true}> */}
      <body>
        {children}
      </body>
    </html>
  );
}
