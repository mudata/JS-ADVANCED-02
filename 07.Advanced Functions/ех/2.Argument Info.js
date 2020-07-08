function solve(string,number,func) {
    let types=[];
    let all=[];
    let obj={};
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        types.push(typeof(element));
        if(obj.hasOwnProperty(typeof(element))){
            obj[typeof(element)]++;
        }else{
            obj[typeof(element)]=1;
        }
       // obj[typeof(element)]=

        let x=element;
        if(typeof(element)==="function"){
            x=element.toString();

        }
        
        all.push(x);
        //console.log(x)
        //console.log(typeof(x));
        //console.log(element);
    }
    //console.log(types);
   //console.log(all);
   //console.log(obj)
    for (let i = 0; i < types.length; i++) {
        console.log(`${types[i]}: ${all[i]}`)
        
    }
    for (const key in obj) {
        console.log(key+" = "+obj[key])
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });