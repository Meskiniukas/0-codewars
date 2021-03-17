https://www.codewars.com/kata/5168bb5dfe9a00b126000018


function solution(str){
    let reverse = '';
    
    for (let i = 0; i < str.length; i++) {
          reverse = str[i] + reverse;
      }
    
    return reverse;
  }

console.log('abcdef', '-->', solution('abcdef'));