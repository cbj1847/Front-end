// 역 for 반복문
let sum = 0;
for (let i = 10; i>0; i--){
	sum += i;
console.log(`index=${i}, sum=${sum}`);
}
// 1에서 100까지 홀수의 합

let sum1 = 0;
for (let i = 1; i<=100; i+=2){
	sum1 += i;
//	console.log(`index=%{i}, sum=${sum1}`)    <- for check
}
console.log(sum1);

// 48 ~ 10 3의 배수의 합 (내림차순)
let sum2 = 0;
for (let i =48; i>=10; i-=3 ){
	sum2 += i;
//	console.log(`index=%{i}, sum=${sum2}`)    <- for check
}
console.log(sum2);
