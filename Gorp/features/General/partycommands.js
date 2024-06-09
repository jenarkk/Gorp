/// <reference types="../../../CTAutocomplete" />

import config from "../../config"
import { prefix } from "../../utils/utils"
import PogObject from "../../../PogData"

const data = new PogObject("Gorp", {
	counter: 0
});

register("chat", () => {
  data.counter = data.counter + 1;
  data.save()
}).setCriteria("gorp").setContains()

register("chat", () => {
  if(config.partyCommands){
    ChatLib.say(`Gorp Party Commands: -[help, pearls, leader, walrus, gorp, squirrel]`)
  }
}).setCriteria(`-help`).setContains()

register("chat", () => {
  if(config.partyCommands){
    ChatLib.chat(`${prefix} &7The Gorp leader has been partied.`)
    ChatLib.say("/p bajhi")
  }
}).setCriteria("-leader").setContains()

//hypixel removed all links ;(

//register("chat", () => {
//  if(config.partyCommands){
//   ChatLib.say("https://cdn.discordapp.com/attachments/1017180632859811870/1225466398449467574/IMG_8883.png?ex=66213b85&is=660ec685&hm=ff2020681b1b9e8005e06ef4d68510d6f1542e554d3c0d1a360af823308db68c&")
//  }
//}).setCriteria("-squirrel").setContains()

register("chat", () => {
  if(config.partyCommands){
    ChatLib.say(`The walrus (Odobenus rosmarus) is a large pinniped marine mammal with discontinuous distribution about the North Pole in the Arctic Ocean and subarctic seas of the Northern Hemisphere.`)
  }
}).setCriteria("-walrus").setContains()

register("chat", () => {
  if(config.partyCommands){
    ChatLib.say(`Gorp has been said ${data.counter} times.`)
  }
}).setCriteria("-gorp").setContains()

register("chat", () => {
  if(config.partyCommands){
    ChatLib.say(`My Ender Pearls have been refilled`)
    ChatLib.command("pearlrefill", true)
  }
}).setCriteria("-pearls").setContains()