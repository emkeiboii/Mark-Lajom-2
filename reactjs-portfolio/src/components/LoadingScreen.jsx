import { useState } from "react";

function LoadingScreen({ colors, onColorChange, onConfirmation }) {
  const colorsArray = Object.entries(colors);
  const [currentColorIndex1, setCurrentColorIndex1] = useState(0);
  const [currentColorIndex2, setCurrentColorIndex2] = useState(1);

  function rotateColors(setter, currentIndex, colorType) {
    setter((prevIndex) => (prevIndex + 1) % colorsArray.length);
    const newIndex = (currentIndex + 1) % colorsArray.length;
    console.log(colorsArray[newIndex][1]); // Display only the hex code
    onColorChange(colorsArray[newIndex][1], colorType);
  }

  function handleConfirm() {
    onConfirmation();
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-5 justify-center items-center">
        <div
          className="w-full h-3 "
          style={{
            backgroundColor: colorsArray[currentColorIndex1][1],
          }}
        ></div>
        <div
          className="w-6 h-3 "
          style={{
            backgroundColor: colorsArray[currentColorIndex2][1],
          }}
        ></div>
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
        <button onClick={() => handleConfirm()}>confirm</button>
      </div>
    </div>
  );
}

export default LoadingScreen;
