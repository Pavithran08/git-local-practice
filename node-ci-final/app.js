function add(a,b){
    return a+b;
}

if(require.main === module){
    console.log("Hello CI/CD Final Project 🚀");
}

module.exports = { add };