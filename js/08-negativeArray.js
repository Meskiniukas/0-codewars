// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad


function invert(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = -array[i];
    }
     return array;
}

console.log(invert([4, -5, 0, -0, 8]));