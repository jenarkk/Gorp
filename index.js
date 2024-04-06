import config from "./config"
import "./features/Dungeons/leapreminder"
import "./features/General/autokick"
import "./features/General/partycommands"
import "./features/General/gfscommands"
import "./features/General/autogfs"
import "./features/General/random"

register("command", () => {
  config.openGUI()
}).setCommandName("gorp").setAliases(["gorpaddons"])
