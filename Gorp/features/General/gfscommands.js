/// <reference types="../../../CTAutocomplete" />

import { prefix } from "../../utils/utils";

const pearlBuyMessage = new Message(
    new TextComponent(`${prefix}&eClick here to buy Ender Pearls.&r`).setClick("run_command", "/bz ender pearl").setHoverValue(`/bz ender pearl`));

register("chat", (event) => {
    ChatLib.chat(`${prefix}&716 Ender Pearls Given`)
    cancel(event)
}).setCriteria(`Ender Pearl from your Sacks to your inventory.`).setContains()

register("chat", (event) => {
    ChatLib.chat(`${prefix}&cYou don't have any Ender Pearls&r&c in your sack&r`)
    ChatLib.chat(pearlBuyMessage)
    cancel(event)
}).setCriteria(`You have no Ender Pearl in your Sacks!`).setContains()

register("command", (count) => {
    if (count) {
        const num = parseInt(count)
        if (isNaN(num)) return ChatLib.chat(`&c/pearl <amount>`)
        ChatLib.command(`gfs ender_pearl ${num}`)
        return
    }
    const pearlStack = Player.getInventory().getItems().find(a => a?.getName() == "§fEnder Pearl")
    if (!pearlStack) {
        ChatLib.command(`gfs ender_pearl 16`)
        return
    }
    const toGive = 16 - pearlStack.getStackSize()
    if (toGive == 0) {
        ChatLib.chat(`${prefix}&7You already have 16 Ender Pearls`)
        return
    }
    ChatLib.command(`gfs ender_pearl ${toGive}`)
}).setName("pearl").setAliases(["ep", "pearlrefill", "pearls"]) 