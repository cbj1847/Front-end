//:한줄주석(ctrl + /) , /* */ : 여러줄 주석 (alt + shif + a)

//*** 자바스크립트의 자료형 ***

//1. 숫자형(number)
console.log(5 / 2);
console.log(5 % 2); // modulo, 나머지 값 출력
console.log(2 ** 10); // 2^10, ** : 제곱
console.log(1.3e10); // 1.3 * 10^10 , en : 10^n

//2. 문자열(string)
console.log('She said "I love you." ')
console.log("She said \"I love you.\" ")
console.log("She said \tI love you.\" ") // tap
console.log("She said \nI love you.\" ") // 줄바꿈
console.log("She said \\I love you.\" ") // \ + something 하면 출력가능
let hello = '안녕하세요?';
console.log(hello[0],hello[5]);
//template literal(` : backcourt)

console.log('2 더하기 3을 한 결과는', 2 + 3, '입니다.');
console.log(`2 더하기 3을 한 결과는 ${2 + 3} 입니다.`);
let a = 2, b = 3;
console.log(a,'더하기', b, '을 한 결과는', 2 + 3, '입니다.');
console.log(`${a} 더하기 ${b}을 한 결과는 ${2 + 3} 입니다.`);
console.log(`올해는 ${new Date().getFullYear()}년입니다.`)

//3. 논리형(boolean)
console.log(typeof(true), typeof false); // boolean
console.log(2 == 2.0, 5 >= 4, '나나다' > '가바사');
let x = 10;
console.log(x > 8 || x < -3); // x > 8 or x < -3
console.log(x >= 0 && x <= 5); // 0 <= x <= 5
console.log(true > 10); 
console.log()
