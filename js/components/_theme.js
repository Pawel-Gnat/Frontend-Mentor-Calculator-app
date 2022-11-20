const themeInputs = document.querySelectorAll('input')
const themeSwitcher = document.querySelector('.knob')

themeInputs.forEach(input =>
	input.addEventListener('click', e => {
		switch (e.target.id) {
			case 'theme-1':
				themeSwitcher.style.translate = '0'
				document.querySelector('body').classList.remove('theme2')
				document.querySelector('body').classList.remove('theme3')
				break
			case 'theme-2':
				themeSwitcher.style.translate = '2.1rem'
				document.querySelector('body').classList.add('theme2')
				document.querySelector('body').classList.remove('theme3')
				break
			case 'theme-3':
				themeSwitcher.style.translate = '4.3rem'
				document.querySelector('body').classList.remove('theme2')
				document.querySelector('body').classList.add('theme3')
				break
		}
	})
)
