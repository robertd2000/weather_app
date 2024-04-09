import { Outlet } from "react-router-dom";
import { Header } from "../../widgets/header";

export const Layouts = () => {
  return (
    <div>
      <Header />

      <Outlet />
    </div>
  );
};
