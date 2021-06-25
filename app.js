/*
1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
*/

alert("Question one");
function posORneg(){
    let num  = Number(prompt("Enter any number to know if is positive  or negative "));
    if(num >= 0){
    return `The input ${num} is positive `;
    }else{
    return  `The input ${num} is negative`; 
}
}
alert(posORneg());

/*
2- Write a JavaScript program takes 3 input from the user and print the max on the console?
*/
alert("Question two ");
function max(){
    let num1 = Number(prompt("Enter first number "));
    let num2 = Number( prompt("Enter second number "));
    let num3 = Number(prompt("Enter third number "));
      let maxi = 0;
    if(num1 <= num2 ){
      maxi = num2;
    }else {
        maxi = num1;
    }
    if(maxi < num3){
        maxi=num3;
    }

    return `The max number is: ${maxi}` ;
}

console.log(max());

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
let odd=' ';
let even =' ';
for(let i=0;i<=20;i++){
    if(i%2==0){
        even= i + " is even ";
        console.log(even);
    }else{
        odd= i+" is odd ";
        console.log(odd);
    }
}

/*
4- Write a JavaScript program to calculate the sum of even numbers from 1-100 ?
*/
    let sum=0;
    for(let i=1;i<= 100;i++){
        if(i%2==0){
            sum += i;
        }
    }
console.log(sum);

/*
5- Write a JavaScript program to take 2 numbers from the user and print
ex:-
num1 = 3
num2 = 3

the sum is 6
the multiplication is 9
*/
alert("Question five ");
    let num1 = Number(prompt("Enter first number "));
    let num2 = Number( prompt("Enter second number "));
    console.log("num1 = " + num1);
    console.log("num2 = " + num2 );
  let sumation = function (n1,n2){
    return "The sum is " + (n1+n2);
   }
   let multiply = function (number1,number2){
       return "The multiplication is " + (number1 * number2);
   }
    console.log(sumation(num1,num2));
    console.log(multiply(num1,num2));
   
/*
6- Write a function that takes an integer minutes and converts it to seconds.
*/
alert("Question six ");
    let minutes = Number(prompt("Enter an integer minutes to converts it to seconds "));
function minTOsec(minute){
    let result = minute * 60;
    return `convert ${minute} minutes to seconds =  ${result}`;  
   }
   console.log(minTOsec(minutes));
