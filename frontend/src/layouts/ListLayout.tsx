import { Outlet } from "react-router-dom";
import ListBar from "../components/ListBar";

export const ListLayout = () => {
  return (
    <div className="max-w-[500px] max-h-[800px] bg-gradient-to-br from-green-400 via-yellow-500 to-red-600 h-screen w-screen flex flex-col justify-between p-3 xl:my-5 overflow-auto no-scrollbar">
      <div className="flex justify-center">
        <Outlet />
      </div>
      <ListBar />
    </div>
  );
};
