import { useState } from "react";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
function App() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <>
    
      <div className="flex flex-col gap-4 items-center md:my-20 lg:mx-30 md:mx-10 md:flex-row ">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <AboutPage />
      </div>
    </>
  );
}

export default App;
/* import { useState } from "react";
import Navbar from "./components/Navbar";
import AboutPage from "./components/AboutPage";
function App() {
  const [activeTab, setActiveTab] = useState("about");
  return (
    <>
      <div className="flex w-full lg:max-w-6xl flex-col md:mx-auto md:flex-row lg:mt-20">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <AboutPage />
      </div>
    </>
  );
}

export default App;
 */
