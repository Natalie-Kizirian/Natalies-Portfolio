import { FaRegUser } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { LuUser, LuMenu, LuFigma, LuMail } from "react-icons/lu";
import { useState } from "react";

function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const tabs = [
    { id: "about", label: "about", Icon: LuUser },
    { id: "projects", label: "projects", Icon: IoCodeSlash },
    { id: "designs", label: "ui/ux ", Icon: LuFigma },
    { id: "contact", label: "contact", Icon: LuMail },
  ];

  const buttonStyles =
    "border-brand-gradient bg-bg-dark flex flex-1 cursor-pointer flex-col items-center justify-center gap-1 border-l  lg:px-9 p-3 text-center font-semibold uppercase transition-all duration-500 md:aspect-square md:flex-none md:border-b lg:border-l-0  hover:bg-secondary-dark/20";
  return (
    <div className="flex w-full flex-col self-start text-white md:h-auto md:w-17 md:flex-col">
      {/* 1st Bar Mobile*/}
      <div className="border-brand-gradient bg-bg-dark flex justify-between border-b p-3 md:hidden">
        <div className="flex items-center gap-2 text-sm">
          <img
            src="https://via.placeholder.com/150"
            alt="Natalie Kizirian"
            className="h-10 w-10 rounded-full border border-[#3a3a42] bg-white object-cover"
          />
          <div>
            <p>Natalie Kizirian</p>
            <p className="text-primary text-xs"> Front-end Developer</p>
          </div>
        </div>

        <button>
          <GoSun />
        </button>
      </div>

      {/* NavBar 2nd Bar */}
      <div className="z-30 flex w-full  shadow-xl md:mt-10 md:flex-col">
        {" "}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`hidden md:flex ${buttonStyles}`}
        >
          <LuMenu />
        </button>
        <button className={`hidden md:flex ${buttonStyles}`}>
          <GoSun />
        </button>
        {tabs.map(({ id, label, Icon }) => (
          <button
            key={id}
            className={`${buttonStyles} ${
              isOpen ? "md:max-h-16" : "overflow-hidden md:max-h-0 md:py-0 "
            } ${activeTab === id ? "text-primary" : "hover:text-primary text-white"}`}
            onClick={() => setActiveTab(id)}
          >
            <Icon />
            <span className="text-xs">{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
export default Navbar;
