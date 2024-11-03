'use client'

import { usePathname } from "next/navigation";
import SPORNavbar from "./Navbars/SPORNavbar";
import MUMGNavbar from "./Navbars/MumgNavbar";


const Navbar = () => {
    const pathname = usePathname()
    return (
        <div className="navbar">
            {pathname.includes("/MUMG") ? <MUMGNavbar></MUMGNavbar> : <></>}
            {pathname.includes("/SPOR") ? <SPORNavbar></SPORNavbar> : <></>}
        </div>)
}

export default Navbar;