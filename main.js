/*
특정 시간을 주기로 코드를 반복할때
setInterval(반복실행할 함수, 반복간격시간(ms단위))
*/

const [hr, m, s] = document.querySelectorAll('h1 span');

setInterval(timer, 1000);

//함수 추가
//원하는 시간마다 바디에 morning, afternoon, evening, night
//주의점 (밤)특정이상 혹은 일정시간 이하는 &&가 아닌 ||로 표현 가능

function changeClass(hr) {
	if (hr >= 6 && hr < 12) document.body.classList.add('morning');
	if (hr >= 12 && hr < 16) document.body.classList.add('afternoon');
	if (hr >= 16 && hr < 20) document.body.classList.add('evening');
	if (hr >= 20 || hr < 6) document.body.classList.add('night');
}

function timer() {
	const now = new Date();
	const hours = now.getHours();
	const min = now.getMinutes();
	const sec = now.getSeconds();

	hr.innerText = setNumbers(setHours(hours));
	m.innerText = setNumbers(min);
	s.innerText = setNumbers(sec);

	changeClass(hours);
}

function setNumbers(num) {
	num < 10 && (num = '0' + num);
	return num;
}

function setHours(num) {
	num > 12 && (num = num - 12);
	return num;
}
