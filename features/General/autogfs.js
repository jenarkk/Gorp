import config from "../../config"
import variables from "../../utils/variables"
let dead = false

register("chat", () => {
    dead = true
}).setCriteria("You can't do this as a Spectator!").setContains()

register("chat", () => {
    dead = false
}).setCriteria(`${variables.username} was revived`).setContains()

register("chat", () => {
    if(config.autoGfs){
        ChatLib.command("pearlrefill", true)
    }
}).setCriteria("&r&aStarting in 1 second.&r").setContains()

register("step", () => {
    const pearlStack = Player.getInventory().getItems().find(a => a?.getName() == "§fEnder Pearl")
    if (!pearlStack && config.autoGfsRefill && dead == false) {
        ChatLib.command(`pearlrefill`, true)
    }
}).setDelay("0.5") 
