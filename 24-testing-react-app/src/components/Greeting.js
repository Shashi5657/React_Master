import { useState } from "react";
import Output from "./Output";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Good Morning!!</h2>
      {!changedText && <Output>how are you ??</Output>}
      {changedText && <Output>changed</Output>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
}
