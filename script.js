const x=5.25;
console.log('The value of x is',x);

let y ='Hello!';
console.log(y);

var z=true;
console.log('the value of z',z);

let sum=x+15;
console.log('sum',sum);

const bodyClass=document.body.className;
console.log('body class:',bodyClass);

document.body.className='loading';
console.log('new body class:',bodyClass);

var randomNumber=Math.random();
console.log('random number:',randomNumber)
//var mainClass=document.body.className;
var mainClass=document.querySelector('main').className;
console.log('main',mainClass)

const p=document.querySelector('p').textContent;
console.log('p is',p);

document.querySelector('p').textContent='Some content';

