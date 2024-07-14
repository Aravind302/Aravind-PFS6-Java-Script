//ARRAYS
//literal Notation
var a=[10,20,60,"akki",53.69];
console.log(a);
//using Array Constructor:
var b=new Array(5228,897,"aravind","van",258.36);
console.log(b);
//Accessing of elements
var a=[15,56,"akki","asab",5.23,78];
console.log(a[3]);
console.log(a[5]);
//Modifying of elements:
var a=[23,56,89,75,2.36,"adar",true];
a[3]=63.23;
console.log(a);
a[5]=456;
console.log(a);

// ARRAY METHODS//
//1.push()
var a=[45,56,78,63,"ragu",true];
a.push(302);
console.log(a);                    
//2.pop()
var a=[45,56,78,63,"ragu",true];
var b=a.pop();
console.log(b);
console.log(a);
//3.shift()
var a=[45,56,78,63,"ragu",true];
 var b=a.shift();
console.log(b);
console.log(a);
//4.unshift()
var a=[45,56,78,63,"ragu",true];
 var b=a.unshift(12,5);
 console.log(b);       // it shows the length of an array
 console.log(a);
 //5.slice
 var a=[45,56,78,63,"ragu",true];
 b=a.slice(3,5);
 console.log(b);
 console.log(a);
 //6.concat()
 var a=[45,56,78,63,"ragu",true];
 var b=[20,25,12,4,1,false];
 var c=b.concat(a);
 console.log(c);
 //7.join()
 var a=[45,56,78,63,"ragu",true];
 var b=a.join("%");
 console.log(b);
 console.log(a);
 //8.indexOf()
 var a=[45,56,78,63,"ragu",true];
 var b=a.indexOf(true);
 console.log(b);
 //9.forEach()
 var a=[45,56,78,63,12];
 var b=a.forEach(function(i){
    console.log(i+45);  
 });
 x = [10,20,30,40,50];
var y = x.forEach(function(i){
    console.log(i+100);
});
//10.Map()
a= [10,20,30,40,50];
var b=a.map(function(i){
    return i+1;
});
console.log(b);
var x = [1,2,3,4,5];
var y = x.map(function(i){
    return i+30;
});
console.log(y);
//11.Filter()
var x = [1,2,3,4,5];
var y = x.filter(function(i){
    return i%2!=0;
});
console.log(y);
//12.Reduce()
var a=[45,56,78,63,52,85];
var b= a.reduce(function(accumulator,currentvalue){
    return accumulator+currentvalue;

},20);
console.log(b);

