function sumMix(x){
    let sum = 0;
     for (let i = 0; i < x.length; i++) {
         if (typeof(x[i]) === 'number') {
        sum += x[i];
      } else {
       sum += parseInt(x[i]);
      }
    }
  return sum;
}

console.log(sumMix(['4', 2, 3, 3]));