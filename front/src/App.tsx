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
  return (
    <>
      <p>Scræp</p>
      <div id="scraep-main" className="no-scroll">
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
