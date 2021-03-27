function pipeFix(numbers){
    let numbersNew = [];
    let min = numbers[0];
    let max = numbers[numbers.length - 1];
    
    for (let i = min; i <= max; i++) {
      numbersNew.push(i);
    }
    return numbersNew;
  }

  console.log([6, 8, 10, 12, 14, 16], ' --> ', pipeFix([6, 8, 10, 12, 14, 16]));