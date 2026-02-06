import { useState, useEffect } from 'react'

import Script from './script.tsx'

import './script_list.css'
import './App.css'

function ScriptList() {

  const [script_objects, set_script_objects] = useState([] as any[])


  const run_on_click_fn = () => 
  {
    console.log('clicked a script name');
  }

  useEffect(() => {
    set_script_objects(['script1', 'script2', 'script3']);

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

    const updateScriptnames = async () => {
      let now = new Date().toLocaleTimeString();
      // setScriptnames(['script one', 'script two', 'script three', now]);

      
    };

    // Set an interval to call updateScriptnames every second
    const interval = setInterval(updateScriptnames, 1000);

  }, []);
  // setScriptnames(['script one', 'script two', 'script three'])

  // let scriptnames: string[] = ['script one', 'script two', 'script three']

  // Return a list of strings in divs
  return (
    <>
      <div className="script_list no-scoll">
        <h2>Scripts</h2>
        <div id='item-list'>
          {script_objects.map((script_object, index) => (
            <div 
              key={index} 
              className="script-name" 
              onClick=
              {() => 
                console.log(script_object.name)
              }>
              {/* {script_object} */}
              <Script script_object={script_object}/>
            </div>
            // <div>script</div>
            // add a button to run the script
            // <Script />
          ))}
          {/* // add script component with info and run button */}
          {/* <Script /> */}
        </div>
        
      </div>
    </>
  )
}

export default ScriptList
