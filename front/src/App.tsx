import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './layout.css'

import './script_list.tsx'

import Sudo from './sudo.tsx'
import Search from './search.tsx'
import ScriptList from './script_list.tsx'
import CurrentScript from './current_script.tsx'


import type { CurrentScriptContextType } from './contexts/current-script-ctx.tsx';

import { CurrentScriptProvider } from './contexts/current-script-ctx.tsx';

function App()
{
  const [count, setCount] = useState(0)

  

  // const [scriptnames, setScriptnames] = useState([] as string[])

  // setScriptnames(['script one', 'script two', 'script three'])

  // let scriptnames: string[] = ['script one', 'script two', 'script three']

  // Return a list of strings in divs
  return (
    <>
        <h1>Scræp</h1>
      <div id="scraep-main" className="no-scroll">
        {/* <h1>Todæ</h1>
        <h1>Ræter</h1> */}
        {/* <h1>Wæbscrîpt</h1> */}
        <CurrentScriptProvider>
          <ScriptList />
          <Search />
          <CurrentScript />
          <Sudo />
        </CurrentScriptProvider>
      </div>
    </>
  )
}

export default App
