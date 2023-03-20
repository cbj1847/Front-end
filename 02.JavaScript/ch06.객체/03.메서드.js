let obj = {
	// 속성(attribute)
	name: '사과',
	price: 1000,

	// 메서드(method): 동작과 관련된 사항을 기술
	print: function(){
		console.log(`${obj.name}의 가격은 ${obj.price}원 입니다.`);
	}
};

obj.print();