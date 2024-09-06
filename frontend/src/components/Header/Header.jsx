import { Link, NavLink } from "react-router-dom";
import { brandIcon, brandLogo, defaultAvatar } from "../../assets/vectors";
import {
  MdClose,
  MdContactSupport,
  MdLogin,
  MdLogout,
  MdMenu,
  MdPerson,
} from "react-icons/md";
import users from "../../data/users";
import { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

console.log(users);

function Header() {
  const [dropdown1IsOpen, setDropdown1IsOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);

  const dropdown1Ref = useRef();

  const user = users[0];

  useEffect(() => {
    const handleClickOutsideDropdown1 = (e) => {
      if (!dropdown1Ref.current.contains(e.target)) {
        setDropdown1IsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutsideDropdown1);

    return () => {
      document.removeEventListener("click", handleClickOutsideDropdown1);
    };
  }, []);

  const headerLinks = {
    primaryMenuLinks: [
      { name: "Home", path: "/home" },
      { name: "Explore", path: "/explore" },
      { name: "New", path: "/new" },
      { name: "Favorite", path: "/favorite" },
      { name: "Categories", path: "/categories" },
    ],
    secondaryMenuLinks: [
      { name: "Sign in", path: "/sign-in", icon: <MdLogin size={20} /> },
    ],
    secondaryMenuIconLinks: [
      {
        name: "Contact",
        path: "/contact",
        icon: <MdContactSupport size={20} />,
      },
    ],
    userMenuLinks: [
      { name: "Profile", path: "/profile", icon: <MdPerson size={20} /> },
    ],
    userMenuImportantLinks: [
      { name: "Sign out", path: "/sign-out", icon: <MdLogout size={20} /> },
    ],
  };

  return (
    <>
      <header className="sticky top-0 z-[99999] w-full shadow bg-white">
        <Navbar />
        <Sidebar />
      </header>
    </>
  );

  return (
    <>
      <header className="sticky top-0 z-[99999] w-full shadow bg-white">
        {/* Navbar */}
        <nav className="flex justify-between items-center gap-5 px-5 w-full h-16">
          {/* Navbar Left */}
          <div className="flex items-center gap-5">
            {/* Logo */}
            <Link to="/home" className="hidden sm:block">
              <img src={brandLogo} alt="Brand Logo" className="h-6" />
            </Link>

            {/* Logo 2 */}
            <Link to="/home" className="block sm:hidden">
              <img src={brandIcon} alt="Brand Logo" className="h-6" />
            </Link>

            {/* Navigation Links */}
            <ul className="hidden md:flex justify-center items-center gap-5">
              {headerLinks.primaryMenuLinks.map(
                (link_props, link_props_index) => (
                  <NavLink
                    key={`primary-menu-link-${link_props_index}`}
                    to={link_props.path}
                    className={({ isActive }) =>
                      `flex justify-center items-center gap-2 font-source-sans-3 font-medium leading-none ${
                        isActive ? "text-gray-700" : "text-gray-500"
                      }`
                    }
                  >
                    {link_props.name}
                  </NavLink>
                )
              )}
            </ul>
          </div>

          {/* Navbar Right */}
          <div className="flex items-center gap-5">
            {/* Navigation Links */}
            <ul className="hidden md:flex justify-center items-center gap-5">
              {headerLinks.secondaryMenuIconLinks.map(
                (link_props, link_props_index) => (
                  <NavLink
                    key={`secondary-menu-icon-link-${link_props_index}`}
                    to={link_props.path}
                    className={({ isActive }) =>
                      `flex justify-center items-center gap-2 w-8 h-8 font-source-sans-3 font-medium leading-none rounded-full ${
                        isActive
                          ? "text-gray-700"
                          : "text-gray-500 active:bg-gray-700/10"
                      }`
                    }
                  >
                    {link_props.icon}
                  </NavLink>
                )
              )}

              {!user &&
                headerLinks.secondaryMenuLinks.map(
                  (link_props, link_props_index) => (
                    <NavLink
                      key={`secondary-menu-link-${link_props_index}`}
                      to={link_props.path}
                      className={({ isActive }) =>
                        `flex justify-center items-center gap-2 font-source-sans-3 font-medium leading-none ${
                          isActive ? "text-gray-700" : "text-gray-500"
                        }`
                      }
                    >
                      {link_props.name}
                    </NavLink>
                  )
                )}
            </ul>

            {/* User Dropdown Holder */}
            <div className="hidden md:flex justify-center items-center gap-5">
              {/* User Dropdown */}
              {user && (
                <div
                  ref={dropdown1Ref}
                  className="relative flex justify-center items-center"
                >
                  {/* Dropdown Toggler */}
                  <button
                    onClick={() => {
                      setDropdown1IsOpen(!dropdown1IsOpen);
                    }}
                    type="button"
                    className="relative overflow-hidden rounded-full outline outline-4 outline-transparent focus:outline-gray-700/25"
                  >
                    <img
                      src={user.avatar || defaultAvatar}
                      alt="User Avatar"
                      className="h-6 aspect-square rounded-full object-cover"
                    />
                  </button>

                  {/* Dropdown Target */}
                  {dropdown1IsOpen && (
                    <div className="absolute top-full right-0 mt-4 grid grid-cols-1 rounded w-80 border drop-shadow bg-white after:content-[''] after:absolute after:-top-3 after:right-1 after:border-x-[8px] after:border-x-transparent after:border-b-[12px] after:border-b-white">
                      {/* User Info */}
                      <div className="flex justify-start items-center gap-5 p-5">
                        <img
                          src={user.avatar || defaultAvatar}
                          alt="User Avatar"
                          className="h-16 aspect-square rounded-full object-cover"
                        />
                        <div className="flex flex-col justify-evenly">
                          <div className="font-semibold text-lg">
                            {user.name}
                          </div>
                          <div className="text-sm">{user.email}</div>
                        </div>
                      </div>

                      <hr />

                      {/* Dropdown Links */}
                      <ul className="grid grid-cols-1 py-2">
                        {/* Normal Links */}
                        {headerLinks.userMenuLinks.map(
                          (link_props, link_props_index) => (
                            <Link
                              key={`user-menu-links-${link_props_index}`}
                              to={link_props.path}
                              className="flex justify-start items-center gap-3 px-5 py-2 hover:bg-gray-100 active:bg-gray-200"
                            >
                              {link_props.icon}
                              {link_props.name}
                            </Link>
                          )
                        )}

                        {/* Important Links */}
                        {headerLinks.userMenuImportantLinks.map(
                          (link_props, link_props_index) => (
                            <Link
                              key={`user-menu-important-links-${link_props_index}`}
                              to={link_props.path}
                              className="flex justify-start items-center gap-3 px-5 py-2 hover:bg-red-100 active:bg-red-200 text-red-600"
                            >
                              {link_props.icon}
                              {link_props.name}
                            </Link>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Sidebar Toggler */}
            <button
              type="button"
              className="flex justify-center items-center w-8 h-8 rounded-full transition-all text-gray-500 active:bg-gray-700/10"
              onClick={() => {
                setSidebarIsOpen(!sidebarIsOpen);
              }}
            >
              {sidebarIsOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
            </button>
          </div>
        </nav>

        {/* Sidebar */}
      </header>
    </>
  );
}

export default Header;
