/// <reference types="../CTAutocomplete" />
/// <reference lib="es2015" />

import config from "./config"
import "./features/Dungeons/leapreminder"
import "./features/General/autokick"
import "./features/General/partycommands"
import "./features/General/gfscommands"
import "./features/General/random"
import "./features/Dungeons/leapannounce"
import "./features/Dungeons/termcall"

register("command", () => {
  config.openGUI()
}).setCommandName("gorp")