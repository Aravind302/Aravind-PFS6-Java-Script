// Main meta characrers or patterns
// dot(.)
var re=/h.t/g;
var text="i wear a hot hat pot";
var res=text.match(re);
console.log(res);
//caret(^)
var re=/^the/gi;
var text="the apple is sweet";
var res=text.match(re);
console.log(res);
// dollar($)
var re=/boy.$/g;
var text="i am a boy.";
var res=text.match(re);
console.log(res);
//hasteric(*)  // 0 or more occurences
var re=/ab*c/g;
var text="abc abbc abd abbb ac";
var res=text.match(re);
console.log(res);
// plus(+)  // 1 or  more occurences
var re=/ab+c/g;
var text="abc abbc abd abbb ac";
var res=text.match(re);
console.log(res);
// question mark(?)
var re=/colors?/g;
var text="i have a black colors color toy";
var res=text.match(re);
console.log(res);
//curly braces{}
var re=/\d{2}-\d{1}-\d{2}-\d{2}-\d{3}/g;
var text="6304106270,5263,99-6-33-88-452";
var res=text.match(re);
console.log(res);
//brackets[]
var re=/[jmr]am/g;
var text="ham,jam,ram,mam,tam";
var res=text.match(re);
console.log(res);
//pipe(|)
var re=/bat|cat/g;
var text="I have a cat with hat and bat";
var res=text.match(re);
console.log(res);