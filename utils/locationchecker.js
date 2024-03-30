// Credit to Ninjune for this

export default class LocationChecker
{
    constructor(locations)
    {
        this.locations = locations
        this.checkTime = Date.now()
        this.state = false
        this.scoreboard = 0
    }

    check()
    {
        if(Date.now() - this.checkTime > 1000) // 1 sec
        {
            this.checkTime = Date.now()
            this.scoreboard = Scoreboard.getLines()

            for(let lineIndex = 0; lineIndex < this.scoreboard.length; lineIndex++)
            {
                for(let locationsIndex = 0; locationsIndex < this.locations.length; locationsIndex++)
                {
                    if(this.scoreboard[lineIndex].toString().includes(this.locations[locationsIndex]))
                    {
                        this.state = true
                        return this.state
                    }
                }
            }
            this.state = false
            return this.state
        }
        else
            return this.state
    }
}
