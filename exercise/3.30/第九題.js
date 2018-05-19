var i,j,sum=0;
function countPrime(a,b){
  for(i=a;i<=b;i++){
      f = false;
    for(j=2;j<=(i-1);j++){
        if(i%j==0){
          break;
        }else{
          f = true;
          break;  
        }
    };
    if(f==true){
     sum++;
    };
  };
  return sum;
};

console.log(countPrime(3,7));