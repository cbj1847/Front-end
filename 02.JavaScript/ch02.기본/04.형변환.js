// 자료형 변환 Number(), String(), Boolean()
console.log(123, String(123)); // 강제변환
console.log(Number('101'), Number(true), Number(false), Number('Hello'));
console.log(Boolean(0), Boolean(0.0), Boolean(''), Boolean(undefined), Boolean(NaN), Boolean(null)); // 이 경우를 제외하면 모두 참(true)이 됨
console.log(Boolean(0.0000001), Boolean(' '), Boolean({}));

// 자동형변환 (+인 경우)
// boolean -> number -> string
console.log('bool ' + true, 'integer ' + 123, 123 + true);

// -, *, /인 경우에는 string -> number로 자동형변환
console.log('52' - 273, '8'* 8,  '12'/ '3');

// 일치연산자 : 두개의 값이 같은지 비교 하여 true or false 반환 
//case1. 변환된 값만 같은 경우 (자료형 고려X) -> 비교연산자
console.log(52 == 52.0, 52 == '52');
console.log(true == 1, false == 0.0);
//case2. 변환된 값과 자료형도 일치하는 경우 -> 일치연산자
console.log(52 === 52.0, 52 === '52');
console.log(true === 1, false === 0.0);
