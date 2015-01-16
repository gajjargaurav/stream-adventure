var through = require('through');
var duplexer = require('duplexer');

module.exports = function (counter) {
	var countryCounter = {};

	function write(buf){
			countryCounter[buf.country] = (countryCounter[buf.country] || 0) + 1; 
		}

	function end(){
	 counter.setCounts(countryCounter);
	}
    return duplexer(through(write,end), counter);    
};