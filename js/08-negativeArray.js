function invert(array) {
    for (let i = 0; i < array.length; i++) {
      array[i] = -array[i];
    }
     return array;
}

console.log(invert([4, -5, 0, -0, 8]));