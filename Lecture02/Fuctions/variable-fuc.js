let plusFive = (number) => {
    return number + 5;
};
// f is assigned the value of plusFIve
let f = plusFive;

console.log(plusFive(3)); // 8
// Since f gas a funcetion value, if can ne invoked
console.log(f(9)); // 14