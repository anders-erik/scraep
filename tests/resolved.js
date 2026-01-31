import test from "node:test";
import assert from "node:assert/strict";

test("resolved_is_active", async () => {

    await fetch("http://localhost:8081/ping")
    .then(async (response) => {
        const ping = await response.json();
        // console.log(ping);
        assert.equal(ping.message, "pong!");
    })
    .catch((error) => {
        console.error("Error fetching /ping:", error);
        assert.fail("Failed to fetch /ping");
    });

});