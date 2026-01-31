

import * as DB from './db';
import * as Runner from './runner';

import type { ScriptSetting } from '../types/scriptSetting';

DB.connect();

// get cli arguments

if(process.argv.length < 2)
{
    console.log("Usage: cli run <script_name>");
    console.log("Usage: cli script // find available scripts");
    process.exit(1);
}

if(process.argv[2] === 'run')
{
    const script_name = process.argv[3];
    const script_setting: ScriptSetting = DB.get_script(script_name);
    Runner.run(script_setting).then(output => {
        console.log(output);
    });
}
else if(process.argv[2] === 'script')
{
    const available_scripts = DB.get_available_scripts() as ScriptSetting[];
    console.log(available_scripts);
}
else
{
    console.log("Unknown command");
}

