import { Menu } from "lucide-react";
import { House } from "lucide-react";
import { Search } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function RootLayer() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-roboto">
      <div className="flex justify-between pt-16 pb-2">
        <div className="mx-4 text-primary text-xl font-extrabold">
          <div>
            <img
              src="/news_logo.png"
              alt="site-logo"
              className="h-8 md:h-10 lg:h-12"
            />
          </div>
        </div>
        <div className="mx-4 cursor-pointer">
          <Menu />
        </div>
      </div>
      <form className="flex justify-end mx-4 my-1">
        <label htmlFor="country" className="text-secondary">
          Country
        </label>
        <select id="country"></select>
      </form>
      <section className="flex-grow">
        <Outlet />
      </section>
      <footer className="shadow-[0_-5px_8px_rgba(0,0,0,0.08)] flex justify-around items-center mt-4 pt-6">
        <div className="flex flex-col items-center cursor-pointer">
          <House size={19} />
          <p className="text-secondary ">Home</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <Search size={19} />
          <p className="text-secondary">search</p>
        </div>
      </footer>
    </div>
  );
}
