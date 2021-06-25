/*
1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
*/
function checknum(a){
    if (a>0){
        console.log('positive number');
    }else
    {console.log('negative number');}
}
let num=Number(prompt("please enter number?"))
 checknum(num)


// 2- Write a JavaScript program takes 3 input from the user and print the max on the console?
// */
function maxMin(a1,b1,c1){
    if (a1>b1 && a1>c1){
        console.log(a1+' '+'is the max number');
    }else if (a1<b1 && b1>c1)
    {console.log(b1+' '+'is the max number');}
    else{
        {console.log(c1+' '+'is the max number');}  
    }

}
let num1=Number(prompt("please enter number1?"))
let num2=Number(prompt("please enter number2?"))
let num3=Number(prompt("please enter number3?"))
maxMin(num1,num2,num3)

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

function oddEven(d){
if(d/2 !==0 ){
    console.log(d+' '+'is the odd');
}else{
    console.log(d+' '+'is the even');
}
}
for (let i=0;i<=20;i++){
oddEven(i);
}

/*
4- Write a JavaScript program to calculate the sum of even numbers from 1-100 ?
*/


/*
5- Write a JavaScript program to take 2 numbers from the user and print
ex:-
num1 = 3
num2 = 3

the sum is 6
the multiplication is 9
*/


/*
6- Write a function that takes an integer minutes and converts it to seconds.
*/