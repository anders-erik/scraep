import test from "node:test";
import assert from "node:assert/strict";

import { available_scripts } from "../back/scriptrunner.js";
// const avail = require("../back/scriptrunner.js");

test("list_available_scripts", async () => {

    const scripts = await available_scripts();


    

});