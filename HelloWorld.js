// function say(filename, cb) {
//     // var contents = fs.readFileSync(filename);
//     // return contents;
//     return fs.readFile(filename,cb);
// }


function say (filename,cb){
    return fs.readFile(filename, function(err,contents){
        if(err)
        cb(err)
        else{
            setTimeout(() => {
                cb(null,contents)
            }, 1000);
        }
    })
}
var fs = require("fs");
module.exports.say = say;