import {} from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  openSidebar,
  closeSidebar,
} from "../../../../features/sidebar/sidebarSlice";

function SidebarToggler() {
  const sidebarIsOpen = useSelector((state) => state.sidebar.isOpen);

  const dispatch = useDispatch();

  return (
    <>
      {/* Sidebar Toggler */}
      <button
        type="button"
        className={`z-10 flex justify-center items-center w-8 h-8 rounded-full transition-all ${
          sidebarIsOpen
            ? "text-gray-100 active:bg-white/10"
            : "text-gray-500 active:bg-gray-700/10"
        }`}
        onClick={() => {
          dispatch(sidebarIsOpen ? closeSidebar() : openSidebar());
        }}
      >
        {sidebarIsOpen ? <MdClose size={20} /> : <MdMenu size={20} />}
      </button>
    </>
  );
}

export default SidebarToggler;
