(function (){
    return solution={
    add(a,b){
        let first=(a[0]+b[0]);
        let second=a[1]+b[1];
        return first+", "+ second;
    },
    multiply(a,b){
        let first=a[0]*b;
        let second=a[1]*b;
        return `[${first}, ${second}]`
    },
    length(a){
        let first=Math.sqrt(a[0]*a[0]+a[1]*a[1]);
        return first
    },
    dot(a,b){
        let first=a[0]*b[0]+a[1]*b[1];
        return first
    },
    cross(a,b){
        let first=a[0]*b[1]-a[1]*b[0];
        return first
    }
}
})()
//solution.multiply([3.5, -2], 2);
console.log(solution.add([5.43, -1], [1, 31])); 
//solution.length([3, -4]);
//solution.dot([1, 0], [0, -1]);
console.log(solution.cross([3, 7], [1, 0]));