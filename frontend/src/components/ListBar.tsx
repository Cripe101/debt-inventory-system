import { useState } from "react";
import TabBar from "./TabBar";
import { FiPackage, FiPlus } from "react-icons/fi";

const ListBar = () => {
  const [selected, setSelected] = useState("Product List");
  console.log(selected);
  const tabs = [
    { label: "Product List", icon: <FiPackage /> },
    { label: "Add Product", icon: <FiPlus /> },
  ];

  return (
    <div className="sticky bottom-5 flex justify-evenly items-center font-semibold backdrop-blur-sm bg-white/35 rounded-xl py-4 duration-300 scroll-smooth">
      <TabBar
        tabs={tabs}
        onTabChange={(tab) => setSelected(tab)}
        initialTab="Product List"
      />
    </div>
  );
};

export default ListBar;
