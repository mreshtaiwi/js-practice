
// 1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?

function status(x){
    if (x>=0){
        console.log('Positive');
    }else{
        console.log('Nigative');
    }

}
let number =prompt('enter number');
status(number);



// 2- Write a JavaScript program takes 3 input from the user and print the max on the console?


let num1 = Number(prompt('enter first number'));

let num2 = Number(prompt('enter seconed number'));
let num3 = Number(prompt('enter third number'));

function max (x,y,z) {
   
if(x>y && x>z){
console.log(x,'is the maximum');
}else if (y>x && y>z){
    console.log(y,'is the maximum');
}else if (z > x && z > y){
    console.log(z,'is the maximum');
}
else {
    console.log('equal numbers');
}
}
max(num1,num2,num3)


// 3- Write a JavaScript for loop that will iterate from 0 to 20. For each iteration,
// it will check if the current number is odd or even, and display a message on the console?

// Sample Output:
// "0 is even"
// "1 is odd"
// "2 is even"
// .
// .
// .
// .
// .
// "19 is odd"
// "20 is even"



function oddOreven(){
for(var i =1;i<=20;i++){
if (i % 2==0){

console.log(i , 'i Is Even');
} else{
    console.log(i, 'is odd');
}

}
}

oddOreven();
// function summation (){
// let sum=0;
// let i =0;
// for(i=0;i<=100;i++){

//     sum+=i;
// }
// console.log(sum);



// }
// summation();




// 4- Write a JavaScript program to calculate the sum of even numbers from 1-100 ?
function summEven(){
    let sum=0;
   
    for(var i=0;i<=100;i++){
if (i%2==0){
    sum+=i
}



}

console.log(sum);

}
summEven();

// 5- Write a JavaScript program to take 2 numbers from the user and print
// ex:-
// num1 = 3
// num2 = 3

// the sum is 6
// the multiplication is 9

function sumAndmulti(){
let num1=Number(prompt('enter first Number'));
let num2=Number(prompt('enter seconed Number'));
let sum=num1+num2;
console.log(sum);
let multi=num1*num2;
console.log(multi);





}
sumAndmulti();



// 6- Write a function that takes an integer minutes and converts it to seconds.
function convErt(){
let min=Number(prompt('enter minutes'));
min*=60;
console.log(min);




}
convErt();
