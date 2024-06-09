/// <reference types="../../../CTAutocomplete" />

import config from "../../config"
import { prefix } from "../../utils/utils"

//register("chat", () => {
//    if(config.autoKick){
//        ChatLib.chat(`${variables.PREFIX}&7Autokick has kicked EZhedeh`)
//       ChatLib.say("/p kick EZhedeh")
//    }
//}).setCriteria("EZhedeh joined the party.").setContains()

register("chat", () => {
    if(config.autoKick){
        ChatLib.say(`[Gorp] MONKEY DETECTED! Kicking...`)
        ChatLib.command("p kick Redshotz")
    }
}).setCriteria("RedShotz joined the party.").setContains()