// https://www.codewars.com/kata/5875b200d520904a04000003


function enough(cap, on, wait) {
    const space = cap - on;
    if (space >= wait) {
      return 0;
    } else {
      return wait - space;
      }
  }

  console.log(enough(100, 88, 26));