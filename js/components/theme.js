const themeInputs = document.querySelectorAll('input')
const themeSwitcher = document.querySelector('.knob')
let theme = localStorage.getItem('theme')

themeInputs.forEach(input =>
	input.addEventListener('click', e => {
		checkTheme(e.target.id)
		localStorage.setItem('theme', e.target.id)
	})
)

function checkTheme(theme) {
	if (theme === 'theme-1') {
		themeSwitcher.style.translate = '0'
		document.querySelector('body').classList.remove('theme2')
		document.querySelector('body').classList.remove('theme3')
		return
	}

	if (theme === 'theme-2') {
		themeSwitcher.style.translate = '2.1rem'
		document.querySelector('body').classList.add('theme2')
		document.querySelector('body').classList.remove('theme3')
		return
	}

	if (theme === 'theme-3' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
		themeSwitcher.style.translate = '4.3rem'
		document.querySelector('body').classList.remove('theme2')
		document.querySelector('body').classList.add('theme3')
		return
	}
}
checkTheme(theme)
