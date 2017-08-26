/*
给你一个整数n. 从 1 到 n 按照下面的规则打印每个数：
如果这个数被3整除，打印fizz.
    如果这个数被5整除，打印buzz.
    如果这个数能同时被3和5整除，打印fizz buzz.*/
var fb=n=>Array.from({length: n}, (v, i) => i+1).map(value=>{
    if(value%15==0)return'fizz buzz'
    if(value%3==0)return 'fizz'
    if (value%5==0)return'buzz'
    return value;
});
console.log(fb(15))