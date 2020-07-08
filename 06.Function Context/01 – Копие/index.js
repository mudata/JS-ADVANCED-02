
function getFibonator(){
   let current=1;
   let previos=0;
   return function fibo(){
      let newNumber=previos+current;
      previos=current;
      current=newNumber;
      return previos;
   }
   
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib());
console.log(fib()); // 2
console.log(fib());
// let fib1 = getFibonator();
// console.log(fib1()); // 1
// console.log(fib1()); // 1
// console.log(fib1()); // 2
// console.log(fib1());