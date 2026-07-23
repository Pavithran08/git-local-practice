const { add } = require("./app");

function assertEqual(actual, expected, msg){
    if(actual !== expected){
        console.error(`FAIL: ${msg}`);
        process.exit(1);
    }
}

assertEqual(add(1,2),3,"add(1,2)");
assertEqual(add(-1,1),0,"add(-1,1)");

console.log("All tests passed ✅");