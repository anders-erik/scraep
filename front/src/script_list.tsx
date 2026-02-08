import { useState, useEffect } from 'react'

import Script from './script.tsx'


function ScriptList() {

  const [script_objects, set_script_objects] = useState([] as any[])

  useEffect(() => {

    const scripts_res: any = fetch('/api/script').then((res) => 
    {
      res.json().then((data: any) => {
        // console.log(data);
        // loop data
        for (let i = 0; i < data.length; i++) {
          console.log(data[i]);
        }

        // const name_array: string[] = data.map((script: any) => script.name);
        set_script_objects(data);
      });
    });
  }, []);

  return (
    <>
      <div className="script_list no-scoll">
        <h2>Scripts</h2>
        <div id='item-list'>

          {script_objects.map((script_object, index) =>
          (
              <Script key={script_object.name} script_object={script_object}/>
          ))}

        </div>
        
      </div>
    </>
  )
}

export default ScriptList
