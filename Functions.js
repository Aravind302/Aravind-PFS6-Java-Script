//Function Declaration
/*function reverse(n){          // n is called paremeters 
    res=0
    while (n!=0){
        r=n%10;
        res=(res*10)+r;
        n=parseInt(n/10);
    }
    return res;
}
var x=-123;            // here we are calling a function
if(x>= 0){
    x=reverse(123);   // 123 is called function arguments
    console.log(x);
}
else{
    x=x*-1
    z=reverse(x);
    console.log(-1*z);
}
// Function Expression
var reverse =function (n){          // n is called paremeters 
    res=0
    while (n!=0){
        r=n%10;
        res=(res*10)+r;
        n=parseInt(n/10);
    }
    return res;
}
var x=123; 
var y=4;
var res=(x*10)+4;
res=reverse(res);
res=(res*10)+4;
res=reverse(res);
console.log(res);  
//Arrow Function
var result=(n,s)=>{
    console.log(n%s);
} 
result(13,4); */
//Immediately invoked function expression
//(function(){ //                    // Finding a factorial of a number
    var n=5;
    var res=1;
    for(var i=1;i<=n;i++){
        res=res*i;
    }
    console.log(res);
//})();//
// named function expression
var hello =function checknum(n){    //finding the whether the given number is even or odd
    if(n%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
hello(23);

//User Defined Functions
// with parameter with returntype
console.log("With Parameters with return type");
function wpwr(a,b,c){
    return a+b+c;
}
console.log(wpwr(10,20,30));
// with parameter with out returntype
console.log("With Parameters with out return type");
console.log(wpwr(10,20,30));
// without parameter with returntype
console.log("With out Parameters with return type");
function wpwor(a,b,c){
    console.log(a+b+c);
}
console.log(wpwor(10,20,30));
// without parameter without returntype
console.log("With out Parameters with out return type");
function wopwr(){
    return 10+20+30;
}
console.log(wopwr());

function wopwor(){
    console.log(10+20+30);
}
wopwor();




