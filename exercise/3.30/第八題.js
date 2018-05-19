var i;
function isPrime(e){
  for(i=2;i<=(e-1);i++){
   if(e%i==0){
     return e=false;
     break;
   }else{
     return e=true;
   };
  };
};

console.log(isPrime(17));