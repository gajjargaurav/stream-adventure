var concat = require('concat-stream');

process.stdin.pipe(concat(function (buf) {
    process.stdout.write(buf.toString().split('').reverse().join('') + '\n');
    //console.log(buf.toString().split('').reverse().join(''));
}));