import config from "../../config"

register("chat", () => {
    if(config.autoKick){
        ChatLib.say("/p kick EZhedeh")
    }
}).setCriteria("EZhedeh joined the party.").setContains()

register("chat", () => {
    if(config.autoKick){
        ChatLib.say("/p kick Redshotz")
    }
}).setCriteria("Redshotz joined the party.").setContains()
