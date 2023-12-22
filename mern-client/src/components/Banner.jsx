import React from "react";
import BannerCard from "../home/BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex flex-col md:flex-row w-full justify-between items-center gap-12 py-40">
        {/* left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Kitaab:
            <span className="text-blue-700 px-2 ">
              Your Gateway to Infinite Narratives.
            </span>
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            cupiditate temporibus aliquam tempore amet repudiandae, adipisci,
            eos nisi, voluptates accusamus illo deserunt. Quo tempora ut est
            expedita minima alias veritatis, omnis ipsam. Dicta animi quibusdam
            consequuntur deserunt exercitationem consectetur quae!
          </p>
          <div>
            <input
              type="search"
              name="search"
              placeholder="Search your book"
              className="py-2 px-2 rounded-md outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black rounded-s-sm transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div>
          <BannerCard />
        </div>
      </div>
    </div>
  );
};

export default Banner;
