 var fs = require('fs');
 var path = process.argv[2];
// console.log(process.argv);
// var str = buf.toString();
// var lines = str.split('\n');
// console.log(lines.length - 1);


fs.readFile(path,function (err, data) {
        if (err) throw err;
        console.log(err);
        var str = data.toString();
        var lines = str.split('\n');
        console.log(lines.length - 1);
    }
);