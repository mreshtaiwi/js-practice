/*
1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
*/
let a=Number(prompt('Enter a number to check the sign'));
function checkSign(a){
    let num=a;
       if(num>=0){
       console.log(num +'  is a positive number');
       let a=Number(prompt(num +'  is a positive number'));
       }
       else{
        console.log(num +'  is a negative number');
        alert(num +'  is a negative number');
       }
}

checkSign(a);

/*
2- Write a JavaScript program takes 3 input from the user and print the max on the console?
*/
alert('Enter 3 inputs to find the max');
let b=Number(prompt('first number'));
let c=Number(prompt('second number'));
let d=Number(prompt('third number'));
function max(b,c,d){
    let num1=b;
    let num2=c;
    let num3=d;
    let max=num1;
    if(num2>max ){
max=num2;
    }
 if(num3>max){
max=num3;
}
console.log(max +'  is the maximum number');
alert(max +'  is the maximum number');
}

max(b,c,d);
/*
3- Write a JavaScript for loop that will iterate from 0 to 20. For each iteration,
it will check if the current number is odd or even, and display a message on the console?

Sample Output:
"0 is even"
"1 is odd"
"2 is even"
.
.
.
.
.
"19 is odd"
"20 is even"
*/

for(let i=0;i<=20;i++){
    if(i%2===0){
        console.log(i+"  is even")
    }
    else{
        console.log(i+"  is odd")
    }
}
/*
4- Write a JavaScript program to calculate the sum of even numbers from 1-100 ?
*/
function sumEven(){
 let sum=0;
 for(let i=0;i<=100;i++){
    if(i%2===0){
sum+=i;
    }
}   
console.log(" sum of even numbers from 1-100 = "+sum);

}
sumEven();

/*
5- Write a JavaScript program to take 2 numbers from the user and print
ex:-
num1 = 3
num2 = 3

the sum is 6
the multiplication is 9
*/
let e=Number(prompt("Enter 2 numbers to find the sum And multiplication / first number is :"));
let f=Number(prompt("second number is :"));

function sumAndMulti(e,f){
    let num1=e;
    let num2=f;
    console.log("num1 = "+num1);
    console.log("num2 = "+num2);
let sum=num1+num2;
console.log("the sum is "+sum);
let multi=num1*num2;
console.log("the multiplication is "+multi);
}
sumAndMulti(e,f);
/*
6- Write a function that takes an integer minutes and converts it to seconds.
*/

let g=Number(prompt("Enter minutes to converts it to seconds"));

function minuConverTosec(g){
    let min=g;
    let sec=g*60;
    alert(min+' minutes = '+sec+' seconds');
    console.log(min+' minutes = '+sec+' seconds');
    
}

minuConverTosec(g);