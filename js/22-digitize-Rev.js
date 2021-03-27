function digitize(n) {
    let array = [];
    let skaicius = '' + n;
    let skaiciusRev = '';
    let skaiciusRevArr = 0;
      
    for (let i = 0; i < skaicius.length; i++) {
        skaiciusRev = skaicius[i] + skaiciusRev;
      }  
      
    for (let i = 0; i < skaiciusRev.length; i++) {
        skaiciusRevArr = +skaiciusRev[i];
        array.push(skaiciusRevArr);
    }
    return array;
  }

  console.log(12345, ' --> ', digitize(12345));