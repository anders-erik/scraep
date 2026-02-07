import { useState, useEffect } from 'react'

import './script.css'

import type { ScriptType } from '../../types/script.ts'


function Script(prop: any) {

  const [script, setScript] = useState([] as ScriptType[])

  return (
    <>
        <div className="script flex-row" data-script={JSON.stringify(prop.script_object)} title={prop.script_object.description}>
        <div className="name-label w80">{prop.script_object.name}</div>
        <br></br>
        {/* <div>Description : {prop.script_object.description}</div> */}
        <div className="run-btn"
          onClick=
            {() => 
            {
              let run_url = "/api/run/" + prop.script_object.name;

              // if script requires sudo, pull password from sudo component and include as query param
              if(prop.script_object.sudo)
              {
                const password_input = document.getElementById("password-input") as HTMLInputElement;
                const password = password_input.value;
                console.log("sudo password: ", password);
                run_url += "?password=" + encodeURIComponent(password);
              }

              fetch(run_url)
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.error("Error running script:", error);
              });
            }
              // fetch('/api/script').then((res) => 
              // {
              //   res.json().then((data: any) => {
              //     // console.log(data);
              //     // loop data
              //     for (let i = 0; i < data.length; i++) {
              //       console.log(data[i]);
              //     }

              //     // const name_array: string[] = data.map((script: any) => script.name);
              //     set_script_objects(data);
              //   });
              // });
            }>
        RUN</div>
        
        <br></br>
      </div>
      
    </>
  )
}

export default Script
