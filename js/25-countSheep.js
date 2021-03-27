var countSheep = function (num){
    let string = '';
    for (let i = 1; i <= num; i++) {
      string += i.toString() + ' sheep...'
    }
    return string;
  }

console.log(countSheep(8));