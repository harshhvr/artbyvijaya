import {} from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header, MobileNav } from "./components";

function App() {
  return (
    <>
      <div className="grid grid-rows-[auto_1fr_auto] w-screen h-screen">
        <Header />
        {/* <Outlet /> */}

        <div className="relative overflow-y-auto">
          <Outlet />
          <Footer />
        </div>

        <MobileNav />
      </div>
    </>
  );
}

export default App;
