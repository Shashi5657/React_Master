import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfilesView from "./Components/ProfilesView";
import Animations from "./Components/Animations";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <h1>Hii</h1> */}
      {/* <ProfilesView /> */}
      <Animations />
    </>
  );
}

export default App;
