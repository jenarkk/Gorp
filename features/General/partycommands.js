import config from "../../config"

gorpcounter = 0

register("chat", () => {
  gorpcounter += 1
}).setCriteria("gorp").setContains()

register("chat", () => {
  if(config.partyCommands){
    ChatLib.chat("&b&k&lwwwww\n&b&l-help &r&8/ &7Displays this message. \n&b&l-leader &r&8/ &7Invites the Gorp leader to the party. \n&b&l-walrus &r&8/ &7Walrus. \n&b&l-gorp &r&8/ &7Shows how many times Gorp has been said.\n&b&k&lwwwww")
  }
}).setCriteria("-help").setContains()

register("chat", () => {
  if(config.partyCommands){
    ChatLib.say("/p bajhi")
  }
}).setCriteria("-leader").setContains()

register("chat", () => {
  if(config.partyCommands){
    ChatLib.say("The walrus (Odobenus rosmarus) is a large pinniped marine mammal with discontinuous distribution about the North Pole in the Arctic Ocean and subarctic seas of the Northern Hemisphere.")
  }
}).setCriteria("-walrus").setContains()

register("chat", () => {
  if(config.partyCommands){
    ChatLib.say("gorp has been said " + gorpcounter + " times")
  }
}).setCriteria("-gorp").setContains()
