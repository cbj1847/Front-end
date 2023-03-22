// Date 객체 생성 방법
// 1. 현재 날짜/시간

let today = new Date();					//현재시간
console.log(today);						//2023-03-21T00:17:36.940Z
console.log(today.toDateString.substring(0,2));		//Tue Mar 21 2023
console.log(today.toLocaleString());	//2023. 3. 21. 오전 9:19:02

// e.g. 9분 -> 09분 변환
function twoDigit(num){
	return (num < 10) ? '0' + num : String(num);
}

// YYYY-MM-DD HH:MM:SS 형식으로 만들어주는 함수
function myDatetime(date){
	return `${date.getFullYear()}-${twoDigit(date.getMonth()+1)}-${twoDigit(date.getDate())} `
	+ `${twoDigit(date.getHours())}:${twoDigit(date.getMinutes())}:${twoDigit(date.getSeconds())}`;
}
console.log(myDatetime(today));

// 2. UNIX time 기준 (1970.1.1 이후 ms 단위)
let unixDay = new Date(1.6794e12);		//2023-03-21T12:00:00.000Z
console.log(unixDay);

// 3. 문자열 기반
let strDate = new Date('2023-03-21 09:25:00');
console.log(strDate);

// 4. 날짜/시간 요소기반
let elementDay = new Date(2023, 2, 21, 9, 30, 0, 0);	//시간단위 생략가능, 생략하면 0으로 나옴
console.log(elementDay);

// 5. 시간 연산
today.setDate(today.getDate() + 100);
console.log(myDatetime(today));
today.setDate(today.getDate() - 100);
console.log(myDatetime(today));

// 1년 2개월 3일 후 구하기
let date = new Date();
date.setFullYear(date.getFullYear() + 1);		//1년 뒤
date.setMonth(date.getMonth() + 2);				//2달 뒤
date.setDate(date.getDate() + 3);				//3일후
console.log(myDatetime(date));

// 시간 간격
let xMas = new Date(2023, 11, 25);				// 월에서 -1해줘야함
let diffMs = xMas.getTime() - today.getTime();
let diffDay = Math.ceil(diffMs / (24 * 60 * 60 * 1000));
console.log(diffDay);

// 수능일 : 2023-11-16
diffMs = new Date(2023, 10, 16).getTime() - today.getTime();
diffDay = Math.ceil(diffMs / (24 * 60 * 60 * 1000));
console.log(diffDay);

// 어제 날짜 구할 때는 Math.floor 사용 
diffMs = today.getTime() - new Date(2023, 2, 20).getTime() ;
diffDay = Math.floor(diffMs / (24 * 60 * 60 * 1000));
console.log(diffDay);

console.log();