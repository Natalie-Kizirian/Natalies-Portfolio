import { useState } from "react";
import ContactCard from "./Cards/ContactCard";
import InfoContainer from "./InfoContainer";
import AboutCard from "./Cards/AboutCard";
import ProjectsCard from "./Cards/ProjectsCard";
import SkillsCard from "./Cards/SkillsCard";
import SectionTitle from "./SectionTitle";
function RightCard({ activeTab }) {
  return (
    <>
      <div className="mt-4 flex w-full flex-col gap-4 lg:mt-0 lg:h-145 lg:gap-0">
        {/* ABOUT */}
        <InfoContainer visible={activeTab === "about"}>
          <div className="text-title flex scroll-mt-35 flex-col" id="about">
            <AboutCard />
          </div>
        </InfoContainer>
        

        {/* SKILLS */}
        <InfoContainer visible={activeTab === "skills"}>
          <div id="skills" className="text-title flex scroll-mt-35 flex-col">
            <SkillsCard />
          </div>
        </InfoContainer>

        {/* PROJECTS */}
        <InfoContainer visible={activeTab === "projects"}>
          <div id="projects" className="text-title flex scroll-mt-35 flex-col">
            <SectionTitle>projects</SectionTitle>
            <ProjectsCard />
          </div>
        </InfoContainer>

        {/* UI / UX DESIGN */}
        {/* <InfoContainer visible={activeTab === "uiux"}>
          <div id="uiux" className="text-title flex scroll-mt-35 flex-col">
            <SectionTitle>ui/ux design</SectionTitle>
          </div>
        </InfoContainer> */}

        {/* CONTACT */}
        <InfoContainer visible={activeTab === "contact"}>
          <div id="contact" className="text-title flex scroll-mt-35 flex-col">
            <SectionTitle>contact</SectionTitle>

            <ContactCard />
          </div>
        </InfoContainer>
      </div>
    </>
  );
}
export default RightCard;
