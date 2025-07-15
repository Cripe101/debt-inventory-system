import { useState } from "react";
import { HiHome } from "react-icons/hi2";
import TabBar from "./TabBar";
import { FiHome, FiUser, FiList } from "react-icons/fi";

const Navbar = () => {
  const [selected, setSelected] = useState("Home");
  const tabs = [
    { label: "Home", icon: <FiHome /> },
    { label: "List", icon: <FiList /> },
    { label: "User", icon: <FiUser /> },
  ];

  return (
    <div className="sticky bottom-5 flex justify-evenly items-center font-semibold backdrop-blur-sm bg-white/35 rounded-xl py-4 duration-300 scroll-smooth">
      <TabBar
        tabs={tabs}
        onTabChange={(tab) => setSelected(tab)}
        initialTab="Home"
      />
    </div>
  );
};

export default Navbar;
