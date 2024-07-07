//if statements
/*let age=19;
if(age>=18){
    console.log("you are elgible to vote");
}
//if-else statements
var age=19;
if(age>=18){
    console.log("you are elgible to vote");
}
else{
    console.log("you are not elgible");
}
//if-elseif-else statements
var age =19;
var voter=false;
if(age>=18){
    console.log("you are elgible to vote");
}
else if(voter==true){
    console.log("you can vote");
}
else{
    console.log("you are not elgible");
}*/
//switch statements

var count=2;
switch(count){
    case 1:
        console.log("you will get 10%");
        break;
    case 2:
        console.log("you will get 20%");
        break;
    case 3:
        console.log("you will get 30%");
        break;
    default:
        console.log("you will get 51%");
}
//nested conditional statements
var age=12;
var voter=true;
if(age>=18){
    if(voter==true){
        console.log("you are eligible");
    }
    else{
        console.log("you are not eligible");
    }
}
else{
    console.log("you are adult");

}