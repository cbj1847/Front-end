// 생일 - 오늘 현재 만 나이 계산


const bYear = 1996, bMonth = 1, bDay = 9;
const today = new Date();
const tYear = today.getFullYear();
const tMonth = today.getMonth() + 1;
const tDay = today.getDate();
console.log('오늘날짜 ',tYear, tMonth, tDay,'를 기준으로');

let age = (tMonth - bMonth >= 0) && (tDay - bDay >= 0) ?  (tYear - bYear) : (tYear - bYear - 1);

if( (tMonth - bMonth >= 0) && (tDay - bDay >= 0) ){
	console.log(tYear - bYear,'세 입니다.');
} else {
	console.log(tYear - bYear - 1,'세 입니다.');
}

console.log(age+'세 입니다.');