/// <reference types="../../../CTAutocomplete" />
/// <reference lib="es2015" />

import config from "../../config"

register("chat", () => {
    if(!config.termCall) return
    if(config,termCall == 0) return
    if(config,termCall == 1){ChatLib.command("pc Device")}
    if(config,termCall == 2){ChatLib.command("pc 1")}
    if(config,termCall == 3){ChatLib.command("pc 2")}
    if(config,termCall == 4){ChatLib.command("pc 3")}
    if(config,termCall == 5){ChatLib.command("pc 4")}
}).setCriteria("&r&4[BOSS] Storm&r&c: &r&cI should have known that I stood no chance.&r")