
var  countItem=(arr,item)=>arr.filter(element=> element!=item);

let arr = [1, 3, 7, 1 ,4,];
let item = 1;
console.log(`数组{${arr}}去掉${item}后为`);
console.log(countItem(arr,item));