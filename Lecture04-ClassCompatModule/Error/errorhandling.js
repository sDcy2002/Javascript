function criticalCode () {
    // throw "throwing an exception";
    console.log(x);
}

function logError(theException) {
    console.log(theException);
}

//Try..Catch
console.log("\n********Try..Catch********\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
}

//Throwing in Try..Catch
console.log("\n********Throwing in Try..Catch********\n")

try {
    throw "An exception that is thrown every time";
} catch (ex) {
    console.log('Got an Error');
    logError(ex);
}

//Try..Catch..Finally
console.log("\n********Try..Catch..Finally*********\n");

try {
    criticalCode();
} catch (ex) {
    console.log("Got an error");
    logError(ex);
} finally {
    console.log("code that always wil run");
}
function hello() {
    console.log("\n********Throwing Exceptions********\n");
}