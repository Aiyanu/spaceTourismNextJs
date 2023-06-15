"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "public/assets/shared/logo.svg";
import { Bellefair } from "next/font/google";

const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav
      className={`${bellefair.className} hidden md:flex gap-3 justify-around items-center mt-5 bg-none absolute left-0 right-0 top-5`}
    >
      <div>
        <Image src={Logo} alt="" width={48} height={48} />
      </div>
      <div className="md:hidden border-[rgba(255,255,255,0.2)] w-[50%]" />
      <div className="relative backdrop-filter backdrop-blur-sm w-[30%] py-7 px-4">
        <ul className="text-third text-[16px] uppercase flex gap-2 relative items-center justify-around list-none">
          <li>
            <Link href="/" className={`relative`}>
              <span className="mr-2">00</span>
              Home
              <div
                className={` h-0.5 z-10 w-full bg-third absolute bottom-[-1.95rem] ${
                  pathname === "/" ? "block" : "hidden"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link href="/destination" className={`relative`}>
              <span className="mr-2">01</span>
              Destination
              <div
                className={` h-0.5 z-10 w-full bg-third absolute bottom-[-1.95rem] ${
                  pathname === "/destination" ? "block" : "hidden"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link href="/crew" className={`relative`}>
              <span className="mr-2">02</span>
              Crew
              <div
                className={` h-0.5 z-10 w-full bg-third absolute bottom-[-1.95rem]  ${
                  pathname === "/crew" ? "block" : "hidden"
                }`}
              />
            </Link>
          </li>
          <li>
            <Link href="/technology" className={`relative`}>
              <span className="mr-2">03</span>
              Technology
              <div
                className={` h-0.5 z-10 w-full bg-third absolute bottom-[-1.95rem]  ${
                  pathname === "/technology" ? "block" : "hidden"
                }`}
              />
            </Link>
          </li>
        </ul>
      </div>
      <style jsx>{`
        nav ul li:hover div {
          opacity: 0.5;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
