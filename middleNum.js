function middleNum(arr){
    var length=arr.length;
    arr.sort(function NumAscSort(a,b) {return a - b;});
    if(length%2==0)
    return (arr[length/2-1]+arr[length/2])/2;
    return arr[Math.ceil(length/2)-1];
}
let numArr=[5,4,3,2,1];
console.log(`数组为${numArr}`)
console.log(`中位数是${middleNum(numArr)}`);