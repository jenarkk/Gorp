import config from "../../config"

gorpcounter = 0

register("chat", () => {
  gorpcounter += 1
}).setCriteria("gorp").setContains()

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
