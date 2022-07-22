"use strict";

function helloWorld() {
    alert("Hello Strange person.")

    var name= prompt("What is your Name?")

   if( confirm("So your name is "+name+"?")){
       alert("Well Hello "+name+"!")
   }else{
       helloWorld()
   }

}
// helloWorld()

// increments after and before
var a= 1;
var b=a++;
var c=++a;

// console.log(a,"3")
// console.log(b,"1")
// console.log(c,"3")


//String is not a number(NaN) false equates to zero therefor increments to one
var d="hello";
var e=false;

d++
e++
// console.log(d,"NaN");
// console.log(e,"1");

var perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;

var price = 2.7;
console.log(price.toFixed(2));

var price = "2.7";
console.log(parseFloat(price).toFixed(2));


var hello = "Hello Codeup";

console.log(hello.length)


