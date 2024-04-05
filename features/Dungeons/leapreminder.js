import config from "../../config"
import variables from "../../utils/variables"
let HealerClass = null

register("chat", (player) => {
    ChatLib.command(`hset ${player}`, true)
}).setCriteria("Party Finder > ${player} joined the dungeon group! (Healer").setContains()

register("chat", () => {
    if(config.leapReminder){
        ChatLib.say(`Leap to ${HealerClass}`)
    }
}).setCriteria("&r&4[BOSS] Storm&r&c: &r&cI should have known that I stood no chance.&r")

register("command", () => {
    ChatLib.chat(`${variables.PREFIX}&7Healer is set to &f${HealerClass}`)
}).setCommandName("hcheck").setAliases(["healercheck"])

register("command", (arg1) => {
    HealerClass = arg1
    ChatLib.chat(`${variables.PREFIX}&7Healer has been set to &f${HealerClass}`)
}).setCommandName("hset").setAliases(["healerset"])
