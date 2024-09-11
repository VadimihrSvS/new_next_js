'use client'

import { usePathname } from "next/navigation";
import ReportsNavbar from "./Navbars/ReportsNavbar";
import SPORNavbar from "./Navbars/SPORNavbar";


const Navbar = () => {
    const pathname = usePathname()
    console.log(pathname)
    return (
        <div className="navbar">
            {pathname.includes("/reports") || pathname === '/' ? <ReportsNavbar></ReportsNavbar> : <></>}
            {pathname.includes("/SPOR") ? <SPORNavbar></SPORNavbar> : <></>}
        </div>)
}

export default Navbar;