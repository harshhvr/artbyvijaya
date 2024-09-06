import { Link } from "react-router-dom";
import { brandLogo2 } from "../../assets/vectors";

function Footer() {
  return (
    <>
      {/* Footer */}
      <footer className="flex justify-center items-center relative w-full">
        {/* Footer Nav */}
        <nav className="flex flex-wrap justify-evenly items-center gap-5 p-5 w-full shadow bg-gray-700 text-gray-300 text-xs">
          {/* Logo */}
            <Link to="/home" className="block">
              <img src={brandLogo2} alt="Brand Logo" className="h-6" />
            </Link>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center items-center gap-5">
            <li className="flex justify-center items-center text-center">
              <Link to="/home" className="text-gray-300 active:text-gray-100">
                Home
              </Link>
            </li>
            <li className="flex justify-center items-center text-center">
              <Link
                to="/explore"
                className="text-gray-300 active:text-gray-100"
              >
                Explore
              </Link>
            </li>
            <li className="flex justify-center items-center text-center">
              <Link to="/new" className="text-gray-300 active:text-gray-100">
                New
              </Link>
            </li>
            <li className="flex justify-center items-center text-center">
              <Link
                to="/favorite"
                className="text-gray-300 active:text-gray-100"
              >
                Favorite
              </Link>
            </li>
            <li className="flex justify-center items-center text-center">
              <Link
                to="/collections"
                className="text-gray-300 active:text-gray-100"
              >
                Collections
              </Link>
            </li>
          </ul>

          {/* Copyright Note */}
          <div className="flex justify-center items-center text-center">
            &copy; {new Date().getFullYear()} Art by Vijaya. All rights
            reserved.
          </div>
        </nav>
      </footer>
    </>
  );
}

export default Footer;
