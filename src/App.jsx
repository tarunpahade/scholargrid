import { useState } from "react";
import { toggleHandler } from "./Components/constant";
import "./App.css";

import CodeEditor from "./Components/CodeEditor";
import Navbar from "./Components/Navbar";

function App() {
  const [isDark, setIsDark] = useState(true);

  const darkMode = () => {
    toggleHandler();
    setIsDark(!isDark);
    // console.log(isDark);
  };

  return (
    <>
      <Navbar darkMode={darkMode} isDark={isDark} />
      <CodeEditor isDark={isDark} />
    </>
  );
}

export default App;
