// https://www.codewars.com/kata/55edaba99da3a9c84000003b


function divisibleBy(numbers, divisor){
    let result = [];
    let resultNo = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % divisor !== 0) {
        continue;
      } else {
        result[resultNo] = numbers[i];
        resultNo++;
        }
    }
return result;  
}

console.log(divisibleBy([1, 2, 3, 4, 5], 2));