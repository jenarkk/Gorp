import config from "../../config"
import LocationChecker from "../../utils/locationchecker"

const dungCheck = new LocationChecker("F7", "M7")

register("chat", () => {
    if(config.leapReminder && dungCheck.check()){
        ChatLib.say(config.leapReminderText)
    }
}).setCriteria("&r&4[BOSS] Storm&r&c: &r&cI should have known that I stood no chance.&r")
