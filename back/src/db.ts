
// import better sqlite
import Database from 'better-sqlite3';

import fs from 'fs';
import path from 'node:path';

import type { ScriptSetting } from '../types/scriptSetting';

const db_path = '/ae/prod/scraep/scraep.sqlite';
// let DB: any;
let DB: Database.Database;
// const db = new Database(db_path, {});

export function connect(): void
{
    DB = new Database(db_path, {});;
}
// db.pragma('journal_mode = WAL');


export function get_available_scripts(): ScriptSetting[]
{
    const stmt = DB.prepare('SELECT * FROM script;');
    const scripts = stmt.all() as ScriptSetting[];
    console.log(scripts);
    return scripts;
}

export function get_script(script_name: string): ScriptSetting
{
    const stmt = DB.prepare('SELECT * FROM script WHERE name = ?;');
    const scripts = stmt.all(script_name) as ScriptSetting[];
    console.log(scripts[0]);
    return scripts[0];
}


export const db = {
    connect,
    get_available_scripts,
    get_script,
};