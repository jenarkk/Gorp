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
        name: "Anti-Monkey",
        description: "Automatically kicks known monkeys",
        subcategory: 'Party',
        category: "General"
    })
    autoKick = false;

    @SwitchProperty({
        name: "Auto GFS",
        description: "Automatically GFS ender pearls at the start of runs.",
        subcategory: 'Sacks',
        category: "General"
    })
    autoGfs = false;

    @SwitchProperty({
        name: "Auto GFS Refill",
        description: "Automatically GFS ender pearls when you run out.",
        subcategory: 'Sacks',
        category: "General"
    })
    autoGfsRefill = false;

    @SwitchProperty({
        name: "Party Commands",
        description: "A few nice commands to have",
        subcategory: 'Party',
        category: "General"
    })
    partyCommands = false;

    @SwitchProperty({
        name: "Leap Reminder",
        description: "Sends a chat message to leap to the Healer (use /hset to assign the reminder manually)",
        subcategory: 'F7/M7',
        category: "Dungeons"
    })
    leapReminder = false;

// -----------------------------------------------------------

    constructor() {
        this.initialize(this);
    }
}

export default new config()
