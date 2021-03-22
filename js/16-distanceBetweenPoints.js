// https://www.codewars.com/kata/58dced7b702b805b200000be


function distanceBetweenPoints(a, b) {
    const deltaX = a[0] - b[0];
    const deltaY = a[1] - b[1];
    const distance = Math.sqrt (deltaX * deltaX + deltaY * deltaY);
    return distance.toFixed(6);
  }

  console.log(distanceBetweenPoints([-10.2, 12.5], [0.3, 14.7]));