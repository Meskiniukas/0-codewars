// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e


function repeatStr (n, s) {
    let repeatedString = '';
    for (let i = 1; i <= n; i++) {
      repeatedString = repeatedString + s; 
      }
  return repeatedString;
}

console.log(repeatStr(1, 'Halaluja!'));