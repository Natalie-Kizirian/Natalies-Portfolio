import SectionTitle from "../SectionTitle";
function AboutCard() {
  const infoRows = [
    { label: "ROLE", value: "Junior Front-end Developer" },
    { label: "EDUCATION", value: "IT Applications — Web Design & Development" },
    { label: "AVAILABILITY", value: "Open to opportunities" },
    { label: "LANGUAGES", value: "Greek / English" },
    { label: "LOCATION", value: "Athens, Greece" },
    { label: "EXPERIENCE", value: "1+ year building projects" },
  ];
  const skillCategories = [
    {
      title: "FRONT END",
      skills: ["HTML5", "CSS3", "JAVASCRIPT (ES6+)", "REACT", "TAILWIND CSS"],
    },
    {
      title: "DESIGN",
      skills: ["FIGMA", "RESPONSIVE DESIGN", "UI/UX DESIGN"],
    },
    {
      title: "TOOLS",
      skills: ["GIT & GITHUB", "VS CODE"],
    },
    {
      title: "IN PROGRESS",
      skills: ["TYPESCRIPT"],
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-6 lg:text-lg">
        <div>
          <p className="text-body pb-2 font-bold">
            Hello! I’m Natalie Kizirian.
          </p>
          <p className="text-body font-medium">
            I'm an IT student focusing on Front-end Development, based in Athens
            and looking for opportunities to grow and work in an international
            team. I enjoy building clean and responsive websites. When I'm not
            coding, you'll find me exploring new UI/UX ideas and designing
            websites and applications.
          </p>
        </div>

        <div className="">
          {infoRows.map((row) => (
            <div
              key={row.label}
              className="border-brand-gradient mb-3 flex justify-between gap-3 border-b-2 text-sm md:text-lg"
            >
              <p className="shrink-0 font-semibold">{row.label}</p>
              <p className="text-body text-end">{row.value}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <SectionTitle>skills</SectionTitle>
        <div className="grid grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="w-full space-y-1">
              <p className="text-md font-semibold md:text-lg">
                {category.title}
              </p>
              {category.skills.map((skill) => (
                <p key={skill} className="text-body text-xs md:text-lg">
                  {skill}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default AboutCard;
