// https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3


function abbrevName(name){
    const zodziai = name.split(' ');
    const abbr = zodziai[0][0] + '.' + zodziai[1][0];
    return abbr.toUpperCase();
}

console.log('Petras Kuisis' + ' --> ' + abbrevName('Petras Kuisis'));