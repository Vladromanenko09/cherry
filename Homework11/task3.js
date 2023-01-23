function getsum(x){
  
    return function(y){
      return x+y
    }
  }
  let x = 3;
  let y = 7;
  
  console.log(getsum (x) (y)); 