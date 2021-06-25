/*
1- Write a JavaScript program to know if the input is positive  or negative , " 0 considered as positive "?
*/
function PosNeg (num)
{
    let Num = num;
    let message1 = `Your Number '${Num}' is Positive Number`;
    let message2 = `Your Number /'${Num} is Negative Number`;

    if (num >= 0)
    {
        console.log(message1);
        alert(message1);
    }
    else {
        console.log(message2);
        alert(message2);
    }
}

let number = Number(prompt("Pleas Enter Number"))
PosNeg(number);


/*
2- Write a JavaScript program takes 3 input from the user and print the max on the console?
*/
function MaxNum (arrNum =[])
{
    let ArrNum= [];
    ArrNum = arrNum;
    let big = ArrNum[0];
    
    for (let i =0; i< ArrNum.length-1; i++)
    {
        if (ArrNum[i] < ArrNum[i+1])
        {
            big = ArrNum[i+1];
        }
    }
    let message = ` The Biggest number is ${big}`;
    console.log(message);
}
    alert (`Please Enter 3 Number`);
    let Arr=[];
    for (let i=1; i<4; i++)
    {
        Arr[i-1] =Number(prompt(`Number ${i}`)); 
    }
    MaxNum(Arr);


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
function ArrOv(arrNums=[])
{
    let ArrNum = arrNums;
    for (let i =0; i<20; i++)
    {
        if (ArrNum[i]%2==1)
        {
            console.log(`${ArrNum[i]} is odd`) 
        }
        else{
            console.log(`${ArrNum[i]} is even`)
        }
    }
}

let Nums=[];
alert (`Even or Odd: Please Enter 20 Number`);
    for (let i=1; i<21; i++)
    {
        Nums[i-1] =Number(prompt(`Number ${i}`)); 
    }


ArrOv(Nums);
/*
4- Write a JavaScript program to calculate the sum of even numbers from 1-100 ?
*/



// alert (`calculate the sum of even numbers from 1-100`);
// let sumEven=0;
//     for (let i=2; i<=100; i+=2)
//     {
        
//             sumEven+=i;

        
        
        
//     }
//     console.log(sumEven);

/*
5- Write a JavaScript program to take 2 numbers from the user and print
ex:-
num1 = 3
num2 = 3

the sum is 6
the multiplication is 9
*/

// function TwoNum(num1,num2)
// {
//     let Num1 = num1;
//     let Num2 = num2;
//     sum=Num1+Num2;
//     mult=Num1*Num2;
//     let message1=`the sum is ${sum}`;
//     let message2=`the multiplication is ${mult}`;
//     console.log(message1);
//     console.log(message2);
// }
// alert(`Please Enter two number`);
// let n1=Number(prompt(`Number 2`));
// let n2=Number(prompt(`Number 1`));
// TwoNum(n1,n2);






/*
6- Write a function that takes an integer minutes and converts it to seconds.
*/

// function Converts(minutes)
// {
//     let froMin = minutes;
//     let toSec = froMin * 60;
//     let message = `${froMin} Minutes = ${toSec} Seconds`;
//     return message;
// }
// let re;
// do{
//     re = Number(prompt(`Please Enter integer minutes and converts it to seconds.`));
//     check=Number.isInteger(re);
// }
// while(!check)
// Converts(re);