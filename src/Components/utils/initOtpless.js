export const initOTPless = (callback) => {
	console.log('called init')
	const otplessInit = Reflect.get(window, 'otplessInit')

	const loadScript = () => {
		const script = document.createElement('script')
		script.src = 'https://otpless.com/auth.js'
		script.id = 'otplessIdScript'
		// script.setAttribute('cid', 'A82AX0CVET06FKGOGYL5I0COQBHQP01M')
		document.body.appendChild(script)
	}

	otplessInit ? otplessInit() : loadScript()

	Reflect.set(window, 'otpless', callback)
}
