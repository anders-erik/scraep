import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import './script_list.tsx'
import ScriptList from './script_list.tsx'

function App() {
  const [count, setCount] = useState(0)

  // const [scriptnames, setScriptnames] = useState([] as string[])

  // setScriptnames(['script one', 'script two', 'script three'])

  // let scriptnames: string[] = ['script one', 'script two', 'script three']

  // Return a list of strings in divs
  return (
    <>
      <div>
        <h1>Todæ</h1>
        <h1>Ræter</h1>
        <h1>Wæbscrîpt</h1>
      </div>

      <ScriptList />
    </>
  )
}

export default App
