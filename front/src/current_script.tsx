import { useState, useEffect } from 'react'

import './current_script.css'

import type { CurrentScriptContextType } from './contexts/current-script-ctx.tsx';

import {  current_script_context, 
          useCurrentScript,
          CurrentScriptProvider } from './contexts/current-script-ctx.tsx';


function CurrentScript(prop: any)
{
  const current_script_ctxt: CurrentScriptContextType = useCurrentScript();

  return (
    <>
      <div id="current-script">
        <h4>Current script</h4>
        <input 
          id="crud-name" 
          type="text" 
          value={current_script_ctxt.script.name} 
          className="crud-input" />
        <input 
          id="crud-description" 
          type="text" 
          value={current_script_ctxt.script.description} 
          className="crud-input" />
      </div>
      
    </>
  )
}

export default CurrentScript
