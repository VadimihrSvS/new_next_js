
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "УП МИНГАЗ",
  description: "APP",
};


export default function RootLayout({
  children, navbar, header
}: Readonly<{
  children: React.ReactNode,
  navbar: React.ReactNode,
  header: React.ReactNode
}>) {
  return (
    <html lang="en" >
      {/* <body suppressHydrationWarning={true}> */}
      <body>
        {header}
        {navbar}
        {children}
      </body>
    </html>
  );
}
