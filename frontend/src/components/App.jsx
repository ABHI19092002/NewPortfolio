
import Navbar from "./Navbar";
import HomeSection from "./HomeSection";
import ProjectSection from "./ProjectSection";
import { About } from "./About";
import { Skillset } from "./Skillset";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { useRef } from "react";

function App() {
  const projectRef = useRef(null);

  // Define the function that scrolls smoothly
  const onExploreClick = () => {
    projectRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <Navbar />
      <HomeSection onExploreClick={onExploreClick} />
      <div className="border-b border-[#484848]"></div>
      <div ref={projectRef}>
        <ProjectSection />
      </div>
      <div className="border-b border-[#484848]"></div>
      <About />
      <div className="border-b border-[#484848]"></div>
      <Skillset />
      <div className="border-b border-[#484848]"></div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
