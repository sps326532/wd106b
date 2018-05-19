var end;
function gcd(m,n){
  while(n!=0){
   end = m%n;
   m = n;
   n = end;
  }
  return m;
};

console.log(gcd(12,15));