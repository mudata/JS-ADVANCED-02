class Hex {
    constructor(number) {
        this.number=number;
    }
    valueOf(){
        return this.number;
    }
    toString(){
       return '0x'+this.number.toString(16).toUpperCase();
    }
    plus(number1){
       return new Hex(this.number+number1);
    }
    minus(number){
       return new Hex(this.number-number1);
    }
    static Parse(strin){
        return parseInt(this.number, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString()==='0xF');
