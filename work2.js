//1
let a1 = 22;
let a2 = 'helo';
let a3 = true;
let a4 = null;
let a5;
let a6 = (233);
let a7 = (23333333333333333333333);
let a8 = {name: 'Yaroslav', surname: 'Filatov', age: 30, true: true};
console.log(a1, a2, a3, a4, a5, a6, a7, a8);
//2
let b1 = 5 + 5
document.write(b1);
document.write('<hr>');
let b2 = b1 + 10
document.write(b2);
document.write('<hr>');
let b3 = b1 * b2
document.write(b3);
document.write('<hr>');
let b4 = b3 / b1
document.write(b4);
document.write('<hr>');
let b5 = 105 % b1
document.write(b5);
document.write('<hr>');
b5 += 5
document.write(b5);
document.write('<hr>');
b5 -= 5
document.write(b5);
document.write('<hr>');
b5 *= b1
document.write(b5);
document.write('<hr>');
b5 /= b5
document.write(b5);
document.write('<hr>');
b6 = b1++
document.write(b6);
document.write('<hr>');
b6 = ++b1
document.write(b6);
document.write('<hr>');
//3
let c1 = true;

let c2 = Number(c1)
console.log(c1, c2);

let c3 = String(c1)
console.log(c1, c3);

let c4 = Boolean(c1)
console.log(c1, c4);

let c5 = 25;

let c6 = Number(c5)
console.log(c5, c6); 

let c7 = String(c5)
console.log(c5, c7);

let c8 = Boolean(c5)
console.log(c5, c8);

let c9 = 'hello';

let c10 = Number(c9)
console.log(c9, c10);

let c11 = String(c9)
console.log(c9, c11);

let c12 = Boolean(c9)
console.log(c9, c12);

//4
let d1 = 10 + '4'
let d2 = true + 5 - false + '5'
let d3 = 7 + true + 2
let d4 = d1 - d2 + true + null
let d5 = ++d2 * true
let d6 =d4 + '3' * false
console.log(d1, d2, d3, d4, d5, d6);
