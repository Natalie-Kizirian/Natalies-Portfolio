import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import MainContainer from "./components/MainContainer";
import Particles from "./components/Particle";
function App() {
  const [activeTab, setActiveTab] = useState("about");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="text-title relative">
        <div className="fixed inset-0 z-10 h-full w-full">
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={300}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <div className="relative z-10 flex flex-col items-center gap-3 md:mx-10 md:flex-row lg:h-screen xl:mx-30">
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

          <MainContainer activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </div>
    </>
  );
}

export default App;
