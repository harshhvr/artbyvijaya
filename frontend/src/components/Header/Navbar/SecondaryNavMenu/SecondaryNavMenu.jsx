import { NavLink } from "react-router-dom";
import { MdContactSupport } from "react-icons/md";
import { useSelector } from "react-redux";

function SecondaryNavMenu() {
  const user = useSelector((state) => state.user.user);

  const secondaryMenuLinks = [
    {
      name: "Contact",
      path: "/contact",
      icon: <MdContactSupport size={20} />,
    },
  ];

  const secondaryMenuIconLinks = [
    {
      name: "Contact",
      path: "/contact",
      icon: <MdContactSupport size={20} />,
    },
  ];

  return (
    <>
      {/* Navigation Links */}
      <ul className="hidden md:flex justify-center items-center gap-5">
        {secondaryMenuIconLinks.map((link_props, link_props_index) => (
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
        ))}

        {!user &&
          secondaryMenuLinks.map((link_props, link_props_index) => (
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
          ))}
      </ul>
    </>
  );
}

export default SecondaryNavMenu;
