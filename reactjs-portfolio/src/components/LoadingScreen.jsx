/* eslint-disable react/prop-types */
import { useState } from "react";

function LoadingScreen({ colors, onColorChange, onConfirmation }) {
  const colorsArray = Object.entries(colors);
  const [currentColorIndex1, setCurrentColorIndex1] = useState(0);
  const [currentColorIndex2, setCurrentColorIndex2] = useState(1);

  function rotateColors(setter, currentIndex, colorType) {
    setter((prevIndex) => (prevIndex + 1) % colorsArray.length);
    const newIndex = (currentIndex + 1) % colorsArray.length;
    onColorChange(colorsArray[newIndex][1], colorType);
  }

  function handleConfirm() {
    onConfirmation();
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-5 justify-center items-center">
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1264.12 849.81"
          className="h-52 drop-shadow-lg"
        >
          <path
            d="M436.4,494.74h0c.76,5.15,1.16,10.43,1.16,15.81,0,6.4-.57,12.66-1.64,18.73h406.19s0,0,0,0c-1.07-6.07-1.64-12.33-1.64-18.74,0-5.38.4-10.66,1.16-15.81,0,0,0,0,0,0h-405.24Z"
            style={{
              fill: colorsArray[currentColorIndex1][1],
              strokeWidth: "0px",
            }}
          />
          <g>
            <path
              d="M436.4,494.74h0c.76,5.15,1.16,10.43,1.16,15.81,0,6.4-.57,12.66-1.64,18.73h406.19s0,0,0,0c-1.07-6.07-1.64-12.33-1.64-18.74,0-5.38.4-10.66,1.16-15.81,0,0,0,0,0,0h-405.24Z"
              style={{
                fill: colorsArray[currentColorIndex2][1],
                strokeWidth: "0px",
              }}
            />
            <path
              d="M433.93,538.28c-1.05,3.91-2.31,7.72-3.77,11.42-1.27,3.21,1.05,6.68,4.5,6.68h408.72c3.45,0,5.77-3.48,4.5-6.68-1.46-3.7-2.73-7.52-3.77-11.43,0,0,0,0,0,0h-410.17Z"
              style={{
                fill: colorsArray[currentColorIndex1][1],
                strokeWidth: "0px",
              }}
            />
            <path
              d="M1143.54,470.59l-3.89-3.63c-.3-.28-.63-.52-.99-.71l-68.97-37.58c-.22-.12-.43-.26-.63-.41l-6.1-4.67c-.18-.14-.35-.29-.5-.45-8.02-8.24-16.97-15.53-26.67-21.71l-4.9-3.12c-.45-.29-.95-.5-1.46-.63-16.52-4.07-33.32-6.89-50.26-8.43l-73.41-6.67-42.46-5.45c-.21-.03-.41-.04-.62-.04h-33.08c-.74,0-1.48-.17-2.14-.5l-123.8-60.92c-15.5-7.63-31.45-14.32-47.75-20.03-.31-.11-.62-.18-.94-.23-31.44-4.65-63.21-6.68-94.98-6.07-9.06.17-18.1.99-27.05,2.44h0c-63.44,10.31-126.21,24.36-187.99,42.08l-61.01,17.5c-2.13.61-4.4-.3-5.53-2.21l-34.32-58.39c-.4-.68-.95-1.25-1.62-1.66l-13.55-8.45c-.56-.35-1.19-.58-1.84-.68l-102.43-15.46c-3.62-.55-6.52,2.96-5.31,6.41l10.82,30.78c.47,1.33,1.48,2.39,2.79,2.91l33,13.09c.37.15.76.25,1.15.3l48.32,6.39c.66.09,1.29.31,1.86.65l7.18,7.53c2.96,3.11,4.88,7.06,5.5,11.31l2.68,18.66c.33,2.29-1.01,4.5-3.19,5.27l-36.17,12.78c-.78.28-1.62.35-2.43.21l-27.06-4.61c-3.75-.64-6.74,3.08-5.32,6.61l3.43,8.49c.49,1.2.47,2.55-.04,3.74l-7.18,16.65c-.42.97-1.15,1.78-2.07,2.3l-25.72,14.57c-1.62.92-2.57,2.68-2.45,4.54l3.59,56.1c.07,1.08-.23,2.16-.84,3.05l-2.84,4.15c-1.05,1.53-1.13,3.52-.22,5.13l20.5,36.32c.73,1.3,2.02,2.19,3.5,2.41l99.94,15.25c3.68.56,6.61-3.06,5.26-6.53-4.59-11.85-7.12-24.83-7.12-38.44,0-55.98,42.84-101.36,95.68-101.36,44.76,0,82.34,32.57,92.79,76.56h0s408.7,0,408.7,0h0c10.45-43.98,48.02-76.55,92.79-76.55,52.84,0,95.68,45.38,95.68,101.36,0,13.88-2.64,27.11-7.4,39.15-1.27,3.21,1.05,6.68,4.5,6.68h52.92c.18,0,.36-.01.54-.03l55.98-6.28c3.63-.41,5.53-4.52,3.49-7.54l-.57-.85c-.42-.62-.97-1.13-1.61-1.5l-1.24-.71c-1.25-.72-2.12-1.96-2.37-3.38l-.22-1.28c-.11-.65-.09-1.32.06-1.96l6.78-28.33c.4-1.66-.1-3.4-1.32-4.6h0c-1.39-1.36-1.83-3.42-1.12-5.23l4.52-11.62c.22-.56.33-1.16.33-1.76v-7.18c0-1.35-.56-2.63-1.54-3.55Z"
              style={{
                fill: colorsArray[currentColorIndex1][1],
                strokeWidth: "0px",
              }}
            />
            <path
              d="M936.15,428.45c-43.26,0-78.46,35.2-78.46,78.46s35.2,78.46,78.46,78.46,78.46-35.2,78.46-78.46-35.2-78.46-78.46-78.46ZM989.78,506.91c0,29.58-24.06,53.64-53.64,53.64s-53.64-24.06-53.64-53.64,24.06-53.64,53.64-53.64,53.64,24.06,53.64,53.64Z"
              style={{
                fill: colorsArray[currentColorIndex1][1],
                strokeWidth: "0px",
              }}
            />
            <path
              d="M341.88,428.45c-43.26,0-78.46,35.2-78.46,78.46s35.2,78.46,78.46,78.46,78.46-35.2,78.46-78.46-35.2-78.46-78.46-78.46ZM394.97,506.91c0,29.28-23.82,53.09-53.09,53.09s-53.09-23.82-53.09-53.09,23.82-53.09,53.09-53.09,53.09,23.82,53.09,53.09Z"
              style={{
                fill: colorsArray[currentColorIndex1][1],
                strokeWidth: "0px",
              }}
            />
          </g>
        </svg>
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
