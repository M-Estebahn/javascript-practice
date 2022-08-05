"use strict";

function showMultiplicationTable(num) {
    for(var i=1 ;i<11;i++){
        console.log(num+" x "+i+" = "+(num*i));
    }
}
showMultiplicationTable(7);


function evenOrOdd(num){
    if (num%2===0){
        console.log(num+" is even!")
    }else{
        console.log(num+" is odd!")
    }
}

function randomEvenOrOdd(){
    for(var i=0;i<11;i++){
        var randomTwenty=Math.floor(Math.random() * 200) + 20;
        evenOrOdd(randomTwenty);
    }
}
randomEvenOrOdd();

function stacks(){
    for(var i=1;i<10;i++){
        console.log(i.toString().repeat(i))
    }
}
stacks()

function byFives() {
    for(var i=100;i>0;i-=5){
        console.log(i)
    }
}
byFives()

function yourNumber(num){
    for(var i=0;i<51;i++){
        if(i%2===0){
            continue;
        }
        if(i===num){
            console.log("Yikes,Skipping number: "+i);
        }else{
            console.log("Here is an odd Number: "+i);
        }
    }
}

var userNumber=Number(prompt("Please enter an odd number between 1 and 50"));

yourNumber(userNumber);

function doubleTime(x) {
    var i=0;
    var numToBeDoubled=2;
console.log(numToBeDoubled);
    while(i<=x){
        i++
        numToBeDoubled*=2;
        console.log(numToBeDoubled);
    }
}

doubleTime(16);

