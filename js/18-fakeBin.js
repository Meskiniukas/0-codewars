// https://www.codewars.com/kata/57eae65a4321032ce000002d


function fakeBin(x){
    let bin = '';
    for (let i = 0; i < x.length; i++) {
      if (x[i] >= 5) {
        bin += 1;
      } else {
        bin += 0;
      }
    }
    return bin;
}

console.log(fakeBin('12456012456'));