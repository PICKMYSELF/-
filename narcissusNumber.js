var narcissusNumber=function () {
  for(let i=100;i<1000;i++){
    if(cube(i%10)+cube(parseInt(i%100/10))+cube(parseInt(i/100))==i){
      console.log(i/*`${i}\n`*/);
    }
  }
}
var cube=function (x) {
  return x*x*x;
}
narcissusNumber();
