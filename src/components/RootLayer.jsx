import { Menu } from "lucide-react";
import { House } from "lucide-react";
import { Search } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function RootLayer() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-roboto">
      <div className="flex justify-between pt-16 pb-2">
        <div className="mx-4 text-primary text-xl font-extrabold">
          <h1>Logo</h1>
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
      <footer className="flex justify-around items-center">
        <div className="flex flex-col items-center cursor-pointer">
          <House />
          <p className="text-secondary ">Home</p>
        </div>
        <div className="flex flex-col items-center cursor-pointer">
          <Search />
          <p className="text-secondary">search</p>
        </div>
      </footer>
    </div>
  );
}
