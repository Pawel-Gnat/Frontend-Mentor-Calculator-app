const themeInputs = document.querySelectorAll('input')
const themeSwitcher = document.querySelector('.knob')
let theme = localStorage.getItem('theme')

themeInputs.forEach(input =>
	input.addEventListener('click', e => {
		// switch (e.target.id) {
		// 	case 'theme-1':
		// 		themeSwitcher.style.translate = '0'
		// 		document.querySelector('body').classList.remove('theme2')
		// 		document.querySelector('body').classList.remove('theme3')
		// 		theme = 'theme-1'
		// 		break
		// 	case 'theme-2':
		// 		themeSwitcher.style.translate = '2.1rem'
		// 		document.querySelector('body').classList.add('theme2')
		// 		document.querySelector('body').classList.remove('theme3')
		// 		theme = 'theme-2'
		// 		break
		// 	case 'theme-3':
		// 		themeSwitcher.style.translate = '4.3rem'
		// 		document.querySelector('body').classList.remove('theme2')
		// 		document.querySelector('body').classList.add('theme3')
		// 		theme = 'theme-3'
		// 		break
		// }

		checkTheme(e.target.id)

		// localStorage.setItem('theme', theme)
		localStorage.setItem('theme', e.target.id)
	})
)

// function checkTheme() {
// 	if (theme === 'theme-1') {
// 		return (themeSwitcher.style.translate = '0')
// 	}

// 	if (theme === 'theme-2') {
// 		themeSwitcher.style.translate = '2.1rem'
// 		return document.querySelector('body').classList.add('theme2')
// 	}

// 	if (theme === 'theme-3' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
// 		themeSwitcher.style.translate = '4.3rem'
// 		return document.querySelector('body').classList.add('theme3')
// 	}
// }

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
