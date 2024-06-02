import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { toggleHandler } from "./Components/editor/constant";
import "./App.css";

import CodeEditor from "./Components/editor/CodeEditor";
import Navbar from "./Components/Navbar";
import Home from "./Components/home/Home"; // Import your Home component
import Login from "./Components/login1/Login2";
import Teacher from "./Components/teacher/teacher";
// import About from "./Components/About"; // Import your About component

function App() {
  const [isDark, setIsDark] = useState(true);

  const darkMode = () => {
    toggleHandler();
    setIsDark(!isDark);
    // console.log(isDark);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={

              <Home />

          }
        />{" "}
        <Route path="/editor" element={
                    <>
                    <Navbar darkMode={darkMode} isDark={isDark} />
        <CodeEditor isDark={isDark} />
        </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/teacher" element={<Teacher />} />
      </Routes>
    </>
  );
}

export default App;
