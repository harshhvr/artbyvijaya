import {
  MdCollections,
  MdExplore,
  MdFavorite,
  MdHome,
  MdNewReleases,
} from "react-icons/md";
import { NavLink } from "react-router-dom";

function MobileNav() {
  return (
    <>
      <div className="block md:hidden sticky bottom-0 w-full shadow bg-white">
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] p-2 w-full min-h-16">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `flex flex-col gap-1 justify-center items-center rounded ${
                isActive ? "text-black" : "text-gray-500 active:bg-gray-700/10"
              }`
            }
          >
            <MdHome size={20} />
            <div className="text-[7px] uppercase">Home</div>
          </NavLink>

          <NavLink
            to="/explore"
            className={({ isActive }) =>
              `flex flex-col gap-1 justify-center items-center rounded ${
                isActive ? "text-black" : "text-gray-500 active:bg-gray-700/10"
              }`
            }
          >
            <MdExplore size={20} />
            <div className="text-[7px] uppercase">Explore</div>
          </NavLink>

          <NavLink
            to="/new"
            className={({ isActive }) =>
              `flex flex-col gap-1 justify-center items-center rounded ${
                isActive ? "text-black" : "text-gray-500 active:bg-gray-700/10"
              }`
            }
          >
            <MdNewReleases size={20} />
            <div className="text-[7px] uppercase">New</div>
          </NavLink>

          <NavLink
            to="/favorite"
            className={({ isActive }) =>
              `flex flex-col gap-1 justify-center items-center rounded ${
                isActive ? "text-black" : "text-gray-500 active:bg-gray-700/10"
              }`
            }
          >
            <MdFavorite size={20} />
            <div className="text-[7px] uppercase">Favorite</div>
          </NavLink>

          <NavLink
            to="/collections"
            className={({ isActive }) =>
              `flex flex-col gap-1 justify-center items-center rounded ${
                isActive ? "text-black" : "text-gray-500 active:bg-gray-700/10"
              }`
            }
          >
            <MdCollections size={20} />
            <div className="text-[7px] uppercase">Collections</div>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default MobileNav;
