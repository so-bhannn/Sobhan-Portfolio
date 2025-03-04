import { useEffect } from "react";
import "particles.js"; // Add this import for particlesJS to be defined

const ParticlesBackground = () => {
  useEffect(() => {
    try {
      particlesJS.load("particles-container", "/particles.json", function (response) {
        if (response) {
          console.log("Particles.js loaded");
        }
      });
    } catch (error) {
      console.error("Error loading particles.js:", error);
    }
  }, []);

  return (
    <div 
      id="particles-container" 
      style={{ 
        position: "absolute", 
        width: "100%", 
        height: "100vh", 
        zIndex: -1 
      }} 
    />
  );
};

export default ParticlesBackground;