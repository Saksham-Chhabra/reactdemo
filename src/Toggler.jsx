import { useState } from "react";

export default function Toggler() {
  const [set, setNum] = useState(true);
  const toggleIsHappy = () => setNum(!set);
  return <p onClick={toggleIsHappy}>{set ? "😀" : "🥲"}</p>;
}
