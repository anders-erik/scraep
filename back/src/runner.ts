

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

// echo "your_password" | sudo -S -k <command>
export function run_sudo(script: ScriptSetting, password: string): Promise<string> {
    return new Promise((resolve, reject) =>
    {
        const sudo_content = `echo ${password} | sudo -S -k ${script.content}`;

        exec(sudo_content, (error, stdout, stderr) =>
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