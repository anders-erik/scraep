

import { exec } from 'child_process';

import express from 'express';
import { get } from 'http';
import { resolve } from 'path';

import fs from 'fs';
import { Script } from 'vm';

import { read_json_file_abs } from './json';

import type { ScriptSetting } from '../types/scriptSetting';

// const data_dir_path = '/ae/prod/webscript/data/';


export function run(script: ScriptSetting): Promise<string> {
    return new Promise((resolve, reject) => {
        exec(`${script.content}`, (error, stdout, stderr) => {
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


/** legacy function for querying bash files for available function diretctly */
function get_available_scripts(): Promise<string[]>
{
    return new Promise((resolve, reject) => {

        let scripts: string[] = [];

        // grab functions from commands.sh using bash 'declare -F' command
        // and add them to the scripts array

        // print cwd
        console.log(process.cwd());

        const script_text = 'cd .. && bash -c "source ./commands.sh && declare -F" | awk \'{print $3}\'';
        exec(script_text, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing command: ${error.message}`);
                return;
            }
            if (stderr) {
                console.error(`Error output: ${stderr}`);
                return;
            }
            // else
            //     console.log(stdout)

            const functionNames = stdout.split('\n').map(line => line);

            // Add function names to scripts array
            for (const funcName of functionNames) {
                console.log(`Found script function: ${funcName}`);
                scripts.push(funcName);
            }

            // return scripts array
            // return scripts;
            // resolve(scripts);
            resolve(scripts);
        });
    });
    // return scripts;
}


// export function run_script(script_name: string): Promise<string>
// {
//     return new Promise((resolve, reject) => {
        
//         const command_str = `cd .. && source ./commands.sh && ${script_name}`;
//         // const command_str = `bash -c "source ./commands.sh && ${script_name}"`;

//         // set cwd to parent directory
        
        
//         exec(command_str, (error, stdout, stderr) => {
//             let output: string = "";
//             if (error) {
//                 console.log("ERROR");
//                 output = error.message;
//                 resolve(output);
//                 return;
//             }
//             if (stderr)
//                 output = stderr.trim();
//             else
//                 output = stdout.trim();

//             console.log(`Script output: ${output}`);

//             resolve( output );
//         });
//     });
// }


export function run_command(command_str: string): Promise<string> {
    return new Promise((resolve, reject) => {
        exec(`${command_str}`, (error, stdout, stderr) => {
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


/** get the available relative file paths containing webscripts */
export function file_names_in_dir(dir_path: string): Promise<string[]>
{
    return new Promise((resolve, reject) => 
    {

        let file_names: string[] = [];

        import('fs').then(fs =>
        {
            fs.readdir(dir_path, (err, files) =>
            {
                if (err) {
                    reject(err);
                    return;
                }

                files.forEach(file => 
                {
                    file_names.push(file.toString());
                });

                resolve(file_names);
            });
        });

    });
}

/**
 */
export async function get_available_script_names(): Promise<string[]>
{
    return new Promise(async (resolve, reject) => {
        
        const data_dir_path = '/ae/prod/webscript/data/';

        console.log(1)

        let file_names: string[] = await file_names_in_dir(data_dir_path);

        console.log(file_names);

        let available_script_names: string[] = [];
        // const script_names: string[] = [];

        for(let file_name of file_names)
        {
            const file_name_full = data_dir_path + "/" + file_name;


            console.log(`Loading script file: ${file_name_full}`);

            const script_settings: ScriptSetting[] = await read_json_file_abs(file_name_full);

            // available_script_names.push(...script_settings.map(s => s.name));
            for(const setting of script_settings)
            {            
                available_script_names.push(setting.name);
            }
            
            // for(const setting of script_settings)
            // {
            //     console.log(`Found script: ${setting.name}`);
            //     console.log(`  Description: ${setting.description}`);
            // }
        }
        // let script_mames: string[] = get

    
        resolve(available_script_names);
    });
};


export async function run_script(script_name: string): Promise<string>
{
    return new Promise((resolve, reject) => 
    {

        const tmp_script_dir = '/tmp/aebuntu/webscript/scripts/';
        const file_name = script_name + '.sh';
        const script_file_path = tmp_script_dir + file_name;

        // create dir if it doesn't exist
        if (!fs.existsSync(tmp_script_dir)) {
            fs.mkdirSync(tmp_script_dir, { recursive: true });
        }

        // create bash string
        const script_content = 
`#!/bin/bash
cd ${tmp_script_dir}
chmod +x ${file_name}
./${file_name}`;

        fs.writeFileSync(script_file_path, script_content, { mode: 0o755 });


        resolve("not implemented");
    });
}
