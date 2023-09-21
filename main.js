const [hr, m, s] = document.querySelectorAll('h1 span');

const now = new Date();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

//Hours값을 setHours가 조건에 12를 뺸값으로 반환
//반환된 결과값을 다시 바로 setNumbers에 넣어서 0을 붙히도록 처리

hr.innerText = setNumbers(setHours(hours));
m.innerText = setNumbers(min);
s.innerText = setNumbers(sec);

//다음과 같이 코드를 줄일 수 있음
const values = [setHours(hours), min, sec];
spans.forEach((el, idx) => {
	el.innerText = setNumbers(values[idx]);
});

function setNumbers(num) {
	num < 10 && (num = '0' + num);
	return num;
}

//현재 js라서 실행 안됨
//const setNumbers = (num) => num < 10 && (num = '0' + num);
console.log(setNumbers(hours));

function setHours(num) {
	num > 12 && (num = num - 12);
	return num;
}

//const setNumbers3 = (num) => num > 12 && (num = num - 12);
