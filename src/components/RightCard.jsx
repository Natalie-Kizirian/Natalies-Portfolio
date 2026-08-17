import { useState } from "react";
import ContactCard from "./Cards/ContactCard";
import InfoContainer from "./InfoContainer";
import AboutCard from "./Cards/AboutCard";
import SectionTitle from "./SectionTitle";
function RightCard({ activeTab }) {
  return (
    <>
      <div className="flex w-full mt-4 lg:mt-0 flex-col gap-4 lg:h-145 lg:gap-0">
        {/* ABOUT */}
        <InfoContainer visible={activeTab === "about"}>
          <div
            className="text-title flex scroll-mt-35 flex-col gap-2"
            id="about"
          >
            <SectionTitle>about</SectionTitle>
            <AboutCard />
          </div>
        </InfoContainer>
        {/* What I Focus On */}
        {/* <div>
        <h2 className="mb-2 text-xl font-bold">What I Focus On</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="border-primary space-y-1 rounded-lg border surface p-3">
            <LuCode className="text-brand text-lg" />
            <p className="text-xs font-semibold">Web Development</p>
            <p className="text-[11px] text-gray-400">
              Clean, responsive frontend layouts.
            </p>
          </div>
          <div className="border-primary space-y-1 rounded-lg border surface p-3">
            <LuLayoutPanelLeft className="text-brand text-lg" />
            <p className="text-xs font-semibold">UI/UX Implementation</p>
            <p className="text-[11px] text-gray-400">
              Figma design to code transformation.
            </p>
          </div>
        </div>
      </div> */}

        <InfoContainer visible={activeTab === "projects"}>
          <div
            id="projects"
            className="text-title flex scroll-mt-35 flex-col gap-2"
          >
            <SectionTitle>projects</SectionTitle>
          </div>
        </InfoContainer>
        <InfoContainer visible={activeTab === "uiux"}>
          <div
            id="uiux"
            className="text-title flex scroll-mt-35 flex-col gap-2"
          >
            <SectionTitle>ui/ux design</SectionTitle>
          </div>
        </InfoContainer>

        {/* CONTACT */}
        <InfoContainer visible={activeTab === "contact"}>
          <div
            id="contact"
            className="text-title flex scroll-mt-35 flex-col gap-2 "
          >
            <SectionTitle>contact</SectionTitle>

            <ContactCard />
          </div>
        </InfoContainer>
      </div>
    </>
  );
}
export default RightCard;
