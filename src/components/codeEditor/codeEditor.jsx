import Editor from "@monaco-editor/react";
import { useRef, useState, useEffect } from "react";
import { io } from "socket.io-client";
import { useParams } from "react-router-dom";

const languages = [
  "javascript",
  "typescript",
  "css",
  "html",
  "json",
  "python",
  "java",
  "php",
  "ruby",
  "c",
  "csharp",
  "cpp",
  "go",
  "lua",
  "swift",
];

const CodeEditor = ({ width, height, problem }) => {
  console.log(problem);
  const editorRef = useRef(null);
  const [language, setLanguage] = useState("cpp");
  const [socket, setSocket] = useState(null);
  const [monaco, setMonaco] = useState(null);
  const [code, setCode] = useState(
    "#include <iostream>\nusing namespace std;\n\nint main() {\n\t// your code goes here\n\treturn 0;\n}"
  );

  const { id: problemId } = useParams();

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    setMonaco(monaco);
  }

  const handleEditorChange = (value, event) => {
    setCode(value);
    socket.emit("code-change", value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const showValue = () => {
    const value = editorRef.current.getValue();

    setCode(value);
  };

  const handleRun = () => {
    showValue();

    let data = {
      language: language,
      code: code,
      stdin: ["40", "30"],
    };

    console.log(data);

    fetch(
      `https://code-elevate.onrender.com/api/problems/${problem.problemId}/run`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: language,
          code: code,
          stdin: ["40", "30"],
        }),
      }
    )
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = () => {
    showValue();

    let data = {
      language: language,
      code: code,
      stdin: ["40", "30"],
    };

    console.log(data);

    fetch(
      `https://code-elevate.onrender.com/api/problems/${problem.problemId}/submit`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: language,
          code: code,
          stdin: ["40", "30"],
        }),
      }
    )
      .then((res) => {
        res.json().then((data) => {
          console.log(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div
      style={{ width: width, height: height }}
      className={`flex flex-col justify-around border p-3 border-[#333333] bg-[#1E1E1E] dark:bg-gray-800 dark:border-gray-600`}
    >
      <div
        className={`flex justify-between items-center w-full h-[50px] sm:bg-[#1E1E1E] border-b border-[#333333]`}
      >
        <select
          value={language}
          onChange={handleLanguageChange}
          className="w-auto h-[35px] px-2  bg-[#1E1E1E]  text-gray-200 dark:text-gray-200 dark:bg-gray-800 hover:bg-gray-700 rounded-md focus:outline-none  transition duration-300 ease-in-out"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>

        <div className="flex items-center justify-end gap-4 w-full">
          <button
            onClick={handleRun}
            className="bg-green-500 text-white hover:bg-green-600 rounded-md px-4 py-1"
          >
            Run
          </button>
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white hover:bg-green-600 rounded-md px-4 py-1"
          >
            Submit
          </button>
        </div>
      </div>
      <Editor
        height={`calc(${height} - 50%)`}
        theme="vs-dark"
        defaultLanguage="cpp"
        language={language}
        value={code}
        onChange={handleEditorChange}
        onMount={handleEditorDidMount}
        className="w-full h-full"
      />
      <div className="p-3 border-t border-[#333333] mt-3">
        <h2 className="text-lg font-semibold mb-2">Test Cases & Output</h2>
        {/* Test Case 1 */}
        <div className="test-case">
          <h3 className="font-medium mb-1">Test Case 1</h3>
          <div className="input">
            <p className="font-medium mb-1">Input:</p>
            {/* Render input for test case 1 */}
          </div>
          <div className="output">
            <p className="font-medium mb-1">Output:</p>
            {/* Render output for test case 1 */}
          </div>
        </div>

        {/* Test Case 2 */}
        <div className="test-case">
          <h3 className="font-medium mb-1">Test Case 2</h3>
          <div className="input">
            <p className="font-medium mb-1">Input:</p>
            {/* Render input for test case 2 */}
          </div>
          <div className="output">
            <p className="font-medium mb-1">Output:</p>
            {/* Render output for test case 2 */}
          </div>
        </div>
        {/* Add more test cases as needed */}
      </div>
    </div>
  );
};

export default CodeEditor;
