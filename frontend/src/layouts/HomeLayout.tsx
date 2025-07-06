import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <Outlet />
      </div>
    </div>
  );
};
