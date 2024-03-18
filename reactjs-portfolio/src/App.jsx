import "./App.css";
import About from "./components/About.jsx";
// import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
import LSide from "./components/LSide.jsx";
import Navbar from "./components/Navbar.jsx";
import RSide from "./components/RSide.jsx";
import Work from "./components/Work.jsx";
// import Accordion from "./components/Accordion.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import { useState } from "react";
import Contact from "./components/Contact.jsx";
const colors = {
  brightRed: "#FA2223",
  yellow: "#F8CD02",
  brightBlue: "#00A3E0",
  darkBlue: "#153149",
  darkGreen: "#328983",
  brightGreen: "#029220",
  darkRed: "#9D0620",
};

export default function App() {
  const [primaryColor, setPrimaryColor] = useState("#FA2223");
  const [secondaryColor, setSecondaryColor] = useState("#F8CD02");
  const [showLoading, setShowLoading] = useState(true);

  const handleColorChange = (hexCode, colorType) => {
    if (colorType === "primary") {
      setPrimaryColor(hexCode);
    } else if (colorType === "secondary") {
      setSecondaryColor(hexCode);
    }
  };

  function handleConfirmation() {
    setShowLoading(false);
  }

  return (
    <>
      {showLoading ? (
        <LoadingScreen
          colors={colors}
          onColorChange={(hexCode, colorType) =>
            handleColorChange(hexCode, colorType)
          }
          onConfirmation={handleConfirmation}
        />
      ) : (
        <div className="flex justify-center items-center ">
          <div>
            <Navbar primary={primaryColor} secondary={secondaryColor} />

            <div className="flex justify-between">
              <LSide></LSide>
              <div className="lg:px-32 w-full md:px-8 sm:px-4">
                <Hero primary={primaryColor} secondary={secondaryColor}></Hero>
                <About
                  primary={primaryColor}
                  secondary={secondaryColor}
                ></About>
                <Work primary={primaryColor} secondary={secondaryColor}></Work>
                {/* <Accordion /> */}
                <Contact />
                <Footer></Footer>
              </div>
              <RSide></RSide>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
