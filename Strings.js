//Creation of Strings
var a='Moliguri Aravind';
console.log(a);
//finding the length of the string
var b=a.length;
console.log(b);
//Accessing elements of strings
console.log(a[7]);
//Concatenation of strings
//Using + operator
var m1="Moluguri";
var m2="Aravind";
var m3=m1+" "+m2+"!";
console.log(m3);
//using concat()
var m1="Moluguri";
var m2="Aravind";
var m3=m1.concat(" ",m2);
console.log(m3);
//String Methods
// 1. charAt()
var a=" Moluguri Aravind";
var b=a.charAt(5);
console.log(b);
//2.charCodeAt()
var b=a.charCodeAt(6);
console.log(b);
//3.concat()
var b=a.concat(" Goud");
console.log(b);
//4.starsWith()
var b=a.startsWith("Moluguri");
console.log(b);
//5.endsWith()
var b=a.endsWith("Aravind");
console.log(b);
//6.includes()
var b=a.includes("Aravind");
console.log(b);
//7.indexOf()
var b=a.indexOf("A");
console.log(b);
//8.lastindexOf()
var b=a.lastIndexOf("a")
console.log(b);
//9.repeat()
var b=a.repeat(5);
console.log (b);
//10.replace()
var b=a.replace("Moluguri","M");
console.log(b);
//11.slice()
var b=a.slice(1,5);
console.log(b);
//12.split()
var b=a.split(",");
console.log(b);
//13.substring()
var b=a.substring(1,9);
console.log(b);
//14.toLowerCase()
var b=a.toLowerCase();
console.log(b);
//15.toUpperCase()
var b=a.toUpperCase();
console.log(b);
//16.trim()
var c="    arvind  akki                ";
var b=c.trim();
console.log(b);