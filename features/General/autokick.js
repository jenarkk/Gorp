import config from "../../config"

register("chat", () => {
    if(config.autoKick){
        ChatLib.say("/p kick EZhedeh")
    }
}).setCriteria("EZhedeh joined the party.").setContains()
