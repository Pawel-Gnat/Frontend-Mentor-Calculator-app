const calcButtons = document.querySelector('.controls')

const calculator = {
	displayValue: 0,
	firstOperand: null,
	awaitSecondOperand: false,
	operator: null,
}

function updateCalculatorScreen() {
	const resultScreen = document.querySelector('.screen__result')
	resultScreen.textContent = calculator.displayValue
}
updateCalculatorScreen()

function insertDigitToCalc(number) {
	const { displayValue, awaitSecondOperand } = calculator

	if (awaitSecondOperand === true) {
		calculator.displayValue = number
		calculator.awaitSecondOperand = false
	} else {
		calculator.displayValue = displayValue === 0 ? number : displayValue + number
	}
}

function insertDecimalValue(dot) {
	if (calculator.awaitSecondOperand === true) {
		calculator.displayValue = '0.'
		calculator.awaitSecondOperand = false
		return
	}

	if (!calculator.displayValue.includes(dot)) {
		calculator.displayValue += dot
	}
}

function handleOperator(calcOperator) {
	let { displayValue, firstOperand, operator } = calculator
	let inputValue = parseFloat(displayValue)

	if (operator && calculator.awaitSecondOperand) {
		calculator.operator = calcOperator
		return
	}

	if (firstOperand === null) {
		calculator.firstOperand = inputValue
	} else if (operator) {
		let result = calculate(firstOperand, inputValue, operator)

		calculator.displayValue = result
		calculator.firstOperand = result
	}

	calculator.awaitSecondOperand = true
	calculator.operator = calcOperator
}

function calculate(firstOperand, secondOperand, operator) {
	if (operator === '+') {
		return firstOperand + secondOperand
	}

	if (operator === '-') {
		return firstOperand - secondOperand
	}

	if (operator === 'x') {
		return firstOperand * secondOperand
	}

	if (operator === '/') {
		return firstOperand / secondOperand
	}

	return secondOperand
}

function resetCalculator() {
	calculator.displayValue = 0
	calculator.firstOperand = null
	calculator.awaitSecondOperand = false
	calculator.operator = null
}

calcButtons.addEventListener('click', e => {
	if (e.target.classList.contains('button--number')) {
		insertDigitToCalc(e.target.textContent)
		updateCalculatorScreen()
	}

	if (e.target.classList.contains('button--operator') || e.target.classList.contains('button--result')) {
		handleOperator(e.target.textContent)
		updateCalculatorScreen()
	}

	if (e.target.dataset.name === 'del') {
		console.log('del', e.target.textContent)
	}

	if (e.target.dataset.name === 'reset') {
		resetCalculator()
		updateCalculatorScreen()
	}

	if (e.target.classList.contains('button--dot')) {
		insertDecimalValue(e.target.textContent)
		updateCalculatorScreen()
	}
})
