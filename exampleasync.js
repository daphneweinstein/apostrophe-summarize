self.modules['apostrophe-summarize'].summarizeArea(foo.content, 10, cb)
console.log(foo.summary); //null

var cb = function(summary) {
	foo.summary = summary;
	console.log(foo.summary); //not null
};

console.log(foo.summary); //still null


// this is equivalent____________________________________

modules.summarizer.summarizeArea(foo.content, 10, function(summary) {
	foo.summary = summary;
	db.save(foo, function(result){
		//you have access to outside vars here
	});
	console.log(foo.summary); //not null
})

console.log(foo.summary); // null



foo.summary = modules.summarizer.summarizeArea(foo.content/*js doesnt care that you need more args*/);