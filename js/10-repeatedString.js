function repeatStr (n, s) {
    let repeatedString = '';
    for (let i = 1; i <= n; i++) {
      repeatedString = repeatedString + s; 
      }
  return repeatedString;
}

console.log(repeatStr(1, 'Halaluja!'));