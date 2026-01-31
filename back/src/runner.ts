

import { exec } from 'child_process';

import fs from 'fs';

import type { ScriptSetting } from '../types/scriptSetting';


export function run(script: ScriptSetting): Promise<string> {
    return new Promise((resolve, reject) => {
        exec(`${script.content}`, (error, stdout, stderr) =>
        {
            let output: string = "";

            // if (error) {
            //     resolve(error.message);
            // }
            if (stderr)
                output = stderr.trim();
            else
                output = stdout.trim();

            resolve(output);
        });
    });
}

