import { Fragment, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  MdAccountBox,
  MdAccountCircle,
  MdArrowForwardIos,
  MdClose,
  MdContactSupport,
  MdDashboard,
  MdHome,
  MdInfo,
  MdLogout,
  MdMenu,
  MdSettings,
} from "react-icons/md";
import { HiCollection } from "react-icons/hi";
import { brandIcon, defaultAvatar } from "../../assets/vectors";

// Import Redux
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../features/user/userSlice";

function Header() {
  const [dropdown1IsOpen, setDropdown1IsOpen] = useState(false);
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false);
  const dropdown1Ref = useRef();
  const sidebarRef = useRef();

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const handleUserLogout = () => {
    dispatch(logout());
  };

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

  useEffect(() => {
    const handleClickOutsideSidebar = (e) => {
      if (!sidebarRef.current.contains(e.target)) {
        setSidebarIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutsideSidebar);

    return () => {
      document.removeEventListener("click", handleClickOutsideSidebar);
    };
  }, []);

  return (
    <>
      <header className="relative grid grid-cols-1 gap-4 h-16 z-[99999] bg-white shadow-md">
        <div className="relative flex justify-between items-center gap-4 w-100 px-4">
          {/* Logo */}
          <a
            href="/home"
            title="Art by Vijaya"
            className="flex justify-center items-center gap-4"
          >
            <img src={brandIcon} alt="Brand Icon" className="flex h-8" />
          </a>

          {/* Nav Container */}
          <div className="hidden md:flex justify-center items-center gap-4 relative">
            {/* Navigation Menu */}
            <nav className="flex justify-center items-center gap-4 relative">
              <ul className="flex justify-center items-center gap-4">
                <NavLink
                  to="/home"
                  className={({ isActive }) =>
                    `flex justify-center items-center gap-2 font-semibold ${
                      isActive
                        ? "text-black"
                        : "text-slate-500 hover:text-slate-600 active:text-black"
                    }`
                  }
                >
                  <MdHome size={20} />
                  <span>Home</span>
                </NavLink>

                <NavLink
                  to="/collections"
                  className={({ isActive }) =>
                    `flex justify-center items-center gap-2 font-semibold ${
                      isActive
                        ? "text-black"
                        : "text-slate-500 hover:text-slate-600 active:text-black"
                    }`
                  }
                >
                  <HiCollection size={20} />
                  <span>Collections</span>
                </NavLink>

                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `flex justify-center items-center gap-2 font-semibold ${
                      isActive
                        ? "text-black"
                        : "text-slate-500 hover:text-slate-600 active:text-black"
                    }`
                  }
                >
                  <MdInfo size={20} />
                  <span>About</span>
                </NavLink>

                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `flex justify-center items-center gap-2 font-semibold ${
                      isActive
                        ? "text-black"
                        : "text-slate-500 hover:text-slate-600 active:text-black"
                    }`
                  }
                >
                  <MdContactSupport size={20} />
                  <span>Contact</span>
                </NavLink>
              </ul>
            </nav>

            <div className="flex justify-center items-center gap-4 px-4 border-l-2 border-slate-600/50">
              {user !== null ? (
                <Fragment>
                  {/* User Dropdown */}
                  <div
                    ref={dropdown1Ref}
                    className="relative flex justify-center items-center"
                  >
                    {/* User Dropdown Toggler */}
                    <button
                      onClick={() => {
                        setDropdown1IsOpen(!dropdown1IsOpen);
                      }}
                      className="flex justify-center items-center outline-none rounded-full hover:bg-slate-100 active:bg-slate-200"
                    >
                      <img
                        src={user.avatar ? user.avatar : defaultAvatar}
                        alt="User Avatar"
                        className="flex h-8 object-cover aspect-square rounded-full border border-slate-600"
                      />
                      {/* <div className="px-2 font-medium">Profile</div> */}
                    </button>

                    {dropdown1IsOpen && (
                      <Fragment>
                        {/* User Dropdown Target */}
                        <div className="absolute top-full right-0 grid grid-cols-1 min-w-80 mt-5 py-1 border rounded-md shadow-md bg-white after:content-[''] after:absolute after:-top-2 after:right-2 after:w-4 after:h-4 after:border-t after:border-l after:rounded-tl-sm after:rotate-45 after:bg-white after:shadow-[-2px_-2px_4px_-1px_rgba(0,0,0,0.1)]">
                          {/* User Info */}
                          <div className="grid grid-cols-[auto_1fr] gap-4 p-4">
                            <img
                              src={user.avatar ? user.avatar : defaultAvatar}
                              alt="User Avatar"
                              className="flex self-center h-16 aspect-square rounded-full object-cover"
                            />

                            <div className="flex flex-col justify-evenly items-start relative">
                              <div className="font-semibold text-lg">
                                {user.name}
                              </div>
                              <div className="font-medium text-sm">
                                {user.email}
                              </div>
                            </div>
                          </div>

                          {/* User Menu */}
                          <ul className="grid grid-cols-1 py-1 border-t">
                            <Link
                              to="/user/profile"
                              onClick={() => {
                                setDropdown1IsOpen(false);
                              }}
                              className="flex justify-start items-center gap-4 px-4 py-1 font-medium text-black hover:bg-slate-100 active:bg-slate-200"
                            >
                              <div className="p-1 aspect-square rounded bg-black/15">
                                <MdAccountCircle size={20} />
                              </div>
                              Profile
                            </Link>
                          </ul>

                          {/* User Actions */}
                          <ul className="grid grid-cols-1 py-1 border-t">
                            <button
                              onClick={() => {
                                setDropdown1IsOpen(false);
                                handleUserLogout();
                              }}
                              className="flex justify-start items-center gap-4 px-4 py-1 font-medium text-red-600 hover:bg-slate-100 active:bg-slate-200"
                            >
                              <div className="p-1 aspect-square rounded bg-red-600/15">
                                <MdLogout size={20} />
                              </div>
                              Logout
                            </button>
                          </ul>
                        </div>
                      </Fragment>
                    )}
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  {/* Login Button */}
                  <Link
                    to="/login"
                    className="flex justify-center items-center gap-2 px-4 py-2 font-medium rounded-md bg-slate-600 text-white active:bg-black"
                  >
                    Login
                  </Link>
                </Fragment>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div
            ref={sidebarRef}
            className="flex md:hidden justify-center items-center relative"
          >
            {/* Sidebar Open Button */}
            <button
              onClick={() => {
                setSidebarIsOpen(true);
              }}
              className="flex justify-center items-center h-8 aspect-square outline-none rounded-full text-slate-600 hover:bg-slate-100 active:bg-slate-200"
            >
              <MdMenu size={20} />
            </button>

            {sidebarIsOpen && (
              <Fragment>
                {/* Sidebar Menu */}
                <div className="fixed top-0 right-0 grid grid-rows-[auto_auto_1fr] max-w-96 w-full h-screen shadow-md bg-white overflow-y-auto">
                  <div className="relative flex justify-between items-center gap-4 px-4 h-16">
                    {/* Logo */}
                    <a
                      href="/home"
                      title="Art by Vijaya"
                      className="flex justify-center items-center gap-4"
                    >
                      <img
                        src={brandIcon}
                        alt="Brand Icon"
                        className="flex h-8"
                      />
                    </a>

                    {/* Sidebar Close Button */}
                    <button
                      onClick={() => {
                        setSidebarIsOpen(false);
                      }}
                      className="flex justify-center items-center h-8 aspect-square outline-none rounded-full text-slate-600 hover:bg-slate-100 active:bg-slate-200"
                    >
                      <MdClose size={20} />
                    </button>
                  </div>

                  {user !== null ? (
                    <Fragment>
                      {/* User Info */}
                      <div className="grid grid-cols-[auto_1fr] gap-4 p-4 border-t border-b">
                        <img
                          src={user.avatar ? user.avatar : defaultAvatar}
                          alt="User Avatar"
                          className="flex self-center h-16 aspect-square rounded-full object-cover"
                        />

                        <div className="flex flex-col justify-evenly items-start relative">
                          <div className="font-semibold text-lg">
                            {user.name}
                          </div>
                          <div className="font-medium text-sm">
                            {user.email}
                          </div>
                        </div>
                      </div>
                    </Fragment>
                  ) : (
                    <Fragment></Fragment>
                  )}

                  <nav className="relative overflow-y-auto">
                    {/* Main Menu */}
                    <div className="grid grid-cols-1 gap-2 py-1">
                      <div className="font-semibold text-lg px-4">
                        Main Menu
                      </div>

                      <ul className="grid grid-cols-1">
                        <Link
                          to="/home"
                          onClick={() => {
                            setSidebarIsOpen(false);
                          }}
                          className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-1 font-medium text-black hover:bg-slate-100 active:bg-slate-200"
                        >
                          <div className="p-1 aspect-square rounded bg-black/15">
                            <MdHome size={20} />
                          </div>
                          <span>Home</span>
                          <MdArrowForwardIos size={20} />
                        </Link>

                        <Link
                          to="/collections"
                          onClick={() => {
                            setSidebarIsOpen(false);
                          }}
                          className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-1 font-medium text-black hover:bg-slate-100 active:bg-slate-200"
                        >
                          <div className="p-1 aspect-square rounded bg-black/15">
                            <HiCollection size={20} />
                          </div>
                          <span>Collections</span>
                          <MdArrowForwardIos size={20} />
                        </Link>

                        <Link
                          to="/about"
                          onClick={() => {
                            setSidebarIsOpen(false);
                          }}
                          className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-1 font-medium text-black hover:bg-slate-100 active:bg-slate-200"
                        >
                          <div className="p-1 aspect-square rounded bg-black/15">
                            <MdInfo size={20} />
                          </div>
                          <span>About</span>
                          <MdArrowForwardIos size={20} />
                        </Link>

                        <Link
                          to="/contact"
                          onClick={() => {
                            setSidebarIsOpen(false);
                          }}
                          className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-1 font-medium text-black hover:bg-slate-100 active:bg-slate-200"
                        >
                          <div className="p-1 aspect-square rounded bg-black/15">
                            <MdContactSupport size={20} />
                          </div>
                          <span>Contact</span>
                          <MdArrowForwardIos size={20} />
                        </Link>
                      </ul>
                    </div>

                    {/* User Menu */}
                    <div className="grid grid-cols-1 gap-2 py-1">
                      <div className="font-semibold text-lg px-4">
                        User Menu
                      </div>

                      <ul className="grid grid-cols-1">
                        <Link
                          to="/profile"
                          onClick={() => {
                            setSidebarIsOpen(false);
                          }}
                          className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-1 font-medium text-black hover:bg-slate-100 active:bg-slate-200"
                        >
                          <div className="p-1 aspect-square rounded bg-black/15">
                            <MdAccountBox size={20} />
                          </div>
                          <span>Profile</span>
                          <MdArrowForwardIos size={20} />
                        </Link>

                        <Link
                          to="/settings"
                          onClick={() => {
                            setSidebarIsOpen(false);
                          }}
                          className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-1 font-medium text-black hover:bg-slate-100 active:bg-slate-200"
                        >
                          <div className="p-1 aspect-square rounded bg-black/15">
                            <MdSettings size={20} />
                          </div>
                          <span>Settings</span>
                          <MdArrowForwardIos size={20} />
                        </Link>

                        <Link
                          to="/dashboard"
                          onClick={() => {
                            setSidebarIsOpen(false);
                          }}
                          className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-1 font-medium text-black hover:bg-slate-100 active:bg-slate-200"
                        >
                          <div className="p-1 aspect-square rounded bg-black/15">
                            <MdDashboard size={20} />
                          </div>
                          <span>Dashboard</span>
                          <MdArrowForwardIos size={20} />
                        </Link>

                        <Link
                          to="/logout"
                          onClick={() => {
                            setSidebarIsOpen(false);
                          }}
                          className="grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-1 font-medium text-red-600 hover:bg-slate-100 active:bg-slate-200"
                        >
                          <div className="p-1 aspect-square rounded bg-red-600/15">
                            <MdLogout size={20} />
                          </div>
                          <span>Logout</span>
                          <MdArrowForwardIos size={20} />
                        </Link>
                      </ul>
                    </div>
                  </nav>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
