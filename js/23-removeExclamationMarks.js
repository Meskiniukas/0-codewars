function removeExclamationMarks(s) {
    let newString = '';
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== '!') {
        newString += s[i];
      }
    }
    return newString;
  }

console.log(removeExclamationMarks('Labas! Rytas! Lietuva !'));