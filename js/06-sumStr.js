// https://www.codewars.com/kata/5966e33c4e686b508700002d


// function sumStr(a, b) {
//     const pirmas = a === '' ? 0 : parseInt(a);
//     const antras = b === '' ? 0 : parseInt(b);

//     return '' + (pirmas + antras);
// }

// function sumStr(a, b) {
//     const pirmas = Number(a);
//     const antras = Number(b);

//     return '' + (pirmas + antras);
// }


function sumStr(a, b) {
    return (+a + +b) + '';
}


console.log(sumStr("4", "5"), '->', "9");
console.log(sumStr("34", "5"), '->', "39");
console.log(sumStr("", "5"), '->', "5");
console.log(sumStr("34", ""), '->', "34");
console.log(sumStr("", ""), '->', "0");