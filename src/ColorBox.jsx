import { useState } from "react";

export default function ColorBox({ colors }) {
  const [col, setCol] = useState("black");
  function changeColor() {
    setCol(colors[Math.floor(Math.random() * colors.length)]);
  }
  return (
    <div
      className="w-4 h-4 "
      style={{ backgroundColor: col }}
      onClick={changeColor}
    ></div>
  );
}
