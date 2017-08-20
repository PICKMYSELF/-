/*
判断一个字符串中出现次数最多的字符，并统计次数
例如：str = ‘abcsbaddbizdbas’,输出：{b：4}
例如：str = ‘aaaaabbdbdbb’，输出：{a：5，b：5}*/
var mostChar=function (str) {
           let strArr=[...new Set(str.split(''))];
           let maxChar=[strArr[0]];
           let maxCount=0;
           for(let value of strArr){
               let valueLength=str.length-str.replace(new RegExp(value,'gm'),'').length;
               if (valueLength>maxCount){
                   maxChar=[value];
                   maxCount=valueLength;
                   continue;
               }
               if (valueLength==maxCount){
                 maxChar.push(value);
                 continue;
               }
           }
           let max=[];
          maxChar.forEach(element=>{
              max.push(`${element}:${maxCount}`);
          })
           return  `{${max.join()}}`

}

let str = 'aaaaabbdbdbb';
console.log(mostChar(str));
