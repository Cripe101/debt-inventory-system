import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export const HomeLayout = () => {
  return (
    <div className="max-w-[500px] max-h-[800px] bg-gradient-to-br from-green-400 via-yellow-500 to-red-600 h-screen w-screen flex flex-col justify-between p-2">
      <div className="flex justify-center">
        <Outlet />
      </div>
      <Navbar />
    </div>
  );
};
