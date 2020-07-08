function solve(data,criteria) {
    console.log(criteria)
    let splited=criteria.split("-")
    let firstCriteria=splited[0];
    let secondCriteria=splited[1]
    console.log(firstCriteria,secondCriteria)
    let parsed=JSON.parse(data);
    let i=0;
        if(firstCriteria==="gender"){
if(secondCriteria==="Female"){
    parsed.forEach(element => {
        
        if(element.gender==="Female"){
            console.log(`${i}. ${element.first_name} ${element.last_name} - ${element.email}`);
            i++;
        }
    });
}
        }
       function print(){
           
       } 
        
    
}

solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`, 
'gender-Female');