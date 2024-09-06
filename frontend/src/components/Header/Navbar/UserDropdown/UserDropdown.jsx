import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MdLogout, MdPerson } from "react-icons/md";
import { defaultAvatar } from "../../../../assets/vectors";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../../../features/user/userSlice";

function UserDropdown() {
  const [dropdown1IsOpen, setDropdown1IsOpen] = useState(false);

  const dropdown1Ref = useRef();

  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const userMenuLinks = [
    { name: "Profile", path: "/profile", icon: <MdPerson size={20} /> },
  ];

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

  return (
    <>
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
                  <div className="font-semibold text-lg">{user.name}</div>
                  <div className="text-sm">{user.email}</div>
                </div>
              </div>

              <hr />

              {/* Dropdown Links */}
              <ul className="grid grid-cols-1 py-2">
                {/* Normal Links */}
                {userMenuLinks.map((link_props, link_props_index) => (
                  <Link
                    key={`user-menu-links-${link_props_index}`}
                    to={link_props.path}
                    className="flex justify-start items-center gap-3 px-5 py-2 hover:bg-gray-100 active:bg-gray-200"
                  >
                    {link_props.icon}
                    {link_props.name}
                  </Link>
                ))}

                {/* Important Links */}
                <Link
                  to="/sign-out"
                  className="flex justify-start items-center gap-3 px-5 py-2 hover:bg-red-100 active:bg-red-200 text-red-600"
                  onClick={() => {
                    dispatch(signOut());
                  }}
                >
                  <MdLogout size={20} />
                  <span>Sign out</span>
                </Link>
              </ul>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default UserDropdown;
