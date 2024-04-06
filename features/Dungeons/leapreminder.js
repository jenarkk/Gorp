/// <reference types="../../../CTAutocomplete" />
/// <reference lib="es2015" />

import config from "../../config"
import variables from "../../utils/variables"
let HealerClass = "null"

//checks

register("chat", (player) => {
    ChatLib.command(`hset ${player}`, true)
}).setCriteria("Party Finder > ${player} joined the dungeon group! (Healer").setContains()

register("chat", (player) => {
    ChatLib.command(`hset ${player}`, true)
}).setCriteria("Party Finder > ${player} set their class to Healer").setContains()

register("chat", (player) => {
    if(player == HealerClass){
        ChatLib.command(`hset null`, true)
    }
}).setCriteria("Party Finder > ${player} set their class to Berserk").setContains()

register("chat", (player) => {
    if(player == HealerClass){
        ChatLib.command(`hset null`, true)
    }
}).setCriteria("Party Finder > ${player} set their class to Archer").setContains()

register("chat", (player) => {
    if(player == HealerClass){
        ChatLib.command(`hset null`, true)
    }
}).setCriteria("Party Finder > ${player} set their class to Mage").setContains()

register("chat", (player) => {
    if(player == HealerClass){
        ChatLib.command(`hset null`, true)
    }
}).setCriteria("Party Finder > ${player} set their class to Tank").setContains()

register("chat", () => {
    if(HealerClass == variables.username)
        ChatLib.command(`hset null`, true)
}).setCriteria(`You have selected the Tank Dungeon Class!`).setContains()

register("chat", () => {
    if(HealerClass == variables.username)
        ChatLib.command(`hset null`, true)
}).setCriteria(`You have selected the Archer Dungeon Class!`).setContains()

register("chat", () => {
    if(HealerClass == variables.username)
        ChatLib.command(`hset null`, true)
}).setCriteria(`You have selected the Berserk Dungeon Class!`).setContains()

register("chat", () => {
    if(HealerClass == variables.username)
        ChatLib.command(`hset null`, true)
}).setCriteria(`You have selected the Mage Dungeon Class!`).setContains()

register("chat", () => {
    ChatLib.command(`hset ${variables.username}`, true)
}).setCriteria(`You have selected the Healer Dungeon Class!`).setContains()

register("chat", () => {
    ChatLib.command(`hset null`, true)
}).setCriteria(`${HealerClass} selected the Tank Class!`).setContains()

register("chat", () => {
    ChatLib.command(`hset null`, true)
}).setCriteria(`${HealerClass} selected the Berserk Class!`).setContains()

register("chat", () => {
    ChatLib.command(`hset null`, true)
}).setCriteria(`${HealerClass} selected the Archer Class!`).setContains()

register("chat", () => {
    ChatLib.command(`hset null`, true)
}).setCriteria(`${HealerClass} selected the Mage Class!`).setContains()

register("chat", (player) => {
    ChatLib.command(`hset ${player}`, true)
}).setCriteria("${player} selected the Healer Class!").setContains()

//message

register("chat", () => {
    if(config.leapReminder){
        ChatLib.say(`Leap to ${HealerClass}`)
    }
}).setCriteria("&r&4[BOSS] Storm&r&c: &r&cI should have known that I stood no chance.&r")

//commands

register("command", () => {
    if(HealerClass == "null"){
        ChatLib.chat(`${variables.PREFIX}&7There is no Healer in this party`)
        return
    }
    ChatLib.chat(`${variables.PREFIX}&7Healer is set to &f${HealerClass}`)
}).setCommandName("hcheck").setAliases(["healercheck"])

register("command", (arg1) => {
    if(arg1 == undefined){
        ChatLib.chat(`${variables.PREFIX}&c/hset <username>`)
        return
    }
    if(arg1 == "null"){
        ChatLib.chat(`${variables.PREFIX}&7The Healer has changed class`)
        return
    }
    HealerClass = arg1
    ChatLib.chat(`${variables.PREFIX}&7Healer has been set to &f${HealerClass}`)
}).setCommandName("hset").setAliases(["healerset"])