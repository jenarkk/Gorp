import config from "./config"
import "./features/Dungeons/leapreminder"
import "./features/General/autokick"
import "./features/General/partycommands"

register("command", () => {
  config.openGUI()
}).setCommandName("gorp").setAliases(["gorpaddons"])