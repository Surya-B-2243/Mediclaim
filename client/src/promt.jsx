import { useState } from 'react'
import "../public/prompt.css"
import AppNavbar from './topbar'

function Prompt() {
  const [text, setText] = useState('')
  const [output, setOutput] = useState('')

  // console.log(output)

  const getResponse = async () => {
    const response = await fetch(`http://localhost:3001/prompt/${text}`)
    const data = await response.json()

    // console.log(data)

    setOutput({
      res: data.candidates[0].output
    })

  }

  // console.log(text)

  return (
    <>
    <AppNavbar/>
    <div className="body">
      <div className="nav">
        <h1>Mediclaim Search 🧐</h1>
      </div>
      <div className="main">
        <div className="input">
          <h2>Prompt: </h2>
          <textarea value={text} onChange={e => setText(e.target.value)} rows="10" cols="30"></textarea>
          <button onClick={getResponse}>Submit</button>
        </div>
        <div className="output">
          <h2>Response:</h2>
          <textarea value={output.res} rows="10" cols="30"></textarea>
        </div>
      </div>
    </div>
    </>
  );
}

export default Prompt;