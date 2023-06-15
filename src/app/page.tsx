"use client"
import Link from "next/link";
import { Barlow, Barlow_Condensed, Bellefair } from "next/font/google";
import backgroundImageDesktop from "public/assets/home/background-home-desktop.jpg";
import backgroundImageTablet from "public/assets/home/background-home-tablet.jpg";
import backgroundImageMobile from "public/assets/home/background-home-mobile.jpg";

const bellefair = Bellefair({ subsets: ["latin"], weight: "400" });
const barlow = Barlow({ subsets: ["latin"], weight: "400" });
const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "400" });

const Home = () => {
  return (
    <main className=" flex lg:flex-row flex-col justify-center pt-10 lg:pt-0 lg:justify-around items-center h-screen bg-no-repeat bg-cover">
      <style jsx>{`
        @media (min-width: 1024px) {
          main {
            background-image: url(/assets/home/background-home-desktop.jpg);
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          main {
            background-image: url(/assets/home/background-home-tablet.jpg);
          }
        }

        @media (max-width: 767px) {
          main {
            background-image: url(/assets/home/background-home-mobile.jpg);
          }
        }
      `}</style>

      <div className="w-[450px] h-[380px] scale-75">
        <h3 className={`${barlowCondensed.className} text-secondary text-[28px]`}>
          SO, YOU WANT TO TRAVEL TO
        </h3>
        <h1 className={`${bellefair.className} text-[150px] text-third`}>SPACE</h1>
        <p className={`${barlow.className} text-[18px] text-secondary`}>
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>

      <Link
        href="/destination"
        className={` lg:scale-100 bg-white text-[32px] uppercase rounded-full py-24 px-24 text-2xl font-bold ${bellefair.className} h-16 w-16 flex items-center justify-center`}
      >
        Explore
      </Link>
    </main>
  );
};

export default Home;