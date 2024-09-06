import Brand from "./Brand/Brand";
import PrimaryNavMenu from "./PrimaryNavMenu/PrimaryNavMenu";
import SecondaryNavMenu from "./SecondaryNavMenu/SecondaryNavMenu";
import SidebarToggler from "./SidebarToggler/SidebarToggler";
import UserDropdown from "./UserDropdown/UserDropdown";

function Navbar() {
  return (
    <nav className="flex justify-between items-center gap-5 px-5 w-full h-16">
      {/* Navbar Left */}
      <div className="flex items-center gap-5">
        <Brand />
        <PrimaryNavMenu />
      </div>

      {/* Navbar Right */}
      <div className="flex items-center gap-5">
        <SecondaryNavMenu />

        {/* User Dropdown Holder */}
        <div className="hidden md:flex justify-center items-center gap-5">
          <UserDropdown />
        </div>

        <SidebarToggler />
      </div>
    </nav>
  );
}

export default Navbar;
