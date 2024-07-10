function createQuote(quote, callback) {
    let myQuote = 'Like I alwaus say, ' + quote;
    callback(myQuote); // 2
}

function logQuote(quote) {
    console.log(quote + 'Yes..');
}

createQuote(" you will getting better!", logQuote); // 1