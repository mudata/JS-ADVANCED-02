function solve(arr,text) {
    let sortedArr=[];
    if(text==="asc"){
        sortedArr=arr.sort((a,b)=>{
            return a-b;
        });
        return sortedArr;
    }else if(text==="desc"){
        sortedArr=arr.sort((a,b)=>{
            return b-a;
        });
        return sortedArr;
    }
}

solve([14, 7, 17, 6, 8], 'asc');