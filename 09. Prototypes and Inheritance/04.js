function solve() {
    class Figure {
        constructor(units = "cm") {
            this.units = units
        }
        changeUnits(newUnit) {
            this.units = newUnit;
            return this.units;
        }

    }
    class Circle extends Figure {
        constructor(radius, units) {
            super(units);
            this.radius = radius;
        }
        get area() {
           
            if (this.units === "mm") {
                return Math.PI * this.radius * this.radius*100;
            }
            else if (this.units === "m") {
                return (Math.PI * this.radius * this.radius)*0.1;
            }
            else {
                return Math.PI * this.radius * this.radius;
            }
        }
        toString() {

            if (this.units === "mm") {
                return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius * 10}`
            } else if (this.units === "m") {
                return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius * 0.1}`
            } else {
                return `Figures units: ${this.units} Area: ${this.area} - radius: ${this.radius}`
            }
        }

    }
    class Rectangle extends Figure {
        constructor(width, height, units) {
            super(units);
            this.width = width;
            this.height = height
        }
        get area() {
            if (this.units === "mm") {
                return this.width*10 * this.height*10;
            }
            else if (this.units === "m") {
                return (this.width * this.height)*0.1;
            }
            else {
                return this.width * this.height;
            }
        }
        toString() {
            if (this.units === "mm") {
                return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width * 10}, height: ${this.height * 10}`
            } else if (this.units === "m") {
                return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width * 0.1}, height: ${this.height * 0.1}`
            } else {
                return `Figures units: ${this.units} Area: ${this.area} - width: ${this.width}, height: ${this.height}`
            }
        }

    }
return{
    Figure,
    Circle,
    Rectangle
}   
}

solve();
