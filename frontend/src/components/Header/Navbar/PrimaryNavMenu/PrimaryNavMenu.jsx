import { NavLink } from "react-router-dom";

function PrimaryNavMenu() {
  const primaryMenuLinks = [
    { name: "Home", path: "/home" },
    { name: "Explore", path: "/explore" },
    { name: "New", path: "/new" },
    { name: "Favorite", path: "/favorite" },
    { name: "Categories", path: "/categories" },
  ];

  return (
    <>
      {/* Navigation Links */}
      <ul className="hidden md:flex justify-center items-center gap-5">
        {primaryMenuLinks.map((link_props, link_props_index) => (
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
        ))}
      </ul>
    </>
  );
}

export default PrimaryNavMenu;
