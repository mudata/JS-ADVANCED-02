function Spy(obj,methodName){
    const spy={count:0};
    const method=obj[methodName];
    obj[methodName]=function(...args){
        this.count++;
        return method.apply(obj,args);
    }.bind(spy);
    return spy;

}