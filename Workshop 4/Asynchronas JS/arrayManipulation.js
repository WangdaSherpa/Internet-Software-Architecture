function arrayManipulation(arr, operationCallback, filterCallback) {
    const manipulatedArr = arr.map(operationCallback);
    return manipulatedArr.filter(filterCallback);
  }

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const squaredEvens = arrayManipulation(
  myArr,
  (num) => num % 2 === 0 ? num ** 2 : num,
  (num) => num >= 10
);
console.log(squaredEvens); 
