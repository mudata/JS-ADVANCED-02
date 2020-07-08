function solve(input) {
    class Balloon {
        constructor(color, gasWeight) {
            this.color = color;
            this.gasWeight = gasWeight;
        }
    }
    class PartyBalloon extends Balloon {
        constructor(ribbonColor, ribbonLength, color, gasWeight) {
            super(color, gasWeight);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength
            this._ribbon = {
                color: this.color,
                gasWeight: this.gasWeight,
            }
        }
        get ribbon(){
            return this._ribbon
        }
    }
    class BirthdayBalloon extends partyBalloon {
        constructor(parameter, ribbonColor, ribbonLength, color, gasWeight) {
            super(ribbonColor, ribbonLength, color, gasWeight)
            this._parameter = parameter;
        }
        get parameter(){
            return this._parameter;
        }
    }
    return{
        Balloon:Balloon,
        partyBalloon:partyBalloon,
        BirthdayBalloon:BirthdayBalloon,
    }
}

solve();