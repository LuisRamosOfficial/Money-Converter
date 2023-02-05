const currencyfrom = document.querySelector('#fromselect')
const currencyto = document.querySelector('#toselect')
const valuefrom = document.querySelector('#frominput')
const valueto = document.querySelector('#toinput')

const Converter = () => {
      const conversion =
				Math.round(
					((valuefrom.value * currencyto.value) / currencyfrom.value) * 1000
				) / 1000;
			valueto.value = conversion;
}

const Switcher = () => {
    const tfrom = currencyfrom.value
    const tto = currencyto.value;
    currencyfrom.value = tto;
    currencyto.value = tfrom;
    Converter()
}
valuefrom.addEventListener('keyup', (e) => {
    Converter()
})
currencyfrom.addEventListener('click', (e) => {
    Converter()
})
currencyto.addEventListener('click', (e) => {
    Converter()
})
