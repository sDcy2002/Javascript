// Arrow function with two arguments
const sum = (firstParam, secondParam) => {
    return firstParam + secondParam;
};
console.log(sum(2, 5)); // Prints: ?

// Arrow function with mo arguments
const printHello = () => {
    console.log("hello");
};
printHello(); // Prints : hello

// Arrow fuctions with a single arguments
const checkWeight = (weight) => {
    console.log(`Baggage weight : ${weight} kilograms. `);
};
checkWeight(25); // Prints: Baggage weight : 25 kilograms

// Conciise arrow fuctions
const multiply = (a, b) => a + b;
console.log(multiply(2, 30)); // Prints: 50