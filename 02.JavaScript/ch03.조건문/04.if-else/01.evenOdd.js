// 홀수 / 짝수
let num = Math.ceil(Math.random()*100); // 1~100 랜덤정수 (ceil : 올림)

if (num % 2 == 1)
{
	console.log(`${num} 은/는 홀수입니다.`);
}
if (num % 2 == 0)
{
	console.log(`${num} 은/는 짝수입니다.`);
}
console.log();
