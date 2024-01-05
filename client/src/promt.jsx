import { useState } from "react";
import "../public/prompt.css";
import AppNavbar from "./topbar";
import Footer from "./Footer";

function Prompt() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");

  const getResponse = async () => {
    const response = await fetch(`http://localhost:3001/prompt/${text}`);
    const data = await response.json();

    setOutput({
      res: data.candidates[0].output,
    });
  };

  return (
    <div>
      <AppNavbar />
      <div className="body">
        <div className="prompt-heading">
          <h2>Empower Your Health: Ask AI, Get Answers!</h2>
        </div>
        <div className="main">
          <div className="input">
            <h3>Prompt: </h3>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows="15"
              cols="40"
            ></textarea>
            <button onClick={getResponse}>Submit</button>
          </div>
          <div className="output">
            <h3>Response:</h3>
            <textarea value={output.res} rows="15" cols="40"></textarea>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Prompt;
