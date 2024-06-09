/// <reference types="../../../CTAutocomplete" />

import config from "../../config";

register("chat", () => {
    if (config.autoRefill) {
        ChatLib.command("pearlrefill", true)
    }
}).setCriteria("Starting in 1 second.").setContains()