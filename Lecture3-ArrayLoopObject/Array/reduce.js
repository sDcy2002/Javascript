const arrayOfNumbers = [1, 2, 3, 4];
const sum = arrayOfNumbers.reduce((accumulater, currentValue) => {
    return accumulater + currentValue;
});

console.log(sum); // 10