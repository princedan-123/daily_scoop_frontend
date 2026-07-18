import HomeMenu from "./HomeMenu";
import { House } from "lucide-react";
import { Search } from "lucide-react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function RootLayer() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-roboto">
      <div className="flex justify-between pt-16 pb-2">
        <div className="mx-4 text-primary text-xl font-extrabold">
          <Link to="/">
            <img
              src="/news_logo.png"
              alt="site-logo"
              className="h-8 md:h-10 lg:h-12"
            />
          </Link>
        </div>
        <div className="mx-4 cursor-pointer">
          <HomeMenu />
        </div>
      </div>
      <form className="flex justify-end mx-4 my-1">
        <label htmlFor="country" className="text-secondary">
          Country
        </label>
        <select id="country"></select>
      </form>
      <section className="flex-grow">
        <section className="font-roboto flex flex-wrap gap-4 ml-4 mb-4 cursor-pointer font-bold">
          <NavLink className="category-button" to="category/sports">
            Sports
          </NavLink>
          <NavLink className="category-button" to="category/Health">
            Health
          </NavLink>
          <NavLink className="category-button" to="category/Business">
            Business
          </NavLink>
          <NavLink className="category-button" to="category/Politics">
            Politics
          </NavLink>
          <NavLink className="category-button" to="category/Entertainment">
            Entertainment
          </NavLink>
          <NavLink className="category-button" to="category/Science">
            Science
          </NavLink>
          <NavLink className="category-button" to="category/World">
            World
          </NavLink>
          <NavLink className="category-button" to="category/Technology">
            Technology
          </NavLink>
          <NavLink className="category-button" to="category/Food">
            Food
          </NavLink>
          <NavLink className="category-button" to="category/Finance">
            Finance
          </NavLink>
        </section>
        <Outlet />
      </section>
      <footer className="shadow-[0_-5px_8px_rgba(0,0,0,0.08)] flex justify-around items-center mt-4 pt-6">
        <Link to="/" className="flex flex-col items-center cursor-pointer">
          <House size={19} />
          <p className="text-secondary ">Home</p>
        </Link>
        <div className="flex flex-col items-center cursor-pointer">
          <Search size={19} />
          <p className="text-secondary">search</p>
        </div>
      </footer>
    </div>
  );
}
