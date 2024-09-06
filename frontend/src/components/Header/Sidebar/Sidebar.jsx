import {} from "react";
import { useSelector } from "react-redux";

function Sidebar() {
  const sidebarIsOpen = useSelector((state) => state.sidebar.isOpen);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`fixed max-w-80 overflow-hidden transition-all bg-gray-600 text-gray-100 ${
          sidebarIsOpen
            ? "top-0 right-0 w-full h-screen rounded-none opacity-100"
            : "-top-full -right-full w-0 h-0 rounded-full rounded-se-none opacity-0"
        }`}
      >
        Sidebar
      </div>
    </>
  );
}

export default Sidebar;
