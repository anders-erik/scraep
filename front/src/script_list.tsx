import { useState, useEffect } from 'react'


function ScriptList() {

  const [scriptnames, setScriptnames] = useState([] as string[])

  useEffect(() => {
    setScriptnames(['script1', 'script2', 'script3']);

    const scripts_res: any = fetch('/api/script').then((res) => 
    {
      res.json().then((data: any) => {
        console.log(data);
        const name_array: string[] = data.map((script: any) => script.name);
        setScriptnames(name_array);
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
      <div>
        <h2>Scripts</h2>
        <div id='item-list'>
          {scriptnames.map((name, index) => (
            <div 
              key={index} 
              className="script-name" 
              onClick={() => 
                console.log(name)
              }>
              {name}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ScriptList
