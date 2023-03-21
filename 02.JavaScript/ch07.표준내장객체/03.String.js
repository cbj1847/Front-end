// 객체(object)
let stringFromLiteral = '안녕하세요';
let stringFromConstructor = new String('안녕하세요');

// 속성(attribute)
console.log(stringFromConstructor.length);

// 메서드 (method)
let str = '안녕하세요';
console.log(str[0], str.charAt(0));
console.log(str.concat(' 여러분!')) // str(안녕하세요) + .concat(여러분!)
console.log(str.indexOf('하'));

// 디지털 시계, 00:00 ~ 23:59
// 하루동안 3이 적어도 한개 표시되는 시간은 몇초인가?
let sum=0;
for(let i=0; i<24; i++){
	for(let k=0; k<60; k++){
		let display = i + ' : ' + k;
		if(display.indexOf('3') >= 0){
			sum+=60
		}
	}
}
console.log(sum);

// 정규 표현식 (Regular Expression)
const sample = 'ㅠㅠA quick brown fox 갈색의 재빠른 여우가 Jumps over the lazy dog. 게으른 개를 ㅋㅋ'

let newStr = sample.replace('A', 'a');
console.log(newStr);

newStr = sample.replace(/[A-Z]/, '대');		//한개만 바꿈
console.log(newStr);
newStr = sample.replace(/[A-Z]/g, '대');    // 모두바꿈
console.log(newStr);

// 한글 제거
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
console.log(newStr);

// 한글과 공백만 남기고 모두 제거
newStr = sample.replace(/[^ㄱ-ㅎㅏ-ㅣ가-힣 ]/g, '');
console.log(newStr);

// 문자열을 분리하여 배열을 반환
let fruitString = '사과,배,감,포도';
let fruitArray = fruitString.split(',');
console.log(fruitArray)

// 문자열 일부분
const today = new Date().toISOString();
console.log(today);
console.log(today.substring(0, 10));	// 날짜 추출
console.log(today.substring(11, 19));	// 시간 추출, 시작지점+글자길이
console.log(new Date().getHours(), new Date().getMinutes());

// e.g. 9분 -> 09분 변환
function twoDigit(num){
	return (num < 10) ? '0' + num : String(num);
}
// YYYY-MM-DD HH:MM:SS 형식으로 만들어주는 함수
function myDatetime(){
	let now = new Date();
	return `${now.getFullYear()}-${twoDigit(now.getMonth()+1)}-${twoDigit(now.getDate())} `
	+ `${twoDigit(now.getHours())}:${twoDigit(now.getMinutes())}:${twoDigit(now.getSeconds())}`;
}
let now = myDatetime();
console.log(now);
console.log(now.substring(2));

console.log('   he llo   '.trim());		//양끝 공백 삭제

console.log('33'.split('3').length);
console.log('13131'.split('3').length);

//================================ 연습문제 =================================
// 1~1000 사이에 0~9 몇번 표시되는지 카운트
function strCount(str, dst){          //str에서 dst가 몇번 사용되는지 count하는 함수
	return str.split(dst).length - 1;
}



let str2='';
for(let i=1; i<=1000; i++){
	str2 += i;
}
for(let k=0; k<10; k++){
	//let count = strCount(str2, String(k));  // count함수 사용 
	console.log(str2.split(k).length-1);
}

// isPalindrome 함수 만들기
function isPalindrome(a){
	
	let b = '';
	let i = a.length-1;
	
	for(k=0; k<=i; k++){
		b  += a.charAt(i-k);
	}

	return a + b;
}
console.log(isPalindrome('최범준입니다'));

// C:\\Program Files\\nodejs\\node.exe 에서 파일명만 출력.
const path = 'C:\\Program Files\\nodejs\\node.exe';
let index = path.lastIndexOf('\\');
let filename = path.substring(index + 1);
console.log(filename);