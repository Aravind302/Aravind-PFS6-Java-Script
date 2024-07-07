var x=-123;
if(x>=0){
    reverse=0;
    while(x!=0){
        var r=x%10;
        var reverse=(reverse*10)+r;
        x=parseInt(x/10);
    }
    console.log(reverse);
}
else{
    reverse=0;
    x=(-1*x);
    while(x!=0){
        var r=x%10;
        var reverse=(reverse*10)+r;
        x=parseInt(x/10);
    }
    console.log(-1*reverse);
}