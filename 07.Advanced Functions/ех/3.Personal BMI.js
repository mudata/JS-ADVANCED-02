function solve(name,age,weight,heigth) {
    let bmi;
    let stat;
    let obj={
        name:name,
        personalInfo:{
            age:age,
            weight:weight,
            heigth:heigth
        },
        BMI:(weight/(Math.pow(heigth,2))),
        status:function(BMI){
            console.log(BMI)
        }
    };
    console.log(obj);
}

solve("Peter", 29, 75, 182);
//bmi=mass/heigth