/*
在数组 arr 中，查找值与 item 相等的元素出现的所有位置
例如：arr = [1, 3, 7, 1 ,4,] , item = 1，输出：0, 3
要求：不要使用for，while循环*/
var IndexFinder=(arr,element)=>{
    let result=[];
    arr.filter((item,index)=>item==element&&result.push(index));
    return result;
}

let arr=[1, 3, 7, 1 ,4,];
let  item=1;
console.log(`数组[${arr}]中元素${item}的位置是${IndexFinder(arr,item)}`);