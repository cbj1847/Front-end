
// 배열 생성
let fruits = ['apple', 'banana', 'cherry'];					// 배열 생성 type1
let cars = new Array('Audi', 'Benz', 'BMW', 'Volvo')		// 배열 생성 type2
console.log(cars);

// 배열 속성
console.log(fruits.length, cars.length);


// =============================비파괴적 메서드=============================
// 1. concat()
let newFruits = fruits.concat('orange', 'mango');
console.log(newFruits);

// 2. join()
console.log(`내가 갖고 싶은 차는 ${cars} 입니다.`);
console.log(`내가 갖고 싶은 차는 ${cars.join(', ')} 입니다.`);		// , 공백 추가

// 3. slice()  , 시작 인덱스는 포함, 마지막 인덱스는 포함하지 않고 리턴
let germanyCars = cars.slice(3);
console.log(germanyCars);
console.log(cars.slice(1, 3));

// ============================= 파괴적 메소드 =============================
// 4. pop()	
console.log(cars.pop());
console.log(cars);

// 5. push()
cars.push('Hyundai');
console.log(cars);

// 6. reverse()
cars.reverse();
console.log(cars);

// 7. sort()
cars.sort();
console.log(cars);
let numbers = [34, 46, 8, 29, 94, 46, 75];
// 오름차순 (ascending order) 
numbers.sort();
console.log(numbers);

numbers.sort(function(a, b){			// a-b <- 오름차순
	return a - b;
})
console.log(numbers);

numbers.sort(function(a, b){			// a-b <- 내림차순
	return b - a;
})
console.log(numbers);
// 객체의 배열
let fruitsArray = [
	{name: 'orange', price: 2000},
	{name: 'apple', price: 1000},
	{name: 'cherry', price: 3000}
];
// 이름 순으로 오름차순
fruitsArray.sort(function(a,b){
	if(a.name < b.name)
		return -1;
	if(a.name > b.name)
		return 1;
	return 0;
});
console.log(fruitsArray);
// 가격 순으로 오름차순
fruitsArray.sort(function(a,b){
	return ;
});
console.log(fruitsArray);

// isPalindrome()을 Array method를 이용하여 만들기
function isPalindrome(str){
	let reverseStr = str.split('').reverse().join('');
	return str == reverseStr;
}
console.log(isPalindrome('최범준'));