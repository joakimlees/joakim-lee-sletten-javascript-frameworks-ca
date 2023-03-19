import { NavHeader } from "./NavHeader";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="site-container">
      <NavHeader />
      <Outlet />
      <Footer />
    </div>
  );
}
