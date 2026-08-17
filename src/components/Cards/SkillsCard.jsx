import { RiArrowDropRightFill } from "react-icons/ri";
import { IoCodeSlash } from "react-icons/io5";
import { LuFigma } from "react-icons/lu";
import { GoTools } from "react-icons/go";
import { GiProgression } from "react-icons/gi";
import SectionTitle from "../SectionTitle";

function SkillsCard() {
  const skillCategories = [
    {
      title: "DEVELOPMENT",
      skills: ["HTML5", "CSS3", "JAVASCRIPT (ES6+)", "REACT", "TAILWIND CSS"],
      Icon: IoCodeSlash,
    },
    {
      title: "DESIGN",
      skills: ["FIGMA", "RESPONSIVE DESIGN", "UI/UX DESIGN"],
      Icon: LuFigma,
    },
    {
      title: "TOOLS",
      skills: ["GIT & GITHUB", "VS CODE"],
      Icon: GoTools,
    },
    {
      title: "IN PROGRESS",
      skills: ["TYPESCRIPT"],
      Icon: GiProgression,
    },
  ];

  return (
    <div>
      <SectionTitle>skills</SectionTitle>

      {/* SKILLS */}
      <div className="flex grid-cols-2 flex-col gap-5 md:grid">
        {skillCategories.map(({ title, skills, Icon }) => (
          <div key={title} className="w-full space-y-1">
            <div className="bg-surface border-gray-border rounded-lg border p-2">
              <div className="flex items-center gap-2">
                <Icon />
                <p className="font-semibold md:text-lg">{title}</p>
              </div>{" "}
              {skills.map((skill) => (
                <div className="flex items-center" key={skill}>
                  <RiArrowDropRightFill className="text-primary text-2xl" />
                  <p className="text-body md:text-lg">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* FOCUS */}
      {/* <div className="mt-5">
        <h2 className="text-xl font-bold">What I Focus On</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1 p-3">
            <p className="text-xsm font-semibold">Web Development</p>
            <p className="">Building responsive single-page applications and clean component structures with React, JavaScript and Tailwind CSS.</p>
          </div>
          <div className="space-y-1 p-3">
            <p className="text-sm font-semibold">UI/UX Implementation</p>
            <p className=" ">Translating Figma designs and wireframes into maintainable code, focusing on local state handling and user-friendly interfaces.</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}
export default SkillsCard;
