import { useState } from "react";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
function App() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <>
      <div className="flex flex-col items-center gap-3 md:mx-10 md:my-20 md:flex-row xl:mx-30">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <AboutPage activeTab={activeTab}/>
      </div>
    </>
  );
}

export default App;
