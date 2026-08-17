import { FaRegUser } from "react-icons/fa6";
import { IoCodeSlash } from "react-icons/io5";
import { GoSun } from "react-icons/go";
import { LuUser, LuMenu, LuFigma, LuMail } from "react-icons/lu";
import { useState } from "react";

function Navbar({ activeTab, setActiveTab }) {
  const [isOpen, setIsOpen] = useState(false);
  const tabs = [
    { id: "about", label: "about", Icon: LuUser },
    { id: "skills", label: "skills", Icon: LuUser },
    { id: "projects", label: "projects", Icon: IoCodeSlash },
    { id: "uiux", label: "ui/ux ", Icon: LuFigma },
    { id: "contact", label: "contact", Icon: LuMail },
  ];

  const buttonStyles =
    "border-brand-gradient bg-black flex flex-1 w-17 cursor-pointer flex-col items-center justify-center  border-l  p-3 text-center font-semibold uppercase transition-all duration-500 md:aspect-square md:flex-none md:border-b lg:border-l-0  hover:bg-secondary-dark/20";
  return (
    <div className="fixed top-0 z-40 flex w-full flex-col self-start text-title md:static md:h-auto md:w-17 md:flex-col">
      {/* 1st Bar Mobile*/}
      <div className="border-brand-gradient bg-black flex justify-between border-b p-3 md:hidden">
        <div className="flex items-center gap-2 text-sm">
          <img
            src="https://avatars.githubusercontent.com/u/200575349?s=400&u=8e99838859cf4ca384395d984593d030054e36ec&v=4"
            alt="Natalie Kizirian"
            className="h-10 w-10 rounded-full border border-black bg-title object-cover"
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
      <div className="z-30 flex w-full shadow-xl md:mt-30 md:flex-col">
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
            onClick={() => {
              setActiveTab(id);
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`${activeTab === id ? "text-primary" : "hover:text-primary text-title"} ${buttonStyles} bg-bg-dark flex flex-col items-center gap-2 ${
              isOpen ? "md:max-h-20" : "overflow-hidden md:max-h-0 md:py-0"
            }`}
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
