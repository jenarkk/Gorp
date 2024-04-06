/// <reference types="../../../CTAutocomplete" />
/// <reference lib="es2015" />

import variables from "../../utils/variables"

// hoverable message for when you run out

const pearlBuyMessage = new Message(
    new TextComponent(`${variables.PREFIX}&eClick here to buy Ender Pearls.&r`).setClick("run_command", "/bz ender pearl").setHoverValue(`/bz ender pearl`));
const leapBuyMessage = new Message(
    new TextComponent(`${variables.PREFIX}&eClick here to buy Spirit Leaps.&r`).setClick("run_command", "/bz spirit leap").setHoverValue(`/bz spirit leap`));
const tntBuyMessage = new Message(
    new TextComponent(`${variables.PREFIX}&eClick here to buy Superboom TNT.&r`).setClick("run_command", "/bz superboom").setHoverValue(`/bz superboom`));

// hiding default chats

register("chat", (event) => {
    cancel(event)
}).setCriteria(`from your Sacks to your inventory.`).setContains()

register("chat", (event) => {
    ChatLib.chat(`${variables.PREFIX}&cYou don't have any Ender Pearls&r&c in your sack&r`)
    ChatLib.chat(pearlBuyMessage)
    cancel(event)
}).setCriteria(`You have no Ender Pearl in your Sacks!`).setContains()

register("chat", (event) => {
    ChatLib.chat(`${variables.PREFIX}&cYou don't have any Spirit Leaps&r&c in your sack`)
    ChatLib.chat(leapBuyMessage)
    cancel(event)
}).setCriteria(`You have no Spirit Leap in your Sacks!`).setContains()

register("chat", (event) => {
    ChatLib.chat(`${variables.PREFIX}&cYou don't have any Superboom TNT&r&c in your sack`)
    ChatLib.chat(tntBuyMessage)
    cancel(event)
}).setCriteria(`You have no Superboom TNT in your Sacks!`).setContains()

register("chat", (event) => {
    cancel(event)
}).setCriteria(`Command Failed: This command is on cooldown! Try again in about a second!`).setContains()

// ender pearls

register("command", (count) => {
    if (count) {
        const num = parseInt(count)
        if (isNaN(num)) return ChatLib.chat(`&c/enderpearl [amount]`)
        ChatLib.command(`gfs ender_pearl ${num}`)
        return
    }

    const pearlStack = Player.getInventory().getItems().find(a => a?.getName() == "§fEnder Pearl")

    if (!pearlStack) {
        ChatLib.command(`gfs ender_pearl 16`)
        ChatLib.chat(`${variables.PREFIX}&716 Ender Pearls given`)
        return
    }

    const toGive = 16 - pearlStack.getStackSize()
    if (toGive == 0) {
        ChatLib.chat(`${variables.PREFIX}&7You already have 16 Ender Pearls`)
        return
    }

    ChatLib.chat(`${variables.PREFIX}&7${toGive} Ender Pearls given`)
    ChatLib.command(`gfs ender_pearl ${toGive}`)

}).setName("pearl").setAliases(["ep", "pearlrefill"])

// spirit leaps

register("command", (count) => {
    if (count) {
        const num = parseInt(count)
        if (isNaN(num)) return ChatLib.chat(`&c/leap [amount]`)
        ChatLib.command(`gfs spirit_leap ${num}`)
        return
    }

    const leapStack = Player.getInventory().getItems().find(a => a?.getName() == "§9Spirit Leap")

    if (!leapStack) {
        ChatLib.command(`gfs spirit_leap 16`)
        ChatLib.chat(`${variables.PREFIX}&716 Spirit Leaps given`)
        return
    }

    const toGive = 16 - leapStack.getStackSize()
    if (toGive == 0) {
        ChatLib.chat(`${variables.PREFIX}&7You already have 16 Spirit Leaps`)
        return
    }
    ChatLib.command(`gfs spirit_leap ${toGive}`)

}).setName("leap").setAliases(["sl", "leaprefill"])

// superboom tnt

register("command", (count) => {
    if (count) {
        const num = parseInt(count)
        if (isNaN(num)) return ChatLib.chat(`&c/tnt [amount]`)
        ChatLib.command(`gfs superboom_tnt ${num}`)
        return
    }

    const tntStack = Player.getInventory().getItems().find(a => a?.getName() == "§9Superboom TNT")

    if (!tntStack) {
        ChatLib.command(`gfs superboom_tnt 64`)
        ChatLib.chat(`${variables.PREFIX}&764 Superboom TNT given`)
        return
    }

    const toGive = 64 - tntStack.getStackSize()
    if (toGive == 0) {
        ChatLib.chat(`${variables.PREFIX}&7You already have 64 Superboom TNT`)
        return
    }
    ChatLib.command(`gfs superboom_tnt ${toGive}`)

}).setName("tnt").setAliases(["boom", "superboom", "tntrefill"])