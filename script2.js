//Define a function hello that displays an alert with the message 
//"Hello, world!"
//Invoke it to verify that it works

//Update the hello function above to console.log a 
//message ("I am the hello function") after displaying the alert.
function hello(){
    alert("Hello, world!");
    console.log('I am the hello function');
}
hello();
//Define a function hi that
// takes a single argument name and returns the string "Hi, <name>!"
function hi(name){
 return `Hi, ${name}!`
}
console.log(hi('john'));

console.log(hi('ben'));
//just test n see results
console.log(hi('ben'),hi('john'));

const myFuncAdd= function(num1,num2){
    const sum=num1+num2;
    return sum;
}
console.log(myFuncAdd(10,20));

let myRandomNum = () => {
   let random= Math.ceil((Math.random()*5));
    return random;
}
console.log(myRandomNum());
console.log(myRandomNum());
console.log(myRandomNum());


