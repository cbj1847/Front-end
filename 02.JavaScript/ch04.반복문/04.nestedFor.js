// 사각형 그리기
for (let i = 0; i < 5; i++){
	let rect = '';
	for (let k = 0; k<5; k++){
		rect += '*'
	}
	console.log(rect);
}

// 별 그리기 (1사분면)
for (let i=1; i<=5; i++){
	let star = '';
	for (let k=0; k<i; k++){
		star += '*';
	}
	console.log(star);
}

// 별 그리기 (4사분면)
for (let i=5; i>=1; i--){
	let star = '';
	for (let k=0; k<i; k++){
		star += '*';
	}
	console.log(star);
}

// 별 그리기 (2사분면)
for (let i=1; i<=5; i++){
	let star = '';
	for (let k = 0; k < 5-i; k++){
		star += ' ';
	}
	for (let k=0; k<i; k++){
		star += '*';
	}
	console.log(star);
}

// 별 그리기 (3사분면)
for (let i=5; i>=1; i--){
	let star = '';
	for(let k = 0; k < 5-i; k ++){
		star += ' ';
	}
	for (let k=0; k<i; k++){
		star += '*';
	}
	console.log(star);
}