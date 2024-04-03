// Credit to UnclaimedBloom6 for this

import config from "../../config"
import variables from "../../utils/variables"

register("command", (count) => {
    if (count) {
        const num = parseInt(count)
        if (isNaN(num)) return ChatLib.chat(`&c/enderpearl [amount]`)
        ChatLib.command(`gfs ender_pearl ${num}`, false)
        return
    }

    const pearlStack = Player.getInventory().getItems().find(a => a?.getName() == "§fEnder Pearl")

    if (!pearlStack) {
        ChatLib.command(`gfs ender_pearl 16`, false)
        return
    }

    const toGive = 16 - pearlStack.getStackSize()
    if (toGive == 0) return
    ChatLib.command(`gfs ender_pearl ${toGive}`, false)

}).setName("pearl").setAliases(["ep", "pearlrefill"])

register("command", (count) => {
    if (count) {
        const num = parseInt(count)
        if (isNaN(num)) return ChatLib.chat(`&c/leap [amount]`)
        ChatLib.command(`gfs spirit_leap ${num}`, false)
        return
    }

    const leapStack = Player.getInventory().getItems().find(a => a?.getName() == "§9Spirit Leap")

    if (!leapStack) {
        ChatLib.command(`gfs spirit_leap 16`, false)
        return
    }

    const toGive = 16 - leapStack.getStackSize()
    if (toGive == 0) return
    ChatLib.command(`gfs spirit_leap ${toGive}`, false)

}).setName("leap").setAliases(["sl", "leaprefill"])

register("command", (count) => {
    if (count) {
        const num = parseInt(count)
        if (isNaN(num)) return ChatLib.chat(`&c/tnt [amount]`)
        ChatLib.command(`gfs superboom_tnt ${num}`, false)
        return
    }

    const tntStack = Player.getInventory().getItems().find(a => a?.getName() == "§9Superboom TNT")

    if (!tntStack) {
        ChatLib.command(`gfs superboom_tnt 64`, false)
        return
    }

    const toGive = 64 - tntStack.getStackSize()
    if (toGive == 0) return
    ChatLib.command(`gfs superboom_tnt ${toGive}`, false)

}).setName("tnt").setAliases(["boom", "superboom", "tntrefill"])
