//입력을 담당하는 객체
var input = {'array': []};

//입력받은 수식을 문자열로 변환
input.getInput = function() {
   return this.array.join("");
}

//입력 배열을 초기화
input.removeall = function(str) {
this.array=[];
}
//수식이 비었는지 검사
input.empty = function(value) {
    input.empty = function () {
    return this.array.length === 0;
    }
};
//계산을 준비
input.prepare = function() {
    this.array = this.array.join("").split(" ");
};
//첫번째 값 받기
input.getFirstValue = function() {
    var str = this.array.shift();
    var n = Number(str);
    return n;
};
//연산 기호 받기
input.getOperator = function() {
    var op = this.array.shift();
    if(op === '+' || op === '-' || op === 'x' || op === '*' || op === '/' || op === 'q') {
        return op;
    } else {
        return "$";
    }
}
//출력 담당
var ouput = {};
output.text = document.getElementById('output');

//계산 결과 출력
output.print = function(str) {
    this.text.innerHTML = str;
}
//수식 출력
output.display = function() {
    this.text.innerHTML = input.getInput();
}

//calculator  객체 계산 담당
var calculator = {};
calculator.calculate = function(first, second, op) {
    var ret;
    switch(op) {
        case "+":
            ret = first + second;
            break;
        case "-":
            ret = first - second;
            break;
        case "*":
            ret = first * second;
            break;
        case "/":
            ret = first / second;
            break;
        default:
            return NaN;
    }
    return ret;
}
//숫자 버튼 핸들러 함수
var num = function(event) {
    var str = event.target.innerHTML;
    console.log(str);
    console.log(input.getInput());

    if(str === 'bs') {
        nput.array.pop();
    } else if( str === '+' || str === '-' || str === '*' || str === '/' ) {
        input.array.push(' ' + str + ' ');
    } else { 
        input.array.push(str);
    }
    if (input.empty()) {
        output.text.innerHTML = "0";
    } else {
        output.display();
    }
};
// =버튼의 함수
var showresult = function(event) {
    input.prepare();
    var result = input.getFirstValue();
    while(!input.empty()) {
        var op = input.getOperator();
        var second = input.getFirstValue();
        result = calculator.calculate(result, second, op);
    }
    output.print(result);
    input.removeall(result);
};
