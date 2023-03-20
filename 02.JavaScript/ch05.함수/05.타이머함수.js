// 타이머 내장 함수

setTimeout(function(){
	console.log('3초 경과')
}, 3000);

const threesec = function() {
	console.log('3초 경과');
}
setTimeout(threesec, 3000);

const si = setInterval(function() {
	console.log(new Date);
} , 1000);

setTimeout(function(){
	clearInterval(si)
}, 5100)