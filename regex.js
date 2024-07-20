console.log("Regular expressions");
// BASIC META CHARCTERS
//\d:
var pattern=/\d/g;
var text="my age is 23.";
var res=text.match(pattern);
console.log(res);
//\D:
var pattern=/\D/g;
var text="my age is 23.";
var res=text.match(pattern);
console.log(res);
//\s:
var pattern=/\s/g;
var text="my age is 23 .";
var res=text.match(pattern);
console.log(res);
//\S:
var pattern=/\S/g;
var text="my age is 23.";
var res=text.match(pattern);
console.log(res);
//\w
var pattern=/\w/g;
var text="my age is 23.";
var res=text.match(pattern);
console.log(res);
//\W
var pattern=/\W/g;
var text="my age is 23.";
var res=text.match(pattern);
console.log(res);
//\b
var pattern=/\bage\b/g;
var text="my age is 23 age.";
var res=text.match(pattern);
console.log(res);
