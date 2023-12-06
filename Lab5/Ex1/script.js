let display = document.getElementById('display');
let memoryCurrentNumber = 0;
let memoryNewNumber = false;
let memoryPendingOperation = '';

let decimal = function (argument) {	//Function Expression
	let localDecimalMemory = display.value;

	if (memoryNewNumber) {
		localDecimalMemory = '0.';
		memoryNewNumber = false;
	}
	else {
		if (localDecimalMemory.indexOf('.') === -1) localDecimalMemory += '.';
	}

	display.value = localDecimalMemory;
};
function addEvents() {
	let numbers = document.querySelectorAll('.number');
	let operations = document.querySelectorAll('.operation');
	let decimalBtn = document.getElementById('decimal');
	let clearBtns = document.querySelectorAll('.clear_btn');
	let resultBtn = document.getElementById('result');

	for (let i = 0; i < numbers.length; i++) {
		let number = numbers[i];
		number.addEventListener('click', (e) => {	//Стрелочная функция
			numberPress(e.target.textContent);
		});
	};

	for (let i = 0; i < operations.length; i++) {
		let operationBtn = operations[i];
		operationBtn.addEventListener('click', (e) => {	//Стрелочная функция
			operation(e.target.textContent);
		});
	};

	for (let i = 0; i < clearBtns.length; i++) {
		let clearBtn = clearBtns[i];
		clearBtn.addEventListener('click', (e) => {		//Стрелочная функция
			clear(e.target.textContent);
		});
	}

	decimalBtn.addEventListener('click', decimal);
	resultBtn.addEventListener('click', result);
};


//newFunction
let clear = new Function('id', 'if (id === "CE") {display.value = "0";memoryNewNumber = true;}else if (id === "C") {display.value = "0";memoryNewNumber = true;memoryCurrentNumber = 0;memoryPendingOperation = "";}');

function numberPress(number) {	//Function Declaration
	if (memoryNewNumber) {
		display.value = number;
		memoryNewNumber = false;
	}
	else {
		if (display.value === '0') display.value = number;
		else display.value += number;
	}
};

function operation(op) {	//Function Declaration
	let localOperationMemory = display.value;
	console.log("operation:", memoryPendingOperation);
	if (memoryNewNumber && memoryPendingOperation !== '=') display.value = memoryCurrentNumber;
	else {
		memoryNewNumber = true;
		if (memoryPendingOperation === '+') {
			memoryCurrentNumber += parseFloat(localOperationMemory);
		}
		else if (memoryPendingOperation === '-') {
			memoryCurrentNumber -= parseFloat(localOperationMemory);
		}
		else if (memoryPendingOperation === '*') {
			memoryCurrentNumber *= parseFloat(localOperationMemory);
		}
		else if (memoryPendingOperation === '/') {
			memoryCurrentNumber /= parseFloat(localOperationMemory);
		}
		else if (memoryPendingOperation === '^') {
			memoryCurrentNumber = Math.pow(memoryCurrentNumber, parseFloat(localOperationMemory));
		}
		else if (memoryPendingOperation === '√') {
			memoryCurrentNumber = Math.pow(parseFloat(memoryCurrentNumber), 1 / parseFloat(localOperationMemory));
		}
		else memoryCurrentNumber = parseFloat(localOperationMemory);

		display.value = memoryCurrentNumber;
		memoryPendingOperation = op;
	}
};