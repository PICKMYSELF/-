var PrimeFactorization=function (numInput) {
    var temp=numInput;
    var primeNumber=[];
    if(numInput<=2) {
        console.log(`${numInput}无法被分解`) ;
        return ;
    }

    for(let i=2;i<=numInput;i++){
        while(numInput%i==0 && numInput!=i){
            numInput=numInput/i;
            primeNumber.push(i);
        }
        if(numInput==i){
            primeNumber.push(i);
            break;
        }

    }
    console.log(`分解${temp}=${primeNumber.join("*")}。`)

}
//测试
PrimeFactorization(2);
PrimeFactorization(90);
