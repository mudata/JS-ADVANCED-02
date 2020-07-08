function solution(){
    let text="";
    function append(s){
        text+=s;
    }
    function print(){
        console.log(text)
    }
    function removeStart(n){
        text=text.substring(n);
    }
    function removeEnd(n){
        text=text.substring(0,text.length-n);
    }
    return{
        append,
        print,
        removeStart,
        removeEnd
    };
}
let firstZeroTest = solution();
firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.print()
firstZeroTest.removeStart(3);
firstZeroTest.print()
firstZeroTest.removeEnd(4);
firstZeroTest.print()
