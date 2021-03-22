// https://www.codewars.com/kata/57eae20f5500ad98e50002c5


function noSpace(x){
    let nospa = '';
    for (let i = 0; i < x.length; i++) {
      if (x[i] !== ' ') {
        nospa += x[i];
      }
    }
  return nospa;
  }

  console.log(noSpace('dd dd zz zz yy xx'));