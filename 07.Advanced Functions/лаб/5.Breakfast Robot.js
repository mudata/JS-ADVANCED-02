function solution() {
    let protein = 0;
    let carbohydrate = 0;
    let fat = 0;
    let flavour = 0;
    let splited, microelement, quantity, recipe;
    return function (input) {
        splited = input.split(" ");
        let func = splited[0];

        if (func === "restock") {
            microelement = splited[1];
            quantity = Number(splited[2]);
            if (microelement === "protein") {
                console.log("Success");
                protein+=quantity;
            }
            else if (microelement === "carbohydrate") {
                console.log("Success");
                carbohydrate+=quantity;
            }
            else if (microelement === "fat") {
                console.log("Success");
                fat+=quantity;
            }
            else if (microelement === "flavour") {
                console.log("Success");
                flavour+=quantity
            }
        }
        else if (func === "prepare") {
            recipe = splited[1];
            quantity = splited[2];
            switch (recipe) {
                case "Apple":
                    if (this.carbohydrate >= 1 && this.flavour >= 2) {
                        console.log("Success");
                    } else {
                        if(this.carbohydrate<1){console.log("Error: not enough carbohydrate in stock"); }
                        else{
                            console.log("Error: not enough flavour in stock"); 
                        }
                    
                    }
                        
                    break;
                case "lemonade":
                    if (carbohydrate >= 10 && flavour >= 20) {
                        console.log("Success");
                    } else { 
                        if(carbohydrate<10){console.log("Error: not enough carbohydrate in stock"); }
                        else{
                            console.log("Error: not enough flavour in stock"); 
                        }
                     }

                    break;
                case "Burger":
                    if (this.carbohydrate >= 5 && this.flavour >= 3 && this.fat >= 7) {
                        console.log("Success");
                    } else {
                        if(this.carbohydrate<4){console.log("Error: not enough carbohydrate in stock"); }
                        else if(this.flavour<3){
                            console.log("Error: not enough flavour in stock"); 
                        }else if(this.fat<7){
                            console.log("Error: not enough fat in stock"); 
                        }
                         
                        }

                    break;
                case "Eggs":
                    if (this.protein >= 5 && this.flavour >= 1 && this.fat >= 1) {
                        console.log("Success");
                    } else {
                        if(this.protein<5){console.log("Error: not enough protein in stock"); }
                        else if(this.flavour<1){
                            console.log("Error: not enough flavour in stock"); 
                        }else if(this.fat<1){
                            console.log("Error: not enough fat in stock"); 
                        }
                         }

                    break;
                case "Turkey":
                    if (this.protein >= 10 && this.flavour >= 10 && this.carbohydrate >= 10 && this.fat >= 10) {
                        console.log("Success");
                    } else {if(this.carbohydrate<10){console.log("Error: not enough carbohydrate in stock"); }
                    else if(this.flavour<10){
                        console.log("Error: not enough flavour in stock"); 
                    }else if(this.fat<10){
                        console.log("Error: not enough fat in stock"); 
                    }else{
                        console.log("Error: not enough protein in stock");
                    }}

                    break;

                default:
                    break;
            }
        }
        if (input === "report") {
            console.log(`protein=${protein} carbohydrate=${carbohydrate} fat=${fat} flavour=${flavour}`);
        }
        //console.log(splited)
    }
    // function restock(){

    // }
    // function prepare(){

    // }
    // function report(){

    // }
    // return{
    //     restock,
    //     prepare,
    //     report
    // };
}
let manager = solution();
//console.log(manager)
manager("restock flavour 50");
manager("restock fat 50");
manager("restock fat 60");
manager("prepare lemonade 4");
manager("prepare lemonade 10");
manager("report")
// restock carbohydrate 10
// restock flavour 10
// prepare apple 1
// restock fat 10
// prepare burger 1
// report
// Apple - made with 1 carb and 2 flavour
// Lemonade - made with 10 carb and 20 flavour
// Burger - made with 5 carb, 7 fat and 3 flavour
// Eggs - made with 5 protein, 1 fat and 1 flavour
// Turkey - made with 10 protein, 10 carb, 10 fat and 10 flavour