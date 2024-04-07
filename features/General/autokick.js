/// <reference types="../../../CTAutocomplete" />
/// <reference lib="es2015" />

import config from "../../config"
import variables from "../../utils/variables"

register("chat", () => {
    if(config.autoKick){
        ChatLib.chat(`${variables.PREFIX}&7Autokick has kicked EZhedeh`)
        ChatLib.say("/p kick EZhedeh")
    }
}).setCriteria("EZhedeh joined the party.").setContains()

register("chat", () => {
    if(config.autoKick){
        ChatLib.chat(`${variables.PREFIX}&7Autokick has kicked Redshotz`)
        ChatLib.say("/p kick Redshotz")
    }
}).setCriteria("RedShotz joined the party.").setContains()
