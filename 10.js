var trumpet = require('trumpet');
var through = require('through');
var tr = trumpet();
var thr = through(write);
// 
var stream = tr.select('.loud').createStream();
// take the stream. transform to uppercase. write back to the stream
stream.pipe(thr).pipe(stream);
process.stdin.pipe(tr).pipe(process.stdout);

function write (buf) { this.queue(buf.toString().toUpperCase()); }