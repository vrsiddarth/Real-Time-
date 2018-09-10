function printHelp() {
    console.log("1.js (c) Siddarth V R")
    console.log("")
    console.log("usage:")
    console.log("--htlp print this help")
    console.log("--name say hello to {NAME}")
    console.log("")
}

const args = require("../Real-Time-/node_modules/minimist")(process.argv.slice(2), { string: "name" });

if (args.help || !args.name) {
    printHelp();
    process.exit(1);
}

var name = args.name
console.log('Hello  World' + '  ' + name)