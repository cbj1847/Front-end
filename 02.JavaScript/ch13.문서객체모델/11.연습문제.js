//2의 num1~num2승
function exp(){
	let num1 = Number(document.getElementById('num1').value);
	let num2 = Number(document.getElementById('num2').value);
	let resTag = document.getElementById('result1');
	let expArr = [];

	if(num1<1 || num1 >20 || num2<10 || num2>30){
			resTag.innerHTML = '<p> Write exact number 1<=input1<=20 / 10<=input2<=30';
	}
	else if( (num1>=1 || num1<=20) && (num2>=10 || num2<=30)){
		if((num2 - num1) < 4){
			resTag.innerHTML = '<p>Input1 must be at least 4 less than input2';
		}
		else{
			for(let i=num1; i<=num2; i++)
				expArr.push(2**i);
				resTag.innerHTML = '<p>' + expArr.join(', ');
			}
	}
}
//========================================================================================================
//the  찾기
function the(){
	let txt1 = document.getElementById('txt1').value;
	let resTag = document.getElementById('result2');
	let txtStr = txt1.replace(/[',.;-]/g, '').split(' ');
	let k = txtStr.length ;
	let sum = 0;
	for(i=0; i<k; i++){
		if(txtStr[i] == 'the'){
				sum+=1;
		}
	}
	resTag.innerHTML = '<p> the의 개수는: ' + sum + ' 입니다.';
}
//========================================================================================================
//내림차순
function desOrder() {
	let num3 = document.getElementById('num3').value;
	let resTag = document.getElementById('result3');
	let numArr = num3.split(';');
	
	numArr.sort(function(a, b){
		return b - a;
	})
	resTag.innerHTML = '<p> 내림차순 결과는: '	+ numArr;
}
//========================================================================================================
//디지털 시계
function twoDigit(num) {
	return (num<10) ? '0' + num : String(num);
}
function myDatetime(date){
	return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} `
	+ `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
}

function digitalWatch() {
	setInterval(function() {
		const now = new Date();
		const week = ['일', '월', '화', '수', '목', '금', '토'] // == const week = '일월화수목금토'.split('');
		let k = now.getDay();									// == week[now.getDay];

		const dateStr = myDatetime(now).substring(2, 10) + ' (' + week[k] + ')' ;	// 23-03-21(수)
		let timeStr = myDatetime(now).substring(11, 19);
		
		const h1 = document.getElementById('h1');
		const h2 = document.getElementById('h2');
		const m1 = document.getElementById('m1');
		const m2 = document.getElementById('m2');
		const s1 = document.getElementById('s1');
		const s2 = document.getElementById('s2');
	
		h1.src = 'images/' +timeStr[0]+'.png';
		h1.width = "37"; h1.height = "61";
		h2.src = 'images/' +timeStr[1]+'.png';
		h2.width = "37"; h2.height = "61";
		m1.src = 'images/' +timeStr[3]+'.png';
		m1.width = "37"; m1.height = "61";
		m2.src = 'images/' +timeStr[4]+'.png';
		m2.widtm2= "37"; m2.height = "61";
		s1.src = 'images/' +timeStr[6]+'.png';
		s1.width = "37"; s1.height = "61";
		s2.src = 'images/' +timeStr[7]+'.png';
		s2.width = "37"; s2.height = "61";

	}, 1000)
}