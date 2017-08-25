/*
给出 nums = [0, 1, 0, 3, 12], target = 0; 调用函数之后, 得到nums = [1, 3, 12, 0, 0].*/
var moveItems=(arr,target)=>{
    var tmp= arr.filter(element=>element!=target);
    var tmpLength=tmp.length;
    for(let i=0;i<arr.length-tmpLength;i++){
        tmp.push(target);
    }
    return tmp;
}




nums = [0, 1, 0, 3, 12];
target = 0;
console.log(moveItems(nums,target));