import { Link } from "react-router-dom";
import { brandIcon, brandLogo } from "../../../../assets/vectors";

function Brand() {
  return (
    <>
      {/* Logo */}
      <Link to="/home" className="hidden sm:block">
        <img src={brandLogo} alt="Brand Logo" className="h-6" />
      </Link>

      {/* Logo 2 */}
      <Link to="/home" className="block sm:hidden">
        <img src={brandIcon} alt="Brand Logo" className="h-6" />
      </Link>
    </>
  );
}

export default Brand;
