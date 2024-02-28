import { useState } from "react";

function LoadingScreen() {
  const colors = ["dark", "primary", "secondary", "grey", "white"]; // Add more colors as needed
  const [colorIndex, setColorIndex] = useState(0);
  const [color, setColor] = useState(colors[colorIndex]);

  const handleClick = () => {
    const nextIndex = (colorIndex + 1) % colors.length;
    setColorIndex(nextIndex);
    setColor(colors[nextIndex]);
  };

  return (
    <div className={`bg-${color}`}>
      <button onClick={handleClick} className="bg-primary">
        Change Color
      </button>
      <div style={{ color }}>Your Content Here</div>
    </div>
  );
}
export default LoadingScreen;
