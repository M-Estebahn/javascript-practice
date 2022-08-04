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