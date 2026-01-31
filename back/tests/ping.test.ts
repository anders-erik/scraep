import test from "node:test";
import assert from "node:assert/strict";

import {    read_json_file_abs } from "../src/json";

import { run_command } from "../src/scriptrunner";
// const avail = require("../back/scriptrunner.js");

test("ping-read_json_file_abs", async () =>
{
    const ping_file_data = await read_json_file_abs("/tmp/aebuntu/webscript/data/ping.json");

    const ping_target = [
        {
            "name": "ping",
            "dir": "data",
            "description": "A simple ping web script that returns 'pong'.",
            "command": "echo \"pong\""
        }
    ];

    // assert.ok(true);
    // assert.equal(ping_file_data[0].name, ping_target[0].name);
    // assert.equal(ping_file_data[0].dir, ping_target[0].dir);
    // assert.equal(ping_file_data[0].description, ping_target[0].description);
    // assert.equal(ping_file_data[0].command, ping_target[0].command);

    assert.equal(JSON.stringify(ping_file_data), JSON.stringify(ping_target));
    // assert.equal(ping_file_data, ping_target);

});


test("ping-run_command", async () =>
{
    const ping_command = "echo \"pong\"";

    const ping_output = await run_command(ping_command);

    const ping_output_target = "pong";

    assert.equal(ping_output, ping_output_target);

});