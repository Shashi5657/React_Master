import { useState } from "react";

export default function Greeting() {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Good Morning!!</h2>
      {!changedText && <p>how are you ??</p>}
      {changedText && <p>changed</p>}
      <button onClick={changeTextHandler}>Change Text</button>
    </div>
  );
}
