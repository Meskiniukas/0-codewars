class SmallestIntegerFinder {
    findSmallestInt(args) {
      let smallest = Infinity;
      for (let i = 0; i < args.length; i++) {
        const number = args[i];
        if (number < smallest) {
          smallest = number;
        }
      }
      return smallest;
    }
}

// const rez = new SmallestIntegerFinder([78, 56, 232, 12, 8]);

// console.log(rez);

// Kaip panaudoti SmallestIntegerFinder - NEŽINIA