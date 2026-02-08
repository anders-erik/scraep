
// import path from 'path';
// import { get } from 'http';
// import { log } from 'console';

import { exec } from 'child_process';

import express from 'express';
import { get } from 'http';
import { resolve } from 'path';
import {    get_available_script_names, 
            // text_file_to_json, 
            run_command,
            file_names_in_dir   } from './scriptrunner';

import { connect, get_available_scripts, get_script } from './db';
// import { db } from './db';

import * as DB from './db';
import * as Runner from './runner';

import type { ScriptSetting } from '../types/scriptSetting';



// run result
type RunResult = {
    success: boolean;
    output: string;
};




const app = express();
const PORT = process.env.PORT || 8081;
const root_path = process.cwd();

app.use(express.json());

app.use((err: any, req: any, res: any, next: any) => {
    console.error(err); 
    res.status(500).json({ error: err.message || 'Internal Server Error' });
});


/** run script using script name-id */
app.get('/run/:name', async (req, res) =>
{
    const script_name = req.params.name as string;
    // get query param sudo
    
    
    const script_setting: ScriptSetting = DB.get_script(script_name);

    // Make sure sudo password is provided if script requires sudo
    const sudo_password = req.query.password as string;
    if(script_setting.sudo && !sudo_password)
    {
        console.log("no sudo password provided");
        res.json({ message: "no sudo password provided" });
        return;
    }

    let script_output: string = "";

    if(script_setting.sudo)
        script_output = await Runner.run_sudo(script_setting, sudo_password);
    else
        script_output = await Runner.run(script_setting);

    res.json({ message: script_output });
});

/** Query script-tabe without filtering (i.e. all scripts) */
app.get('/script', async (req, res) =>
{
    const available_scripts = DB.get_available_scripts() as ScriptSetting[];

    res.status(200).json(available_scripts);
});

app.put('/script/:name', async (req, res) =>
{
    DB.update_script(req.body as ScriptSetting);

    res.status(200).json({status: "success"});
});

app.post('/script' , async (req, res) =>
{
    console.log("Backend received request to add new script");
    const script_name = DB.add_empty_script();
    console.log("New script name: ", script_name);
    res.status(200).json({status: "success"});
});






app.get('/ping', async (req, res) =>
{
    console.log("GET GET");

    // res.set('Content-Type', 'text/plain')
    // res.write("pong!");
    // res.status(200).write("pong!");
    // res.status(200).write("pong!");
    res.status(500).json({ "message": "pong" });
});


app.get('/script/hello_world', async (req, res) =>
{
    run_command('echo "Hello, World!"')
    .then(output => {
        res.json({ message: output });
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error });
    });
});



app.get('/status/resolved', async (req, res) =>
{
    //run_command('systemctl status systemd-resolved')
    run_command('systemctl is-active systemd-resolved')
    .then(output => {
        res.json({ message: output });
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error });
    });
});

app.get('/resolved/is-active', async (req, res) =>
{
    //run_command('systemctl status systemd-resolved')
    run_command('systemctl is-active systemd-resolved')
    .then(output => {
        res.json({ message: output });
    })
    .catch(error => {
        console.error(error);
        res.status(500).json({ error });
    });
});


app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, async () => {
    console.log(`Server running on port ${PORT}`);

    connect();

    setTimeout(() => {
        console.log('1 sec passed@');
    }, 1000);

    // await available_scripts();
    // const data_file_names: string[] = await webscript_data_files();
    // console.log(data_file_names);
    // for(const file_name of data_file_names)
    // {
    //     const jsn = await text_file_to_json(file_name);
    //     console.log(jsn);
    // }

    // const available_script_names: string[] = await get_available_script_names();
    // console.log("available_script_names: ", available_script_names);
});
