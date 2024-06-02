/* eslint-disable react/prop-types */
import  { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import { CODE_SNIPPETS } from "./constant";
import Output from "./Output";
import { useLocation } from "react-router-dom";
export default function CodeEditor({ isDark }) {



  
const location = useLocation();
const { problem } = location.state || {};
  const [value, setValue] = useState("");
  const editorRef = useRef();
  const [language, setLanguage] = useState("javascript");
console.log(problem);
  let onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
  };

  let onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  return (
    <>
      <div className="container mt-4">
        <h3 className="text-center">{problem.title}</h3>
        <div className="row">
          <div className="col col1 border me-4 w-60">
            <LanguageSelector language={language} onSelect={onSelect} />
            <div className="container editorbox">
              <Editor
                className="editor"
                height="77vh"
                language={language}
                defaultValue={CODE_SNIPPETS[language]}
                theme={isDark ? "vs-dark" : ""}
                value={value}
                onChange={(value) => setValue(value)}
                onMount={onMount}
              />
            </div>
          </div>
          <div className="col col2 border me-4">
            <Output editorRef={editorRef} language={language} isDark={isDark} />
          </div>
        </div>
      </div>
    </>
  );
}
