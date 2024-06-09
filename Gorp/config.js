/// <reference types="../CTAutocomplete" />

import {
    @ButtonProperty,
    @CheckboxProperty,
    Color,
    @ColorProperty,
    @PercentSliderProperty,
    @SelectorProperty,
    @SwitchProperty,
    @TextProperty,
    @Vigilant,
} from "../Vigilance/index";

@Vigilant("Gorp", "Gorp", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Dungeons", "About"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})

class config {
    @SwitchProperty({
        name: "Anti Monkey",
        description: "Automatically kicks known monkeys",
        subcategory: "Party",
        category: "General"
    })
    autoKick = false;

    @SwitchProperty({
        name: "Party Commands",
        description: "A few nice commands to have (use -help in chat)",
        subcategory: "Party",
        category: "General"
    })
    partyCommands = false;

    @SwitchProperty({
        name: "Leap Announcer",
        description: "Sends a chat message when you leap to someone",
        subcategory: "General",
        category: "Dungeons"
    })
    leapAnnounce = false;

    @SwitchProperty({
        name: "Auto Pearls",
        description: "Automatically refills your pearls on the start of your run",
        subcategory: "General",
        category: "Dungeons"
    })
    autoRefill = false;

    @ButtonProperty({
        name: "Github",
        description: "Click for the Gorp Github",
        category: "About",
        subcategory: "Links",
        placeholder: "Click!"
    })
    MyGithub() {
        java.awt.Desktop.getDesktop().browse(new java.net.URI("https://github.com/jenarkk/Gorp"))
    }
    constructor() {
        this.initialize(this);
    }
}

export default new config()