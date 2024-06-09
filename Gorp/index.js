/// <reference types="../CTAutocomplete" />

import config from "./config"
import "./features/General/autokick"
import "./features/General/partycommands"
import "./features/General/gfscommands"
import "./features/Commands/commands"
import "./features/Dungeons/leapannounce"
import "./features/Dungeons/autopearls"

register("command", () => {
  config.openGUI()
}).setCommandName("gorp")