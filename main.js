/*
특정 시간을 주기로 코드를 반복할때
setInterval(반복실행할 함수, 반복간격시간(ms단위))
*/

const [hr, m, s] = document.querySelectorAll('h1 span');

setInterval(timer, 1000);

function timer() {
	const now = new Date();
	const hours = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();

	hr.innerText = setNumbers(setHours(hours));
	m.innerText = setNumbers(min);
	s.innerText = setNumbers(sec);

	return;
}

function setNumbers(num) {
	num < 10 && (num = '0' + num);
	return num;
}

function setHours(num) {
	num > 12 && (num = num - 12);
	return num;
}
