const now = new Date();
const hours = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

console.log(setNumbers(hours));

function setNumbers(num) {
	/*
	if (num < 10) num = '0' + num;
	*/

	//조건식 ? (true일때 실행할 구문) : (false일때 실행할 구문)
	//주의점 : 삼항연산자 구문안에는 대입연산자가 들어올수없기 때문에 괄호로 묶어서 표현식으로 변경
	//특정 값이 else일때 굳이 실핼하지 않아도 된다면 &&연산자 활용
	//num < 10 ? (result = '0' + num) : (result = num);

	return num < 10 && (num = '0' + num);
}

//const setNumbers = num => num < 10 && (num = '0' + num);
