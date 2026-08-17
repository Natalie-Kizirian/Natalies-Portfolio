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

  return (
    <>
      <div className="text-sm lg:text-lg">
        <SectionTitle>about</SectionTitle>
        <div className="flex flex-col gap-5">
          {" "}
          <div>
            <p className="text-body pb-2 font-bold">
              Hello! I’m Natalie Kizirian.
            </p>
            <p className="text-body font-medium">
              I'm an IT student focusing on Front-end Development, based in
              Athens and looking for opportunities to grow and work in an
              international team. I enjoy building clean and responsive
              websites. When I'm not coding, you'll find me exploring new UI/UX
              ideas and designing websites and applications.
            </p>
          </div>
          <div className="">
            {infoRows.map((row) => (
              <div
                key={row.label}
                className="border-gray-border mb-3 flex justify-between gap-3 border-b-2 border-dotted md:text-lg"
              >
                <p className="shrink-0 font-semibold">{row.label}</p>
                <p className="text-body text-end">{row.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutCard;
