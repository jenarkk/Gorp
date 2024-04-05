import config from "../../config"
import variables from "../../utils/variables"

gorpcounter = 0

register("chat", () => {
  gorpcounter += 1
}).setCriteria("gorp").setContains()

register("chat", () => {
  if(config.partyCommands){
    ChatLib.chat(` \n${variables.PREFIX}\n&b&l-help &r&8&kw&r &7Displays this message. \n&b&l-leader &r&8&kw&r &7Invites the Gorp leader to the party. \n&b&l-walrus &r&8&kw&r &7Walrus. \n&b&l-gorp &r&8&kw&r &7Shows how many times Gorp has been said.\n `)
  }
}).setCriteria("-help").setContains()

register("chat", () => {
  if(config.partyCommands){
    ChatLib.chat(`${variables.PREFIX}&7The Gorp leader has been partied.`)
    ChatLib.say("/p bajhi")
  }
}).setCriteria("-leader").setContains()

register("chat", () => {
  if(config.partyCommands){
    ChatLib.say(`The walrus (Odobenus rosmarus) is a large pinniped marine mammal with discontinuous distribution about the North Pole in the Arctic Ocean and subarctic seas of the Northern Hemisphere.`)
  }
}).setCriteria("-walrus").setContains()

register("chat", () => {
  if(config.partyCommands){
    ChatLib.say(`Gorp has been said ${gorpcounter} times.`)
  }
}).setCriteria("-gorp").setContains()

register("chat", () => {
  if(config.partyCommands){
    ChatLib.chat(`${variables.PREFIX}&7Your Ender Pearls have been refilled`)
    ChatLib.say(`My Ender Pearls have been refilled`)
    ChatLib.command("pearlrefill", true)
  }
}).setCriteria("-pearls").setContains()
