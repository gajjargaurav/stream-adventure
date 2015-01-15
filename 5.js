var through = require('through');
var split = require('split');
var tr = through(write);
process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
var count =0
function write(buf){
count++;
if(count%2===0)
{
this.queue(buf.toString().toUpperCase() + '\n');
}
else
{
	this.queue(buf.toString().toLowerCase()+ '\n');
}
}