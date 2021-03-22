// https://www.codewars.com/kata/55ecd718f46fba02e5000029


function between(a, b) {
    let arr = [a];
    let arrNumber = 1;
    for (let i = a; i < b; i++) {
      console.log(arrNumber);
      arr[arrNumber] = i + 1;
      console.log(arr[arrNumber]);
      arrNumber++;
    }
  return arr;
}

console.log(between(2, 4));
