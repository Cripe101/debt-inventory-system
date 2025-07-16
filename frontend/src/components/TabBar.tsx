import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TabItem {
  label: string;
  icon?: React.ReactNode;
}

interface TabBarProps {
  tabs: TabItem[];
  onTabChange?: (selectedTab: string) => void;
  initialTab?: string;
}

const TabBar = ({ tabs, onTabChange, initialTab }: TabBarProps) => {
  const [activeTab, setActiveTab] = useState(initialTab || tabs[0].label);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const navigate = useNavigate();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    if (onTabChange) onTabChange(tab);
  };

  useEffect(() => {
    const index = tabs.findIndex((t) => t.label === activeTab);
    const currentTab = tabRefs.current[index];

    if (currentTab) {
      const tabWidth = currentTab.offsetWidth;
      const tabLeft = currentTab.offsetLeft;

      setIndicatorStyle({
        width: `${tabWidth * 0.5}px`, // 50% width of tab
        left: `${tabLeft + tabWidth * 0.25}px`, // center the indicator
      });
    }
  }, [activeTab, tabs]);

  return (
    <div className="relative w-full flex justify-center">
      <div className="flex w-full justify-between text-sm font-medium text-slate-800">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            className={`flex-1 flex flex-col items-center py-1 transition-colors duration-300 ${
              tab.label === activeTab ? "text-blue-600" : "hover:text-blue-500"
            }`}
            onClick={() => {
              handleTabClick(tab.label);
              tab.label === "Home"
                ? navigate("/")
                : tab.label === "Debtors"
                ? navigate("/debtors")
                : "";
            }}
          >
            {tab.icon && <span className="">{tab.icon}</span>}
            {tab.label}
          </button>
        ))}
      </div>
      <div
        className="absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300"
        style={indicatorStyle}
      />
    </div>
  );
};

export default TabBar;
