import React from "react";
import close from "public/assets/shared/icon-close.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type sidebarProps = {
  isOpen: boolean;
  closeSidebar:()=>void
}


const Sidebar = ({ closeSidebar, isOpen }: sidebarProps) => {
  const pathname = usePathname()
  
  return (
    <nav
      className={`${
        isOpen ? "w-60" : "w-0"
      } md:hidden overflow-hidden flex flex-col gap-8 items-start absolute z-20 text-third top-0 bottom-0 right-0 h-screen pt-8 bg-[rgba(255,255,255,0.2)] transition-all duration-1000 backdrop-filter backdrop-blur-sm `}
    >
      <div className="pl-4 animate-pulse" onClick={closeSidebar}>
        <Image src={close} alt="close" className={`cursor-pointer`} />
      </div>
      <div className="pl-8">
        <ul className="uppercase flex flex-col gap-8 text-xl">
          <li className={`${pathname === "/" ? "font-bold" : ""}`}>
            <Link href={"/"}>
              <span className="font-extrabold">00</span> Home
            </Link>
          </li>
          <li className={`${pathname === "/destination" ? "font-bold" : ""}`}>
            <Link href={"/destination"}>
              <span className="font-extrabold">01</span> Destination
            </Link>
          </li>
          <li className={`${pathname === "/crew" ? "font-extrabold" : ""}`}>
            <Link href={"/crew"}>
              <span className="font-bold">02</span> Crew
            </Link>
          </li>
          <li
            className={`${pathname === "/technology" ? "font-extrabold" : ""}`}
          >
            <Link href={"/technology"}>
              <span className="font-bold">03</span> Technology
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
