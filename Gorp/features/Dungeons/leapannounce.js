/// <reference types="../../../CTAutocomplete" />

import config from "../../config"

let username = Player.getName()

register("chat", (name) => {
    username = Player.getName()
    if(config.leapAnnounce){
        ChatLib.command(`pc ${username} is leaping to ${name}`)
    }
}).setCriteria("You have teleported to ${name}!")