//Factors of a given n number in the given array
array = [10,20,7,4,3,5,30];
n = 30;
for(x of array){
    if(n%x==0){
        console.log(x);
    }
}
//Perfect numbers in the given array
array=[6,2,4,28];
for(x of array){
    sum=0;
    for( var i=0;i<x;i++){
        if(x%i==0){
            sum=sum+i;
        }
    }
    if(sum==x){
        console.log(x);
    }
}
//Factorial values of even intergers in an array
arr = [109,2,4,7,6,21]
for (var x of arr){
    if (x%2 == 0){
        summ = 1
        for (var i=1;i<=x;i++){
            summ = summ * i;
        }
        console.log(summ);
    }
}