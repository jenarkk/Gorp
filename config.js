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
} from '../Vigilance/index';

@Vigilant("Gorp", "Gorp", {
    getCategoryComparator: () => (a, b) => {
        const categories = ["General", "Dungeons", "About"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})

class config {
    
// -----------------------------------------------------------

    @SwitchProperty({
        name: "Anti Monkey",
        description: "Automatically kicks known monkeys",
        subcategory: 'Party',
        category: "General"
    })
    autoKick = false;

    @SwitchProperty({
        name: "Auto GFS",
        description: "Automatically GFS ender pearls at the start of runs. &c[UAYOR]",
        subcategory: 'Sacks',
        category: "General"
    })
    autoGfs = false;

    @SwitchProperty({
        name: "Auto GFS Refill",
        description: "Automatically GFS ender pearls when you run out. &c[UAYOR]",
        subcategory: 'Sacks',
        category: "General"
    })
    autoGfsRefill = false;

    @SwitchProperty({
        name: "Party Commands",
        description: "A few nice commands to have (use -help in chat)",
        subcategory: 'Party',
        category: "General"
    })
    partyCommands = false;

    @SwitchProperty({
        name: "Leap Reminder",
        description: "Sends a chat message to leap to the Healer (use /hset to assign the healer role manually)",
        subcategory: 'F7/M7',
        category: "Dungeons"
    })
    leapReminder = false;

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

// -----------------------------------------------------------

    constructor() {
        this.initialize(this);
    }
}

export default new config()