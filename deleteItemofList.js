/*var deleteNode=function (str,val){*/
 /* while(val.indexOf(str)!=-1){

  }*/
 /*var strArr=str.split("->");
 for(let i=0;i<strArr.length;i++){
   if(parseInt(strArr[i])==val){
     for (let j=i;j<strArr.length;j++){
       strArr[j]=strArr[j+1];
     }

   }
 }*/
/*var valStr="->"+val.toString();
/!*while(val.toString().indexOf(str)!=-1){ }*!/
  str=str.replace(valStr,"");
return str;
}*/
  function deleteNode(str, val) {
    let resultStr = [];
    let arr = str.split('->');
    for (let item of arr)
      if (item != val)
        resultStr.push(item);
    return resultStr.join('->');
  }

console.log(deleteNode("1->2->3->3->4->5->3",3));
