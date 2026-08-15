import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
function App() {
  const [activeTab, setActiveTab] = useState("about");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center gap-3 md:mx-10 md:my-20 md:flex-row xl:mx-30">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        <MainContainer activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
}

export default App;
