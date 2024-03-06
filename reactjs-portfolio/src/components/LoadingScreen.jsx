import { useState } from "react";

function LoadingScreen({ colors, onColorChange }) {
  const colorsArray = Object.entries(colors);
  const [currentColorIndex1, setCurrentColorIndex1] = useState(0);
  const [currentColorIndex2, setCurrentColorIndex2] = useState(1);

  function rotateColors(setter, currentIndex, colorType) {
    const hexCode = colorsArray[currentIndex][1];
    setter((prevIndex) => (prevIndex + 1) % colorsArray.length);
    console.log(colorType, hexCode); // Log the colorType and hexCode for debugging
    onColorChange(hexCode, colorType); // Pass the updated hexCode and colorType to the parent component
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-5">
        <button
          onClick={() =>
            rotateColors(setCurrentColorIndex1, currentColorIndex1, "primary")
          }
          style={{
            backgroundColor: colorsArray[currentColorIndex1][1],
          }}
          className="text-white px-5 py-2 flex items-center"
        >
          Primary
          <span className="ml-2">{colorsArray[currentColorIndex1][1]}</span>
        </button>
        <button
          onClick={() =>
            rotateColors(setCurrentColorIndex2, currentColorIndex2, "secondary")
          }
          style={{
            backgroundColor: colorsArray[currentColorIndex2][1],
          }}
          className="text-white px-5 py-2 flex items-center"
        >
          Secondary
          <span className="ml-2">{colorsArray[currentColorIndex2][1]}</span>
        </button>
      </div>
    </div>
  );
}

export default LoadingScreen;
