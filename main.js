/*
객체를 생성하는 방법
- 객체리터럴을 통한 생성
- 생성자 함수를 통한 생성(new키워드를 이용해서 동일한 구조의 객체를 복사할때 주로 사용)
-생성자함수를 통해서 생성된 객체 : 인스턴스
- 인스턴스 객체에는 프로토타입이라는 공통의 저장공간이 포함되어있어서 자주 사용하는 함수를 등록후 자유롭게 호출 가능 

*/

const now = new Date();
console.dir(now);
//우리나라 시간대는 전세계 표준시간대에서 9시간이 더해진 시간(그리니치 표준 시간대 적용)

const year = now.getFullYear();
console.log(year);

const months = [
	'januaty',
	'february',
	'march',
	'april',
	'may',
	'june',
	'july',
	'aguast',
	'september',
	'october',
	'nobemver',
	'decemver',
];

const month = now.getMonth(); //순번을 반환
console.log(months[month]);
const date = now.getDate();
const days = ['Sunday', 'Monday', 'Thusday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const day = now.getDay();
console.log(days[day]);
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

/*
내가 짠 코드
if (hours < 12) {
	let hour = hours;
	console.log(hours);
} else {
	let hour = hours - 12;
	console.log(hour, 'pm');
}
*/

let newHr = 0;

if (hours > 12) {
	newHr = hours - 12;
	if (newHr < 10) {
		newHr = '0' + newHr + 'pm';
	} else {
		newHr = newHr + 'pm';
	}
} else {
	newHr = hours;
	if (newHr > 10) {
		newHr = '0' + newHr + 'am';
	} else {
		newHr = newHr + 'am';
	}
}

console.log(newHr);
