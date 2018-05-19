function degree(e){
    if(e>=90){
      e = "A";
    }else if(e>=80){
      e = "B";
    }else if(e>=70){
      e = "c";
    }else if(e<=69){
      e = "D";
    };
    return e;
};

console.log(degree(56));