//OBJECTS IN JAVA SCRIPT
// LITERAL NOTATION
//1.CREATION
var obj={
    name:"aravind",
    age:23,
    gender:"male"
};
console.log(obj);
//2.accessing
var res=obj.age;
console.log(res);
//3.adding
obj.mobile="6304106270";
console.log(obj);
//4.Modifying
obj.age="23.5";
console.log(obj);
//5.deleting
delete obj.gender;
console.log(obj);
//6.other methods
//key
var keys=Object.keys(obj);
console.log(keys);
//values
var values=Object.values(obj);
console.log(values);
//Entries
var entries=Object.entries(obj);
console.log(entries);
// OBJECT CONSTRUCTOR
//1.creation
var obj=new Object();
obj["surname"]="Moluguri";
console.log(obj);
//2.adding
obj["name"]="aravind";
obj["age"]=23;
obj["mobile"]="6304106270";
console.log(obj);
//Modifying
obj["age"]=23.6;
console.log(obj);
//Accessing
 var res=obj["name"];
console.log(res);
//deleting
 var res=delete obj;
console.log(res);
//other methods
//key
var keys=Object.keys(obj);
console.log(keys);
//values
var values=Object.values(obj);
console.log(values);
//Entries
var entries=Object.entries(obj);
console.log(entries);