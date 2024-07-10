function reverseString(value) {
    let reversedValue = "";

    value.spilt("").forEach((char) => {
        reversedValue = char + reversedValue;
    });

    return reversedValue;
}

console.log(reverseString("Reverse Me"))