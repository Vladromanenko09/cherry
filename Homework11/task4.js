function countNumbers(start, finish) {
  
    let current = start;
    
    let timer = setInterval(function() {
      console.log(current);
      
      if (current == finish) {
        clearInterval(timer);
        }
      current++;
    }, 1000);
  }
  countNumbers(3 , 35);