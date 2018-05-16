var averageScore =[67,89,99,30];
var sum =averageScore.reduce (function(total,amount,index,array){
   total +=amount;
if (index===array.length-1){
    return total/array.length;
}else{
    return total;
}
});

console.log(Math.floor(sum))