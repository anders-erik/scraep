import { useState, useEffect } from 'react'

import './script.css'

import type { ScriptType } from '../../types/script.ts'


function Script(prop: any) {

  const [script, setScript] = useState([] as ScriptType[])

  return (
    <>
      <div className="script">
        <div className="name-label">Name: {prop.script_object.name}</div>
        <br></br>
        <div>Description : {prop.script_object.description}</div>
        <div
          onClick=
            {() => 
            {
              console.log("running ", prop.script_object.name)
              fetch("/api/run/" + prop.script_object.name)
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
