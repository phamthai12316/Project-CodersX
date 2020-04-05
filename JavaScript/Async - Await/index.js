var fs = require('fs');

function readFilePromise(path){
	return new Promise(function(resolve, reject){
	fs.readFile(path, {encoding:'utf8'}, function(err, data){
		if(err){
			reject(err);
		} else {
			resolve(data);
		}
		});
	});
}

async function runc(){
	var song = await readFilePromise('song1.txt');
	var song = await readFilePromise('song2.txt');
	return [song1,song2];
}

run().then(function(values){
	console.log(values);
})