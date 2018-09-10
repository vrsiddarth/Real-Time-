// function say(filename, cb) {
//     // var contents = fs.readFileSync(filename);
//     // return contents;
//     return fs.readFile(filename,cb);
// }


function readFile(filename) {
    var sq = ASQ();
    fs.readFile(filename, sq.errfcb())
    return sq
}

function delayMsg(done, contents) {
    setTimeout(() => done(contents), 1000);
}

function say(filename) {
    return readFile(filename)
        .then(delayMsg);
}
const fs = require("fs");
const ASQ = require("../Real-Time-/node_modules/asynquence-contrib")
require("../Real-Time-/node_modules/asynquence");
module.exports.say = say;