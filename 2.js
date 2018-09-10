function printHelp() {
    console.log("2.js (c) Siddarth V R")
    console.log("")
    console.log("usage:")
    console.log("--htlp print this help")
    console.log("--file={NAME} read the file of {NAME} output  ")
    console.log("")
}

const args = require("../Real-Time-/node_modules/minimist")(process.argv.slice(2), { string: "name" });

if (args.help || !args.file) {
    printHelp();
    process.exit(1);
}

var hello = require("./HelloWorld.js")
// var contents = hello.say(args.file)
// console.log(contents.toString())
hello.say(args.file, function (err, contents) {
    if(err){
        console.error(err)
    }
    else{
        console.log(contents.toString())
    }
})