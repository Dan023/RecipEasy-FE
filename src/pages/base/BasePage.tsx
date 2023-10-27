import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../../components/NavbarComponent";

export const BasePage = () => {
  return (
    <div>
      <NavbarComponent />
      <Outlet />
    </div>
  );
};
