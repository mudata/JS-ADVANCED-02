function solve(area,vol,string1) {
    let arr=[];
    
    let cordinates=JSON.parse(string1);
    //console.log(cordinates)
    for (let i = 0; i < cordinates.length; i++) {
        const element = cordinates[i];
        let obj={};
        // this.x=element.x;
        // this.y=element.y;
        // this.z=element.z;
        // console.log(area());
        // console.log(vol())
        obj={
            area:area(),
            volume:vol()
        };
        arr.push(obj)

    }
    return arr;
    
}
function area(){
return this.x*this.y;
}
function vol(){
return this.x*this.y*this.z;
}

console.log(solve(area, vol, '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]'))