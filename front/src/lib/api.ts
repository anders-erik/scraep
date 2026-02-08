

import type { ScriptType } from "../../../types/script.ts";

export function post_script(script: any): Promise<ScriptType>
{
    return new Promise((resolve, reject) =>
    {
        fetch('/api/script',
        {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(script)
        })
        .then(response => response.json())
        .then(data =>
        {
            resolve(data);
        })
        .catch(error =>
        {
            reject(error);
        });
    });
}