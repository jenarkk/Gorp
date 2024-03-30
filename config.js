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
        const categories = ["General", "Dungeons"];
        return categories.indexOf(a.name) - categories.indexOf(b.name);
    }
})

class config {
    
// -----------------------------------------------------------


// ------------------------- General

// ---- Essentials

    @SwitchProperty({
        name: "Anti-Monkey",
        description: "Automatically kicks known monkeys",
        subcategory: 'Essentials',
        category: "General"
    })
    autoKick = false;

// ---- Party

    @SwitchProperty({
        name: "Party Commands",
        description: "A few nice commands to have",
        subcategory: 'Party',
        category: "General"
    })
    partyCommands = false;

// ------------------------- Dungeons

// ---- F7/M7

    @SwitchProperty({
        name: "Leap Reminder",
        description: "Sends a chat message to leap to the Healer",
        subcategory: 'F7/M7',
        category: "Dungeons"
    })
    leapReminder = false;

    @TextProperty({
        name: 'Leap Reminder text',
        description: 'Text for Leap Reminder',
        category: 'Dungeons',
        subcategory: 'F7/M7',
        placeholder: 'Leap to Healer!',
    })
    leapReminderText = '';

// ---- Terminals

    @SwitchProperty({
        name: "Custom Terminal GUIs",
        description: "Custom Terminal GUI (Coming soon)",
        subcategory: 'Terminals',
        category: "Dungeons"
    })
    customTermGui = false;

// -----------------------------------------------------------

    constructor() {
        this.initialize(this);
    }
}

export default new config()