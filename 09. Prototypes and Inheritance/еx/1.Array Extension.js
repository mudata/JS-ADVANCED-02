(function solve() {
Array.prototype.last=function(){
    return this[this.length-1];
}
Array.prototype.skip=function(n){
    let otherValues=[];
    for (let i = n; i < this.length; i++) {
        const element = this[i];
        otherValues.push(element);
        
    }
    return otherValues;
}
Array.prototype.take=function(n){
    let otherValues=[];
    for (let i = 0; i < n; i++) {
        const element = this[i];
        otherValues.push(element);
        
    }
    return otherValues;
}
Array.prototype.sum=function(){
    let sum= Array.reduce((a, b) => a + b, 0)
    return sum;
}
Array.prototype.average=function(){
    return this.sum()/this.length;
}

})()

//solve();

