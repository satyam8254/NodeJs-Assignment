function getNameFromCommandLine() {
    // Write you code here, name should be taken as args in process.argv
    const input = process.argv;
    return input[input.length-1];
}

function getNameFromEnv() {
    // Write your code here
    process.env.name="Yash"
    return process.env.name
}

function getNameFromReadLine() {
    // Write your code here
    const readline=require("readline")
    const res=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });
    res.question("Enter Your Name",(name)=>{
        console.log(`Hello ${name}`)
        n=name
    })
    return n;
}

module.exports = {
    getNameFromCommandLine,
    getNameFromEnv,
    getNameFromReadLine
}