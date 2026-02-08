import { useState, useEffect } from 'react'

import './current_script.css'

import CrudField from './crud/crud-field.tsx'

import type { CurrentScriptContextType } from './contexts/current-script-ctx.tsx';

import {  current_script_context, 
          useCurrentScript,
          CurrentScriptProvider } from './contexts/current-script-ctx.tsx';
import type { ScriptType } from '../../types/script.ts';

function do_stuff() : string
{
  return "stuff";
}

function get_script_from_html() : ScriptType
{
  let sudo_string = ((document.getElementById("crud-sudo") as HTMLInputElement).childNodes[1] as HTMLInputElement).value;
  let sudo_value = sudo_string === "1" ? true : false;


  return {
    name: ((document.getElementById("crud-name") as HTMLInputElement).childNodes[1] as HTMLInputElement).value,
    description: ((document.getElementById("crud-description") as HTMLInputElement).childNodes[1] as HTMLInputElement).value,
    content: ((document.getElementById("crud-content") as HTMLInputElement).childNodes[1] as HTMLInputElement).value,
    verb: ((document.getElementById("crud-verb") as HTMLInputElement).childNodes[1] as HTMLInputElement).value,
    sudo: sudo_value,
  };

}

function CurrentScript(prop: any)
{
  const current_script_ctxt: CurrentScriptContextType = useCurrentScript();

  console.log("Current script context: ", current_script_ctxt.script);

  // script.sudo equiality
  console.log("Current script sudo value: ", current_script_ctxt.script.sudo);

  return (
    <>
      <div id="current-script">
        <div>
          <h4 id="current-script-title">Current script</h4>
          <div
            onClick=
              {() => 
              {
                const stuff_string = do_stuff();
                const extracted_script = get_script_from_html();
                console.log("Doing stuff: ", stuff_string);
                console.log("Extracted script: ", extracted_script);

                const name =
                (
                  (
                    document.getElementById("crud-name") as HTMLInputElement
                  ).childNodes[1] as HTMLInputElement
                ).value;

                console.log("Name field value: ", name);

                const new_script: ScriptType = {
                  name: (document.getElementById("crud-name") as HTMLInputElement).value,
                  description: (document.getElementById("crud-description") as HTMLInputElement).value,
                  content: (document.getElementById("crud-content") as HTMLInputElement).value,
                  verb: (document.getElementById("crud-verb") as HTMLInputElement).value,
                  sudo: (document.getElementById("crud-sudo") as HTMLInputElement).value === "true",
                }

                console.log("Updating script with values: ", new_script);


                // PUT updated script to server
                if(false)
                {
                  fetch('/api/script/' + current_script_ctxt.script.name,
                  {
                    method: 'PUT',
                    headers:
                    {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(new_script),
                  })
                  .then((res) => res.json())
                  .then((data) => {
                    console.log("Script updated:", data);
                  })
                  .catch((error) => {
                    console.error("Error updating script:", error);
                  });
                }
              }
            }
            id='current-script-update-btn'
            className='btn'
          >Update</div>
        </div>

        <div
            onClick=
              {() => 
              {
                fetch('/api/script',
                {
                  method: 'POST',
                  headers:
                  {
                    'Content-Type': 'application/json',
                  },
                  body: "",
                })
                .then((res) => res.json())
                .then((data) => {
                  console.log("Script updated:", data);
                })
                .catch((error) => {
                  console.error("Error updating script:", error);
                });
              }
            }
            id='new-script-btn'
            className='btn'
          >+++
        </div>

        <CrudField name='name' value={current_script_ctxt.script.name}/>
        <CrudField name='description' value={current_script_ctxt.script.description}/>
        <CrudField name='content' value={current_script_ctxt.script.content}/>
        <CrudField name='verb' value={current_script_ctxt.script.verb}/>
        <CrudField name='sudo' value={current_script_ctxt.script.sudo}/>
      </div>
      
    </>
  )
}

export default CurrentScript
