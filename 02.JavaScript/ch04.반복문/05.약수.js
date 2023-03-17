// 어떤 양의 정수의 약수 구하기
let num = 12;
let divisors = [];                //empty array
for (let i = 1; i <= 12; i++){
	if (num % i == 0)
			divisors.push(i)
}
console.log(`${num}의 약수: ${divisors}`);

let num1 = Math.ceil(Math.random()*100);
let divisors1 = [];                //empty array
for (let i = 1; i <= num1; i++){
	if (num1 % i == 0)
			divisors1.push(i)
}
console.log(`${num1}의 약수: ${divisors1}`);

// 두 자연수의 공약수 찾기
let num2 = 24, num3 = 60;
let commonDivisors = [];
for ( let i = 1; i <= ((num2 > num3) ? num3 : num2); i++){
	if (num2 % i == 0 && num3 % i == 0)
		commonDivisors.push(i);
}
console.log(`${num2},${num3}의 공약수: ${commonDivisors}`);