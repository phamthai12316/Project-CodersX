//promise
// var fs = require('promise-fs');

// function onDone(song){
// 	console.log(song);
// }
// function onError(error){
// 	console.log(error);
// }
// function readFile(path){
// 	return fs.readFile(path, {encoding: 'utf8'})
// }
//  readFile('song1.txt')
// //fs.readFile('song1.txt', { encoding:'utf8'})   // đây là promise
//   // .then(function(song1){   // trả về promise
//   // 	console.log(song1);
//   // }) ->>
//   	.then(onDone)
//   	.then(function(){
//   		return readFile('song2.txt');
//   	})
//   	.then(onDone)
//   	.catch(onError)

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

// readFilePromise('song1.txt')
// 	.then(function(song1){
// 		console.log(song1);
// 	})
// 	.catch(function(err){
// 		console.log(error);
// 	});
// hoặc nếu nhiều path
// readFilePromise('song1.txt')
// 	.then(function(song1){
// 		console.log(song1)
// 		return readFilePromise('./song2.txt')
// 	})
// 	.then(function(song2){
// 		console.log(song2)
// 	return readFilePromise('./song3.txt');
//  	})
// 	.then(function(song3){
// 		console.log(song3);
// 	})
// ->> promise all làm ngắn gọn code
Promise.all([
	readFilePromise('./song1.txt'),
	readFilePromise('./song1.txt'),
	readFilePromise('./song1.txt')  // resolved done
]).then(function(values){   // then được gọi khi đã xong 3 thằng trên
	console.log(values)
}).catch(function(error){
	console.log(error) // được gọi ghi 1 file k tồn tại
})