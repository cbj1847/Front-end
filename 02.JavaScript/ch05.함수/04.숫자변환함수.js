// 숫자 변환 내장(built-in) 함수

const a = '123.65', b = '0xff', c = '23';

console.log(Number(a), Number(b));
console.log(parseInt(a), parseFloat(a));
console.log(parseInt(b), parseFloat(b), parseFloat(c));
console.log(parseInt('1401동'), Number('1401동'));
console.log(parseInt('1401동 503호'));      // 1401, NaN
console.log();                              // 1401
