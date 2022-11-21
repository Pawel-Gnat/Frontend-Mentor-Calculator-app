import * as theme from './components/theme.js'

const resultScreen = document.querySelector('.screen__result')
const calcButtons = document.querySelectorAll('.button--number')
const optionsButtons = document.querySelectorAll('.button--options')
const resultButton = document.querySelector('.button--result')

function showResult(result = 0) {
	resultScreen.textContent = result
}
showResult()
