// 중첩 조건문 (Nested If)

// 윤년 계산
let year = 1900;

if (year % 4 == 0){
	if (year % 100 == 0){
		if (year % 400 == 0){
			console.log(`${year}년은 윤년입니다.`);
		}else {
			console.log(`${year}년은 평년입니다.`);
		}
	}else {
		console.log(`${year}년은 윤년입니다.`);
	}
}else {
	console.log(`${year}년은 평년입니다.`);
} 
// 위 조건문 간소화
if ((year % 100 != 0 && year % 400 ==0) && year % 4 == 0){
	console.log(`${year}년은 윤년입니다.`);
} else{
	console.log(`${year}년은 평년입니다.`);
}
console.log();