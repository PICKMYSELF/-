//arr = [‘s’, ‘a’, ‘s’, ‘b’, ‘a’,1,‘1’,1], 输出：[‘s’, ‘a’, ‘b’,1,‘1’]
var deleteRepeat=(arr)=>[...new Set(arr)];//[...XXX] 表示将xxx转化为数组形式
/* let arrNoRepeat=[]
 for(let value of arr){
     if(arrNoRepeat.indexOf(value)==-1)  arrNoRepeat.push(value);
 }
 return arrNoRepeat;*/





console.log(deleteRepeat(['s', 'a', 's', 'b', 'a',1,'1',1]));