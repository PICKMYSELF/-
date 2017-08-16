/*
arr = [‘a’, ‘ab’, ‘ed’, ‘da’, ‘a’, ‘ed’, ‘b’];输出：‘a’, ‘ed’*/
var foundOutRepeatItems=(arr)=>{
    let narr=arr.sort();
    let repeated=[];
    for(let i=0;i<arr.length-1;i++){
        if (narr[i]==narr[i+1])
            if(repeated.indexOf(narr[i])==-1)
            repeated.push(narr[i]);
    }
    console.log(`数组重复内容为${repeated}`);
}
let arr = ['a', 'ab','ab' ,'ab','ed', 'da', 'a', 'ed','b'];
foundOutRepeatItems(arr);
