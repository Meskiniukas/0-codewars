function lovefunc(flower1, flower2){
    if (flower1 % 2 === 0 && flower2 % 2 !== 0) {
    return 'Myli';
    } else if (flower1 % 2 !== 0 && flower2 % 2 === 0) {
    return 'Myli';
    }
  return 'Nemyli'
}

console.log(lovefunc(7, 8));