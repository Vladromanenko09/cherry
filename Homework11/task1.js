function getIntegers() {
    let arr = [0, 3, 8, 14, 21, 46, 93, 32.4, 67.5, 107, "Blue", "Green", "Orange", "!"];
    let countEven = 0;
    let countOdd = 0;
    let countNull = 0;
    for (let i = 0; i < arr.length; i++) {
      if ( arr[i] % 2 === 0) if (arr[i] != 0) if (arr[i] != null){
        countEven++;
      } 
       if (arr[i] % 2 === 1){
        countOdd++;
      }
       if (parseInt(arr[i]) == 0) {
        countNull++;
      }
    }
    console.log(`В массиве: четных чисел ${countEven} (не считая нули), нечетных ${countOdd}, нулей ${countNull}`);
    }
    getIntegers();