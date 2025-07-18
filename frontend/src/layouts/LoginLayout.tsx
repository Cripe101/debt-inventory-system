import { Outlet } from "react-router-dom";

const LoginLayout = () => {
  return (
    <div className="max-w-[500px] max-h-[800px] bg-gradient-to-br from-green-400 via-yellow-500 to-red-600 h-screen w-screen flex justify-center items-center p-3 xl:my-5 overflow-auto no-scrollbar">
      <div className="">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
