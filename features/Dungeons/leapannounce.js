import config from "../../config"

register("chat", (name) => {
    if(config.leapAnnounce){
        ChatLib.command(`pc Leaped to ${name}`)
    }
}).setCriteria("You have teleported to ${name}!")